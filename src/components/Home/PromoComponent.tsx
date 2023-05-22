import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import joker from './joker.jpeg';
import intouch from './intouch.jpeg';
import lord from './lord.webp';

const JokerPromoBoard = () => (
  <Box
    textAlign='center'
    p={8}
    backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0) 95%, rgba(255, 255, 255,5.5) 100%), url(${joker})`}
    backgroundSize='cover'
    backgroundPosition='top'
    height='md'
    position='relative'
  >
    <Heading
      as='h1'
      size='2xl'
      mb={4}
      color='ButtonShadow'
      bgGradient='linear(to-t, black.300, white)'
      position='absolute'
      top={4}
      left={4}
      letterSpacing={6}
      fontWeight='thin'
    >
      JOKER
    </Heading>
    <Button
      // colorScheme="gray"
      size='lg'
      position='absolute'
      bottom={20}
      right={20}
      colorScheme='gray'
      textTransform='uppercase'
      fontWeight='bold'
    >
      Get Ticket
    </Button>
  </Box>
);

const IntouchPromoBoard = () => (
  <Box
    textAlign='center'
    p={8}
    backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0) 95%, rgba(255, 255, 255,5.5) 100%), url(${intouch})`}
    backgroundSize='cover'
    backgroundPosition='top'
    height='md'
    position='relative'
  >
    <Heading
      as='h1'
      size='2xl'
      mb={4}
      color='ButtonShadow'
      position='absolute'
      top={4}
      left={4}
      letterSpacing={6}
      fontWeight='thin'
    >
      INTOUCHABLES
    </Heading>
    <Button
      size='lg'
      position='absolute'
      bottom={20}
      right={20}
      colorScheme='gray'
      textTransform='uppercase'
      fontWeight='bold'
    >
      Get Ticket
    </Button>
  </Box>
);

const RingPromoBoard = () => (
  <Box
    textAlign='center'
    p={8}
    backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0) 95%, rgba(255, 255, 255,5.5) 100%), url(${lord})`}
    backgroundSize='cover'
    backgroundPosition='top'
    height='md'
    position='relative'
  >
    <Heading
      as='h1'
      size='2xl'
      mb={4}
      color='ButtonShadow'
      position='absolute'
      top={4}
      left={4}
      letterSpacing={6}
      fontWeight='thin'
      bgColor='rgba(0,0,0, 0.5)'
      textTransform='uppercase'
    >
      THE LORD OF THE RINGS
      <Text fontSize={24}>The Fellowship of the Ring</Text>
    </Heading>
    <Button
      // colorScheme="gray"
      size='lg'
      position='absolute'
      bottom={20}
      right={20}
      colorScheme='gray'
      textTransform='uppercase'
      fontWeight='bold'
    >
      Get Ticket
    </Button>
  </Box>
);

function PromoComponent() {
  return (
    <>
      <AliceCarousel
        animationType='fadeout'
        animationDuration={4500}
        autoPlay
        disableButtonsControls
        disableDotsControls
        infinite
        mouseTracking
        items={[<JokerPromoBoard />, <IntouchPromoBoard />, <RingPromoBoard />]}
      />
    </>
  );
}

export default PromoComponent;
