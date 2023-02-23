import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BadgesDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/badges"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Badge-نشان
      </Typography>
      <Typography className="description">
      نشان یک نشان کوچک در سمت راست بالای فرزند(فرزندان) خود ایجاد می کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic badge-نشان پایه
      </Typography>
      <Typography className="mb-40" component="div">
      نمونه هایی از نشان های حاوی متن، با استفاده از رنگ های اصلی و فرعی. این نشان برای فرزندانش اعمال می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleBadge.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/SimpleBadge.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/SimpleBadge.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        از <code>color</code> برای اعمال پالت تم به کامپوننت.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorBadge.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/ColorBadge.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/ColorBadge.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می توانید در این مورد بیشتر بدانید{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedBadges.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/CustomizedBadges.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/CustomizedBadges.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نمایان بودن نشان
      </Typography>
      <Typography className="mb-40" component="div">
      قابل مشاهده بودن نشان ها را می توان با استفاده از پایه <code>invisible</code> کنترل کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeVisibility.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/BadgeVisibility.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeVisibility.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      نشان پنهان با نشان محتوای صفر است. می‌توانید این مورد را با پایه{' '} <code>showZero</code> لغو کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ShowZeroBadge.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/ShowZeroBadge.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/ShowZeroBadge.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      حداکثر مقدار
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پایه <code>max</code> برای محدود کردن مقدار محتوای نشان استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeMax.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/BadgeMax.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeMax.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نشان نقطه
      </Typography>
      <Typography className="mb-40" component="div">
      پایه <code>dot</code> یک نشان را به یک نقطه کوچک تغییر می دهد. این می تواند به عنوان یک اعلان مبنی بر تغییر چیزی بدون ارائه شمارش استفاده شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DotBadge.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/DotBadge.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/DotBadge.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      همپوشانی نشان
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پایه <code>overlap</code> برای قرار دادن نشان نسبت به گوشه عنصر پیچیده استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeOverlap.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/BadgeOverlap.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeOverlap.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تراز نشان
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پایه <code>anchorOrigin</code> برای انتقال نشان به هر گوشه‌ای از عنصر پیچیده استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeAlignment.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/BadgeAlignment.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeAlignment.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       بی استایل
      </Typography>
      <Typography className="mb-40" component="div">
      این نشان همچنین با یک نسخه بدون استایل ارائه می شود. این برای انجام سفارشی سازی های سنگین و به حداقل رساندن اندازه بسته ایده آل است.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import BadgeUnstyled from '@mui/base/BadgeUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledBadge.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/UnstyledBadge.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/UnstyledBadge.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      شما نمی توانید به محتوای نشان که به درستی اعلام می شود تکیه کنید. برای مثال، باید یک توضیح کامل با <code>aria-label</code> ارائه دهید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibleBadges.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/badges/AccessibleBadges.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/AccessibleBadges.js')}
        />
      </Typography>
    </>
  );
}

export default BadgesDoc;
