import SingleMovieCard from './SingleMovieCard';
import { useAppSelector } from '../../Hooks/hooks';
import { Spinner } from '@chakra-ui/react';
import { TabPanels, TabPanel } from '@chakra-ui/react';
import { tabData } from '../../Services/nowPlaying';

function MoviesDayList() {
  const dataList = useAppSelector((state) => state.movies.moviesData.results);

  if (!dataList) {
    return <Spinner />;
  }

  return (
    <>
      <TabPanels>
        {/* render TabPanel for each day */}
        {tabData.map((tab, index) => (
          <TabPanel key={index}>
            {/* inside each TabPanel render MovieCard for each movie*/}
            {dataList.map((movie, index) => (
              <SingleMovieCard
                title={movie['original_title']}
                description={movie.overview}
                imgPath={movie['poster_path']}
                key={index}
                genreIds={movie['genre_ids']}
              />
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </>
  );
}

export default MoviesDayList;
