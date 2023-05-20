import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation/MainNavigation';
import { useAuth } from '../Hooks/useAuth';
import { useAppSelector } from '../Hooks/hooks';
import Footer from '../Components/Footer';
import { Box } from '@chakra-ui/react';
import { useFetchMovies } from '../Hooks/useFetchMovies';

const RootLayout = () => {
  useFetchMovies();
  useAuth();

  const isUserAccLoading = useAppSelector(
    (state) => state.auth.isUserAccLoading
  );

  return (
    <Box height='100vh' display='flex' flexDirection='column'>
      {!isUserAccLoading && (
        <>
          <MainNavigation />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </Box>
  );
};

export default RootLayout;
