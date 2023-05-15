import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import MoviesDayList from './MoviesDayList';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import useGetCurrentDay from '../../Hooks/useGetCurrentDay';

function MoviesCalendarTab() {
  const { currentDay } = useGetCurrentDay();
  const [tab, setTab] = useState(currentDay);

  interface TabData {
    day: string;
    movieList: string;
  }

  const tabData: TabData[] = [
    { day: 'Monday', movieList: '1' },
    { day: 'Tuesday', movieList: '2' },
    { day: 'Wednesday', movieList: '3' },
    { day: 'Thursday', movieList: '4' },
    { day: 'Friday', movieList: '5' },
    { day: 'Saturday', movieList: '6' },
    { day: 'Sunday', movieList: '7' },
  ];

  const CreateMoviesTab = ({ data }: { data: TabData[] }) => {
    return (
      <Tabs isLazy defaultIndex={tab}>
        <TabList>
          {data.map((tab, index) => (
            <Tab
              as={RouterLink}
              key={index}
              to={`/nowplaying/${tab.day.toLowerCase()}`}
            >
              {tab.day}
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
