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
  } catch (error: any) {
    //FIXME: type of error?
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('That email is already in use.');
    }
  }
};
//TODO: create a fn to logout with trycatch
// use it in the loggedInNav

export const loginUser = async ({ email, password }: LogCred) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error: any) {
    throw new Error('Invalid password or email');
  }
};

// Movies -> public route
