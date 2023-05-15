import NowPlayingContent from '../Components/NowPlaying/NowPlayingContent';
import useFetchMovies from '../Hooks/useFetchMovies';

export function NowPlaying() {
  useFetchMovies();

  return <NowPlayingContent />;
}

export default NowPlaying;
