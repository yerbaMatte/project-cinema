import SignInCard from '../Components/Auth/SignInCard';
import { LogCred } from '../types/auth-types';

// test@gmail.com
// 123456789

export const SignInPage = () => {
  const initialValues: LogCred = {
    email: '',
    password: '',
  };

  return (
    <>
      <SignInCard initialValues={initialValues} />
    </>
  );
};
