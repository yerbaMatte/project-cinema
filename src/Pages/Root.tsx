import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation';

export const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
