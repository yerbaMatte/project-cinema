import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box textAlign='center' p={8}>
      <Heading as='h1' size='2xl' mb={4}>
        Welcome to Cinema World
      </Heading>
      <Text fontSize='xl' mb={8}>
        Explore the magic of movies in our state-of-the-art theaters
      </Text>
      <Text mb={8} fontSize={28}>
        🎬🎬🎬🎬🎬🎬🎬🎬🎬🎬🎬
      </Text>
      <Button colorScheme='blue' size='lg'>
        Get Tickets
      </Button>
      <Text mt={4} fontSize='sm' color='gray.500'>
        Sign up to receive the latest updates and exclusive offers
      </Text>
      {/* Add your newsletter sign-up form here */}
    </Box>
  );
};

export default Home;
