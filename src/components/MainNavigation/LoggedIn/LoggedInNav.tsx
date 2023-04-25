import { MyAccountButton } from './MyAccountButton';
import { SignOutButton } from '../LoggedIn/SignOutButton';
import { WelcomeMessage } from '../LoggedIn/WelcomeMessage';
import { signOutHandler } from '../../../Services/firebase';

export const LoggedInNav = () => {
  return (
    <>
      <WelcomeMessage />
      <MyAccountButton />
      <SignOutButton signOutHandler={signOutHandler} />
    </>
  );
};
