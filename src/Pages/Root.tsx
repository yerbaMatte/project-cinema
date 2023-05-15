import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation/MainNavigation';
import { useAuth } from '../Hooks/useAuth';
import { useAppSelector } from '../Hooks/hooks';

const Root = () => {
  useAuth();
  const isUserAccLoading = useAppSelector(
    (state) => state.auth.isUserAccLoading
  );

  return (
    <>
      {!isUserAccLoading && (
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

export default Root;
