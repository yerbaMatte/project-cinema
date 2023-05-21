import { Outlet } from 'react-router-dom';
import NowPlayingNav from '../Components/NowPlaying/NowPlayingNav';
import { Tabs } from '@chakra-ui/react';
import useGetCurrentDay from '../Hooks/useGetCurrentDay';

export function NowPlayingLayout() {
  let { currentDay } = useGetCurrentDay();
  if (currentDay === -1) {
    currentDay = 6;
  }

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
