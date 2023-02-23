import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="گزینه 1" value="1" />
            <Tab label="گزینه 2" value="2" />
            <Tab label="گزینه 3" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">گزینه 1</TabPanel>
        <TabPanel value="2">گزینه 2</TabPanel>
        <TabPanel value="3">گزینه 3</TabPanel>
      </TabContext>
    </Box>
  );
}
