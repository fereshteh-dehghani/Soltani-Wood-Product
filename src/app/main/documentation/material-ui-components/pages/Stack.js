import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function StackDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/stack"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Stack-پشته
      </Typography>
      <Typography className="description">
      مولفه Stack چیدمان کودکان فوری را در امتداد محور عمودی یا افقی با فاصله اختیاری و/یا تقسیم‌کننده بین هر کودک مدیریت می‌کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Usage-استفاده
      </Typography>
      <Typography className="mb-40" component="div">
        <code>Stack</code> مربوط به طرح‌بندی‌های یک‌بعدی است، در حالی که{' '}
        <a href="/components/grid/">Grid</a>طرح‌بندی‌های دو بعدی را کنترل می‌کند. جهت پیش فرض <code>column</code> است که کودکان را به صورت عمودی روی هم قرار می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicStack.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/stack/BasicStack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/stack/BasicStack.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        To control space between children, use the <code>spacing</code> prop. The spacing value can
        be any number, including decimals and any string. The prop is converted into a CSS property
        using the{' '}
        <a href="/customization/spacing/">
          <code>theme.spacing()</code>
        </a>{' '}
        helper.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Direction-جهت
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، <code>Stack</code> موارد را به صورت عمودی در یک <code>column</code> مرتب می کند. با این حال، سرپ <code>direction</code> را می توان برای قرار دادن موارد به صورت افقی در یک{' '} <code>row</code> نیز استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DirectionStack.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/stack/DirectionStack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/stack/DirectionStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dividers-تقسیم کننده ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای درج یک عنصر بین هر فرزند از پایه <code>divider</code> استفاده کنید. این به ویژه با مؤلفه <a href="/components/dividers/">Divider</a> به خوبی کار می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DividerStack.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/stack/DividerStack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/stack/DividerStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsive values-مقادیر پاسخگو
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید مقادیر <code>direction</code> یا <code>spacing</code> را بر اساس نقطه شکست فعال تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveStack.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/stack/ResponsiveStack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/stack/ResponsiveStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Interactive-در ارتباط بودن
      </Typography>
      <Typography className="mb-40" component="div">
      در زیر یک نسخه نمایشی تعاملی وجود دارد که به شما امکان می دهد نتایج بصری تنظیمات مختلف را بررسی کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InteractiveStack.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/stack/InteractiveStack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/stack/InteractiveStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        System props-لوازم سیستم
      </Typography>
      <Typography className="mb-40" component="div">
      به عنوان یک مؤلفه ابزار CSS، <code>Stack</code> از همه{' '} پشتیبانی می کند
      <a href="/system/properties/"><code>system</code>
      </a>{' '}
      خواص می توانید از آنها به عنوان پایه مستقیماً روی کامپوننت استفاده کنید. به عنوان مثال، یک حاشیه بالا:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Stack mt={2}>
`}
      </FuseHighlight>
    </>
  );
}

export default StackDoc;
