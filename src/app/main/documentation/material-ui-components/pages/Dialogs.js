import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DialogsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/dialogs"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Dialog-گفتگو
      </Typography>
      <Typography className="description">
      دیالوگ ها کاربران را در مورد یک کار آگاه می کنند و می توانند حاوی اطلاعات مهمی باشند، نیاز به تصمیم گیری داشته باشند یا چندین کار را شامل شوند.
      </Typography>

      <Typography className="mb-40" component="div">
      Dialog نوعی پنجره <a href="/components/modal/">modal</a> است که در جلوی محتوای برنامه ظاهر می‌شود تا اطلاعات مهمی را ارائه کند یا درخواست تصمیم گیری کند. دیالوگ‌ها همه عملکردهای برنامه را هنگامی که ظاهر می‌شوند غیرفعال می‌کنند و تا زمانی که تأیید، رد نشده یا اقدام لازم انجام نشود، روی صفحه باقی می‌مانند.
      </Typography>
      <Typography className="mb-40" component="div">
      دیالوگ ها به طور هدفمند وقفه دارند، بنابراین باید از آنها کم استفاده کرد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic dialog-گفتگوی اصلی
      </Typography>
      <Typography className="mb-40" component="div">
      دیالوگ های ساده می توانند جزئیات یا اقدامات بیشتری را در مورد یک مورد فهرست ارائه دهند. به عنوان مثال، آنها می توانند آواتارها، نمادها، زیرمتن روشن کننده یا اقدامات متعامد (مانند افزودن یک حساب کاربری) را نمایش دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      مکانیک لمسی:
      </Typography>
      <ul>
        <li>Choosing an option immediately commits the option and closes the menu</li>
        <li>
          Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleDialog.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/SimpleDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/SimpleDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Alerts-هشدارها
      </Typography>
      <Typography className="mb-40" component="div">
      هشدارها وقفه های فوری هستند که نیاز به تایید دارند و کاربر را در مورد یک موقعیت آگاه می کنند.
      </Typography>
      <Typography className="mb-40" component="div">
      بیشتر هشدارها نیازی به عنوان ندارند. آنها یک تصمیم را در یک یا دو جمله خلاصه می کنند:
      </Typography>
      <ul>
        <li>Asking a question (e.g. &quot;Delete this conversation?&quot;)</li>
        <li>Making a statement related to the action buttons</li>
      </ul>
      <Typography className="mb-40" component="div">
      از هشدارهای نوار عنوان فقط برای موقعیت‌های پرخطر، مانند از دست دادن احتمالی اتصال استفاده کنید. کاربران باید بتوانند انتخاب ها را تنها بر اساس عنوان و متن دکمه درک کنند.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر عنوان مورد نیاز است:
      </Typography>
      <ul>
        <li>
          Use a clear question or statement with an explanation in the content area, such as
          &quot;Erase USB storage?&quot;.
        </li>
        <li>
          Avoid apologies, ambiguity, or questions, such as &quot;Warning!&quot; or &quot;Are you
          sure?&quot;
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AlertDialog.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/AlertDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/AlertDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Transitions-انتقال ها
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می‌توانید انتقال را عوض کنید، مثال بعدی از <code>Slide</code> استفاده می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AlertDialogSlide.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/AlertDialogSlide.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/AlertDialogSlide.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form dialogs
      </Typography>
      <Typography className="mb-40" component="div">
      گفتگوهای فرم به کاربران اجازه می دهد تا فیلدهای فرم را در یک گفتگو پر کنند. به عنوان مثال، اگر سایت شما از مشترکین احتمالی درخواست می کند که آدرس ایمیل خود را پر کنند، آنها می توانند فیلد ایمیل را پر کنند و &#39;ارسال&#39; را لمس کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormDialog.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/FormDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/FormDialog.js')}
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
      این گفتگو دارای یک دکمه بستن است که به قابلیت استفاده کمک می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedDialogs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/CustomizedDialogs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/CustomizedDialogs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Full-screen dialogs-دیالوگ های تمام صفحه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullScreenDialog.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/FullScreenDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/FullScreenDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Optional sizes-اندازه های اختیاری
      </Typography>
      <Typography className="mb-40" component="div">
      با استفاده از <code>maxWidth</code> قابل شمارش در ترکیب با بولی <code>fullWidth</code> می‌توانید حداکثر عرض گفتگو را تنظیم کنید. وقتی پروپوزال <code>fullWidth</code> درست باشد، گفتگو بر اساس مقدار <code>maxWidth</code> تطبیق می‌یابد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MaxWidthDialog.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/MaxWidthDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/MaxWidthDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsive full-screen-تمام صفحه پاسخگو
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید با استفاده از یک گفتگوی تمام صفحه پاسخگو ایجاد کنید{' '}
        <a href="/components/use-media-query/#usemediaquery">
          <code>useMediaQuery</code>
        </a>
        .
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import useMediaQuery from '@mui/material/useMediaQuery';

function MyComponent() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return <Dialog fullScreen={fullScreen} />;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveDialog.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/ResponsiveDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/ResponsiveDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Confirmation dialogs-دیالوگ های تایید
      </Typography>
      <Typography className="mb-40" component="div">
      دیالوگ‌های تأیید از کاربران می‌خواهد تا قبل از تعهد یک گزینه، صریحاً انتخاب خود را تأیید کنند. برای مثال، کاربران می‌توانند به چندین آهنگ زنگ گوش دهند، اما تنها با لمس &quot;OK&quot; انتخاب نهایی را انجام دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      با لمس &laquo;لغو&raquo; در یک گفتگوی تأیید، یا فشار دادن «بازگشت»، اقدام را لغو می‌کند، هر گونه تغییری را نادیده می‌گیرد و گفتگو را می‌بندد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ConfirmationDialog.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/ConfirmationDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/ConfirmationDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Draggable dialog-گفتگوی قابل کشیدن
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید با استفاده از{' '} یک گفتگوی قابل کشیدن ایجاد کنید
      <a href="https://github.com/react-grid-layout/react-draggable">react-draggable</a>. برای انجام این کار، می توانید مولفه <code>Draggable</code> وارد شده را به عنوان{' '}
      <code>PaperComponent</code> جزء <code>Dialog</code>. با این کار کل دیالوگ قابل کشیدن است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DraggableDialog.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/DraggableDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/DraggableDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Scrolling long content-پیمایش مطالب طولانی
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی دیالوگ ها برای درگاه دید کاربر یا دستگاه بیش از حد طولانی می شوند، اسکرول می کنند.
      </Typography>
      <ul>
        <li>
          <code>scroll=paper</code> the content of the dialog scrolls within the paper element.
        </li>
        <li>
          <code>scroll=body</code> the content of the dialog scrolls within the body element.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      دمو زیر را امتحان کنید تا متوجه منظور ما شوید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollDialog.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/ScrollDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/ScrollDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کارایی
      </Typography>
      <Typography className="mb-40" component="div">
        Follow the <a href="/components/modal/#performance">Modal performance section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدودیت ها
      </Typography>
      <Typography className="mb-40" component="div">
        Follow the <a href="/components/modal/#limitations">Modal limitations section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        Follow the <a href="/components/modal/#accessibility">Modal accessibility section</a>.
      </Typography>
    </>
  );
}

export default DialogsDoc;
