import { MyAccountButton } from './MyAccountButton';
import { SignOutButton } from '../LoggedIn/SignOutButton';
import { WelcomeMessage } from '../LoggedIn/WelcomeMessage';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks';
import { signActions } from '../../../Store/auth-slice';
import { useAuth } from '../../../Hooks/onAuth';

export const LoggedInNav = () => {
  const dispatch = useAppDispatch();

  const signOutHandler = () => {
    signOut(auth);
    dispatch(signActions.setUser({ name: null, email: null }));
  };

  const { userAcc } = useAuth();

  return (
    <>
      <WelcomeMessage userName={userAcc.name} />
      <MyAccountButton />
      <SignOutButton signOutHandler={signOutHandler} />
    </>
  );
};
