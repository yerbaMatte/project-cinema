import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { SignOutButtonProps } from '../../../types/auth-types';

export function SignOutButton({ signOutHandler }: SignOutButtonProps) {
  return (
    <RouterLink to='/'>
      <Button
        fontSize={'sm'}
        fontWeight={400}
        variant={'outline'}
        onClick={signOutHandler}
      >
        Sign Out
      </Button>
    </RouterLink>
  );
}
