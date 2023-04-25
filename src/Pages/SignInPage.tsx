import SignInCard from '../Components/Auth/SignInCard';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { signActions } from '../Store/auth-slice';
import { loginCred } from '../Components/Auth/authTypes';

// test data
// test@gmail.com
// 123456789

export const SignInPage = () => {
  const dispatch = useDispatch();

  const initialValues: loginCred = {
    email: '',
    password: '',
  };

  const loginHandler = async ({ email, password }: typeof initialValues) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      dispatch(signActions.setLoggedStatus(auth.currentUser?.displayName));
    }
  };

  return (
    <>
      <SignInCard initialValues={initialValues} loginHandler={loginHandler} />
    </>
  );
};
