import { Text } from '@chakra-ui/react';

type userName = {
  userName: string | null;
};

export function WelcomeMessage({ userName }: userName) {
  return <Text>Welcome back, {userName}!</Text>;
}
