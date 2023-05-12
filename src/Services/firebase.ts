import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { initialTypes, LogCred } from '../types/auth-types';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

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
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('That email is already in use.');
    }
  }
};

export const signOutUser = async () => {
  try {
    signOut(auth);
  } catch (error: any) {
    throw new Error(`User can't be signed out`);
  }
};

export const loginUser = async ({ email, password }: LogCred) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error: any) {
    throw new Error('Invalid password or email');
  }
};
