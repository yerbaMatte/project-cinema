import { MyAccountButton } from './MyAccountButton';
import { SignOutButton } from '../LoggedIn/SignOutButton';
import { WelcomeMessage } from '../LoggedIn/WelcomeMessage';

export const LoggedInNav = () => {
  return (
    <>
      <WelcomeMessage />
      <MyAccountButton />
      <SignOutButton />
    </>
  );
};
