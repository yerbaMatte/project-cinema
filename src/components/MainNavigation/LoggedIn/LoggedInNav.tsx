import { MyAccountButton } from './MyAccountButton';
import { SignOutButton } from '../LoggedIn/SignOutButton';
import { WelcomeMessage } from '../LoggedIn/WelcomeMessage';
import { useAppDispatch } from '../../../Hooks/hooks';
import { signActions } from '../../../Store/auth-slice';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase';

export const LoggedInNav = () => {
  return (
    <>
      <WelcomeMessage />
      <MyAccountButton />
      <SignOutButton />
    </>
  );
};
