import SingleMovieCard from './SingleMovieCard';
import { useAppSelector } from '../../Hooks/hooks';
import { Spinner, TabPanels, TabPanel } from '@chakra-ui/react';
import { tabData, schedule } from '../../Services/nowPlaying';

function MoviesDayList() {
  const dataList = useAppSelector((state) => state.movies.moviesData);

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

              {Object.keys(movieList).map((movieNo, ind) => {
                const movie = dataList[movieNo];

                return (
                  <SingleMovieCard
                    title={movie['original_title']}
                    description={movie.overview}
                    imgPath={movie['poster_path']}
                    key={ind}
                    genreIds={movie.genres}
                    startAt={schedule[index][movieNo]['start']}
                    duration={movie.runtime}
                    score={movie['vote_average']}
                    noOfVotes={movie['vote_count']}
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
