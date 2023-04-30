import { SignUpButton } from './SignUpButton';
import { SignInButton } from './SignInButton';
import { useAppDispatch } from '../../../Hooks/hooks';

export const LoggedOutNav = () => {
  const dispatch = useAppDispatch();
  // const
  return (
    <>
      <SignUpButton />
      <SignInButton />
    </>
  );
};
