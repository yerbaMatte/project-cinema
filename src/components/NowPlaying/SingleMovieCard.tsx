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
  HStack,
} from '@chakra-ui/react';
import { genresList } from '../../Services/nowPlaying';

interface CardProps {
  title: string;
  description: string;
  imgPath: string;
  genreIds: number[];
}

function SingleMovieCard({ title, description, imgPath, genreIds }: CardProps) {
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
        p={4}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>
          <HStack>
            {genreIds.map((id, ind) => (
              <Badge
                textTransform='capitalize'
                m={1}
                fontSize={12}
                colorScheme='blackAlpha'
                key={ind}
              >
                {genresList[id]}
              </Badge>
            ))}
          </HStack>

          <Text py='2'>{description}</Text>
          <HStack spacing={2}>
            <Badge fontSize={16} colorScheme='blue'>
              14:30
            </Badge>
            <Badge fontSize={16} colorScheme='blue'>
              17:00
            </Badge>
            <Badge fontSize={16} colorScheme='blue'>
              22:00
            </Badge>
          </HStack>
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
