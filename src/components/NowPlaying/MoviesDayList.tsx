import SingleMovieCard from './SingleMovieCard';
import { useAppSelector } from '../../Hooks/hooks';
import { Spinner } from '@chakra-ui/react';
import { TabPanels, TabPanel } from '@chakra-ui/react';
import { tabData } from '../../Services/nowPlaying';
import { schedule } from '../../Services/nowPlaying';

function MoviesDayList() {
  const dataList = useAppSelector((state) => state.movies.moviesData);
  console.log(dataList);

  if (Object.keys(dataList).length === 0) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <TabPanels>
        {/* render TabPanel for each day */}
        {tabData.map(
          ({ day, movieList }: { day: any; movieList: any }, index) => (
            <TabPanel key={index}>
              {/* inside each TabPanel render MovieCard for each movie*/}

              {Object.keys(movieList).map((movieNo, index) => {
                const movie = dataList[movieNo];
                console.log(movie);

                return (
                  <SingleMovieCard
                    title={movie['original_title']}
                    description={movie.overview}
                    imgPath={movie['poster_path']}
                    key={index}
                    genreIds={movie['genre_ids']}
                  />
                );
              })}
            </TabPanel>
          )
        )}
      </TabPanels>
    </>
  );
}

export default MoviesDayList;
