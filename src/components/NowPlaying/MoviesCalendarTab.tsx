import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import MoviesDayList from './MoviesDayList';

function MoviesCalendarTab() {
  const CreateMoviesTab = ({ data }) => {
    return (
      <Tabs isLazy>
        <TabList>
          {data.map((tab, index) => (
            <Tab key={index}>{tab.day}</Tab>
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

  const tabData = [
    { day: 'Monday', movieList: '1' },
    { day: 'Tuesday', movieList: '2' },
    { day: 'Wednesday', movieList: '3' },
    { day: 'Thursday', movieList: '4' },
    { day: 'Friday', movieList: '5' },
    { day: 'Saturday', movieList: '6' },
    { day: 'Sunday', movieList: '7' },
  ];

  return <CreateMoviesTab data={tabData} />;
}

export default MoviesCalendarTab;
