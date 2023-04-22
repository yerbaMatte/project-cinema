import SignInCard from '../components/Auth/SignInCard';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { signActions } from '../store/auth-slice';
import { initialTypes, loginCred } from '../components/Auth/authTypes';

// test data
// test@gmail.com
// 123456789
//
export const SignInPage = () => {
  const initialValues: loginCred = {
    email: '',
    password: '',
  };

  async function loginHandler({ email, password }: typeof initialValues) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <>
      <SignInCard initialValues={initialValues} loginHandler={loginHandler} />
    </>
  );
};
