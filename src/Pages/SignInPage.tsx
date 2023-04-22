import SignInCard from '../components/Auth/SignInCard';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { FormikActions } from '../components/Auth/authTypes';

export const initialValues = {
  email: '',
  password: '',
};

export async function onSubmitHandler(
  { email, password }: typeof initialValues,
  actions: FormikActions
) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  console.log(user);

  actions.setSubmitting(false);
}

// test@gmail.com
// 123456789
export const SignInPage = () => {
  return <SignInCard />;
};
