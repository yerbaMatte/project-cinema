import { auth } from '../../firebase';
import { useAppSelector } from './hooks';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { signActions } from '../Store/auth-slice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { userAcc, isInit } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email } = user;
        dispatch(signActions.setUser({ displayName, email }));
      } else {
        console.log('there is no user');
      }
    });

    return () => subscribe();
  }, []);

  return { userAcc, isInit };
};
