import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DateTimePickerDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/date-time-picker"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Date Time Picker-انتخابگر تاریخ
      </Typography>
      <Typography className="description">Combined date & time picker.</Typography>

      <Typography className="mb-40" component="div">
      این مؤلفه تاریخ و amp; انتخاب کنندگان زمان این امکان را به کاربر می دهد تا تاریخ و زمان را با یک کنترل انتخاب کند.
      </Typography>
      <Typography className="mb-40" component="div">
      توجه داشته باشید که این مؤلفه <a href="/components/date-picker/">DatePicker</a> و{' '} است
      <a href="/components/time-picker/">TimePicker</a>
        جزء ترکیب شده است، بنابراین هر یک از این اجزا&#39; props را می توان به DateTimePicker ارسال کرد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      الزامات
      </Typography>
      <Typography className="mb-40" component="div">
        This component relies on the date management library of your choice. It supports{' '}
        <a href="https://date-fns.org/">date-fns</a>,{' '}
        <a href="https://moment.github.io/luxon/">luxon</a>,{' '}
        <a href="https://github.com/iamkun/dayjs">dayjs</a>,{' '}
        <a href="https://momentjs.com/">moment</a> and any other library via a public{' '}
        <code>dateAdapter</code> interface.
      </Typography>
      <Typography className="mb-40" component="div">
      لطفاً هر یک از این کتابخانه‌ها را نصب کنید و موتور تاریخ مناسب را با قرار دادن ریشه خود (یا بالاترین سطحی که می‌خواهید انتخاب‌کننده‌ها در دسترس باشند) با{' '} تنظیم کنید.
      <code>LocalizationProvider</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
// or @mui/lab/Adapter{Dayjs,Luxon,Moment} or any valid date-io adapter
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
      اجازه می دهد تا تاریخ و سپس زمان را انتخاب کنید. 4 مرحله در دسترس است (سال، تاریخ، ساعت و دقیقه)، بنابراین برای تشخیص بصری مراحل تاریخ/زمان، به برگه‌ها نیاز دارید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicDateTimePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/BasicDateTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/BasicDateTimePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsiveness-پاسخگویی
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه <code>DateTimePicker</code> برای دستگاهی که روی آن اجرا می شود طراحی و بهینه شده است.
      </Typography>
      <ul>
        <li>
          The <code>MobileDateTimePicker</code> component works best for touch devices and small
          screens.
        </li>
        <li>
          The <code>DesktopDateTimePicker</code> component works best for mouse devices and large
          screens.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      به‌طور پیش‌فرض، مؤلفه <code>DateTimePicker</code> نسخه دسک‌تاپ را در صورت درخواست رسانه ارائه می‌کند{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer">
       <code>@media (نشانگر: خوب)</code> </a>{' '}
      مسابقات. این را می توان با پایه <code>desktopModeMediaQuery</code> سفارشی کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveDateTimePickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/ResponsiveDateTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/ResponsiveDateTimePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form props
      </Typography>
      <Typography className="mb-40" component="div">
      جزء انتخابگر تاریخ می تواند غیرفعال یا فقط خواندنی باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormPropsDateTimePickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/FormPropsDateTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/FormPropsDateTimePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Date and time validation-اعتبارسنجی تاریخ و زمان
      </Typography>
      <Typography className="mb-40" component="div">
      محدود کردن انتخاب تاریخ و زمان به دو صورت امکان پذیر است:
      </Typography>
      <ul>
        <li>
          by using <code>minDateTime</code>/<code>maxDateTime</code> its possible to restrict time
          selection to before or after a particular moment in time
        </li>
        <li>
          using <code>minTime</code>/<code>maxTime</code>, you can disable selecting times before or
          after a certain time each day respectively
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DateTimeValidation.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/DateTimeValidation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/DateTimeValidation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Static mode-حالت استاتیک
      </Typography>
      <Typography className="mb-40" component="div">
      ارائه هر تاریخی امکان پذیر است و amp; انتخابگر زمان در خط. این امکان ساخت ظروف popover/modal سفارشی را فراهم می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StaticDateTimePickerDemo.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/StaticDateTimePickerDemo.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/StaticDateTimePickerDemo.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از تاریخ بسیار سفارشی شده و &amp; انتخاب کنندگان زمان:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomDateTimePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/CustomDateTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/CustomDateTimePicker.js')}
        />
      </Typography>
    </>
  );
}

export default DateTimePickerDoc;
