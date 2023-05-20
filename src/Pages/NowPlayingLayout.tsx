import { Outlet } from 'react-router-dom';
import NowPlayingNav from '../Components/NowPlaying/NowPlayingNav';
import { Tabs } from '@chakra-ui/react';
import useGetCurrentDay from '../Hooks/useGetCurrentDay';

export function NowPlayingLayout() {
  const { currentDay } = useGetCurrentDay();

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
