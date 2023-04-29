import { User, onAuthStateChanged } from 'firebase/auth';
import { useAppSelector, useAppDispatch } from '../Hooks/hooks';
import { signActions } from '../Store/auth-slice';
import { auth } from '../../firebase';

const useAuth = async () => {
  const { isLoggedIn, isInitializing } = useAppSelector((state) => state.auth);

  const unsubscribe = await onAuthStateChanged(auth, (user: User | null) => {});
};
