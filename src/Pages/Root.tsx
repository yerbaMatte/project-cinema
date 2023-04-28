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
      }
    });
    return () => unsubscribe();
  }, []);

  //:TODO: customHook - PrivateComponent

  return (
    <>
      <MainNavigation isLoggedIn={isLoggedIn} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
