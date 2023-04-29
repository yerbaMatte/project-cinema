import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation/MainNavigation';
import { useAuth } from '../Hooks/onAuth';

export const Root = () => {
  const { userAcc, isInit } = useAuth();
  console.log(userAcc, isInit);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
