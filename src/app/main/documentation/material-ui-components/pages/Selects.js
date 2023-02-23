import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SelectsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/selects"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Select
      </Typography>
      <Typography className="description">
      اجزای انتخاب شده برای جمع آوری اطلاعات ارائه شده توسط کاربر از لیستی از گزینه ها استفاده می شود.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic select-سلکت اصلی
      </Typography>
      <Typography className="mb-40" component="div">
      منوها در زیر عناصر ساطع کننده خود قرار می گیرند، مگر اینکه نزدیک به پایین درگاه دید باشند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/BasicSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/BasicSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Advanced features-خصوصیات پیشرفته
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه Select قرار است با یک عنصر بومی <code>{`<select>`}</code>{' '} قابل تعویض باشد.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر به دنبال ویژگی های پیشرفته تری هستید، مانند جعبه ترکیبی، انتخاب چندگانه، تکمیل خودکار، غیر همگام سازی یا پشتیبانی قابل ایجاد، به آدرس زیر مراجعه کنید.{' '}
        <a href="/components/autocomplete/">
          <code>Autocomplete</code> component
        </a>
        .این برنامه نسخه بهبودیافته ای از &laquo;react-select&raquo; و &laquo;downshift&raquo; بسته ها
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Props-لوازم جانبی
      </Typography>
      <Typography className="mb-40" component="div">
        The Select component is implemented as a custom <code>{`<input>`}</code> element of the{' '}
        <a href="/api/input-base/">InputBase</a>. It extends the{' '}
        <a href="/components/text-fields/">text field components</a> sub-components, either the{' '}
        <a href="/api/outlined-input/">OutlinedInput</a>, <a href="/api/input/">Input</a>, or{' '}
        <a href="/api/filled-input/">FilledInput</a>, depending on the variant selected. It shares
        the same styles and many of the same props. Refer to the respective component&#39;s API page
        for details.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Filled and standard variants-انواع پر شده و استاندارد
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectVariants.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectVariants.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectVariants.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Labels and helper text-برچسب ها و متن کمکی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectLabels.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectLabels.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectLabels.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠ توجه داشته باشید که هنگام استفاده از FormControl با نوع مشخص شده Select، باید یک برچسب در دو مکان ارائه دهید: در مؤلفه InputLabel و در قسمت <code>label</code>{' '} قسمت Select (به قسمت Select مراجعه کنید. نسخه نمایشی بالا).
        </Typography>
      </blockquote>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Auto width-عرض خودکار
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectAutoWidth.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectAutoWidth.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectAutoWidth.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Other props-وسایل دیگر
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectOtherProps.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectOtherProps.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectOtherProps.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Native select-انتخاب بومی
      </Typography>
      <Typography className="mb-40" component="div">
      از آنجایی که می‌توان تجربه کاربر را در تلفن همراه با استفاده از انتخاب بومی پلتفرم بهبود بخشید، ما چنین الگویی را مجاز می‌کنیم.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NativeSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/NativeSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/NativeSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        TextField
      </Typography>
      <Typography className="mb-40" component="div">
      جزء بسته بندی <code>TextField</code> یک کنترل فرم کامل شامل برچسب، ورودی و متن راهنما است. با انتخاب حالت می توانید مثالی بیابید{' '}
        <a href="/components/text-fields/#select">in this section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می توانید در این مورد بیشتر بدانید{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        The first step is to style the <code>InputBase</code> component. Once it&#39;s styled, you
        can either use it directly as a text field or provide it to the select <code>input</code>{' '}
        prop to have a <code>select</code> field. Notice that the <code>"standard"</code> variant is
        easier to customize, since it does not wrap the contents in a <code>fieldset</code>/
        <code>legend</code> markup.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSelects.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/CustomizedSelects.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/CustomizedSelects.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 اگر به دنبال الهام هستید، می توانید بررسی کنید{' '}
        <a href="https://mui-treasury.com/styles/select/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Multiple select-انتخاب چندگانه
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه <code>Select</code> می تواند چندین انتخاب را مدیریت کند. این با پایه{' '} <code>multiple</code> فعال می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      مانند انتخاب واحد، می توانید مقدار جدید را با دسترسی به{' '} <code>event.target.value</code> در پاسخ تماس <code>onChange</code> بیرون بکشید. همیشه یک آرایه است.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      پیش فرض
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelect.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Checkmarks-علامت های چک
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectCheckmarks.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectCheckmarks.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectCheckmarks.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Chip-تراشه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectChip.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectChip.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectChip.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Placeholder
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectPlaceholder.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectPlaceholder.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectPlaceholder.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Native-بومی  
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectNative.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectNative.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectNative.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlling the open state-کنترل حالت باز
      </Typography>
      <Typography className="mb-40" component="div">
      شما می توانید وضعیت باز انتخاب را با پایه <code>open</code> کنترل کنید. همچنین می‌توان وضعیت باز اولیه (غیر کنترل نشده) کامپوننت را با{' '}
        <code>defaultOpen</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledOpenSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/ControlledOpenSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/ControlledOpenSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        With a dialog-با دیالوگ
      </Typography>
      <Typography className="mb-40" component="div">
      در حالی که دستورالعمل‌های طراحی متریال دلسرد می‌شوند، می‌توانید از یک انتخاب در یک گفتگو استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DialogSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/DialogSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/DialogSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Grouping-گروه بندی
      </Typography>
      <Typography className="mb-40" component="div">
      دسته‌ها را با مؤلفه <code>ListSubheader</code> یا عنصر بومی{' '} <code>{`<optgroup>`}</code> نمایش دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GroupedSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/GroupedSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/GroupedSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      برای برچسب گذاری مناسب ورودی <code>Select</code> خود، به یک عنصر اضافی با یک{' '}<code>id</code> نیاز دارید که حاوی یک برچسب باشد. آن <code>id</code> باید با{' '} مطابقت داشته باشد
      <code>labelId</code> از <code>Select</code> به عنوان مثال.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      یا یک <code>TextField</code> با <code>id</code> و <code>label</code>{' '}نشانه‌گذاری و شناسه مناسب را برای شما ایجاد می‌کند:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TextField id="select" label="Age" value="20" select>
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</TextField>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        For a <a href="#native-select">native select</a>, you should mention a label by giving the
        value of the <code>id</code> attribute of the select element to the <code>InputLabel</code>
        &#39;s <code>htmlFor</code> attribute:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel htmlFor="select">Age</InputLabel>
<NativeSelect id="select">
  <option value="10">Ten</option>
  <option value="20">Twenty</option>
</NativeSelect>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بی استایل
      </Typography>
      <Typography className="mb-40" component="div">
      Select همچنین با یک نسخه بدون استایل ارائه می شود. این برای انجام سفارشی سازی های سنگین و به حداقل رساندن اندازه بسته ایده آل است.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Unstyled component-جزء بدون استایل
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import SelectUnstyled from '@mui/base/SelectUnstyled';
`}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      استفاده اساسی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectSimple.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectSimple.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectSimple.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      <code>SelectUnstyled</code> مؤلفه ای است که پروپوزال های عمومی را می پذیرد. به دلیل محدودیت‌های Typescript، این ممکن است باعث ایجاد رفتار غیرمنتظره‌ای در هنگام قرار دادن مؤلفه در{' '} <code>forwardRef</code> (یا سایر مؤلفه‌های مرتبه بالاتر) شود. در چنین مواردی، آرگومان عمومی به صورت پیش‌فرض به <code>unknown</code> و پیشنهادات نوع ناقص خواهد بود.
      برای جلوگیری از این امر، مولفه به دست آمده را به صورت دستی به نوع درست ریخته (همانطور که در بالا نشان داده شده است).
      </Typography>
      <Typography className="mb-40" component="div">
      بقیه دموهای زیر برای اختصار از <code>forwardRef</code> استفاده نمی کنند.
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      انتخاب کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      SelectUnstyled را می توان به عنوان کامپوننت کنترل نشده (همانطور که در دمو بالا نشان داده شده است) یا به عنوان جزء کنترل شده استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectControlled.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectControlled.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectControlled.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Usage with object values-استفاده با مقادیر شی
      </Typography>
      <Typography className="mb-40" component="div">
      انتخاب بدون استایل ممکن است با مقادیر غیر رشته ای استفاده شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectObjectValues.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectObjectValues.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectObjectValues.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Customizing the selected value appearance-سفارشی کردن ظاهر مقدار انتخاب شده
      </Typography>
      <Typography className="mb-40" component="div">
      امکان سفارشی کردن نمایش مقدار انتخاب شده با ارائه یک تابع به{' '} <code>renderValue</code> وجود دارد. عنصر برگردانده شده توسط این تابع در داخل دکمه انتخاب نمایش داده می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectCustomRenderValue.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectCustomRenderValue.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectCustomRenderValue.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Customizing the options&#39; appearance-سفارشی کردن گزینه ها و ظاهر
      </Typography>
      <Typography className="mb-40" component="div">
      گزینه ها نباید رشته های ساده باشند. می‌توانید عناصر سفارشی را در داخل جعبه فهرست قرار دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectRichOptions.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectRichOptions.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectRichOptions.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Grouping-گروه بندی
      </Typography>
      <Typography className="mb-40" component="div">
      گزینه ها را می توان گروه بندی کرد، مشابه نحوه عملکرد عنصر بومی <code>select</code>. با این حال، برخلاف <code>select</code> بومی، گروه‌ها را می‌توان تودرتو کرد
      </Typography>
      <Typography className="mb-40" component="div">
      اجزای <code>Option</code> را در داخل <code>OptionGroup</code> قرار دهید تا به این هدف برسید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectGrouping.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectGrouping.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectGrouping.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Multiselect-چند انتخابی
      </Typography>
      <Typography className="mb-40" component="div">
      برای اینکه بتوانید چندین گزینه را همزمان انتخاب کنید، از مؤلفه <code>MultiSelectUnstyled</code>{' '} استفاده کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { MultiSelectUnstyled } from '@mui/base/SelectUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectMultiple.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectMultiple.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectMultiple.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        useSelect hook
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { useSelect } from '@mui/base/SelectUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        If you need to use Select&#39;s functionality in another component, you can use the{' '}
        <code>useSelect</code> hook. It enables maximal customizability at the cost of being
        low-level.
      </Typography>
      <Typography className="mb-40" component="div">
      مثال زیر انتخابی را نشان می‌دهد که با نگه داشتن ماوس روی یا فوکوس باز می‌شود. می توان آن را با ماوس/لمسی یا صفحه کلید کنترل کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UseSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UseSelect.js')}
        />
      </Typography>
    </>
  );
}

export default SelectsDoc;
