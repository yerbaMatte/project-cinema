import PromoComponent from '../Components/Home/PromoComponent';
import MoviesSlider from '../Components/Home/MoviesSlider';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <PromoComponent />
      <MoviesSlider />
    </>
  );
};

export default Home;
