import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PickersDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/pickers"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Date / Time pickers
      </Typography>
      <Typography className="description">
      انتخابگرهای تاریخ و انتخابگر زمان امکان انتخاب یک مقدار واحد از یک مجموعه از پیش تعیین شده را می دهند.
      </Typography>

      <ul>
        <li>On mobile, pickers are best suited for display in a confirmation dialog.</li>
        <li>
          For inline display, such as on a form, consider using compact controls such as segmented
          dropdown buttons.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        React components
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MaterialUIPickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pickers/MaterialUIPickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pickers/MaterialUIPickers.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Setup
      </Typography>
      <Typography className="mb-40" component="div">
      شما باید با تنظیم {' '} <code>dateAdapter</code> روی یک آداپتور انتخابی، یک کتابخانه تاریخ تهیه کنید که توسط انتخاب کنندگان استفاده می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      ما در حال حاضر از 4 کتابخانه مختلف تاریخ پشتیبانی می کنیم:
      </Typography>
      <ul>
        <li>
          <a href="https://date-fns.org/">date-fns</a>
        </li>
        <li>
          <a href="https://day.js.org/">Day.js</a>
        </li>
        <li>
          <a href="https://moment.github.io/luxon/#/">Luxon</a>
        </li>
        <li>
          <a href="https://momentjs.com/">Moment.js</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      ابتدا باید بسته آداپتور را برای کتابخانه تاریخ که می خواهید استفاده کنید نصب کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-sh">
        {` 
// date-fns
npm install @date-io/date-fns
// or for Day.js
npm install -s @date-io/dayjs
// or for Luxon
npm install -s @date-io/luxon
// or for Moment.js
npm install @date-io/moment
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      سپس باید پایه <code>dateAdapter</code>{' '} را تنظیم کنید
      بر این اساس <code>LocalizationProvider</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
// date-fns
import DateAdapter from '@mui/lab/AdapterDateFns';
// or for Day.js
import DateAdapter from '@mui/lab/AdapterDayjs';
// or for Luxon
import DateAdapter from '@mui/lab/AdapterLuxon';
// or for Moment.js
import DateAdapter from '@mui/lab/AdapterMoment';

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>{children}</LocalizationProvider>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Native pickers
      </Typography>
      <Typography className="mb-40" component="div">
        ⚠️ کنترل های ورودی بومی توسط مرورگرها پشتیبانی می شود{' '}
        <a href="https://caniuse.com/#feat=input-datetime">isn&#39;t perfect</a>.
      </Typography>
      <Typography className="mb-40" component="div">
      تاریخ اصلی (<code>type="date"</code>)، زمان (<code>type="time"</code>) و تاریخ و زمان ( <code>type="datetime-local"</code >) جمع کننده ها.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NativePickers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pickers/NativePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pickers/NativePickers.js')}
        />
      </Typography>
    </>
  );
}

export default PickersDoc;
