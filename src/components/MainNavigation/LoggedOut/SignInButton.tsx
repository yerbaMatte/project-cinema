import { SignUpButton } from './SignUpButton';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const SignInButton = () => {
  return (
    <>
      <RouterLink to='signin'>
        <Button fontSize={'sm'} fontWeight={400} variant={'outline'}>
          Sign In
        </Button>
      </RouterLink>
    </>
  );
};

export default SignInButton;
