import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function CheckboxesDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/checkboxes"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Checkbox-چک باکس
      </Typography>
      <Typography className="description">
      چک باکس ها به کاربر این امکان را می دهند که یک یا چند مورد را از یک مجموعه انتخاب کند.
      </Typography>

      <Typography className="mb-40" component="div">
      از چک باکس ها می توان برای روشن یا خاموش کردن یک گزینه استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر چندین گزینه در یک لیست ظاهر می‌شوند، می‌توانید با استفاده از کادرهای انتخاب به جای کلیدهای روشن/خاموش، فضا را حفظ کنید. اگر یک گزینه دارید، از استفاده از چک باکس خودداری کنید و به جای آن از کلید روشن/خاموش استفاده کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چک باکس های اساسی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Checkboxes.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/Checkboxes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/Checkboxes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      برچسب
      </Typography>
      <Typography className="mb-40" component="div">
      به لطف مؤلفه{' '}<code>FormControlLabel</code> می‌توانید یک برچسب به <code>Checkbox</code> ارائه دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxLabels.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/CheckboxLabels.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/CheckboxLabels.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اندازه
      </Typography>
      <Typography className="mb-40" component="div">
      از پایه <code>size</code> استفاده کنید یا اندازه فونت نمادهای svg را برای تغییر اندازه چک باکس ها سفارشی کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizeCheckboxes.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/SizeCheckboxes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/SizeCheckboxes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorCheckboxes.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/ColorCheckboxes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/ColorCheckboxes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آیکون
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconCheckboxes.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/IconCheckboxes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/IconCheckboxes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlled-کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید چک باکس را با عناصر <code>برگزیده</code> و <code>onChange</code> کنترل کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledCheckbox.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/ControlledCheckbox.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/ControlledCheckbox.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نامشخص
      </Typography>
      <Typography className="mb-40" component="div">
      یک ورودی چک باکس فقط می‌تواند دو حالت در یک فرم داشته باشد: علامت زده یا بدون علامت. یا ارزش خود را ارائه می دهد یا نمی کند. از نظر بصری، <strong>three</strong> حالت وجود دارد که یک چک باکس می‌تواند در آن باشد: علامت‌گذاری شده، علامت‌گذاری نشده، یا نامشخص.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IndeterminateCheckbox.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/IndeterminateCheckbox.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/IndeterminateCheckbox.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ وقتی نامشخص تنظیم شود، مقدار سرپ <code>checked</code> فقط بر مقادیر ارسالی فرم تأثیر می‌گذارد. هیچ پیامد دسترسی یا UX ندارد.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        FormGroup
      </Typography>
      <Typography className="mb-40" component="div">
        <code>FormGroup</code>یک بسته بندی مفید است که برای گروه بندی اجزای کنترل انتخاب استفاده می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxesGroup.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/CheckboxesGroup.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/CheckboxesGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      قرار دادن برچسب
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
            require('app/main/documentation/material-ui-components/components/checkboxes/FormControlLabelPosition.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/FormControlLabelPosition.js')}
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
          name="CustomizedCheckbox.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/checkboxes/CustomizedCheckbox.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/checkboxes/CustomizedCheckbox.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 اگر به دنبال الهام هستید، می توانید بررسی کنید{' '}
        <a href="https://mui-treasury.com/styles/checkbox/">
          MUI Treasury&#39;s customization examples
        </a>
        .
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
        <li>
          <a href="https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8">
            Checkboxes vs. Switches
          </a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#checkbox">
          https://www.w3.org/TR/wai-aria-practices/#checkbox
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
          <code>inputProps</code> prop.
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Checkbox
  value="checkedA"
  inputProps={{
    'aria-label': 'Checkbox A',

/>
`}
      </FuseHighlight>
    </>
  );
}

export default CheckboxesDoc;
