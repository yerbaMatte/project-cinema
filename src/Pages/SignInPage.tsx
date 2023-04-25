import SignInCard from '../Components/Auth/SignInCard';
import { loginCred } from '../types/types';
import { loginHandler } from '../Services/firebase';

// test data
// test@gmail.com
// 123456789

export const SignInPage = () => {
  const initialValues: loginCred = {
    email: '',
    password: '',
  };

  return (
    <>
      <SignInCard initialValues={initialValues} loginHandler={loginHandler} />
    </>
  );
};
