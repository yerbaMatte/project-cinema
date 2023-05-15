import { MyAccountButton } from './MyAccountButton';
import { SignOutButton } from './SignOutButton';
import { WelcomeMessage } from './WelcomeMessage';
import { useAppSelector } from '../../../Hooks/hooks';
import { signOutUser } from '../../../Services/firebase';

export const LoggedInButtons = () => {
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
