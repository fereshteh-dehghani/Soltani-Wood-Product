import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SkeletonDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/skeleton"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Skeleton-اسکلت
      </Typography>
      <Typography className="description">
      پیش‌نمایش نگهدارنده مکان از محتوای خود را قبل از بارگیری داده‌ها نمایش دهید تا ناامیدی در زمان بارگذاری کاهش یابد.
      </Typography>

      <Typography className="mb-40" component="div">
      ممکن است داده‌های اجزای شما فوراً در دسترس نباشد. با استفاده از اسکلت ها می توانید واکنش پذیری صفحه را بهبود بخشید. به نظر می رسد که همه چیز بلافاصله اتفاق می افتد، سپس اطلاعات به صورت تدریجی روی صفحه نمایش داده می شود (Cf.{' '}
        <a href="https://www.lukew.com/ff/entry.asp?1797">Avoid The Spinner</a>).
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      استفاده
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت طوری طراحی شده است که <strong>مستقیماً در اجزای شما</strong> استفاده شود. برای مثال:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
{
  item ? (
    <img
      style={{
        width: 210,
        height: 118,

      alt={item.title}
      src={item.src}
    />
  ) : (
    <Skeleton variant="rectangular" width={210} height={118} />
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Variants-انواع
      </Typography>
      <Typography className="mb-40" component="div">
      این جزء از 3 نوع شکل پشتیبانی می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Variants.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/skeleton/Variants.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/skeleton/Variants.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تصاوير متحرك
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، اسکلت ضربان دارد، اما می توانید انیمیشن را به یک موج تغییر دهید یا آن را به طور کامل غیرفعال کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Animations.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/skeleton/Animations.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/skeleton/Animations.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Pulsate example-نمونه را فشار دهید
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="YouTube.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/skeleton/YouTube.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/skeleton/YouTube.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Wave example-مثال موج
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Facebook.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/skeleton/Facebook.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/skeleton/Facebook.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Inferring dimensions-استنباط ابعاد
      </Typography>
      <Typography className="mb-40" component="div">
      علاوه بر پذیرش عناصر <code>width</code> و <code>height</code>، مؤلفه می‌تواند ابعاد را نیز استنتاج کند.
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی صحبت از تایپوگرافی به میان می آید خوب کار می کند زیرا ارتفاع آن با استفاده از واحدهای <code>em</code> تنظیم می شود.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SkeletonTypography.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/skeleton/SkeletonTypography.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/skeleton/SkeletonTypography.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      اما وقتی صحبت از اجزای دیگر می شود، ممکن است نخواهید عرض و ارتفاع را تکرار کنید. در این موارد، می‌توانید از <code>children</code> عبور کنید و عرض و ارتفاع آن را از آنها استنباط می‌کند.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
loading ? (
  <Skeleton variant="circular">
    <Avatar />
  </Skeleton>
) : (
  <Avatar src={data.avatar} />
);
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SkeletonChildren.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/skeleton/SkeletonChildren.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/skeleton/SkeletonChildren.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color-رنگ
      </Typography>
      <Typography className="mb-40" component="div">
      رنگ مؤلفه را می توان با تغییر ویژگی CSS <code>background-color</code>{' '} آن سفارشی کرد. این مخصوصاً زمانی مفید است که روی پس‌زمینه مشکی باشد (زیرا اسکلت در غیر این صورت نامرئی خواهد بود).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SkeletonColor.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/skeleton/SkeletonColor.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/skeleton/SkeletonColor.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      صفحات اسکلت جایگزینی برای روش سنتی اسپینر ارائه می دهند. به‌جای نمایش یک ویجت انتزاعی، صفحه‌های اسکلت پیش‌بینی از آینده را ایجاد می‌کنند و بار شناختی را کاهش می‌دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      رنگ پس زمینه اسکلت از کمترین میزان روشنایی استفاده می کند تا در شرایط خوب قابل مشاهده باشد (نور محیط خوب، صفحه نمایش خوب، بدون نقص بینایی).
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="mb-40" component="div">
      هیچ یک.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        صفحه کلید
      </Typography>
      <Typography className="mb-40" component="div">
      اسکلت قابل تمرکز نیست.
      </Typography>
    </>
  );
}

export default SkeletonDoc;
