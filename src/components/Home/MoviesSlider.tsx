import { useAppSelector } from '../../Hooks/hooks';
import AliceCarousel from 'react-alice-carousel';
import { Box } from '@chakra-ui/react';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const MoviesSlider = () => {
  const dataList = useAppSelector((state) => state.movies.moviesData);

  const movies = Object.keys(dataList).map((movie) => (
    <Box
      key={movie}
      w='250px'
      h='400px'
      p={4}
      boxShadow='md'
      borderRadius='md'
      overflow='hidden'
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${dataList[movie]['poster_path']}`}
        onDragStart={handleDragStart}
        role='presentation'
        alt={`Movie ${movie}`}
        width='100%'
        height='100%'
      />
    </Box>
  ));
  return (
    <AliceCarousel
      infinite
      autoWidth
      mouseTracking
      items={movies}
      animationDuration={800}
      autoPlay={true}
      autoPlayStrategy='action'
      disableDotsControls
      disableButtonsControls
    />
  );
};

export default MoviesSlider;
