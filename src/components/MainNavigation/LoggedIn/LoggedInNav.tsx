import { MyAccountButton } from './MyAccountButton';
import { SignOutButton } from '../LoggedIn/SignOutButton';
import { WelcomeMessage } from '../LoggedIn/WelcomeMessage';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase';

export const LoggedInNav = () => {
  const signOutHandler = () => {
    signOut(auth);
  };
  return (
    <>
      <WelcomeMessage />
      <MyAccountButton />
      <SignOutButton signOutHandler={signOutHandler} />
    </>
  );
};
