import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ButtonGroupDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/button-group"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Button group-گروه دکمه
      </Typography>
      <Typography className="description">
      جزء ButtonGroup را می توان برای گروه بندی دکمه های مرتبط استفاده کرد.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گروه دکمه های پایه
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌ها را می‌توان با قرار دادن آنها با مؤلفه <code>ButtonGroup</code> گروه‌بندی کرد. آن‌ها باید بچه‌های فوری باشند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicButtonGroup.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/BasicButtonGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/BasicButtonGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Button variants-انواع دکمه ها
      </Typography>
      <Typography className="mb-40" component="div">
      همه انواع دکمه های استاندارد پشتیبانی می شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariantButtonGroup.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/VariantButtonGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/VariantButtonGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اندازه ها و رنگ ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای کنترل ظاهر گروه دکمه می توان از عناصر <code>size</code> و <code>color</code> استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GroupSizesColors.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/GroupSizesColors.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/GroupSizesColors.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گروه عمودی
      </Typography>
      <Typography className="mb-40" component="div">
      گروه دکمه را می توان به صورت عمودی با استفاده از پایه <code>orientation</code> نمایش داد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GroupOrientation.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/GroupOrientation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/GroupOrientation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه تقسیم
      </Typography>
      <Typography className="mb-40" component="div">
      <code>ButtonGroup</code> همچنین می تواند برای ایجاد یک دکمه تقسیم استفاده شود. منوی کشویی می تواند عملکرد دکمه را تغییر دهد (مانند این مثال) یا برای شروع فوری یک عمل مرتبط استفاده شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SplitButton.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/SplitButton.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/SplitButton.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Disabled elevation
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید ارتفاع را با پایه <code>disableElevation</code> حذف کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisableElevation.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/button-group/DisableElevation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/DisableElevation.js')}
        />
      </Typography>
    </>
  );
}

export default ButtonGroupDoc;
