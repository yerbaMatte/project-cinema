import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { signOutHandler } from '../../../types/types';

export function SignOutButton() {
  return (
    <RouterLink to='/'>
      <Button fontSize={'sm'} fontWeight={400} variant={'outline'}>
        Sign Out
      </Button>
    </RouterLink>
  );
}
