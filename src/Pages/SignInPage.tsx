import SignInCard from '../Components/Auth/SignInCard';
import { loginUser } from '../Services/firebase';
import { LogCred } from '../types/auth-types';
import { FormikHelpers } from 'formik';

// test@gmail.com
// 123456789

export const SignInPage = () => {
  const initialValues: LogCred = {
    email: '',
    password: '',
  };

  const onSubmitHandler = async (
    { email, password }: LogCred,
    { setSubmitting }: FormikHelpers<LogCred>
  ) => {
    try {
      const user = await loginUser({ email, password });
      setSubmitting(false);
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }
  };

  return (
    <>
      <SignInCard signIn={onSubmitHandler} initialValues={initialValues} />
    </>
  );
};
