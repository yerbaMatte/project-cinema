import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation/MainNavigation';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { signActions } from '../Store/auth-slice';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../Hooks/hooks';

export const Root = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        dispatch(signActions.setLoggedStatus(user.displayName));
        console.log('user is logged in');
      } else {
        console.log('useEffect user is logged out');
      }
    });
    return () => unsubscribe();
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
