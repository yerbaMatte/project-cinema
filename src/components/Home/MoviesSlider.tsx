import { useAppSelector } from '../../Hooks/hooks';
import AliceCarousel from 'react-alice-carousel';
import { Box } from '@chakra-ui/react';
import 'react-alice-carousel/lib/alice-carousel.css';
import filmTape from './film.png';
import { useState } from 'react';

const MovieItem = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const carouselItemStyles = {
    transform: `scale(${isHovered ? '1.2' : '1'})`,
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <Box
      w="200px"
      h="100%"
      p={6}
      overflow="hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={carouselItemStyles}
      // cursor="pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie['poster_path']}`}
        role="presentation"
        alt={`Movie ${movie.id}`}
        width="100%"
        height="100%"
        style={{ borderRadius: '12px' }}
      />
    </Box>
  );
};

const MoviesSlider = () => {
  const dataList = useAppSelector((state) => state.movies.moviesData);
  const movies = Object.values(dataList).map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <Box
      height="340px"
      style={{
        backgroundImage: `url(${filmTape})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <AliceCarousel
        infinite
        autoWidth
        mouseTracking
        items={movies}
        animationDuration={1200}
        autoPlay={true}
        disableDotsControls
        disableButtonsControls
      />
    </Box>
  );
};

export default MoviesSlider;
