import { Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/store';

export function WelcomeMessage() {
  const userName = useSelector((state: RootState) => state.auth.name);
  return <Text>Welcome back, {userName}!</Text>;
}
