import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Badge,
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
        p={2}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>
          <Text py='2'>{description}</Text>
          <Badge m={1} fontSize={16}>
            14:30
          </Badge>
          <Badge m={1} fontSize={16}>
            17:00
          </Badge>
          <Badge m={1} fontSize={16}>
            22:00
          </Badge>
        </CardBody>

        <CardFooter>
          <Button m={1} variant='solid' colorScheme='blue'>
            Buy Ticket!
          </Button>
          <Button m={1} variant='solid' colorScheme='gray'>
            Available Seats
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default SingleMovieCard;
