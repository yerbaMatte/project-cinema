import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation/MainNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store/store';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { signActions } from '../Store/auth-slice';
import { FC, useEffect } from 'react';

export const Root = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    signOut(auth);
    const user = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        dispatch(signActions.setLoggedStatus(auth.currentUser?.displayName));
      }
    });
    return user;
  }, []);

  return (
    <>
      <MainNavigation isLoggedIn={isLoggedIn} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

// interface Props {
//   Component: JSX.Element;
// }

// const PrivateRoute = (Component: JSX.Element) => {
//   //logic check if the user iSloggedin

//   return isLoggedIn ? Component : ComponentToRedirect;
// };

// auth higher order component HOC
//TODO:
