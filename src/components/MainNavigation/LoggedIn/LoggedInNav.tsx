import { MyAccountButton } from './MyAccountButton';
import { SignOutButton } from '../LoggedIn/SignOutButton';
import { WelcomeMessage } from '../LoggedIn/WelcomeMessage';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { useAppDispatch } from '../../../Hooks/hooks';
import { signActions } from '../../../Store/auth-slice';
import { useAppSelector } from '../../../Hooks/hooks';

export const LoggedInNav = () => {
  const dispatch = useAppDispatch();

  const signOutHandler = () => {
    signOut(auth);
    dispatch(signActions.setUser({ name: null, email: null }));
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
