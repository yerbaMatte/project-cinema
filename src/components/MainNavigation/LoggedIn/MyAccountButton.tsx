import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const MyAccountButton = () => {
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
        My Account
      </Button>
    </RouterLink>
  );
};
