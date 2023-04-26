import SignInCard from '../Components/Auth/SignInCard';
import { LogCred } from '../types/types';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import { loginUser } from '../Services/firebase';
import { signActions } from '../Store/auth-slice';

// test data
// test@gmail.com
// 123456789

export const SignInPage = () => {
  const dispatch = useAppDispatch();
  const initialValues: LogCred = {
    email: '',
    password: '',
  };

  const loginHandler = async (loginCredentials: LogCred) => {
    const user = await loginUser(loginCredentials);
    dispatch(signActions.setLoggedStatus(user.user.displayName));
  };

  return (
    <>
      <SignInCard initialValues={initialValues} onLogin={loginHandler} />
    </>
  );
};
