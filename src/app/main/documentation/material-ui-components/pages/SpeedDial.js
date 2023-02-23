import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SpeedDialDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/speed-dial"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Speed Dial-شماره گیری سریع
      </Typography>
      <Typography className="description">
      هنگامی که فشار داده می شود، یک دکمه اکشن شناور می تواند سه تا شش عملکرد مرتبط را در قالب یک شماره گیری سریع نمایش دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      اگر بیش از شش اقدام مورد نیاز است، باید از چیزی غیر از FAB برای ارائه آنها استفاده شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic speed dial-شماره گیری سریع اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه اکشن شناور می تواند اقدامات مرتبط را نمایش دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicSpeedDial.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/speed-dial/BasicSpeedDial.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/speed-dial/BasicSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Playground-زمین بازی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PlaygroundSpeedDial.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/speed-dial/PlaygroundSpeedDial.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/speed-dial/PlaygroundSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      شماره گیری سریع کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      وضعیت باز بودن کامپوننت را می توان با <code>open</code> کنترل کرد.
   قطعات <code>onOpen</code>/<code>onClose</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledOpenSpeedDial.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/speed-dial/ControlledOpenSpeedDial.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/speed-dial/ControlledOpenSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom close icon-نماد بستن سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید با استفاده از <code>icon</code>{' '} و <code>openIcon</code> از مؤلفه <code>SpeedDialIcon</code>، یک نماد جایگزین برای حالت‌های بسته و باز ارائه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OpenIconSpeedDial.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/speed-dial/OpenIconSpeedDial.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/speed-dial/OpenIconSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Persistent action tooltips-نکات ابزار عمل مداوم
      </Typography>
      <Typography className="mb-40" component="div">
      نکات ابزار SpeedDialActions را می‌توان به‌طور مداوم نمایش داد تا کاربران مجبور نباشند برای دیدن راهنمای ابزار در دستگاه‌های لمسی، آن را به مدت طولانی فشار دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا در همه دستگاه‌ها برای اهداف نمایشی فعال است، اما در تولید می‌تواند از منطق{' '} <code>isTouch</code> برای تنظیم مشروط پایه استفاده کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpeedDialTooltipOpen.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/speed-dial/SpeedDialTooltipOpen.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/speed-dial/SpeedDialTooltipOpen.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility-دسترسی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      ضروری
      </Typography>
      <ul>
        <li>
          You should provide an <code>ariaLabel</code> for the speed dial component.
        </li>
        <li>
          You should provide a <code>tooltipTitle</code> for each speed dial action.
        </li>
      </ul>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      ارائه شده است
      </Typography>
      <ul>
        <li>
          The Fab has <code>aria-haspopup</code>, <code>aria-expanded</code> and{' '}
          <code>aria-controls</code> attributes.
        </li>
        <li>
          The speed dial actions container has <code>role="menu"</code> and{' '}
          <code>aria-orientation</code> set according to the direction.
        </li>
        <li>
          The speed dial actions have <code>role="menuitem"</code>, and an{' '}
          <code>aria-describedby</code> attribute that references the associated tooltip.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      صفحه کلید
      </Typography>
      <ul>
        <li>The speed dial opens on focus.</li>
        <li>
          The Space and Enter keys trigger the selected speed dial action, and toggle the speed dial
          open state.
        </li>
        <li>
          The cursor keys move focus to the next or previous speed dial action. (Note that any
          cursor direction can be used initially to open the speed dial. This enables the expected
          behavior for the actual or perceived orientation of the speed dial, for example for a
          screen reader user who perceives the speed dial as a drop-down menu.)
        </li>
        <li>
          The Escape key closes the speed dial and, if a speed dial action was focused, returns
          focus to the Fab.
        </li>
      </ul>
    </>
  );
}

export default SpeedDialDoc;
