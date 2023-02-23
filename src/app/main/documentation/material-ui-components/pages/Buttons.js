import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ButtonsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/buttons"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Button-دکمه
      </Typography>
      <Typography className="description">
      دکمه‌ها به کاربران اجازه می‌دهند تا با یک ضربه، اقداماتی انجام دهند و انتخاب کنند.
      </Typography>

      <Typography className="mb-40" component="div">
      دکمه ها اقداماتی را که کاربران می توانند انجام دهند ارتباط برقرار می کنند. آنها معمولاً در سرتاسر UI شما قرار می‌گیرند، در مکان‌هایی مانند:
      </Typography>
      <ul>
        <li>Modal windows</li>
        <li>Forms</li>
        <li>Cards</li>
        <li>Toolbars</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic button-دکمه پایه
      </Typography>
      <Typography className="mb-40" component="div">
      <code>Button</code> دارای سه نوع است: متن (پیش‌فرض)، حاوی و مشخص شده.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/BasicButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/BasicButtons.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Text button-دکمه متن
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://material.io/components/buttons#text-button">Text buttons</a>
        معمولاً برای اقدامات کم‌تر مورد استفاده قرار می‌گیرند، از جمله مواردی که در گفتگوها، در کارت‌ها قرار دارند. در کارت‌ها، دکمه‌های متنی به حفظ تأکید بر محتوای کارت کمک می‌کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/TextButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/TextButtons.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Contained button-دکمه حاوی
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://material.io/components/buttons#contained-button">Contained buttons</a>
        تاکید زیادی دارند و با استفاده از ارتفاع و پر شدن متمایز می شوند. آنها حاوی اقداماتی هستند که برای برنامه شما اصلی هستند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ContainedButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ContainedButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ContainedButtons.js')}
        />
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
            require('app/main/documentation/material-ui-components/components/buttons/DisableElevation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/DisableElevation.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Outlined button-دکمه مشخص شده
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://material.io/components/buttons#outlined-button">Outlined buttons</a>دکمه هایی با تاکید متوسط هستند. آنها حاوی اقداماتی هستند که مهم هستند اما عملکرد اصلی در یک برنامه نیستند.
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌های مشخص شده همچنین جایگزینی با تاکید کمتر برای دکمه‌های حاوی یا یک جایگزین با تاکید بیشتر برای دکمه‌های متنی هستند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OutlinedButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/OutlinedButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/OutlinedButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Handling clicks-رسیدگی به کلیک ها
      </Typography>
      <Typography className="mb-40" component="div">
      همه مؤلفه‌ها یک کنترلر <code>onClick</code> را می‌پذیرند که روی عنصر DOM ریشه اعمال می‌شود.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Button
  onClick={() => {
    alert('clicked');

>
  Click me
</Button>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        Note that the documentation <a href="/guides/api/#native-properties">avoids</a> mentioning
        native props (there are a lot) in the API section of the components.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ColorButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ColorButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      علاوه بر استفاده از رنگ‌های دکمه‌های پیش‌فرض، می‌توانید رنگ‌های سفارشی اضافه کنید یا هر چیزی را که نیاز ندارید غیرفعال کنید. ببینید{' '}
      نمونه <a href="/customization/palette/#adding-new-colors">Adding new colors</a> برای اطلاعات بیشتر.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سایز
      </Typography>
      <Typography className="mb-40" component="div">
      برای دکمه های بزرگتر یا کوچکتر، از پایه <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonSizes.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ButtonSizes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ButtonSizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه آپلود
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UploadButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UploadButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UploadButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه هایی با آیکون و برچسب
      </Typography>
      <Typography className="mb-40" component="div">
      گاهی اوقات ممکن است بخواهید آیکون هایی برای دکمه های خاصی داشته باشید تا UX برنامه را بهبود ببخشید زیرا ما لوگوها را راحت تر از متن ساده تشخیص می دهیم. به عنوان مثال، اگر یک دکمه حذف دارید، می توانید آن را با نماد سطل زباله برچسب بزنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconLabelButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/IconLabelButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconLabelButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه آیکون
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه های نماد معمولاً در نوارهای برنامه و نوار ابزار یافت می شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      نمادها همچنین برای دکمه‌های جابجایی مناسب هستند که امکان انتخاب یا حذف یک انتخاب واحد را فراهم می‌کنند، مانند افزودن یا حذف یک ستاره به یک مورد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/IconButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconButtons.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای دکمه های نماد بزرگتر یا کوچکتر، از پایه <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconButtonSizes.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/IconButtonSizes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconButtonSizes.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      رنگ ها
      </Typography>
      <Typography className="mb-40" component="div">
        از <code>color</code> برای اعمال پالت رنگ تم به کامپوننت.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconButtonColors.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/IconButtonColors.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconButtonColors.js')}
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
          name="CustomizedButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/CustomizedButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/CustomizedButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨اگر به دنبال الهام هستید، می توانید بررسی کنید{' '}
        <a href="https://mui-treasury.com/styles/button/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه بارگیری
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه های بارگیری می توانند وضعیت بارگیری را نشان دهند و تعاملات را غیرفعال کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LoadingButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/LoadingButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/LoadingButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      سوئیچ بارگیری را تغییر دهید تا انتقال بین حالت های مختلف را ببینید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LoadingButtonsTransition.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/LoadingButtonsTransition.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/LoadingButtonsTransition.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه پیچیده
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌های متن، دکمه‌های حاوی، دکمه‌های حرکت شناور و دکمه‌های نماد بر روی یک جزء ساخته شده‌اند: <code>ButtonBase</code>. می توانید از این مؤلفه سطح پایین برای ایجاد تعاملات سفارشی استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonBase.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ButtonBase.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ButtonBase.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کتابخانه مسیریابی شخص ثالث
      </Typography>
      <Typography className="mb-40" component="div">
      یکی از موارد استفاده مکرر این است که فقط روی کلاینت ناوبری انجام شود، بدون اینکه HTTP رفت و برگشت به سرور باشد. مؤلفه <code>ButtonBase</code> پایه{' '} <code>component</code> را برای رسیدگی به این مورد استفاده فراهم می کند. اینجا یک است{' '}
        <a href="/guides/routing/#button">more detailed guide</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Cursor not-allowed-مکان نما مجاز نیست
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه ButtonBase <code>pointer-events: none;</code> را روی دکمه‌های غیرفعال تنظیم می‌کند، که از نمایش مکان‌نمای غیرفعال جلوگیری می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر می خواهید از <code>not-allowed</code> استفاده کنید، دو گزینه دارید:
      </Typography>
      <ol>
        <li>
          <strong>CSS only</strong>. You can remove the pointer-events style on the disabled state
          of the <code>{`<button>`}</code> element:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiButtonBase-root:disabled {
  cursor: not-allowed;
  pointer-events: auto;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      با این حال:
      </Typography>
      <ul>
        <li>
          You should add <code>pointer-events: none;</code> back when you need to display{' '}
          <a href="/components/tooltips/#disabled-elements">tooltips on disabled elements</a>.
        </li>
        <li>
          The cursor won&#39;t change if you render something other than a button element, for
          instance, a link <code>{`<a>`}</code> element.
        </li>
      </ul>
      <ol start="2">
        <li>
          <strong>DOM change</strong>. You can wrap the button:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<span style={{ cursor: 'not-allowed' }}>
  <Button component={Link} disabled>
    disabled
  </Button>
</span>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      این مزیت پشتیبانی از هر عنصر، به عنوان مثال، یک عنصر پیوند <code>{`<a>`}</code>{' '} را دارد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بی استایل
      </Typography>
      <Typography className="mb-40" component="div">
      این دکمه همچنین با یک نسخه بدون استایل ارائه می شود. این برای انجام سفارشی سازی های سنگین و به حداقل رساندن اندازه بسته ایده آل است.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      جزء بدون استایل
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledButtonsSimple.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UnstyledButtonsSimple.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UnstyledButtonsSimple.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      سفارشی کردن عنصر ریشه
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، <code>ButtonUnstyled</code> یک عنصر <code>button</code> بومی را ارائه می دهد. شما آزاد هستید که با تنظیم <code>component</code> یا{' '} این مورد را لغو کنید
  پشتیبانی <code>components.Root</code>. اگر یک عنصر غیر تعاملی (مانند یک دهانه) به این ترتیب ارائه شود، <code>ButtonUnstyled</code> از افزودن ویژگی‌های دسترسی مراقبت می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledButtonsSpan.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UnstyledButtonsSpan.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UnstyledButtonsSpan.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      ویژگی های روی span را با دکمه نسخه ی نمایشی قبلی مقایسه کنید.
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      سفارشی سازی پیچیده
      </Typography>
      <Typography className="mb-40" component="div">
      شما محدود به استفاده از عناصر HTML برای ساختار دکمه نیستید. عناصر SVG، حتی با ساختار پیچیده، به همان اندازه قابل قبول هستند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledButtonCustom.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UnstyledButtonCustom.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UnstyledButtonCustom.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        useButton hook-استفاده از قلاب دکمه
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { useButton } from '@mui/base/ButtonUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      اگر نیاز به استفاده از عملکرد دکمه در مؤلفه دیگری دارید، می‌توانید از قلاب{' '} <code>useButton</code> استفاده کنید. این ابزارها را برمی گرداند تا روی یک عنصر دکمه سفارشی قرار گیرد و فیلدهایی که وضعیت داخلی دکمه را نشان می دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      قلاب <code>useButton</code> به رفر عنصری نیاز دارد که روی آن استفاده خواهد شد. علاوه بر این، شما باید پایه <code>component</code> را ارائه دهید (مگر اینکه قصد استفاده از  <code>button</code> ساده را داشته باشید).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseButton.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UseButton.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UseButton.js')}
        />
      </Typography>
    </>
  );
}

export default ButtonsDoc;
