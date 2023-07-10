import { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch } from './hooks';
import { moviesActions } from '../Store/movies-slice';

// movies ids
export const moviesId = [
  1893, 672, 77338, 497, 238, 120, 475557, 9732, 111, 13223, 808, 98,
];

export const useFetchMovies = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const options = {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmNkYTI3MjcwNjg4NmY5MDI4ZTI3NmViZWJkOTAyNCIsInN1YiI6IjY0NWQ0Yjk5YWQ1MGYwMDE1NTNiY2E4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q5tL_uBRgonxxrhbRGVKGiGuGx979vx_hMu8sAp4b8U',
      },
    };

    const getMoviesData = () => {
      const endpoints = moviesId.map(
        (mv) => `https://api.themoviedb.org/3/movie/${mv}`
      );
      Promise.all(
        endpoints.map((endpoint) => axios.get(endpoint, options))
      ).then((response) => {
        response.map((movie) =>
          dispatch(
            moviesActions.addData({
              key: movie.data.id,
              value: movie.data,
            })
          )
        );
      });
    };

    getMoviesData();
  }, []);
};
