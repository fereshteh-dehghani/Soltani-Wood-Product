import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DatePickerDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/date-picker"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Date Picker-انتخابگر تاریخ
      </Typography>
      <Typography className="description">انتخابگرهای تاریخ به کاربر امکان انتخاب تاریخ را می دهند.</Typography>

      <Typography className="mb-40" component="div">
      انتخابگرهای تاریخ به کاربر امکان انتخاب تاریخ را می دهند. انتخابگرهای تاریخ با:
      </Typography>
      <ul>
        <li>Dialogs on mobile</li>
        <li>Text field dropdowns on desktop</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      الزامات
      </Typography>
      <Typography className="mb-40" component="div">
      این مؤلفه به کتابخانه مدیریت تاریخ انتخابی شما متکی است. پشتیبانی می کند{' '}
        <a href="https://date-fns.org/">date-fns</a>,{' '}
        <a href="https://moment.github.io/luxon/">luxon</a>,{' '}
        <a href="https://github.com/iamkun/dayjs">dayjs</a>,{' '}
        <a href="https://momentjs.com/">moment</a>و هر کتابخانه دیگری از طریق یک عمومی{' '}
         رابط <code>dateAdapter</code>.
      </Typography>
      <Typography className="mb-40" component="div">
      لطفاً هر یک از این کتابخانه‌ها را نصب کنید و موتور تاریخ مناسب را با قرار دادن روت خود (یا بالاترین سطحی که می‌خواهید انتخاب‌کننده‌ها در دسترس باشند) با{' '} تنظیم کنید.
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
      استفاده اساسی
      </Typography>
      <Typography className="mb-40" component="div">
      انتخابگر تاریخ به عنوان یک گفتگوی معین در تلفن همراه و یک جعبه متن با یک پنجره بازشو در دسک تاپ ارائه می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicDatePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/BasicDatePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/BasicDatePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      حالت استاتیک
      </Typography>
      <Typography className="mb-40" component="div">
      رندر کردن هر انتخابگر تاریخ بدون فیلد modal/popover و متن امکان پذیر است. این می تواند در هنگام ساخت ظروف popover/modal سفارشی مفید باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StaticDatePickerDemo.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/StaticDatePickerDemo.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/StaticDatePickerDemo.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsiveness
      </Typography>
      <Typography className="mb-40" component="div">
      جزء انتخابگر تاریخ برای دستگاهی که روی آن اجرا می شود طراحی و بهینه شده است.
      </Typography>
      <ul>
        <li>
          The <code>MobileDatePicker</code> component works best for touch devices and small
          screens.
        </li>
        <li>
          The <code>DesktopDatePicker</code> component works best for mouse devices and large
          screens.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      به‌طور پیش‌فرض، مؤلفه <code>DatePicker</code> نسخه دسک‌تاپ را در صورت درخواست رسانه ارائه می‌کند{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer">
      <code>@media (pointer: fine)</code>
      </a>{' '} منطبق است. این را می توان با پایه <code>desktopModeMediaQuery</code> سفارشی کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveDatePickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/ResponsiveDatePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/ResponsiveDatePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form props
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه انتخابگر تاریخ می تواند غیرفعال یا فقط خواندنی باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormPropsDatePickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/FormPropsDatePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/FormPropsDatePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بومی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      از <code>LocalizationProvider</code> برای تغییر زبان موتور تاریخ که برای ارائه انتخابگر تاریخ استفاده می‌شود، استفاده کنید. در اینجا نمونه ای از تغییر زبان برای آداپتور{' '}<code>date-fns</code> آورده شده است:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LocalizedDatePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/LocalizedDatePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/LocalizedDatePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سامانه تقویم جلالی
      </Typography>
      <Typography className="mb-40" component="div">
      <code>date-fns-translation</code> را نصب کنید و از آداپتور <code>@date-io/date-fns-translation</code> برای پشتیبانی استفاده کنید
      <a href="https://en.wikipedia.org/wiki/Victory_calendar">Jalali calendar</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="JalaliDatePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/JalaliDatePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/JalaliDatePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Views playground
      </Typography>
      <Typography className="mb-40" component="div">
      ترکیب نماهای انتخابی <code>year</code>، <code>month</code> و <code>date</code>{' '} ممکن است. نماها به ترتیبی که در آرایه {' '}<code>views</code> گنجانده شده اند ظاهر می شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ViewsDatePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/ViewsDatePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/ViewsDatePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Landscape orientation
      </Typography>
      <Typography className="mb-40" component="div">
      برای سهولت استفاده، انتخابگر تاریخ به طور خودکار با اشتراک در تغییر <code>window.orientation</code> طرح‌بندی بین عمودی و منظره را تغییر می‌دهد. می‌توانید با استفاده از پایه <code>orientation</code> یک طرح‌بندی خاص را مجبور کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StaticDatePickerLandscape.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/StaticDatePickerLandscape.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/StaticDatePickerLandscape.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اجزای فرعی
      </Typography>
      <Typography className="mb-40" component="div">
      برخی از اجزای فرعی سطح پایین (<code>CalendarPicker</code>، <code>MonthPicker</code>، و{' '} <code>YearPicker</code>) نیز صادر می‌شوند. اینها بدون پوشش یا منطق بیرونی (ورودی ماسک شده، تجزیه مقادیر تاریخ و اعتبارسنجی، و غیره) ارائه می شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SubComponentsPickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/SubComponentsPickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/SubComponentsPickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جزء ورودی سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید رندر ورودی را با پایه <code>renderInput</code> سفارشی کنید. مطمئن شوید که <code>ref</code> و <code>inputProps</code> را به‌درستی در مؤلفه ورودی سفارشی پخش کرده‌اید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomInput.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/CustomInput.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/CustomInput.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      رندر روز سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      روزهای نمایش داده شده با پایه تابع <code>renderDay</code> قابل تنظیم هستند. می‌توانید از مؤلفه <a href="/api/pickers-day/">PickersDay</a> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomDay.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/CustomDay.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/CustomDay.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      داده های پویا
      </Typography>
      <Typography className="mb-40" component="div">
      گاهی اوقات ممکن است لازم باشد اطلاعات اضافی را مستقیماً در تقویم نمایش دهید. در اینجا نمونه‌ای از واکشی و نمایش داده‌های سمت سرور با استفاده از{' '} <code>onMonthChange</code>، <code>loading</code> و <code>renderDay</code> آورده شده است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ServerRequestDatePicker.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/ServerRequestDatePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/ServerRequestDatePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      متن کمکی
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید یک متن کمکی با قالب تاریخ پذیرفته شده نشان دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HelperText.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/HelperText.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/HelperText.js')}
        />
      </Typography>
    </>
  );
}

export default DatePickerDoc;
