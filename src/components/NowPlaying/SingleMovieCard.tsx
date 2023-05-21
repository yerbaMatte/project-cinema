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

interface CardProps {
  title: string;
  description: string;
  imgPath: string;
  genreIds: object[];
  startAt: string;
  duration: string;
  score: number;
  noOfVotes: number;
}

function SingleMovieCard({
  title,
  description,
  imgPath,
  genreIds,
  startAt,
  duration,
  score,
  noOfVotes,
}: CardProps) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={`https://image.tmdb.org/t/p/original/${imgPath}`}
        alt="Caffe Latte"
        p={4}
      />

      <Stack width="100%">
        <CardBody>
          <HStack justifyContent="space-between">
            <Heading size="md" padding={1}>
              {title}
            </Heading>
            <HStack bgColor="ButtonHighlight" padding={1} borderRadius={12}>
              <Badge colorScheme="none" fontSize={18} textTransform="lowercase">
                ⭐️ {score.toFixed(2)}
              </Badge>
              <Text fontSize={12}>{noOfVotes} votes</Text>
            </HStack>
          </HStack>
          <HStack>
            {genreIds.map((genre, id) => (
              <Badge
                textTransform="capitalize"
                m={1}
                fontSize={12}
                colorScheme="blackAlpha"
                key={id}
              >
                {genre.name}
              </Badge>
            ))}
            <Text fontSize={12}>{duration} min</Text>
          </HStack>

          <Text py="2">{description}</Text>
          <HStack spacing={2}>
            <Badge fontSize={16} colorScheme="blue">
              {startAt}
            </Badge>
          </HStack>
        </CardBody>
        <CardFooter>
          <Button m={1} variant="solid" colorScheme="blue">
            Buy Ticket!
          </Button>
          <Button m={1} variant="solid" colorScheme="gray">
            Available Seats
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default SingleMovieCard;
