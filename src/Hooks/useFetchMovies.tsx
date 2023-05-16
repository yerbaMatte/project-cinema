import { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch } from './hooks';
import { moviesActions } from '../Store/movies-slice';

export default function useFetchMovies() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchMoviesOptions = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/account/19430271/watchlist/movies',
      params: { language: 'en-US', page: '1', sort_by: 'created_at.asc' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmNkYTI3MjcwNjg4NmY5MDI4ZTI3NmViZWJkOTAyNCIsInN1YiI6IjY0NWQ0Yjk5YWQ1MGYwMDE1NTNiY2E4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q5tL_uBRgonxxrhbRGVKGiGuGx979vx_hMu8sAp4b8U',
      },
    };

    const getMoviesData = async () => {
      axios
        .request(fetchMoviesOptions)
        .then(function (response) {
          dispatch(moviesActions.setData(response.data));
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getMoviesData();
  }, []);
}
// example of fetched movie by watchlist snippet request // no duration // no generated genres strings //
// {
//   "adult": false,
//   "backdrop_path": "/wDe8LzwuvHYYiuwyNfxdYQq8ti4.jpg",
//   "genre_ids": [
//       12,
//       28,
//       878
//   ],
//   "id": 1893,
//   "original_language": "en",
//   "original_title": "Star Wars: Episode I - The Phantom Menace",
//   "overview": "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
//   "popularity": 38.087,
//   "poster_path": "/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
//   "release_date": "1999-05-19",
//   "title": "Star Wars: Episode I - The Phantom Menace",
//   "video": false,
//   "vote_average": 6.528,
//   "vote_count": 13185
// }
