import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { initialTypes, FormikActions, loginCred } from '../types/types';
import { auth } from '../../firebase';
import { useAppDispatch } from '../Hooks/hooks';
import { signActions } from '../Store/auth-slice';

export const onSubmitHandler = async (
  { firstName, lastName, email, password }: initialTypes,
  actions: FormikActions
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(user, { displayName: `${firstName} ${lastName}` });

  actions.setSubmitting(false);
};

export const loginHandler = async ({ email, password }: loginCred) => {
  const dispatch = useAppDispatch();
  const user = await signInWithEmailAndPassword(auth, email, password);
  if (user) {
    dispatch(signActions.setLoggedStatus(auth.currentUser?.displayName));
  }
};

export const signOutHandler = async () => {
  const dispatch = useAppDispatch();
  dispatch(signActions.setLoggedStatus(null));
  await signOut(auth);
};
