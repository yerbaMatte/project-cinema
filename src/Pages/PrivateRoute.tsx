import { useAuth } from '../Hooks/onAuth';
import { Navigate } from 'react-router-dom';

type ComponentType = () => JSX.Element;

function PrivateRoute(Component: ComponentType) {
  return function protectedRoute() {
    const { userAcc } = useAuth();
    //get current userAcc state object and check if the email exists
    return userAcc.email ? <Component /> : <Navigate to={'/'} />;
  };
}

export default PrivateRoute;
