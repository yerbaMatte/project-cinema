import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import MoviesDayList from './MoviesDayList';

function MoviesCalendarTab() {
  return (
    <Tabs isLazy>
      <TabList>
        <Tab>Monday</Tab>
        <Tab>Tuesday</Tab>
        <Tab>Wednesday</Tab>
        <Tab>Thursday</Tab>
        <Tab>Friday</Tab>
        <Tab>Saturday</Tab>
        <Tab>Sunday</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MoviesDayList />
        </TabPanel>
        <TabPanel>Tuesday</TabPanel>
        <TabPanel>Wednesday</TabPanel>
        <TabPanel>Thursday</TabPanel>
        <TabPanel>Friday</TabPanel>
        <TabPanel>Saturday</TabPanel>
        <TabPanel>Sunday</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default MoviesCalendarTab;
