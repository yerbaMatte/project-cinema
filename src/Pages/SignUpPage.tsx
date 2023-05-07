import { SignUpCard } from '../Components/Auth/SignUpCard';
import { registerUser } from '../Services/firebase';
import { initialTypes, FormikActions } from '../types/auth-types';
import { signUpSchema } from '../Services/signUpSchema';
import { FormikHelpers } from 'formik';

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
    const user = await registerUser({ firstName, lastName, email, password });
  };

  return (
    <SignUpCard
      onSubmitHandler={onSubmitHandler}
      initialValues={initialValues}
      validationSchema={signUpSchema}
    />
  );
};
