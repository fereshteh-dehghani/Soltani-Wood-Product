import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DateRangePickerDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/date-range-picker"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Date Range Picker{' '}
        <a href="https://mui.com/store/items/material-ui-pro/">
          <span role="img" title="Enterprise">
            ⚡️
          </span>
        </a>
      </Typography>
      <Typography className="description">
      انتخابگرهای تاریخ به کاربر امکان می دهند محدوده ای از تاریخ ها را انتخاب کند.
      </Typography>

      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ جزء حرفه ای
          <br />
          <br />
          انتخابگر محدوده تاریخ برای MUI X Pro در نظر گرفته شده است، مجموعه ای تجاری از اجزای پیشرفته که بر روی نسخه انجمن (مجوز MIT) ساخته شده است.
          <br />
          <br />
          این برنامه افزودنی پولی شامل اجزای پیشرفته تری خواهد بود (شبکه داده غنی، انتخابگر محدوده تاریخ، کشیدن و رها کردن نمای درختی، و غیره).{' '}
           <a href="https://mui.com/store/items/material-ui-pro/"> Early access</a> با قیمت مقرون به صرفه شروع می شود.   
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
      انتخاب‌کننده‌های محدوده تاریخ به کاربر اجازه می‌دهند محدوده‌ای از تاریخ‌ها را انتخاب کند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      الزامات
      </Typography>
      <Typography className="mb-40" component="div">
      این مؤلفه به کتابخانه مدیریت تاریخ انتخابی شما متکی است. پشتیبانی می کند{' '}
        <a href="https://date-fns.org/">date-fns</a>,{' '}
        <a href="https://moment.github.io/luxon/">luxon</a>,{' '}
        <a href="https://github.com/iamkun/dayjs">dayjs</a>,{' '}
        <a href="https://momentjs.com/">moment</a> و هر کتابخانه دیگری از طریق یک رابط عمومی{' '} <code>dateAdapter</code>.
      </Typography>
      <Typography className="mb-40" component="div">
      لطفاً هر یک از این کتابخانه‌ها را نصب کنید و موتور تاریخ مناسب را با قرار دادن ریشه خود (یا بالاترین سطحی که می‌خواهید انتخاب‌کننده‌ها در دسترس باشند) با{' '} تنظیم کنید.
        <code>LocalizationProvider</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
// or @mui/lab/dateAdapter/{dayjs,luxon,moment} or any valid date-io adapter
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function App() {
  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>...</LocalizationProvider>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      استفاده اساسی
      </Typography>
      <Typography className="mb-40" component="div">
      توجه داشته باشید که شما می توانید تقریباً هر پایه ای را از آن عبور دهید<a href="/api/date-picker/">DatePicker</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicDateRangePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/BasicDateRangePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/BasicDateRangePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      حالت استاتیک
      </Typography>
      <Typography className="mb-40" component="div">
      ارائه هر انتخاب کننده به صورت درون خطی امکان پذیر است. این امکان ساخت ظروف popover/modal سفارشی را فراهم می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StaticDateRangePickerDemo.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/StaticDateRangePickerDemo.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/StaticDateRangePickerDemo.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsiveness
      </Typography>
      <Typography className="mb-40" component="div">
      جزء انتخابگر محدوده تاریخ طوری طراحی شده است که برای دستگاهی که روی آن اجرا می شود بهینه شود.
      </Typography>
      <ul>
        <li>
          The <code>MobileDateRangePicker</code> component works best for touch devices and small
          screens.
        </li>
        <li>
          The <code>DesktopDateRangePicker</code> component works best for mouse devices and large
          screens.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        به طور پیش‌فرض، مؤلفه <code>DateRangePicker</code> نسخه دسک‌تاپ را در صورت درخواست رسانه ارائه می‌کند{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer">
       <code>@media (pointer: fine)</code>
        </a>{' '} منطبق است. این را می توان با پایه <code>desktopModeMediaQuery</code> سفارشی کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveDateRangePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/ResponsiveDateRangePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/ResponsiveDateRangePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form props
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه انتخابگر محدوده تاریخ را می توان غیرفعال یا فقط خواندنی کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormPropsDateRangePickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/FormPropsDateRangePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/FormPropsDateRangePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Different number of months-تعداد ماه های مختلف
      </Typography>
      <Typography className="mb-40" component="div">
      توجه داشته باشید که پایه <code>calendars</code> فقط در حالت دسکتاپ کار می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CalendarsDateRangePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/CalendarsDateRangePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/CalendarsDateRangePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Disabling dates-غیرفعال کردن تاریخ ها
      </Typography>
      <Typography className="mb-40" component="div">
      غیرفعال کردن تاریخ ها مانند <code>DatePicker</code> ساده عمل می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MinMaxDateRangePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/MinMaxDateRangePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/MinMaxDateRangePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom input component-جزء ورودی سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید ورودی رندر شده را با پایه <code>renderInput</code> سفارشی کنید. برای{' '}
      <code>DateRangePicker</code> به <strong>2</strong> پارامتر نیاز دارد - به ترتیب برای ورودی شروع و پایان. اگر نیاز به ارائه ورودی های سفارشی دارید، حتماً <code>ref</code>{' '} را پخش کنید
و <code>inputProps</code> را به درستی به اجزای ورودی وارد کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomDateRangeInputs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/CustomDateRangeInputs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/CustomDateRangeInputs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customized day rendering-رندر روز سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      روزهای نمایش داده شده با پایه تابع <code>renderDay</code> قابل تنظیم هستند. می‌توانید از مؤلفه داخلی <a href="/api/date-range-picker-day/">DateRangePickerDay</a>{' '} استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomDateRangePickerDay.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/CustomDateRangePickerDay.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/CustomDateRangePickerDay.js')}
        />
      </Typography>
    </>
  );
}

export default DateRangePickerDoc;
