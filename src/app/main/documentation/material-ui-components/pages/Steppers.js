import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SteppersDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/steppers"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Stepper
      </Typography>
      <Typography className="description">
      پله ها پیشرفت را از طریق گام های شماره دار منتقل می کنند. این یک گردش کار جادوگر مانند را فراهم می کند.
      </Typography>

      <Typography className="mb-40" component="div">
      پله‌ها پیشرفت را از طریق دنباله‌ای از مراحل منطقی و شماره‌دار نشان می‌دهند. آنها همچنین ممکن است برای ناوبری استفاده شوند. پله‌ها ممکن است یک پیام بازخورد گذرا را پس از ذخیره یک مرحله نشان دهند.
      </Typography>
      <ul>
        <li>
          <strong>Types of Steps</strong>: Editable, Non-editable, Mobile, Optional
        </li>
        <li>
          <strong>Types of Steppers</strong>: Horizontal, Vertical, Linear, Non-linear
        </li>
      </ul>
      <blockquote>
        <Typography className="mb-40" component="div">
          <strong>Note:</strong> Steppers are no longer documented in the{' '}
          <a href="https://material.io/">Material Design guidelines</a>, but MUI will continue to
          support them.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Horizontal stepper-استپر افقی
      </Typography>
      <Typography className="mb-40" component="div">
      استپرهای افقی زمانی ایده آل هستند که محتویات یک مرحله به مرحله قبلی بستگی داشته باشد. 
        </Typography>
      <Typography className="mb-40" component="div">
      از به کار بردن نام های طولانی در استپرهای افقی خودداری کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Linear-خطی
      </Typography>
      <Typography className="mb-40" component="div">
      یک پله خطی به کاربر این امکان را می دهد که مراحل را به ترتیب انجام دهد.
      </Typography>
      <Typography className="mb-40" component="div">
      <code>Stepper</code> را می توان با عبور از نمایه گام فعلی (بر اساس صفر) به عنوان سرپناه <code>activeStep</code> کنترل کرد. جهت <code>Stepper</code> با استفاده از{' '} تنظیم شده است{' '}
        <code>orientation</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        This example also shows the use of an optional step by placing the <code>optional</code>{' '}
        prop on the second <code>Step</code> component. Note that it&#39;s up to you to manage when
        an optional step is skipped. Once you&#39;ve determined this for a particular step you must
        set <code>{`completed={false}`}</code> to signify that even though the active step index has
        gone beyond the optional step, it&#39;s not actually complete.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalLinearStepper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/HorizontalLinearStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Non-linear-غیر خطی
      </Typography>
      <Typography className="mb-40" component="div">
      پله های غیر خطی به کاربر این امکان را می دهند که در هر نقطه وارد یک جریان چند مرحله ای شود.
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال شبیه پله افقی معمولی است، با این تفاوت که مراحل دیگر به طور خودکار بر اساس پایه <code>activeStep</code>{' '} روی <code>{`disabled={true}`}</code> تنظیم نمی‌شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      استفاده از <code>StepButton</code> در اینجا برچسب‌های مرحله قابل کلیک و همچنین تنظیم پرچم <code>completed</code> را نشان می‌دهد. با این حال، از آنجایی که می توان به مراحل غیرخطی دسترسی پیدا کرد، این به خود شما بستگی دارد
  پیاده سازی برای تعیین اینکه چه زمانی تمام مراحل تکمیل شده اند (یا حتی اگر باید تکمیل شوند).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalNonLinearStepper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalNonLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      برچسب جایگزین
      </Typography>
      <Typography className="mb-40" component="div">
      با تنظیم پایه <code>alternativeLabel</code> روی مؤلفه <code>Stepper</code> می‌توان برچسب‌ها را در زیر نماد مرحله قرار داد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalLinearAlternativeLabelStepper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/HorizontalLinearAlternativeLabelStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalLinearAlternativeLabelStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      مرحله خطا
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalStepperWithError.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/HorizontalStepperWithError.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/HorizontalStepperWithError.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      پله افقی سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می توانید در این مورد بیشتر بدانید{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSteppers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/CustomizedSteppers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/CustomizedSteppers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      استپر عمودی
      </Typography>
      <Typography className="mb-40" component="div">
      پله های عمودی برای اندازه های صفحه نمایش باریک طراحی شده اند. آنها برای موبایل ایده آل هستند. تمامی ویژگی های استپر افقی قابل پیاده سازی است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalLinearStepper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/VerticalLinearStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/VerticalLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      کارایی
      </Typography>
      <Typography className="mb-40" component="div">
      محتوای یک مرحله زمانی که بسته می‌شود خارج می‌شود. اگر می‌خواهید محتوا را در دسترس موتورهای جستجو قرار دهید یا درخت‌های مؤلفه گران‌قیمت را در داخل مدال خود رندر کنید و در عین حال برای پاسخ‌دهی تعامل بهینه‌سازی کنید، ممکن است ایده خوبی باشد که این مرحله را با استفاده از آن‌ها ثابت نگه دارید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<StepContent TransitionProps={{ unmountOnExit: false }} />
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      استپر موبایل
      </Typography>
      <Typography className="mb-40" component="div">
      این کامپوننت یک استپر فشرده مناسب برای یک دستگاه تلفن همراه پیاده سازی می کند. عملکرد محدودتری نسبت به استپر عمودی دارد. به{' '}
        <a href="https://material.io/archive/guidelines/components/steppers.html#steppers-types-of-steps">
          mobile steps
        </a>{' '}
        مراجعه کنید
        برای الهام گرفتن از آن    
      </Typography>
      <Typography className="mb-40" component="div">
      استپر موبایل از سه نوع برای نمایش پیشرفت در مراحل موجود پشتیبانی می کند: متن، نقطه و پیشرفت.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      متن
      </Typography>
      <Typography className="mb-40" component="div">
      مرحله فعلی و تعداد کل مراحل به صورت متن نمایش داده می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextMobileStepper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/TextMobileStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/TextMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Text with carousel effect-متن با افکت چرخ فلک
      </Typography>
      <Typography className="mb-40" component="div">
      این نسخه ی نمایشی استفاده می کند
        <a href="https://github.com/oliviertassinari/react-swipeable-views">
          react-swipeable-views
        </a>{' '}
        برای ایجاد یک چرخ فلکcarousel.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwipeableTextMobileStepper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/SwipeableTextMobileStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/SwipeableTextMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Dots-نقطه ها
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی تعداد مراحل کم است از نقطه استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DotsMobileStepper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/DotsMobileStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/DotsMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Progress-پیش رفتن
      </Typography>
      <Typography className="mb-40" component="div">
      هنگامی که مراحل زیادی وجود دارد، یا اگر مراحلی وجود دارد که باید در طول فرآیند درج شوند (بر اساس پاسخ به مراحل قبلی) از نوار پیشرفت استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ProgressMobileStepper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/steppers/ProgressMobileStepper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/steppers/ProgressMobileStepper.js')}
        />
      </Typography>
    </>
  );
}

export default SteppersDoc;
