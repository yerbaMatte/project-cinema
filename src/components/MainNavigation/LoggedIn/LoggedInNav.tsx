import { MyAccountButton } from './MyAccountButton';
import { SignOutButton } from '../LoggedIn/SignOutButton';
import { WelcomeMessage } from '../LoggedIn/WelcomeMessage';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { useAppSelector } from '../../../Hooks/hooks';

export const LoggedInNav = () => {
  const signOutHandler = () => {
    // firebase service \/ put inside firebase
    signOut(auth);
    // and wrap it trycatch
  };

  const userName = useAppSelector((state) => state.auth.userAcc.name);

  return (
    <>
      <WelcomeMessage userName={userName} />
      <MyAccountButton />
      <SignOutButton signOutHandler={signOutHandler} />
    </>
  );
};
