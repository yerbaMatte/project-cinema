import { MyAccountButton } from './MyAccountButton';
import { SignOutButton } from '../LoggedIn/SignOutButton';
import { WelcomeMessage } from '../LoggedIn/WelcomeMessage';
import { useAppSelector } from '../../../Hooks/hooks';
import { signOutUser } from '../../../Services/firebase';

export const LoggedInNav = () => {
  const signOutHandler = () => {
    signOutUser();
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
