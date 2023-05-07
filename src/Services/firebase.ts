import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { initialTypes, FormikActions, LogCred } from '../types/auth-types';
import { auth } from '../../firebase';

export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
}: initialTypes) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, { displayName: `${firstName} ${lastName}` });
    const userIn = await loginUser({ email, password });
    return userIn;
  } catch (error) {}
};

export const loginUser = async ({ email, password }: LogCred) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw Error('Invalid password or email');
  }
};
