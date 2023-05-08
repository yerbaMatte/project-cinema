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
    { setSubmitting }: FormikHelpers<initialTypes>
  ) => {
    setSubmitting(true);
    await registerUser({ firstName, lastName, email, password });
    await signOut(auth);
    await loginUser({ email, password });
  };

  return (
    <SignUpCard
      onSubmitHandler={onSubmitHandler}
      initialValues={initialValues}
      validationSchema={signUpSchema}
    />
  );
};
