import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PortalDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/portal"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Portal-پورتال
      </Typography>
      <Typography className="description">
      مؤلفه پورتال فرزندان خود را به یک "زیردرخت" جدید خارج از سلسله مراتب فعلی DOM تبدیل می کند.
      </Typography>

      <Typography className="mb-40" component="div">
      فرزندان جزء پورتال به <code>container</code>{' '} مشخص شده الحاق خواهند شد. مؤلفه به صورت داخلی توسط {' '} <a href="/components/modal/"> <code>Modal</code></a>{' '} و{' '} استفاده می شود
      <a href="/components/popper/">
      <code>Popper</code>
       </a>{' '} جزء.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        مثال
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimplePortal.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/portal/SimplePortal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/portal/SimplePortal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Server-side-سمت سرور
      </Typography>
      <Typography className="mb-40" component="div">
        React <a href="https://github.com/facebook/react/issues/13097">doesn&#39;t support</a> the{' '}
        <a href="https://reactjs.org/docs/portals.html">
          <code>createPortal()</code>
        </a>{' '}
        API on the server. You have to wait for the client-side hydration to see the children.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بی استایل
      </Typography>
      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/package/@mui/base@latest">970 B gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      از آنجایی که کامپوننت هیچ گونه سبکی ندارد، با بسته پایه نیز همراه است.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import Portal from '@mui/base/Portal';
`}
      </FuseHighlight>
    </>
  );
}

export default PortalDoc;
