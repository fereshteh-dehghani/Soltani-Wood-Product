import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SwitchesDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/switches"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Switch-سوییچ
      </Typography>
      <Typography className="description">
      سوئیچ ها وضعیت یک تنظیم را روشن یا خاموش می کنند.
      </Typography>

      <Typography className="mb-40" component="div">
      سوئیچ ها روش ترجیحی برای تنظیم تنظیمات در تلفن همراه هستند. گزینه ای که سوئیچ کنترل می کند، و همچنین وضعیتی که در آن قرار دارد، باید از برچسب درون خطی مربوطه مشخص شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سوئیچ های اصلی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicSwitches.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/BasicSwitches.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/BasicSwitches.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      برچسب
      </Typography>
      <Typography className="mb-40" component="div">
      به لطف مؤلفه{' '} <code>FormControlLabel</code> می‌توانید برای <code>Switch</code> یک برچسب ارائه دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwitchLabels.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/SwitchLabels.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/SwitchLabels.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سایز
      </Typography>
      <Typography className="mb-40" component="div">
      برای تغییر اندازه سوئیچ از پایه <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwitchesSize.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/SwitchesSize.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/SwitchesSize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorSwitches.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/ColorSwitches.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/ColorSwitches.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlled
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید سوئیچ را با عناصر <code>checked</code> و <code>onChange</code> کنترل کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledSwitches.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/ControlledSwitches.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/ControlledSwitches.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Switches with FormGroup
      </Typography>
      <Typography className="mb-40" component="div">
      <code>FormGroup</code> یک بسته بندی مفید است که برای گروه بندی اجزای کنترل انتخاب استفاده می شود که API آسان تری را ارائه می دهد. با این حال، شما تشویق به استفاده از{' '}
        <a href="/components/checkboxes/">Checkboxes</a> در عوض اگر چندین کنترل مرتبط مورد نیاز است، (See: <a href="#when-to-use">When to use</a>).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwitchesGroup.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/SwitchesGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/SwitchesGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می توانید در این مورد بیشتر بدانید{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSwitches.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/CustomizedSwitches.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/CustomizedSwitches.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/switch/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled-بی استایل
      </Typography>
      <Typography className="mb-40" component="div">
      سوئیچ همچنین با یک نسخه بدون استایل ارائه می شود. این برای انجام سفارشی سازی های سنگین و به حداقل رساندن اندازه بسته ایده آل است.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Unstyled component-جزء بدون استایل
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import SwitchUnstyled from '@mui/base/SwitchUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      مؤلفه <code>SwitchUnstyled</code> مؤلفه‌های پیش‌فرض را ارائه می‌کند و کلاس‌های CSS را به شما اختصاص می‌دهد که می‌توانید به‌طور کامل به تنهایی به آن استایل بدهید. شما در انتخاب هر راه حل یک ظاهر طراحی شده آزاد هستید -
  کلاس‌های CSS ساده، چارچوب CSS، Emotion و غیره. همچنین می‌توان این مؤلفه‌های پیش‌فرض را با سایر عناصر HTML یا مؤلفه‌های سفارشی جایگزین کرد.
      </Typography>
      <Typography className="mb-40" component="div">
      سه مؤلفه وجود دارد که می‌توانید توسط پایه <code>components</code> نادیده بگیرید:{' '}
        <code>Root</code>, <code>Thumb</code> and <code>Input</code>. هر یک از props را می توان با استفاده از شی <code>componentsProps</code> تنظیم کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSwitches.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/UnstyledSwitches.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/UnstyledSwitches.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        useSwitch hook-استفاده از قلاب سوئیچ
      </Typography>
      <Typography className="mb-40" component="div">
      برای سفارشی‌سازی نهایی، یک قلاب <code>useSwitch</code> در دسترس است. تقریباً همان گزینه‌های مؤلفه SwitchUnstyled منهای <code>component</code> را می‌پذیرد،{' '}
      قطعات <code>components</code> و <code>componentsProps</code>.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import { useSwitch } from '@mui/base/SwitchUnstyled';
`}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Basic example-مثال اساسی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseSwitchesBasic.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/UseSwitchesBasic.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/UseSwitchesBasic.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      ظاهر و احساس سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseSwitchesCustom.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/UseSwitchesCustom.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/UseSwitchesCustom.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Label placement-قرار دادن برچسب
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید محل قرارگیری برچسب را تغییر دهید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormControlLabelPosition.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/switches/FormControlLabelPosition.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/switches/FormControlLabelPosition.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چه موقع باید استفاده کرد
      </Typography>
      <ul>
        <li>
          <a href="https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8">
            Checkboxes vs. Switches
          </a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <ul>
        <li>
          It will render an element with the <code>checkbox</code> role not <code>switch</code> role
          since this role isn&#39;t widely supported yet. Please test first if assistive technology
          of your target audience supports this role properly. Then you can change the role with
          <code>{`<Switch inputProps={{ role: 'switch' }}>`}</code>
        </li>
        <li>
          All form controls should have labels, and this includes radio buttons, checkboxes, and
          switches. In most cases, this is done by using the <code>{`<label>`}</code> element (
          <a href="/api/form-control-label/">FormControlLabel</a>).
        </li>
        <li>
          When a label can&#39;t be used, it&#39;s necessary to add an attribute directly to the
          input component. In this case, you can apply the additional attribute (e.g.{' '}
          <code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code>) via the{' '}
          <code>inputProps</code> prop.
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
`}
      </FuseHighlight>
    </>
  );
}

export default SwitchesDoc;
