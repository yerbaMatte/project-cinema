import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import MoviesDayList from './MoviesDayList';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MoviesCalendarTab() {
  const tabData = [
    { day: 'Monday', movieList: '1' },
    { day: 'Tuesday', movieList: '2' },
    { day: 'Wednesday', movieList: '3' },
    { day: 'Thursday', movieList: '4' },
    { day: 'Friday', movieList: '5' },
    { day: 'Saturday', movieList: '6' },
    { day: 'Sunday', movieList: '7' },
  ];

  const navigate = useNavigate();
  const date = new Date();
  const currentDay = date.getDay();
  console.log(currentDay);

  useEffect(() => {
    navigate(`/nowplaying/${tabData[currentDay - 1]['day'].toLowerCase()}`);
  }, []);

  const CreateMoviesTab = ({ data }) => {
    return (
      <Tabs isLazy defaultIndex={currentDay - 1}>
        <TabList>
          {data.map((tab, index) => (
            <Tab key={index}>
              <Link to={`/nowplaying/${tab.day.toLowerCase()}`}>{tab.day}</Link>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel key={index}>
              <MoviesDayList />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  };

  return <CreateMoviesTab data={tabData} />;
}

export default MoviesCalendarTab;
