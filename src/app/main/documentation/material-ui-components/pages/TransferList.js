import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TransferListDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/transfer-list"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      لیست انتقال
      </Typography>
      <Typography className="description">
      یک لیست انتقال (یا "شاتل") به کاربر امکان می دهد یک یا چند مورد لیست را بین لیست ها جابجا کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لیست انتقال اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      برای کامل‌تر شدن، این مثال شامل دکمه‌هایی برای «حرکت همه» است، اما هر فهرست انتقالی به این موارد نیاز ندارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransferList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transfer-list/TransferList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transfer-list/TransferList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لیست انتقال پیشرفته
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال دکمه های "حرکت همه" را با کادر چک "انتخاب همه / انتخاب هیچ" مبادله می کند و یک شمارنده اضافه می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectAllTransferList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transfer-list/SelectAllTransferList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transfer-list/SelectAllTransferList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدودیت ها
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت با چند محدودیت همراه است:      </Typography>
      <ul>
        <li>
          It only works on desktop. If you have a limited amount of options to select, prefer the{' '}
          <a href="/components/autocomplete/#multiple-values">Autocomplete</a> component. If mobile
          support is important for you, have a look at{' '}
          <a href="https://github.com/mui/material-ui/issues/27579">#27579</a>.
        </li>
        <li>
          There are no high-level components exported from npm. The demos are based on composition.
          If this is important for you, have a look at{' '}
          <a href="https://github.com/mui/material-ui/issues/27579">#27579</a>.
        </li>
      </ul>
    </>
  );
}

export default TransferListDoc;
