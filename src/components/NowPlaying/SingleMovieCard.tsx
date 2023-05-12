import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

interface CardProps {
  title: string;
  description: string;
  imgPath: string;
}

function SingleMovieCard({ title, description, imgPath }: CardProps) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={`https://image.tmdb.org/t/p/original/${imgPath}`}
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>

          <Text py='2'>{description}</Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Buy Ticket!
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default SingleMovieCard;
