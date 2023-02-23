import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AppBarDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/app-bar"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
       نوار برنامه
      </Typography>
      <Typography className="description">
      نوار برنامه اطلاعات و اقدامات مربوط به صفحه فعلی را نشان می دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      نوار برنامه بالا محتوا و اقدامات مربوط به صفحه فعلی را ارائه می دهد. این&#39;استفاده می شود
         برای نام تجاری، عناوین صفحه نمایش، ناوبری، و اقدامات.
      </Typography>
      <Typography className="mb-40" component="div">
      می تواند به یک نوار اقدام متنی تبدیل شود یا به عنوان نوار ناوبری استفاده شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       نوار برنامه اصلی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonAppBar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/ButtonAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/ButtonAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        نوار برنامه با منو
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MenuAppBar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/MenuAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/MenuAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        نوار برنامه با منوی پاسخگو
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveAppBar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/ResponsiveAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/ResponsiveAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نوار برنامه با فیلد جستجو      </Typography>
      <Typography className="mb-40" component="div">
      یک نوار جستجوی جانبی      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SearchAppBar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/SearchAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/SearchAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نوار برنامه با فیلد جستجوی اولیه      </Typography>
      <Typography className="mb-40" component="div">
      یک نوار جستجوی اولیه      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PrimarySearchAppBar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/PrimarySearchAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/PrimarySearchAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dense (desktop only)-متراکم (فقط رومیزی)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DenseAppBar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/DenseAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/DenseAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      برجسته
      </Typography>
      <Typography className="mb-40" component="div">
      نوار برنامه برجسته      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ProminentAppBar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/ProminentAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/ProminentAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نوار برنامه پایین      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BottomAppBar.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/BottomAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/BottomAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جایگذاری ثابت      </Typography>
      <Typography className="mb-40" component="div">
      وقتی موقعیت نوار برنامه را ثابت می کنید، بعد عنصر ثابت می شود&#39;t بقیه صفحه را تحت تاثیر قرار دهد. این می تواند باعث شود بخشی از محتوای شما در پشت نوار برنامه نامرئی شود. در اینجا 3 راه حل ممکن وجود دارد:
      </Typography>
      <ol>
        <li>
          You can use <code>position="sticky"</code> instead of fixed. ⚠️ sticky is not supported by
          IE11.
        </li>
        <li>
          You can render a second <code>{`<Toolbar />`}</code> component:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <ol start="3">
        <li>
          You can use <code>theme.mixins.toolbar</code> CSS:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پیمایش
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید استفاده کنید<code>useScrollTrigger()</code> قلاب برای پاسخ به اقدامات اسکرول کاربر.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      پنهان کردن نوار برنامه      </Typography>
      <Typography className="mb-40" component="div">
      نوار برنامه در اسکرول به پایین پنهان می شود تا فضای بیشتری برای مطالعه باقی بماند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HideAppBar.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/HideAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/HideAppBar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      نوار برنامه را بالا ببرید      </Typography>
      <Typography className="mb-40" component="div">
      نوار برنامه در اسکرول بالا می رود تا نشان دهد کاربر در بالای صفحه نیست.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ElevateAppBar.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/ElevateAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/ElevateAppBar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      بازگشت به بالا      </Typography>
      <Typography className="mb-40" component="div">
      یک دکمه عمل شناور روی پیمایش ظاهر می شود تا بازگشت به بالای صفحه آسان شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BackToTop.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/BackToTop.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/BackToTop.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        <code>{`useScrollTrigger([options]) => trigger`}</code>
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      استدلال ها
      </Typography>
      <ol>
        <li>
          <Typography className="mb-40" component="div">
            <code>options</code> (<em>object</em> [optional]):
          </Typography>
          <ul>
            <li>
              <code>options.disableHysteresis</code> (<em>bool</em> [optional]): Defaults to{' '}
              <code>false</code>. Disable the hysteresis. Ignore the scroll direction when
              determining the <code>trigger</code> value.
            </li>
            <li>
              <code>options.target</code> (<em>Node</em> [optional]): Defaults to{' '}
              <code>window</code>.
            </li>
            <li>
              <code>options.threshold</code> (<em>number</em> [optional]): Defaults to{' '}
              <code>100</code>. Change the <code>trigger</code> value when the vertical scroll
              strictly crosses this threshold (exclusive).
            </li>
          </ul>
        </li>
      </ol>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      برمی گرداند
      </Typography>
      <Typography className="mb-40" component="div">
        <code>trigger</code>: آیا موقعیت اسکرول با معیارها مطابقت دارد؟
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      مثال ها
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      رنگ را در تاریکی فعال کنید      </Typography>
      <Typography className="mb-40" component="div">
        Following the{' '}
        <a href="https://material.io/design/color/dark-theme.html">Material Design guidelines</a>,
         <code>color</code> prop has no effect on the appearance of the app bar in dark mode. You
        can override this behavior by setting the <code>enableColorOnDark</code> prop to{' '}
        <code>true</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="EnableColorOnDarkAppBar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/EnableColorOnDarkAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/EnableColorOnDarkAppBar.js')}
        />
      </Typography>
    </>
  );
}

export default AppBarDoc;
