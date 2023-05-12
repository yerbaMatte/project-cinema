import axios from 'axios';
import NowPlayingContent from '../Components/NowPlaying/NowPlayingContent';
import { useAppDispatch } from '../Hooks/hooks';
import { moviesActions } from '../Store/movies-slice';

export function NowPlaying() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/account/19430271/watchlist/movies',
    params: { language: 'en-US', page: '1', sort_by: 'created_at.asc' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmNkYTI3MjcwNjg4NmY5MDI4ZTI3NmViZWJkOTAyNCIsInN1YiI6IjY0NWQ0Yjk5YWQ1MGYwMDE1NTNiY2E4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q5tL_uBRgonxxrhbRGVKGiGuGx979vx_hMu8sAp4b8U',
    },
  };

  const dispatch = useAppDispatch();

  axios
    .request(options)
    .then(function (response) {
      dispatch(moviesActions.setData(response.data));
    })
    .catch(function (error) {
      console.error(error);
    });

  return <NowPlayingContent />;
}

export default NowPlaying;
