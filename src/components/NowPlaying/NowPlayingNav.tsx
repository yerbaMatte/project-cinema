import { TabList, Tab } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { TabData } from '../../types/movies-types';
import { tabData } from '../../Services/nowPlaying';

function NowPlayingTab() {
  const CreateMoviesTab = ({ data }: { data: TabData[] }) => {
    return (
      <>
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
      </>
    );
  };

  return <CreateMoviesTab data={tabData} />;
}

export default NowPlayingTab;
