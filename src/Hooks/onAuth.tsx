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
        const { displayName: name, email } = user;
        dispatch(signActions.setUser({ name, email }));
        console.log(user);
        const nameSss = user.displayName;
        console.log('User is logged in');
      } else {
        console.log('There is no user');
      }
      //FIXME: weird behaviour of setInit dispatch action
      // userAccLoading
      if (isInit) {
        // console.log(isInit); returns true everytime?
        dispatch(signActions.setInit());
      }
    });

    return () => subscribe();
  }, []);

  return { userAcc, isInit };
};
