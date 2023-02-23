import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function RadioButtonsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/radio-buttons"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Radio-رادیو
      </Typography>
      <Typography className="description">
      دکمه های رادیویی به کاربر این امکان را می دهند که یک گزینه را از یک مجموعه انتخاب کند.
      </Typography>

      <Typography className="mb-40" component="div">
      زمانی که کاربر نیاز دارد همه گزینه های موجود را ببیند از دکمه های رادیویی استفاده کنید. اگر گزینه‌های موجود را می‌توان جمع کرد، از <a href="/components/selects/">Select component </a> استفاده کنید زیرا فضای کمتری مصرف می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه های رادیویی باید به طور پیش فرض دارای پرکاربردترین گزینه باشند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Radio group-گروه رادیویی
      </Typography>
      <Typography className="mb-40" component="div">
      <code>RadioGroup</code> یک بسته‌بندی مفید است که برای گروه‌بندی اجزای <code>Radio</code> استفاده می‌شود که یک API آسان‌تر و دسترسی مناسب صفحه‌کلید را برای گروه فراهم می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RadioButtonsGroup.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/RadioButtonsGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/RadioButtonsGroup.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      جهت
      </Typography>
      <Typography className="mb-40" component="div">
      برای چیدمان افقی دکمه ها، پایه <code>row</code> را تنظیم کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RowRadioButtonsGroup.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/RowRadioButtonsGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/RowRadioButtonsGroup.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Controlled-کنترل شده 
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید رادیو را با عناصر <code>value</code> و <code>onChange</code> کنترل کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledRadioButtonsGroup.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/ControlledRadioButtonsGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/ControlledRadioButtonsGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Standalone radio buttons-دکمه های رادیویی مستقل
      </Typography>
      <Typography className="mb-40" component="div">
        <code>Radio</code> همچنین می تواند به صورت مستقل، بدون پوشش RadioGroup استفاده شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RadioButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/RadioButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/RadioButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سایز
      </Typography>
      <Typography className="mb-40" component="div">
      از پایه <code>size</code> استفاده کنید یا اندازه فونت نمادهای svg را برای تغییر اندازه رادیوها سفارشی کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizeRadioButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/SizeRadioButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/SizeRadioButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorRadioButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/ColorRadioButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/ColorRadioButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Label placement-قرار دادن برچسب
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید محل قرارگیری برچسب را با پایه <code>FormControlLabel</code>{' '} مولفه <code>labelPlacement</code> تغییر دهید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormControlLabelPlacement.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/FormControlLabelPlacement.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/FormControlLabelPlacement.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Show error-نمایش خطا
      </Typography>
      <Typography className="mb-40" component="div">
      به طور کلی، دکمه های رادیویی باید دارای یک مقدار انتخاب شده به طور پیش فرض باشند. اگر اینطور نیست، اگر هنگام ارسال فرم هیچ مقداری انتخاب نشده باشد، می توانید یک خطا نمایش دهید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ErrorRadios.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/ErrorRadios.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/ErrorRadios.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می توانید در این مورد بیشتر بدانید{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedRadios.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/CustomizedRadios.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/CustomizedRadios.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        <code>useRadioGroup</code>
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده سفارشی سازی پیشرفته، یک قلاب <code>useRadioGroup()</code> در معرض دید قرار می گیرد. مقدار متن گروه رادیویی والد را برمی گرداند. جزء رادیو از این قلاب به صورت داخلی استفاده می کند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        API
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import { useRadioGroup } from '@mui/material/RadioGroup';
`}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Returns
      </Typography>
      <Typography className="mb-40" component="div">
        <code>value</code> (<em>object</em>):
      </Typography>
      <ul>
        <li>
          <code>value.name</code> (<em>string</em> [optional]): The name used to reference the value
          of the control.
        </li>
        <li>
          <code>value.onChange</code> (<em>func</em> [optional]): Callback fired when a radio button
          is selected.
        </li>
        <li>
          <code>value.value</code> (<em>any</em> [optional]): Value of the selected radio button.
        </li>
      </ul>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        مثال
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseRadioGroup.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/radio-buttons/UseRadioGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/radio-buttons/UseRadioGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چه موقع باید استفاده کرد
      </Typography>
      <ul>
        <li>
          <a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/">
            Checkboxes vs. Radio Buttons
          </a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#radiobutton">
          https://www.w3.org/TR/wai-aria-practices/#radiobutton
        </a>
        )
      </Typography>
      <ul>
        <li>
          All form controls should have labels, and this includes radio buttons, checkboxes, and
          switches. In most cases, this is done by using the <code>{`<label>`}</code> element (
          <a href="/api/form-control-label/">FormControlLabel</a>).
        </li>
        <li>
          When a label can&#39;t be used, it&#39;s necessary to add an attribute directly to the
          input component. In this case, you can apply the additional attribute (e.g.{' '}
          <code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code>) via the{' '}
          <code>inputProps</code> property.
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Radio
  value="radioA"
  inputProps={{
    'aria-label': 'Radio A',

/>
`}
      </FuseHighlight>
    </>
  );
}

export default RadioButtonsDoc;
