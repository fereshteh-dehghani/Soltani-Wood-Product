import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function GoogleMapReactDoc() {
  return (
    <>
      <div className="flex w-full items-center justify-between mb-24">
        <Typography variant="h4" className="">
          GoogleMapReact
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="https://github.com/google-map-react/google-map-react"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="mb-16" component="p">
        <code>google-map-react</code> مؤلفه ای است که روی مجموعه کوچکی از Google Maps API نوشته شده است.
      </Typography>

      <hr />

      <Typography className="text-32 mt-32 mb-8" component="h2">
      کاربردهای مثال
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/simple.js').default}
        raw={require('!raw-loader!./examples/simple.js')}
      />

      <Typography className="text-32 mt-32 mb-8" component="h2">
      دموها
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/apps/dashboards/analytics">Analytics Dashboard</Link>
        </li>
      </ul>
    </>
  );
}

export default GoogleMapReactDoc;
