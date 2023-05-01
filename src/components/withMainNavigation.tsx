import { useAppSelector } from '../Hooks/hooks';
import { LoggedInNav } from './MainNavigation/LoggedIn/LoggedInNav';
import { LoggedOutNav } from './MainNavigation/LoggedOut/LoggedOutNav';

type MainNavigationProps = {
  children: JSX.Element;
};

const withMainNavigation = (
  Component: React.ComponentType<MainNavigationProps>
) => {
  function MainNavigation() {
    //check if the userAcc.name has a string or null value (isLoggedIn)?
    const isLoggedIn = useAppSelector((state) => state.auth.userAcc.name);

    if (isLoggedIn) {
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
