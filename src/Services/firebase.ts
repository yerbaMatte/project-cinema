import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { initialTypes, FormikActions, LogCred } from '../types/auth-types';
import { auth } from '../../firebase';

export const onSubmit = async (
  { firstName, lastName, email, password }: initialTypes,
  actions: FormikActions
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(user, { displayName: `${firstName} ${lastName}` });
  const userIn = await loginUser({ email, password });
  actions.setSubmitting(false);
};

export const loginUser = async ({ email, password }: LogCred) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw Error('Invalid password or email');
  }
};
