import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TimePickerDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/time-picker"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Time Picker-تایم پیکر
      </Typography>
      <Typography className="description">
      انتخابگرهای زمان به کاربر امکان می‌دهد یک زمان را انتخاب کند.
      </Typography>

      <Typography className="mb-40" component="div">
      انتخابگر زمان به کاربر امکان می دهد یک زمان را انتخاب کند (در قالب ساعت: دقیقه). زمان انتخاب شده با دایره پر شده در انتهای عقربه ساعت نشان داده می شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Requirements-الزامات
      </Typography>
      <Typography className="mb-40" component="div">
      این مؤلفه به کتابخانه مدیریت تاریخ انتخابی شما متکی است. پشتیبانی می کند{' '}
        <a href="https://date-fns.org/">date-fns</a>,{' '}
        <a href="https://moment.github.io/luxon/">luxon</a>,{' '}
        <a href="https://github.com/iamkun/dayjs">dayjs</a>,{' '}
        <a href="https://momentjs.com/">moment</a> و هر کتابخانه دیگری از طریق یک عمومی{' '}
   رابط <code>dateAdapter</code>.
      </Typography>
      <Typography className="mb-40" component="div">
      لطفاً هر یک از این کتابخانه ها را نصب کنید و موتور تاریخ مناسب را با قرار دادن روت خود راه اندازی کنید
(یا بالاترین سطحی که می‌خواهید انتخاب‌کننده‌ها در دسترس باشند) با{' '} <code>LocalizationProvider</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
// or @mui/lab/Adapter{DayJS,Luxon,Moment} or any valid date-io adapter
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>...</LocalizationProvider>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic usage-استفاده اساسی
      </Typography>
      <Typography className="mb-40" component="div">
      انتخابگر تاریخ به عنوان یک گفتگوی معین در تلفن همراه و یک جعبه متن با یک پنجره بازشو در دسکتاپ ارائه می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTimePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/BasicTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/BasicTimePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Static mode-حالت استاتیک
      </Typography>
      <Typography className="mb-40" component="div">
      ارائه هر زمان انتخابگر به صورت درون خطی امکان پذیر است. این امکان ساخت ظروف popover/modal سفارشی را فراهم می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StaticTimePickerDemo.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/StaticTimePickerDemo.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/StaticTimePickerDemo.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsiveness
      </Typography>
      <Typography className="mb-40" component="div">
      جزء انتخابگر زمان برای دستگاهی که روی آن اجرا می شود طراحی و بهینه شده است.
      </Typography>
      <ul>
        <li>
          The <code>MobileTimePicker</code> component works best for touch devices and small
          screens.
        </li>
        <li>
          The <code>DesktopTimePicker</code> component works best for mouse devices and large
          screens.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      به‌طور پیش‌فرض، مؤلفه <code>TimePicker</code> نسخه دسک‌تاپ را در صورت درخواست رسانه ارائه می‌کند.{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer">
          <code>@media (pointer: fine)</code>
        </a>{' '}
        این را می توان با پایه <code>desktopModeMediaQuery</code> سفارشی کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveTimePickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/ResponsiveTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/ResponsiveTimePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form props
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه انتخابگر زمان می تواند غیرفعال یا فقط خواندنی باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormPropsTimePickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/FormPropsTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/FormPropsTimePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Localization-بومی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      از <code>LocalizationProvider</code> برای تغییر زبان موتور تاریخ که برای
رندر انتخابگر زمان انتخابگر زمان به طور خودکار با تنظیم زمان محلی تنظیم می شود، یعنی قالب 12 ساعته یا 24 ساعته. این را می توان با پایه    <code>ampm</code>{' '} کنترل کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LocalizedTimePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/LocalizedTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/LocalizedTimePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Time validation-اعتبار سنجی زمانی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TimeValidationTimePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/TimeValidationTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/TimeValidationTimePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Landscape
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StaticTimePickerLandscape.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/StaticTimePickerLandscape.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/StaticTimePickerLandscape.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sub-components-اجزای فرعی
      </Typography>
      <Typography className="mb-40" component="div">
      برخی از اجزای فرعی سطح پایین (<code>ClockPicker</code>) نیز صادر می شوند. اینها بدون پوشش یا منطق بیرونی (ورودی ماسک شده، تجزیه مقادیر تاریخ و اعتبارسنجی، و غیره) ارائه می شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SubComponentsTimePickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/SubComponentsTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/SubComponentsTimePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Seconds-ثانیه ها
      </Typography>
      <Typography className="mb-40" component="div">
      از ورودی ثانیه می توان برای انتخاب یک نقطه زمانی دقیق استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SecondsTimePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/SecondsTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/SecondsTimePicker.js')}
        />
      </Typography>
    </>
  );
}

export default TimePickerDoc;
