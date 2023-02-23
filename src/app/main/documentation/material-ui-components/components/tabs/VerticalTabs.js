import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="گزینه 1" {...a11yProps(0)} />
        <Tab label="گزینه 2" {...a11yProps(1)} />
        <Tab label="گزینه 3" {...a11yProps(2)} />
        <Tab label="گزینه 4" {...a11yProps(3)} />
        <Tab label="گزینه 5" {...a11yProps(4)} />
        <Tab label="گزینه 6" {...a11yProps(5)} />
        <Tab label="گزینه 7" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        گزینه 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        گزینه 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        گزینه 3
      </TabPanel>
      <TabPanel value={value} index={3}>
        گزینه 4
      </TabPanel>
      <TabPanel value={value} index={4}>
        گزینه 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        گزینه 6
      </TabPanel>
      <TabPanel value={value} index={6}>
        گزینه 7
      </TabPanel>
    </Box>
  );
}
