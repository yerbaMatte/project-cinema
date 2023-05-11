import { auth } from '../../firebase';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { signActions } from '../Store/auth-slice';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName: name, email } = user;
        dispatch(signActions.setUser({ name, email }));

        console.log('User is logged in');
        dispatch(signActions.setIsUserAccLoading(false));
      } else {
        console.log('There is no user');
        dispatch(signActions.setIsUserAccLoading(false));
        dispatch(signActions.setUser({ name: null, email: null }));
      }
      // userAccLoading
    });
    return () => subscribe();
  }, []);
};
