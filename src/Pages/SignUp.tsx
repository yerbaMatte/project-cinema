import SignUpContent from '../Components/Auth/SignUpContent';
import { loginUser, registerUser } from '../Services/firebase';
import { initialTypes } from '../types/auth-types';
import { signUpSchema } from '../Services/signUpSchema';
import { FormikHelpers } from 'formik';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const SignUp = () => {
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
    <SignUpContent
      onSubmitHandler={onSubmitHandler}
      initialValues={initialValues}
      validationSchema={signUpSchema}
    />
  );
};

export default SignUp;
