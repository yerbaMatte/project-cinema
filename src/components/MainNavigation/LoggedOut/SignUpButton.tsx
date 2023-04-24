import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export function SignUpButton() {
  return (
    <RouterLink to='signup'>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'blue.400'}
        _hover={{
          bg: 'blue.300',
        }}
      >
        Sign Up
      </Button>
    </RouterLink>
  );
}

export default SignUpButton;
