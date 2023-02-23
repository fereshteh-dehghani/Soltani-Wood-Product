import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PopoverDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/popover"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Popover-پاپاور
      </Typography>
      <Typography className="description">
      از Popover می توان برای نمایش برخی از محتواها روی دیگری استفاده کرد.
      </Typography>

      <Typography className="mb-40" component="div">
      نکاتی که باید هنگام استفاده از مؤلفه <code>Popover</code> بدانید:
      </Typography>
      <ul>
        <li>
          The component is built on top of the{' '}
          <a href="/components/modal/">
            <code>Modal</code>
          </a>{' '}
          component.
        </li>
        <li>
          The scroll and click away are blocked unlike with the{' '}
          <a href="/components/popper/">
            <code>Popper</code>
          </a>{' '}
          component.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic Popover-پاپوور پایه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicPopover.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popover/BasicPopover.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popover/BasicPopover.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Anchor playground-زمین بازی لنگر
      </Typography>
      <Typography className="mb-40" component="div">
      از دکمه های رادیویی برای تنظیم موقعیت های <code>anchorOrigin</code> و{' '} <code>transformOrigin</code> استفاده کنید. همچنین می‌توانید <code>anchorReference</code> را روی{' '} <code>anchorPosition</code> یا <code>anchorEl</code> تنظیم کنید. وقتی <code>anchorPosition</code> باشد، جزء به جای <code>anchorEl</code> به {' '}
      پایه <code>anchorPosition</code> که می توانید برای تنظیم موقعیت پاپاور تنظیم کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AnchorPlayground.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popover/AnchorPlayground.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popover/AnchorPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Mouse over interaction-ماوس بیش از تعامل
      </Typography>
      <Typography className="mb-40" component="div">
      این نسخه نمایشی نحوه استفاده از مولفه <code>Popover</code> و رویداد mouseover را برای دستیابی به رفتار popover نشان می‌دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MouseOverPopover.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popover/MouseOverPopover.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popover/MouseOverPopover.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complementary projects-پروژه های تکمیلی
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده پیشرفته تر، ممکن است بتوانید از مزایای زیر استفاده کنید:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        PopupState helper-کمک کننده PopupState
      </Typography>
      <Typography className="mb-40" component="div">
      یک بسته شخص ثالث وجود دارد{' '}
        <a href="https://github.com/jcoreio/material-ui-popup-state">
          <code>material-ui-popup-state</code>
        </a>{' '}
        که در اکثر موارد از ایالت پاپاور برای شما مراقبت می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PopoverPopupState.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popover/PopoverPopupState.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popover/PopoverPopupState.js')}
        />
      </Typography>
    </>
  );
}

export default PopoverDoc;
