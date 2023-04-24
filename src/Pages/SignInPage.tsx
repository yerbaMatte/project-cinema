import SignInCard from '../Components/Auth/SignInCard';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store/store';
import { signActions } from '../Store/auth-slice';
import { initialTypes, loginCred } from '../Components/Auth/authTypes';
import { User } from 'firebase/auth';
import { useEffect } from 'react';
// test data
// test@gmail.com
// 123456789

export const SignInPage = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const initialValues: loginCred = {
    email: '',
    password: '',
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser: User | null) => {
      authUser && dispatch(signActions.setLoggedStatus());
      console.log(authUser);
    });
  }, []);

  const loginHandler = async ({ email, password }: typeof initialValues) => {
    if (!isLoggedIn) {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(signActions.setLoggedStatus());
    } else {
      console.log('You are already logged in');
    }
  };

  return (
    <>
      <SignInCard initialValues={initialValues} loginHandler={loginHandler} />
    </>
  );
};
