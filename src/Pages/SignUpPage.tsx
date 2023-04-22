import { SignUpCard } from '../components/Auth/SignUpCard';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { initialTypes, FormikActions } from '../components/Auth/authTypes';

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export async function onSubmitHandler(
  { firstName, lastName, email, password }: initialTypes,
  actions: FormikActions
) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(user, { displayName: `${firstName} ${lastName}` });

  console.log(user);

  actions.setSubmitting(false);
}

export const SignUpPage = () => {
  return <SignUpCard />;
};
