import SingleMovieCard from './SingleMovieCard';
import { useAppSelector } from '../../Hooks/hooks';
import { Spinner } from '@chakra-ui/react';

function MoviesDayList() {
  const dataList = useAppSelector((state) => state.movies.moviesData.results);
  console.log(dataList);

  if (!dataList) {
    return <Spinner />;
  }

  const titles = dataList.map((x) => x['original_title']);

  console.log(titles);

  const CreateMovieList = () => {
    return dataList.map((movie, index) => (
      <SingleMovieCard
        title={movie['original_title']}
        description={movie.overview}
        imgPath={movie['poster_path']}
        key={index}
      />
    ));
  };

  return (
    <>
      <CreateMovieList />
    </>
  );
}

export default MoviesDayList;
