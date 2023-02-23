import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AutocompleteDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/autocomplete"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      تکمیل خودکار
      </Typography>
      <Typography className="description">
      تکمیل خودکار یک ورودی متن معمولی است که با پانل گزینه های پیشنهادی بهبود یافته است.      </Typography>

      <Typography className="mb-40" component="div">
      ویجت برای تنظیم مقدار یک جعبه متن تک خطی در یکی از دو نوع سناریو مفید است:
      </Typography>
      <ol>
        <li>
          The value for the textbox must be chosen from a predefined set of allowed values, e.g., a
          location field must contain a valid location name: <a href="#combo-box">combo box</a>.
        </li>
        <li>
          The textbox may contain any arbitrary value, but it is advantageous to suggest possible
          values to the user, e.g., a search field may suggest similar or previous searches to save
          the user time: <a href="#free-solo">free solo</a>.
        </li>
      </ol>
      <Typography className="mb-40" component="div">
        It&#39;s meant to be an improved version of the &quot;react-select&quot; and
        &quot;downshift&quot; packages.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Combo box-کامبو باکس 
      </Typography>
      <Typography className="mb-40" component="div">
      مقدار باید از یک مجموعه از پیش تعریف شده از مقادیر مجاز انتخاب شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ComboBox.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/ComboBox.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/ComboBox.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ساختار گزینه ها      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، کامپوننت ساختارهای گزینه های زیر را می پذیرد:      </Typography>

      <FuseHighlight component="pre" className="language-ts">
        {` 
interface AutocompleteOption {
  label: string;
}
// or
type AutocompleteOption = string;
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      برای مثال:      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];
// or
const options = ['The Godfather', 'Pulp Fiction'];
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      با این حال، می توانید با ارائه a از ساختارهای مختلف استفاده کنید <code>getOptionLabel</code> پشتیبانی.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      زمین بازی
      </Typography>
      <Typography className="mb-40" component="div">
      هر یک از مثال های زیر یکی از ویژگی های جزء تکمیل خودکار را نشان می دهد.      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Playground.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Playground.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Playground.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      کشور را انتخاب کنید      </Typography>
      <Typography className="mb-40" component="div">
      یکی از 248 کشور را انتخاب کنید.      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CountrySelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/CountrySelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CountrySelect.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ایالت های کنترل شده      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت دارای دو حالت است که قابل کنترل است:      </Typography>
      <ol>
        <li>
          the &quot;value&quot; state with the <code>value</code>/<code>onChange</code> props
          combination. This state represents the value selected by the user, for instance when
          pressing <kbd className="key">Enter</kbd>.
        </li>
        <li>
          the &quot;input value&quot; state with the <code>inputValue</code>/
          <code>onInputChange</code> props combination. This state represents the value displayed in
          the textbox.
        </li>
      </ol>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ این دو کشور منزوی هستند، باید به طور مستقل کنترل شوند.
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControllableStates.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/ControllableStates.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/ControllableStates.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Free solo-انفرادی رایگان
      </Typography>
      <Typography className="mb-40" component="div">
      تنظیم <code>freeSolo</code> درست است، بنابراین جعبه متن می تواند حاوی هر مقدار دلخواه باشد.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ورودی جستجو
      </Typography>
      <Typography className="mb-40" component="div">
      پایه برای پوشش موارد استفاده اولیه از a طراحی شده است <strong>search input</strong> با پیشنهادات، به عنوان مثال در گوگل جستجو کنید یا واکنش نشان دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FreeSolo.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/FreeSolo.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/FreeSolo.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Creatable-قابل ایجاد
      </Typography>
      <Typography className="mb-40" component="div">
      اگر قصد دارید از این حالت برای یک<a href="#combo-box">combo box</a> مانند تجربه (نسخه بهبود یافته یک عنصر انتخابی) توصیه می کنیم تنظیم کنید:
      </Typography>
      <ul>
        <li>
          <code>selectOnFocus</code> to help the user clear the selected value.
        </li>
        <li>
          <code>clearOnBlur</code> to help the user enter a new value.
        </li>
        <li>
          <code>handleHomeEndKeys</code> to move focus inside the popup with the{' '}
          <kbd className="key">Home</kbd> and <kbd className="key">End</kbd> keys.
        </li>
        <li>
          A last option, for instance: <code>Add "YOUR SEARCH"</code>.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FreeSoloCreateOption.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/FreeSoloCreateOption.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/FreeSoloCreateOption.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می‌توانید زمانی که کاربر می‌خواهد مقدار جدیدی اضافه کند، یک دیالوگ نمایش دهید.      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FreeSoloCreateOptionDialog.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/FreeSoloCreateOptionDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/FreeSoloCreateOptionDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گروه بندی شده است
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید گزینه ها را با <code>groupBy</code> پشتیبانی .اگر این کار را انجام می دهید، مطمئن شوید که گزینه ها نیز با همان بعد دسته بندی شده اند، در غیر این صورت، متوجه هدرهای تکراری خواهید شد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Grouped.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Grouped.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Grouped.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گزینه های غیرفعال      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisabledOptions.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/DisabledOptions.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/DisabledOptions.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        <code>استفاده از تکمیل خودکار</code>
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده سفارشی سازی پیشرفته، یک هدلس <code>useAutocomplete()</code> قلاب آشکار می شود. تقریباً همان گزینه‌هایی را می‌پذیرد که جزء Autocomplete منهای همه موارد مرتبط با رندر JSX هستند. جزء تکمیل خودکار بر روی این قلاب ساخته شده است.
      </Typography>

      <FuseHighlight component="pre" className="language-tsx">
        {` 
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
         <code>useAutocomplete</code> قلاب همچنین برای راحتی از @mui/material دوباره صادر می شود
         و سازگاری با عقب.
      </Typography>

      <FuseHighlight component="pre" className="language-tsx">
        {` 
import useAutocomplete from '@mui/material/useAutocomplete';
`}
      </FuseHighlight>
      <ul>
        <li>
          📦 <a href="/size-snapshot">4.5 kB gzipped</a>.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseAutocomplete.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/UseAutocomplete.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/UseAutocomplete.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Customized hook-قلاب سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedHook.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/CustomizedHook.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CustomizedHook.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      سر به <a href="#customization">customization</a> بخش برای مثال با{' '}
        <code>Autocomplete</code> جزء به جای قلاب
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Asynchronous requests-درخواست های ناهمزمان
      </Typography>
      <Typography className="mb-40" component="div">
      این مؤلفه از دو مورد استفاده ناهمزمان مختلف پشتیبانی می کند:      </Typography>
      <ul>
        <li>
          <a href="#load-on-open">Load on open</a>: it waits for the component to be interacted with
          to load the options.
        </li>
        <li>
          <a href="#search-as-you-type">Search as you type</a>: a new request is made for each
          keystroke.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      بارگذاری در حالت باز
      </Typography>
      <Typography className="mb-40" component="div">
      تا زمانی که درخواست شبکه در انتظار است، وضعیت پیشرفت را نشان می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Asynchronous.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Asynchronous.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Asynchronous.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      همانطور که تایپ می کنید جستجو کنید      </Typography>
      <Typography className="mb-40" component="div">
      اگر منطق شما گزینه‌های جدیدی را در هر ضربه کلید واکشی می‌کند و از مقدار فعلی جعبه متن برای فیلتر کردن سرور استفاده می‌کند، ممکن است بخواهید درخواست‌های throttling را در نظر بگیرید.
      </Typography>
      <Typography className="mb-40" component="div">
      علاوه بر این، باید فیلتر داخلی آن را غیرفعال کنید{' '}
        <code>Autocomplete</code> جزء با نادیده گرفتن <code>filterOptions</code> تکیه گاه:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Autocomplete filterOptions={(x) => x} />
`}
      </FuseHighlight>
     {/*  <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Google Maps place
      </Typography>
      <Typography className="mb-40" component="div">
        A customized UI for Google Maps Places Autocomplete. For this demo, we need to load the{' '}
        <a href="https://developers.google.com/maps/documentation/javascript/overview">
          Google Maps JavaScript
        </a>{' '}
        and{' '}
        <a href="https://developers.google.com/maps/documentation/places/web-service/overview">
          Google Places
        </a>{' '}
        API.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GoogleMaps.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/GoogleMaps.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/GoogleMaps.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ Before you can start using the Google Maps JavaScript API and Places API, you must sign
          up and create a billing account.
        </Typography>
      </blockquote> */}
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مقادیر چندگانه      </Typography>
      <Typography className="mb-40" component="div">
      همچنین به عنوان برچسب شناخته می شود، کاربر مجاز است بیش از یک مقدار را وارد کند.      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Tags.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Tags.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Tags.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      گزینه های ثابت      </Typography>
      <Typography className="mb-40" component="div">
      در صورتی که شما نیاز به قفل کردن برخی از برچسب ها دارید تا بتوانند&#39;حذف شود، می توانید تراشه ها را غیرفعال کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedTags.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/FixedTags.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/FixedTags.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        چکس باکس
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxesTags.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/CheckboxesTags.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CheckboxesTags.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      برچسب ها را محدود کنید      </Typography>
      <Typography className="mb-40" component="div">
      می توانید استفاده کنید <code>limitTags</code> برای محدود کردن تعداد گزینه های نمایش داده شده در صورت عدم تمرکز.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LimitTags.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/LimitTags.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/LimitTags.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      ورودی های کوچکتر را دوست دارید؟ استفاده کنید <code>size</code> پشتیبانی.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Sizes.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Sizes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Sizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ورودی سفارشی      </Typography>
      <Typography className="mb-40" component="div">
        <code>renderInput</code> prop به شما امکان می دهد ورودی رندر شده را سفارشی کنید. اولین آرگومان این رندر پروپ حاوی پروپوزال هایی است که باید آنها را فوروارد کنید. توجه ویژه ای به <code>ref</code> و <code>inputProps</code> کلیدها.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomInputAutocomplete.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/CustomInputAutocomplete.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CustomInputAutocomplete.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        GitHub&#39;s picker-انتخابگر
      </Typography>
      <Typography className="mb-40" component="div">
      این نسخه ی نمایشی GitHub را بازتولید می کند&#39;s انتخاب کننده برچسب:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GitHubLabel.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/GitHubLabel.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/GitHubLabel.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      برای مثال سفارشی سازی با قلاب <code>useAutocomplete</code> به جای مولفه، به بخش <a href="#customized-hook">قلاب سفارشی</a> بروید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Highlights
      </Typography>
      <Typography className="mb-40" component="div">
      نسخه ی نمایشی زیر متکی است{' '}
        <a href="https://github.com/moroshko/autosuggest-highlight">autosuggest-highlight</a>, یک ابزار کوچک (1 کیلوبایت) برای برجسته کردن متن در مؤلفه‌های پیشنهاد خودکار و تکمیل خودکار.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Highlights.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Highlights.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Highlights.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      فیلتر سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه یک کارخانه را برای ایجاد یک روش فیلتری که می تواند برای {' '} ارائه شود، در معرض نمایش قرار می دهد.
      <code>filterOptions</code> prop. می توانید از آن برای تغییر رفتار فیلتر گزینه پیش فرض استفاده کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { createFilterOptions } from '@mui/material/Autocomplete';
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        <code>{`createFilterOptions(config) => filterOptions`}</code>
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      استدلال ها
      </Typography>
      <ol>
        <li>
          <code>config</code> (<em>object</em> [optional]):
        </li>
      </ol>
      <ul>
        <li>
          <code>config.ignoreAccents</code> (<em>bool</em> [optional]): Defaults to{' '}
          <code>true</code>. Remove diacritics.
        </li>
        <li>
          <code>config.ignoreCase</code> (<em>bool</em> [optional]): Defaults to <code>true</code>.
          Lowercase everything.
        </li>
        <li>
          <code>config.limit</code> (<em>number</em> [optional]): Default to null. Limit the number
          of suggested options to be shown. For example, if <code>config.limit</code> is{' '}
          <code>100</code>, only the first <code>100</code> matching options are shown. It can be
          useful if a lot of options match and virtualization wasn&#39;t set up.
        </li>
        <li>
          <code>config.matchFrom</code> (<em>&#39;any&#39; | &#39;start&#39;</em> [optional]):
          Defaults to <code>'any'</code>.
        </li>
        <li>
          <code>config.stringify</code> (<em>func</em> [optional]): Controls how an option is
          converted into a string so that it can be matched against the input text fragment.
        </li>
        <li>
          <code>config.trim</code> (<em>bool</em> [optional]): Defaults to <code>false</code>.
          Remove trailing spaces.
        </li>
      </ul>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Returns
      </Typography>
      <Typography className="mb-40" component="div">
      <code>filterOptions</code>: روش فیلتر برگشتی را می توان مستقیماً به{' '} ارائه کرد
      پایه <code>filterOptions</code> جزء <code>Autocomplete</code> یا پارامتری به همین نام برای قلاب.
      </Typography>
      <Typography className="mb-40" component="div">
      در دمو زیر، گزینه ها باید با پیشوند query شروع شوند:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

<Autocomplete filterOptions={filterOptions} />;
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Filter.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Filter.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Filter.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      پیشرفته
      </Typography>
      <Typography className="mb-40" component="div">
      برای مکانیسم‌های فیلترینگ غنی‌تر، مانند تطابق فازی، توصیه می‌شود به آن نگاه کنید{' '}
        <a href="https://github.com/kentcdodds/match-sorter">match-sorter</a>. برای مثال:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import { matchSorter } from 'match-sorter';

const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

<Autocomplete filterOptions={filterOptions} />;
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مجازی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      جستجو در 10000 گزینه به طور تصادفی ایجاد شده است. لیست به لطف مجازی سازی شده است{' '}
        <a href="https://github.com/bvaughn/react-window">react-window</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Virtualize.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Virtualize.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Virtualize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مناسبت ها
      </Typography>
      <Typography className="mb-40" component="div">
      اگر می‌خواهید از رفتار پیش‌فرض کنترل‌کننده کلید جلوگیری کنید، می‌توانید رویداد را تنظیم کنید{' '}
      ویژگی <code>defaultMuiPrevented</code> به <code>true</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Autocomplete
  onKeyDown={(event) => {
    if (event.key === 'Enter') {
      // Prevent's default 'Enter' behavior.
      event.defaultMuiPrevented = true;
      // your handler code
    }

/>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        autocomplete/autofill-تکمیل خودکار/تکمیل خودکار
      </Typography>
      <Typography className="mb-40" component="div">
      مرورگرها اکتشافی برای کمک به کاربر در پر کردن ورودی های فرم دارند. با این حال، این می تواند به UX کامپوننت آسیب برساند.
      </Typography>
      <Typography className="mb-40" component="div">
      به‌طور پیش‌فرض، مؤلفه ویژگی <strong>autocomplete</strong> ورودی را غیرفعال می‌کند (به یاد می‌آورد چه چیزی را کاربر برای یک فیلد مشخص در جلسه قبلی تایپ کرده است) با{' '}
      ویژگی <code>autoComplete="off"</code>. Google Chrome در حال حاضر از این تنظیم ویژگی پشتیبانی نمی کند (
        <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=587466">Issue 587466</a>).یک راه حل ممکن این است که <code>id</code> را حذف کنید تا مؤلفه یک قطعه تصادفی ایجاد کند.
      </Typography>
      <Typography className="mb-40" component="div">
      علاوه بر به خاطر سپردن مقادیر وارد شده گذشته، مرورگر ممکن است پیشنهاد کند{' '}
      پیشنهادات <strong>autofill</strong> (ورود به سیستم، آدرس، یا جزئیات پرداخت ذخیره شده). در صورتی که می‌خواهید تکمیل خودکار اجتناب شود، می‌توانید موارد زیر را امتحان کنید:
      </Typography>
      <ul>
        <li>
          <Typography className="mb-40" component="div">
            Name the input without leaking any information the browser can use. e.g.{' '}
            <code>id="field1"</code> instead of <code>id="country"</code>. If you leave the id
            empty, the component uses a random id.
          </Typography>
        </li>
        <li>
          <Typography className="mb-40" component="div">
            Set <code>autoComplete="new-password"</code> (some browsers will suggest a strong
            password for inputs with this attribute setting):
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<TextField
  {...params}
  inputProps={{
    ...params.inputProps,
    autoComplete: 'new-password',

/>
`}
          </FuseHighlight>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        Read{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion">
          the guide on MDN
        </a>{' '}
        for more details.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        iOS VoiceOver
      </Typography>
      <Typography className="mb-40" component="div">
      VoiceOver در iOS Safari از ویژگی <code>aria-owns</code> به خوبی پشتیبانی نمی کند. می توانید با پروپ <code>disablePortal</code> مشکل را حل کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ListboxComponent
      </Typography>
      <Typography className="mb-40" component="div">
      اگر یک پایه <code>ListboxComponent</code> سفارشی ارائه می‌کنید، باید مطمئن شوید که محفظه اسکرول مورد نظر دارای ویژگی <code>role</code> روی <code>listbox</code> است.
      این امر رفتار صحیح اسکرول را تضمین می کند، به عنوان مثال هنگام استفاده از صفحه کلید برای پیمایش.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#combobox">
          https://www.w3.org/TR/wai-aria-practices/#combobox
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      ما استفاده از برچسب برای جعبه متن را تشویق می کنیم. مؤلفه، شیوه های تألیف WAI-ARIA را اجرا می کند.
      </Typography>
    </>
  );
}

export default AutocompleteDoc;
