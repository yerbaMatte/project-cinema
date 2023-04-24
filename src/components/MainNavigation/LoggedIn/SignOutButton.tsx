import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { signActions } from '../../../Store/auth-slice';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase';

export function SignOutButton() {
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signActions.setLoggedStatus());
    signOut(auth);
  };

  return (
    <RouterLink to='/'>
      <Button
        onClick={signOutHandler}
        fontSize={'sm'}
        fontWeight={400}
        variant={'outline'}
      >
        Sign Out
      </Button>
    </RouterLink>
  );
}
