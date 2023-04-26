import { Text } from '@chakra-ui/react';
import { useAppSelector } from '../../../Hooks/hooks';

export function WelcomeMessage() {
  const userName = useAppSelector((state) => state.auth.name);
  return <Text>Welcome back, {userName}!</Text>;
}
