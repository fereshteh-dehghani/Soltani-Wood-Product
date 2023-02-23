import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SnackbarsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/snackbars"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Snackbar-اسنک بار
      </Typography>
      <Typography className="description">
      اسنک بارها اعلان های مختصری ارائه می دهند. این جزء به عنوان نان تست نیز شناخته می شود.
      </Typography>

      <Typography className="mb-40" component="div">
      اسنکبارها به کاربران از فرآیندی اطلاع می دهند که یک برنامه انجام داده یا انجام خواهد داد. آنها به طور موقت، به سمت پایین صفحه ظاهر می شوند. آنها نباید تجربه کاربر را قطع کنند و برای ناپدید شدن نیازی به ورودی کاربر ندارند.
      </Typography>
      <Typography className="mb-40" component="div">
      اسنک بارها حاوی یک خط متن هستند که مستقیماً با عملیات انجام شده مرتبط است. آنها ممکن است حاوی یک عمل متنی باشند، اما هیچ نمادی ندارند. می توانید از آنها برای نمایش اعلان ها استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>Frequency</strong>: فقط یک نوار اسنک ممکن است در هر بار نمایش داده شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Simple snackbars-اسنک بارهای ساده
      </Typography>
      <Typography className="mb-40" component="div">
      یک اسنک بار اولیه که هدف آن بازتولید رفتار اسنک بار Google Keep است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleSnackbar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/snackbars/SimpleSnackbar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/snackbars/SimpleSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization-سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می توانید در این مورد بیشتر بدانید{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSnackbars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/snackbars/CustomizedSnackbars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/snackbars/CustomizedSnackbars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Positioned snackbars-اسنک بارهای واقع شده
      </Typography>
      <Typography className="mb-40" component="div">
      در طرح‌بندی‌های گسترده، میله‌های اسنک می‌توانند در تراز چپ یا وسط قرار گیرند، اگر به طور مداوم در یک نقطه در پایین صفحه قرار گیرند، هرچند ممکن است شرایطی وجود داشته باشد.
      جایی که قرار دادن اسنک بار باید انعطاف پذیرتر باشد. شما می توانید موقعیت نوار اسنک را با مشخص کردن پایه <code>anchorOrigin</code> کنترل کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PositionedSnackbar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/snackbars/PositionedSnackbar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/snackbars/PositionedSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Message Length-طول پیام
      </Typography>
      <Typography className="mb-40" component="div">
      برخی از اسنک بارها با طول پیام متفاوت.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LongTextSnackbar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/snackbars/LongTextSnackbar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/snackbars/LongTextSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Transitions-انتقال ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Consecutive Snackbars-اسنک بارهای متوالی
      </Typography>
      <Typography className="mb-40" component="div">
      هنگامی که به‌روزرسانی‌های چندگانه اسنکبار ضروری است، باید یکی یکی ظاهر شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ConsecutiveSnackbars.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/snackbars/ConsecutiveSnackbars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/snackbars/ConsecutiveSnackbars.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      اسنک بارها و دکمه های اکشن شناور (FAB)
      </Typography>
      <Typography className="mb-40" component="div">
      نوارهای اسنک باید بالای FAB ها (در موبایل) ظاهر شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FabIntegrationSnackbar.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/snackbars/FabIntegrationSnackbar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/snackbars/FabIntegrationSnackbar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Change transition-تغییر انتقال
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="/components/transitions/#grow">Grow</a> انتقال پیش‌فرض است اما می‌توانید از یکی دیگر استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsSnackbar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/snackbars/TransitionsSnackbar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/snackbars/TransitionsSnackbar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Control Slide direction-جهت اسلاید را کنترل کنید
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید جهت انتقال <a href="/components/transitions/#slide">اسلاید</a>{' '} را تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
      مثالی از انجام انتقال اسلاید به چپ:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import Slide from '@material-ui/core/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function MyComponent() {
  return <Snackbar TransitionComponent={TransitionLeft} />;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      نمونه های دیگر:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DirectionSnackbar.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/snackbars/DirectionSnackbar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/snackbars/DirectionSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پروژه های تکمیلی
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده پیشرفته تر، ممکن است بتوانید از مزایای زیر استفاده کنید:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        notistack-پشته ابزار
      </Typography>
      <Typography className="mb-40" component="div">
        {' '}
        src="https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars"
        alt="stars/ src="https://img.shields.io/npm/dm/notistack.svg" alt="npm downloads/>
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال نحوه استفاده را نشان می دهد{' '}
          <a href="https://github.com/iamhosseindhv/notistack">notistack</a>. notistack یک {' '} <strong>imperative API</strong> دارد که نمایش اسنک بارها را بدون نیاز به کنترل وضعیت باز/بستن آنها آسان می‌کند. همچنین به شما امکان می‌دهد آنها را روی هم <strong>stack</strong> کنید (اگرچه دستورالعمل‌های طراحی متریال از این کار جلوگیری می‌کنند).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IntegrationNotistack.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/snackbars/IntegrationNotistack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/snackbars/IntegrationNotistack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-1.1/#alert">
          https://www.w3.org/TR/wai-aria-1.1/#alert
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        به طور پیش فرض، نوار اسنک به صورت خودکار پنهان نمی شود. با این حال، اگر تصمیم به استفاده از پروپوزال {' '} <code>autoHideDuration</code> دارید، توصیه می شود به کاربر{' '}
       <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html">sufficient time </a> برای پاسخگویی.
      </Typography>
      <Typography className="mb-40" component="div">
        When open, <strong>every</strong> <code>Snackbar</code> will be dismissed if{' '}
        <kbd className="key">Escape</kbd> is pressed. Unless you don&#39;t handle{' '}
        <code>onClose</code> with the <code>"escapeKeyDown"</code> reason. If you want to limit this
        behavior to only dismiss the oldest currently open Snackbar call{' '}
        <code>event.preventDefault</code> in <code>onClose</code>.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
export default function MyComponent() {
  const [open, setOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        onClose={(event, reason) => {
          // \`reason === 'escapeKeyDown'\` if \`Escape\` was pressed
          setOpen(false);
          // call \`event.preventDefault\` to only close one Snackbar at a time.

      />
      <Snackbar open={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
    </>
  );
}

export default SnackbarsDoc;
