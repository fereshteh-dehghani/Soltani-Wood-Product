import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="گزینه 1" />
        <Tab label="گزینه 2" />
        <Tab label="گزینه 3" />
        <Tab label="گزینه 4" />
        <Tab label="گزینه 5" />
        <Tab label="گزینه 6" />
        <Tab label="گزینه 7" />
      </Tabs>
    </Box>
  );
}
