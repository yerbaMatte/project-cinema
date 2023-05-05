import { useState } from 'react';
import SignInCard from '../Components/Auth/SignInCard';
import { loginUser } from '../Services/firebase';
import { LogCred } from '../types/auth-types';
import { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';

export const SignInPage = () => {
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const navigate = useNavigate();

  const initialValues: LogCred = {
    email: '',
    password: '',
  };

  const onLoginHandler = async (
    { email, password }: LogCred,
    { setSubmitting }: FormikHelpers<LogCred>
  ) => {
    try {
      const user = await loginUser({ email, password });
      setIsFailed(false);
      setSubmitting(false);
      navigate('/');
      return user;
    } catch (error) {
      setIsFailed(true);
    }
  };

  return (
    <>
      <SignInCard
        logIn={onLoginHandler}
        initialValues={initialValues}
        isFailed={isFailed}
      />
    </>
  );
};
