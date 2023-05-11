import SignInCard from '../Components/Auth/SignInCard';
import { loginUser } from '../Services/firebase';
import { LogCred } from '../types/auth-types';
import { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import { signInSchema } from '../Services/signInSchema';

export default SignInPage = () => {
  const navigate = useNavigate();

  const initialValues: LogCred = {
    email: '',
    password: '',
  };

  const onLoginHandler = async (
    { email, password }: LogCred,
    { setSubmitting, setStatus }: FormikHelpers<LogCred>
  ) => {
    setSubmitting(true);
    try {
      await loginUser({ email, password });
      navigate('/');
    } catch (error: any) {
      setStatus(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SignInCard
        logIn={onLoginHandler}
        initialValues={initialValues}
        validationSchema={signInSchema}
      />
    </>
  );
};
