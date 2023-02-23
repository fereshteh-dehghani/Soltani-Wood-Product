import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PaperDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/paper"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Paper-کاغذ
      </Typography>
      <Typography className="description">
      در طراحی مواد، خواص فیزیکی کاغذ به صفحه نمایش ترجمه می شود.{' '}
      </Typography>

      <Typography className="mb-40" component="div">
      پس‌زمینه یک برنامه کاربردی شبیه بافت مسطح و مات یک ورق کاغذ است و رفتار یک برنامه کاربردی توانایی کاغذ را برای تغییر اندازه، به هم ریختن و چسباندن به یکدیگر در چندین ورق تقلید می‌کند
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic paper-کاغذ پایه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimplePaper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/paper/SimplePaper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/paper/SimplePaper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Variants-انواع
      </Typography>
      <Typography className="mb-40" component="div">
      اگر به یک سطح مشخص نیاز دارید، از پایه <code>Variant</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Variants.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/paper/Variants.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/paper/Variants.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Elevation-ارتفاع
      </Typography>
      <Typography className="mb-40" component="div">
      از ارتفاع می توان برای ایجاد سلسله مراتبی بین سایر محتواها استفاده کرد. از نظر عملی، ارتفاع، اندازه سایه اعمال شده روی سطح را کنترل می کند. در حالت تاریک، بالا بردن ارتفاع نیز سطح را روشن تر می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Elevation.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/paper/Elevation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/paper/Elevation.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The change of shade in dark mode is done by applying a semi-transparent gradient to the{' '}
        <code>background-image</code> property. This can lead to confusion when overriding the
        styles of <code>Paper</code>, as setting just the <code>background-color</code> property
        will not affect the elevation-related shading. To ignore the shading and set the background
        color that is not affected by elevation in dark mode, override the <code>background</code>{' '}
        property (or both <code>background-color</code> and <code>background-image</code>).
      </Typography>
    </>
  );
}

export default PaperDoc;
