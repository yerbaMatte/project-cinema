import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Root = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <>
      <MainNavigation isLoggedIn={isLoggedIn} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
