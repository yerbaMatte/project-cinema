import { LoggedInButtons } from './MainNavigation/LoggedIn/LoggedInButtons';
import { LoggedOutButtons } from './MainNavigation/LoggedOut/LoggedOutButtons';
import { useAppSelector } from '../Hooks/hooks';

type MainNavigationProps = {
  children: JSX.Element;
};

const withMainNavigation = (
  Component: React.ComponentType<MainNavigationProps>
) => {
  function MainNavigation() {
    //check if the userAcc.name has a string or null value (displayName)?
    const userName = useAppSelector((state) => state.auth.userAcc.name);

    if (userName) {
      return (
        <Component>
          <LoggedInButtons />
        </Component>
      );
    } else {
      return (
        <Component>
          <LoggedOutButtons />
        </Component>
      );
    }
  }

  return MainNavigation;
};

export default withMainNavigation;
