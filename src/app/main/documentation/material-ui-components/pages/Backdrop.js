import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BackdropDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/backdrop"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Backdrop-پس زمینه
      </Typography>
      <Typography className="description">
      مولفه پس زمینه برای تأکید بر یک عنصر خاص یا بخش هایی از آن استفاده می شود.
      </Typography>

      <Typography className="mb-40" component="div">
      پس زمینه تغییر وضعیت را در برنامه به کاربر سیگنال می دهد و می تواند برای ایجاد لودرها، گفتگوها و موارد دیگر استفاده شود. در ساده‌ترین شکل، مولفه پس‌زمینه یک لایه کم‌نور روی برنامه شما اضافه می‌کند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        مثال
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleBackdrop.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/backdrop/SimpleBackdrop.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/backdrop/SimpleBackdrop.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        بی استایل
      </Typography>
      <Typography className="mb-40" component="div">
      پس زمینه همچنین با بسته پایه ارائه می شود. این برای انجام سفارشی سازی های سنگین و به حداقل رساندن اندازه بسته ایده آل است.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import BackdropUnstyled from '@mui/base/BackdropUnstyled';
`}
      </FuseHighlight>
    </>
  );
}

export default BackdropDoc;
