import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function CssBaselineDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/css-baseline"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        CSS Baseline
      </Typography>
      <Typography className="description">
      MUI یک مؤلفه CssBaseline را برای شروع یک خط پایه ظریف، سازگار و ساده برای ایجاد بر روی آن فراهم می کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Global reset-بازنشانی جهانی
      </Typography>
      <Typography className="mb-40" component="div">
      ممکن است با{' '} <a href="https://github.com/necolas/normalize.css">normalize.css</a>، مجموعه‌ای از عناصر HTML و ویژگی‌های سبک-نرمال‌سازی آشنا باشید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Scoping on children-محدوده بندی بر روی کودکان
      </Typography>
      <Typography className="mb-40" component="div">
      با این حال، ممکن است به تدریج یک وب سایت را به MUI منتقل کنید، استفاده از تنظیم مجدد جهانی ممکن است گزینه ای نباشد. با استفاده از مؤلفه{' '} <code>ScopedCssBaseline</code>، می‌توان خط پایه را فقط برای کودکان اعمال کرد.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import * as React from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import MyApp from './MyApp';

export default function MyApp() {
  return (
    <ScopedCssBaseline>
      {/* The rest of your application */}
      <MyApp />
    </ScopedCssBaseline>
  );
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        ⚠️ مطمئن شوید که ابتدا <code>ScopedCssBaseline</code> را وارد کرده اید تا مانند مثال بالا از تضاد اندازه جعبه جلوگیری کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      رویکرد
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      صفحه
      </Typography>
      <Typography className="mb-40" component="div">
      عناصر <code>{`<html>`}</code> و <code>{`<body>`}</code> به‌روزرسانی می‌شوند تا پیش‌فرض‌های بهتری در سراسر صفحه ارائه کنند. به طور خاص:
      </Typography>
      <ul>
        <li>The margin in all browsers is removed.</li>
        <li>
          The default Material Design background color is applied. It&#39;s using{' '}
          <a href="/customization/default-theme/?expand-path=$.palette.background">
            <code>theme.palette.background.default</code>
          </a>{' '}
          for standard devices and a white background for print devices.
        </li>
        <li>
          If <code>enableColorScheme</code> is provided to <code>CssBaseline</code>, native
          components color will be set by applying{' '}
          <a href="https://web.dev/color-scheme/">
            <code>color-scheme</code>
          </a>{' '}
          on <code>{`<html>`}</code>. The value used is provided by the theme property{' '}
          <code>theme.palette.mode</code>.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      چیدمان
      </Typography>
      <ul>
        <li>
          <code>box-sizing</code> is set globally on the <code>{`<html>`}</code> element to{' '}
          <code>border-box</code>. Every element—including <code>*::before</code> and{' '}
          <code>*::after</code> are declared to inherit this property, which ensures that the
          declared width of the element is never exceeded due to padding or border.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      نوارهای پیمایش
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
        این API منسوخ شده است، به جای آن از <a href="#color-scheme">color-scheme</a> استفاده کنید.
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
      رنگ نوارهای اسکرول را می توان برای بهبود کنتراست سفارشی کرد (مخصوصاً در ویندوز). این کد را به تم خود اضافه کنید (برای حالت تاریک).
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import darkScrollbar from '@mui/material/darkScrollbar';
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: theme.palette.mode === 'dark' ? darkScrollbar() : null,
      },
    },
  },
});
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      اما توجه داشته باشید که استفاده از این ابزار ( and customizing <code>-webkit-scrollbar</code>) MacOS را مجبور می کند همیشه نوار اسکرول را نشان دهد.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Color scheme-طرح رنگی
      </Typography>
      <Typography className="mb-40" component="div">
      این API در @mui/material (v5.1.0) برای جابه‌جایی بین حالت‌های <code>"light"</code>{' '} و <code>"dark"</code> اجزای اصلی مانند نوار اسکرول معرفی شده است. با استفاده از{' '}
      ویژگی CSS <code>color-scheme</code>. برای فعال کردن آن، می‌توانید{' '}<code>enableColorScheme=true</code> را به صورت زیر تنظیم کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<CssBaseline enableColorScheme />

// or

<ScopedCssBaseline enableColorScheme >
  {/* The rest of your application using color-scheme*/}
</ScopedCssBaseline>
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      تایپوگرافی
      </Typography>
      <ul>
        <li>
          No base font-size is declared on the <code>{`<html>`}</code>, but 16px is assumed (the
          browser default). You can learn more about the implications of changing the{' '}
          <code>{`<html>`}</code> default font size in{' '}
          <a href="/customization/typography/#typography-html-font-size">the theme documentation</a>{' '}
          page.
        </li>
        <li>
          Set the <code>theme.typography.body1</code> style on the <code>{`<body>`}</code> element.
        </li>
        <li>
          Set the font-weight to <code>theme.typography.fontWeightBold</code> for the{' '}
          <code>{`<b>`}</code> and <code>{`<strong>`}</code> elements.
        </li>
        <li>Custom font-smoothing is enabled for better display of the Roboto font.</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      به {' '} بروید
  بخش <a href="/customization/how-to-customize/#5-global-css-override">global customization</a>{' '} از اسناد برای تغییر خروجی این مؤلفه‌ها.
      </Typography>
    </>
  );
}

export default CssBaselineDoc;
