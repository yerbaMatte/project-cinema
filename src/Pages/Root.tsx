import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation/MainNavigation';
import { useAuth } from '../Hooks/onAuth';

export const Root = () => {
  const { userAcc, isInit } = useAuth();

  return (
    <>
      {!isInit && (
        <>
          <MainNavigation />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </>
  );
};
