import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function ReactTableDoc() {
  return (
    <>
      <div className="flex w-full items-center justify-between mb-24">
        <Typography variant="h4" className="">
          ReactTable
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="https://github.com/react-tools/react-table"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>

      <Typography className="mb-16" component="p">
        <code>react-table</code> 
        یک دیتاگرید سبک، سریع و قابل ارتقا است که برای React ساخته شده است.
      </Typography>

      <hr />

      <Typography className="text-32 mt-32 mb-8" component="h2">
      مثال استفاده
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/simple.js').default}
        raw={require('!raw-loader!./examples/simple.js')}
      />

      <Typography className="text-32 mt-32 mb-8" component="h2">
      نمونه های پیشرفته
      </Typography>

      <Typography className="mt-32 mb-8" component="p">
      برای نمونه های پیشرفته در{' '}
        <a
          href="https://github.com/tannerlinsley/react-table/blob/master/docs/examples.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-table docs
        </a>
      </Typography>

      <Typography className="text-32 mt-32 mb-8" component="h2">
      دموها
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/apps/contacts">Contacts App</Link>
        </li>
      </ul>
    </>
  );
}

export default ReactTableDoc;
