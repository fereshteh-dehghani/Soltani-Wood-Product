import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import _ from '@lodash';

function Widget8(props) {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const data = _.merge({}, props.data);

  _.setWith(data, 'options.colors', [theme.palette.secondary.main]);
  _.setWith(data, 'options.markers.strokeColor', theme.palette.background.default);

  return (
    <Card className="w-full rounded-20 shadow">
      <AppBar position="static" elevation={0}>
        <div className="px-8 py-20 flex flex-row items-start justify-between">
          <div className="px-12">
            <Typography className="h3 font-medium mb-4">فروش</Typography>
            <Typography className="h5" color="inherit">
            جمع مادام العمر فروش شما
            </Typography>
          </div>

          <div className="-mt-12">
            <IconButton aria-label="بیشتر" color="inherit" size="large">
              <Icon>more_vert</Icon>
            </IconButton>
          </div>
        </div>
        <div className="p-16 pt-8 flex flex-row items-end">
          <Typography className="text-44 font-semibold leading-none" color="inherit">
            {data.today}
          </Typography>
          <div className="flex flex-col mx-8">
            {data.change.value > 0 && <Icon className="text-green text-20">trending_up</Icon>}
            {data.change.value < 0 && <Icon className="text-red text-20">trending_down</Icon>}
            <Typography className="font-semibold" color="textSecondary">
              {`${data.change.value}(${data.change.percentage}%)`}
            </Typography>
          </div>
        </div>
        <Tabs value={tabIndex} onChange={(ev, index) => setTabIndex(index)} variant="fullWidth">
          <Tab label="1روز" className="min-w-0" />
          <Tab label="1هفته" className="min-w-0" />
          <Tab label="1ماه" className="min-w-0" />
        </Tabs>
      </AppBar>
      <div className="py-16 h-200">
        <ReactApexChart
          options={data.options}
          series={data.series[tabIndex]}
          type={data.options.chart.type}
          height={data.options.chart.height}
        />
      </div>
    </Card>
  );
}

export default memo(Widget8);
