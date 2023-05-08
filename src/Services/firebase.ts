import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { initialTypes, LogCred } from '../types/auth-types';
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
    console.log(user);
    return user;
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
