import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function NoSsrDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/no-ssr"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        No SSR-بدون SSR
      </Typography>
      <Typography className="description">
      NoSsr عمدا کامپوننت ها را از موضوع رندر سمت سرور (SSR) حذف می کند.
      </Typography>

      <Typography className="mb-40" component="div">
      این جزء می تواند در شرایط مختلف مفید باشد:
      </Typography>
      <ul>
        <li>Escape hatch for broken dependencies not supporting SSR.</li>
        <li>Improve the time-to-first paint on the client by only rendering above the fold.</li>
        <li>Reduce the rendering time on the server.</li>
        <li>Under too heavy server load, you can turn on service degradation.</li>
        <li>
          Improve the time-to-interactive by only rendering what&#39;s important (with the{' '}
          <code>defer</code> property).
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Client-side deferring-به تعویق انداختن سمت مشتری
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleNoSsr.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/no-ssr/SimpleNoSsr.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/no-ssr/SimpleNoSsr.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Frame deferring-تعویق قاب
      </Typography>
      <Typography className="mb-40" component="div">
      هدف مؤلفه NoSsr در هسته آن، <strong>defer rendering</strong> است. همانطور که در نسخه ی نمایشی قبلی نشان داده شده است، می توانید از آن برای به تعویق انداختن رندر از سرور به مشتری استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      ما می توانید از آن برای به تعویق انداختن رندر در خود کلاینت نیز استفاده کنید. می‌توانید{' '} <strong>منتظر یک قاب صفحه باشید</strong> با ویژگی <code>defer</code> برای ارائه فرزندان. واکنش نشان می دهد{' '}
  <a href="https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects"> 2 commit</a>{' '}به جای 1.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FrameDeferring.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/no-ssr/FrameDeferring.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/no-ssr/FrameDeferring.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       بی استایل
      
      </Typography>
      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/package/@mui/base@latest">784 B gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      از آنجایی که کامپوننت هیچ گونه سبکی ندارد، با بسته پایه نیز همراه است.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import NoSsr from '@mui/base/NoSsr';
`}
      </FuseHighlight>
    </>
  );
}

export default NoSsrDoc;
