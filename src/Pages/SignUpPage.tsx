import { SignUpCard } from '../Components/Auth/SignUpCard';
import { loginUser, registerUser } from '../Services/firebase';
import { initialTypes } from '../types/auth-types';
import { signUpSchema } from '../Services/signUpSchema';
import { FormikHelpers } from 'formik';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export const SignUpPage = () => {
  const initialValues: initialTypes = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const onSubmitHandler = async (
    { firstName, lastName, email, password }: initialTypes,
    { setSubmitting, setStatus }: FormikHelpers<initialTypes>
  ) => {
    setSubmitting(true);
    try {
      await registerUser({ firstName, lastName, email, password });
      await signOut(auth);
      await loginUser({ email, password });
    } catch (error: any) {
      setStatus(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SignUpCard
      onSubmitHandler={onSubmitHandler}
      initialValues={initialValues}
      validationSchema={signUpSchema}
    />
  );
};
