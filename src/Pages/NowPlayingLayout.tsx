import { Outlet } from 'react-router-dom';
import NowPlayingNav from '../Components/NowPlaying/NowPlayingNav';
import useFetchMovies from '../Hooks/useFetchMovies';
import { Tabs } from '@chakra-ui/react';
import useGetCurrentDay from '../Hooks/useGetCurrentDay';
import { moviesId, fetchMovieDetails } from '../Hooks/useFetchMovie';

export function NowPlayingLayout() {
  useFetchMovies();
  const { currentDay } = useGetCurrentDay();

  moviesId.forEach((movieId) => {
    fetchMovieDetails(movieId);
  });

  return (
    <>
      <Tabs isLazy defaultIndex={currentDay}>
        <NowPlayingNav />
        <Outlet />
      </Tabs>
    </>
  );
}

export default NowPlayingLayout;
