import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DividersDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/dividers"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Divider-تقسیم کننده
      </Typography>
      <Typography className="description">
      تقسیم‌کننده خط باریکی است که محتوا را در فهرست‌ها و طرح‌بندی‌ها گروه‌بندی می‌کند.
      </Typography>

      <Typography className="mb-40" component="div">
      تقسیم‌کننده‌ها محتوا را به گروه‌های واضح جدا می‌کنند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        List dividers-تقسیم کننده های لیست
      </Typography>
      <Typography className="mb-40" component="div">
      تقسیم کننده به طور پیش فرض به صورت <code>{`<hr>`}</code> ارائه می شود. می‌توانید رندر این عنصر DOM را با استفاده از پایه <code>divider</code> در مولفه <code>ListItem</code> ذخیره کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ListDividers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/ListDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/ListDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        HTML5 specification-مشخصات HTML5
      </Typography>
      <Typography className="mb-40" component="div">
      در یک لیست، باید مطمئن شوید که <code>Divider</code> به صورت{' '}<code>{`<li>`}</code> برای مطابقت با مشخصات HTML5 ارائه شده است. مثال های زیر دو راه برای دستیابی به این هدف را نشان می دهد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Inset dividers-تقسیم کننده های داخلی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InsetDividers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/InsetDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/InsetDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Subheader dividers-تقسیم کننده های سرفصل
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SubheaderDividers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/SubheaderDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/SubheaderDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Middle divider-تقسیم کننده وسط
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MiddleDividers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/MiddleDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/MiddleDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dividers with text-تقسیم کننده با متن
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می توانید یک تقسیم کننده را با محتوا ارائه دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DividerText.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/DividerText.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/DividerText.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Vertical divider-تقسیم کننده عمودی
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می‌توانید با استفاده از پایه <code>orientation</code> یک تقسیم‌کننده را به صورت عمودی رندر کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalDividers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/VerticalDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/VerticalDividers.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
        به استفاده از پایه <code>flexItem</code> برای قرار دادن ظرف فلکس توجه کنید.
        </Typography>
      </blockquote>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Vertical with variant middle-عمودی با وسط متغیر
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می توانید یک تقسیم کننده عمودی را با <code>variant="middle"</code> رندر کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalDividerMiddle.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/VerticalDividerMiddle.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/VerticalDividerMiddle.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Vertical with text-عمودی با متن
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می توانید یک تقسیم کننده عمودی را با محتوا ارائه دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalDividerText.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/VerticalDividerText.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/VerticalDividerText.js')}
        />
      </Typography>
    </>
  );
}

export default DividersDoc;
