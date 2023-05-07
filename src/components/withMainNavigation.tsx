import { LoggedInNav } from './MainNavigation/LoggedIn/LoggedInNav';
import { LoggedOutNav } from './MainNavigation/LoggedOut/LoggedOutNav';
import { useAuth } from '../Hooks/onAuth';

type MainNavigationProps = {
  children: JSX.Element;
};

const withMainNavigation = (
  Component: React.ComponentType<MainNavigationProps>
) => {
  function MainNavigation() {
    //check if the userAcc.name has a string or null value (isLoggedIn)?
    const { userAcc } = useAuth();
    // console.log(userAcc);
    if (userAcc.email) {
      return (
        <Component>
          <LoggedInNav />
        </Component>
      );
    } else {
      return (
        <Component>
          <LoggedOutNav />
        </Component>
      );
    }
  }

  return MainNavigation;
};

export default withMainNavigation;
