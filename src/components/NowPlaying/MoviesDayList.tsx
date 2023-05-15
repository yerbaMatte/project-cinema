import SingleMovieCard from './SingleMovieCard';
import { useAppSelector } from '../../Hooks/hooks';
import { Spinner } from '@chakra-ui/react';

function MoviesDayList() {
  const dataList = useAppSelector((state) => state.movies.moviesData.results);

  if (!dataList) {
    return <Spinner />;
  }

  const CreateMovieList = dataList.map((movie, index) => (
    <SingleMovieCard
      title={movie['original_title']}
      description={movie.overview}
      imgPath={movie['poster_path']}
      key={index}
      genreIds={movie['genre_ids']}
    />
  ));
  return <>{CreateMovieList}</>;
}

export default MoviesDayList;
