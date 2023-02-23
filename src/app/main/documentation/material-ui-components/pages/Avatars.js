import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AvatarsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/avatars"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Avatar-آواتار
      </Typography>
      <Typography className="description">
      آواتارها در طراحی متریال با استفاده در همه چیز از جداول گرفته تا منوهای گفتگو یافت می شوند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آواتارهای تصویر
      </Typography>
      <Typography className="mb-40" component="div">
      آواتارهای تصویر را می‌توان با ارسال <code>img</code> props <code>src</code> یا{' '} <code>srcSet</code> به مؤلفه ایجاد کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ImageAvatars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/ImageAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/ImageAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آواتار حروف
      </Typography>
      <Typography className="mb-40" component="div">
      آواتارهای حاوی کاراکترهای ساده را می توان با عبور یک رشته به عنوان ایجاد کرد{' '}
        <code>children</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LetterAvatars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/LetterAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/LetterAvatars.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از رنگ های مختلف پس زمینه برای آواتار استفاده کنید. دمو زیر رنگ را بر اساس نام شخص تولید می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BackgroundLetterAvatars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/BackgroundLetterAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/BackgroundLetterAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید اندازه آواتار را با ویژگی های <code>height</code> و <code>width</code>{' '} CSS تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizeAvatars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/SizeAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/SizeAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Icon avatars-نماد آواتارها
      </Typography>
      <Typography className="mb-40" component="div">
      آواتارهای نماد با ارسال یک نماد به عنوان <code>children</code> ایجاد می شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconAvatars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/IconAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/IconAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      انواع
      </Typography>
      <Typography className="mb-40" component="div">
      اگر به آواتارهای مربع یا گرد نیاز دارید، از پایه <code>Variant</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariantAvatars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/VariantAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/VariantAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fallbacks
      </Typography>
      <Typography className="mb-40" component="div">
      اگر در بارگیری تصویر آواتار خطایی وجود داشته باشد، مؤلفه به ترتیب زیر به یک جایگزین برمی‌گردد:
      </Typography>
      <ul>
        <li>the provided children</li>
        <li>
          the first letter of the <code>alt</code> text
        </li>
        <li>a generic avatar icon</li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FallbackAvatars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/FallbackAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/FallbackAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Grouped-گروه بندی
      </Typography>
      <Typography className="mb-40" component="div">
      <code>AvatarGroup</code> فرزندان خود را به صورت پشته نمایش می دهد. از پایه <code>max</code> برای محدود کردن تعداد آواتارها استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GroupAvatars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/GroupAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/GroupAvatars.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Total avatars-کل آواتارها
      </Typography>
      <Typography className="mb-40" component="div">
      اگر نیاز به کنترل تعداد کل آواتارهای نشان داده نشده دارید، می‌توانید از {' '} <code>total</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TotalAvatars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/TotalAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/TotalAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        With badge-با نشان
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeAvatars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/BadgeAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/BadgeAvatars.js')}
        />
      </Typography>
    </>
  );
}

export default AvatarsDoc;
