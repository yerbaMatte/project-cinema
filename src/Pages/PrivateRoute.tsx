import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../Hooks/hooks';

type ComponentType = () => JSX.Element;

function PrivateRoute(Component: ComponentType) {
  return function protectedRoute() {
    const userAcc = useAppSelector((state) => state.auth.userAcc);

    return userAcc.email ? <Component /> : <Navigate to={'/'} />;
  };
}

export default PrivateRoute;
