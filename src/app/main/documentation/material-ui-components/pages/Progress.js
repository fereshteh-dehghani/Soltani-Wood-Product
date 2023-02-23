import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ProgressDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/progress"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Progress-پیش رفتن
      </Typography>
      <Typography className="description">
      نشانگرهای پیشرفت که معمولاً به عنوان اسپینر شناخته می شوند، زمان انتظار نامشخصی را بیان می کنند یا طول یک فرآیند را نمایش می دهند.
      </Typography>

      <Typography className="mb-40" component="div">
      شاخص‌های پیشرفت، وضعیت فرآیندهای در حال انجام، مانند بارگیری یک برنامه، ارسال فرم، یا ذخیره به‌روزرسانی‌ها را به کاربران اطلاع می‌دهند.
      </Typography>
      <ul>
        <li>
          <strong>Determinate</strong> indicators display how long an operation will take.
        </li>
        <li>
          <strong>Indeterminate</strong> indicators visualize an unspecified wait time.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      انیمیشن های کامپوننت ها حتی قبل از بارگیری جاوا اسکریپت برای کار تا حد امکان به CSS متکی هستند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Circular-گرد
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Circular indeterminate-دایره ای نامعین
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularIndeterminate.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularIndeterminate.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularIndeterminate.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Circular color-رنگ دایره ای
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularColor.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularColor.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularColor.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Circular determinate-معین دایره ای
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularDeterminate.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularDeterminate.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularDeterminate.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Interactive integration-ادغام تعاملی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularIntegration.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularIntegration.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularIntegration.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Circular with label-دایره ای با برچسب
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularWithValueLabel.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularWithValueLabel.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularWithValueLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Linear-خطی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Linear indeterminate-خطی نامعین
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LinearIndeterminate.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/LinearIndeterminate.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearIndeterminate.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Linear color-رنگ خطی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LinearColor.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/LinearColor.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearColor.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Linear determinate-تعیین خطی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LinearDeterminate.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/LinearDeterminate.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearDeterminate.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Linear buffer-بافر خطی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LinearBuffer.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/LinearBuffer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearBuffer.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Linear with label-خطی با برچسب
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LinearWithValueLabel.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/LinearWithValueLabel.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/LinearWithValueLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Non-standard ranges-محدوده های غیر استاندارد
      </Typography>
      <Typography className="mb-40" component="div">
      اجزای پیشرفت مقداری را در محدوده 0 - 100 می‌پذیرند. این کار برای کاربران صفحه‌خوان ساده می‌شود، جایی که این مقادیر حداقل/حداکثر پیش‌فرض هستند. با این حال، گاهی اوقات ممکن است با یک منبع داده کار کنید که مقادیر آن خارج از این محدوده باشد. در اینجا نحوه تبدیل یک مقدار در هر محدوده به مقیاس 0 تا 100 آمده است:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
// MIN = Minimum expected value
// MAX = Maximium expected value
// Function to normalise the values (MIN / MAX could be integrated)
const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

// Example component that utilizes the \`normalise\` function at the point of render.
function Progress(props) {
  return (
    <React.Fragment>
      <CircularProgress variant="determinate" value={normalise(props.value)} />
      <LinearProgress variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می توانید در این مورد بیشتر بدانید{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedProgressBars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CustomizedProgressBars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CustomizedProgressBars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Delaying appearance-تاخیر در ظاهر
      </Typography>
      <Typography className="mb-40" component="div">
        {' '}
        <a href="https://www.nngroup.com/articles/response-times-3-important-limits/">
          3 important limits
        </a>{' '}
        برای دانستن پاسخ وجود دارد زمان. اثر موج دار مؤلفه <code>ButtonBase</code> تضمین می کند که کاربر احساس می کند که سیستم فوراً واکنش نشان می دهد. معمولاً در تأخیرهای بیش از 0.1 اما کمتر از 1.0 ثانیه به بازخورد خاصی نیاز نیست. پس از 1.0 ثانیه، می توانید یک لودر نمایش دهید تا جریان فکر کاربر بدون وقفه حفظ شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DelayingAppearance.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/DelayingAppearance.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/DelayingAppearance.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations-محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        High CPU load-بار بالای CPU
      </Typography>
      <Typography className="mb-40" component="div">
      در زیر بار سنگین، ممکن است انیمیشن خط تیره سکته مغزی را گم کنید یا عرض حلقه‌های تصادفی{' '} <code>CircularProgress</code> را مشاهده کنید. شما باید عملیات فشرده پردازشگر را در یک وب کارگر یا به صورت دسته ای اجرا کنید تا رشته رندر اصلی مسدود نشود.
      </Typography>
      <Typography className="mb-40" component="div">
        {' '}
        src="/material-ui-static/images/progress/heavy-load.gif" alt="heavy load/>
      </Typography>
      <Typography className="mb-40" component="div">
      هنگامی که امکان پذیر نیست، می توانید از پایه <code>disableShrink</code> برای کاهش مشکل استفاده کنید. دیدن <a href="https://github.com/mui/material-ui/issues/10327">this issue</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularUnderLoad.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/progress/CircularUnderLoad.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/progress/CircularUnderLoad.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        High frequency updates-به روز رسانی با فرکانس بالا
      </Typography>
      <Typography className="mb-40" component="div">
      <code>LinearProgress</code> از یک انتقال در ویژگی تبدیل CSS استفاده می کند تا یک به روز رسانی صاف بین مقادیر مختلف ارائه دهد. مدت زمان انتقال پیش‌فرض 200 میلی‌ثانیه است. در صورتی که یکی از مؤلفه‌های والد، پایه <code>value</code> را خیلی سریع به‌روزرسانی کند، حداقل 200 میلی‌ثانیه تأخیر بین رندر مجدد و نوار پیشرفت به‌طور کامل به‌روزرسانی می‌شود.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر نیاز به انجام 30 رندر مجدد در ثانیه یا بیشتر دارید، توصیه می کنیم انتقال را غیرفعال کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiLinearProgress-bar {
  transition: none;
}
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        IE 11
      </Typography>
      <Typography className="mb-40" component="div">
      انیمیشن جزء پیشرفت دایره ای در IE 11 تنزل یافته است. انیمیشن خط تیره stroke کار نمی کند (معادل <code>disableShrink</code>) و انیمیشن دایره ای تکان می خورد. شما می توانید دومی را با:
      </Typography>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiCircularProgress-indeterminate {
  animation: circular-rotate 1.4s linear infinite;
}

@keyframes circular-rotate {
  0% {
    transform: rotate(0deg);
    /* Fix IE11 wobbly */
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
}
`}
      </FuseHighlight>
    </>
  );
}

export default ProgressDoc;
