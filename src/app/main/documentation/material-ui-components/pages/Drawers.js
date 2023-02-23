import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DrawersDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/drawers"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Drawer
      </Typography>
      <Typography className="description">
      کشوهای ناوبری دسترسی به مقصد را در برنامه شما فراهم می کند. صفحات جانبی سطوحی هستند که حاوی محتوای تکمیلی هستند که به لبه چپ یا راست صفحه متصل می شوند.
      </Typography>

      <Typography className="mb-40" component="div">
      کشوهای پیمایش (یا &quot;نوارهای کناری&quot;) دسترسی به مقاصد و عملکرد برنامه‌ها، مانند تغییر حساب‌ها را فراهم می‌کنند. آنها می توانند به طور دائم روی صفحه باشند یا با نماد منوی ناوبری کنترل شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://material.io/components/sheets-side">Side sheets</a> سطوح تکمیلی هستند که عمدتا در تبلت و دسکتاپ استفاده می شوند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Temporary drawer-کشوی موقت
      </Typography>
      <Typography className="mb-40" component="div">
      کشوهای ناوبری موقت می توانند باز یا بسته شوند. به طور پیش‌فرض بسته می‌شود، کشو به‌طور موقت بالای همه محتوای دیگر باز می‌شود تا زمانی که یک بخش انتخاب شود.
      </Typography>
      <Typography className="mb-40" component="div">
      کشو را می توان با کلیک کردن روی همپوشانی یا فشار دادن کلید Esc لغو کرد. هنگامی که یک مورد انتخاب می‌شود، بسته می‌شود و با کنترل سرپ <code>open</code> مدیریت می‌شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TemporaryDrawer.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/drawers/TemporaryDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/TemporaryDrawer.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Swipeable-قابل کشیدن انگشت
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید کشو را با مولفه <code>SwipeableDrawer</code> قابل کشیدن انگشت کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      این کامپوننت با یک بار سربار 2 کیلوبایتی gzipped ارائه می شود. برخی از دستگاه های تلفن همراه ارزان قیمت نمی توانند انگشتان دست را با سرعت 60 فریم بر ثانیه دنبال کنند. می توانید از {' '} استفاده کنید
      برای کمک به <code>disableBackdropTransition</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwipeableTemporaryDrawer.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/drawers/SwipeableTemporaryDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/SwipeableTemporaryDrawer.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      ویژگی های زیر در این وب سایت مستندسازی برای استفاده بهینه از مؤلفه استفاده می شود:
      </Typography>
      <ul>
        <li>
          iOS is hosted on high-end devices. The backdrop transition can be enabled without dropping
          frames. The performance will be good enough.
        </li>
        <li>
          iOS has a &quot;swipe to go back&quot; feature that interferes with the discovery feature,
          so discovery has to be disabled.
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />;
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Swipeable edge-لبه قابل کشیدن
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید <code>SwipeableDrawer</code> را به گونه‌ای پیکربندی کنید که هنگام بسته شدن، لبه‌ای قابل مشاهده داشته باشد.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر روی دسکتاپ هستید، می‌توانید کشو را با &quot;OPEN&quot; تغییر دهید. دکمه. اگر از تلفن همراه استفاده می‌کنید، می‌توانید نسخه نمایشی را در CodeSandbox (نماد &quot;ویرایش&quot;) باز کنید و تند بکشید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwipeableEdgeDrawer.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/SwipeableEdgeDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/SwipeableEdgeDrawer.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Keep mounted
      </Typography>
      <Typography className="mb-40" component="div">
      برای اطمینان از اینکه یک کشوی موقت جدا نشده است، پایه <code>ModalProps</code> را مانند زیر مشخص کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Drawer
  variant="temporary"
  ModalProps={{
    keepMounted: true,

/>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      جزئیات بیشتر در<a href="/components/modal/#performance">Modal performance section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsive drawer-کشو پاسخگو
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از نوع <code>موقت</code> برای نمایش کشو برای صفحه‌های کوچک و{' '} استفاده کنید
      <code>دائمی</code> برای یک کشو برای صفحه‌های وسیع‌تر. 
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveDrawer.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/ResponsiveDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/ResponsiveDrawer.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Persistent drawer-کشو ماندگار
      </Typography>
      <Typography className="mb-40" component="div">
      کشوهای پیمایش دائمی می توانند باز یا بسته شوند. کشو در همان سطحی که محتوا قرار دارد، قرار می گیرد. به طور پیش فرض بسته است و با انتخاب نماد منو باز می شود و
      تا زمان بسته شدن توسط کاربر باز می ماند. وضعیت کشو از عمل به عمل و جلسه به جلسه به یاد می‌آید.
      </Typography>
      <Typography className="mb-40" component="div">
      هنگامی که کشو خارج از شبکه صفحه است و باز می شود، کشو محتوای دیگر را مجبور می کند تا اندازه را تغییر دهند و با درگاه نمایش کوچکتر سازگار شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      کشوهای ناوبری دائمی برای همه اندازه های بزرگتر از موبایل قابل قبول هستند. آنها برای برنامه هایی با چندین سطح سلسله مراتبی که نیاز به استفاده از فلش رو به بالا برای پیمایش دارند، توصیه نمی شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PersistentDrawerLeft.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/PersistentDrawerLeft.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/PersistentDrawerLeft.js')}
        />
        <FuseExample
          name="PersistentDrawerRight.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/PersistentDrawerRight.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/PersistentDrawerRight.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Mini variant drawer-کشو مدل کوچک
      </Typography>
      <Typography className="mb-40" component="div">
      در این تغییر، کشوی پیمایش مداوم عرض خود را تغییر می دهد. حالت استراحت آن مانند یک کشو کوچک در همان ارتفاع محتوا است که توسط نوار برنامه بریده شده است. هنگامی که گسترش می یابد، به عنوان کشوی ناوبری دائمی استاندارد ظاهر می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      نوع کوچک برای بخش‌های برنامه‌هایی که نیاز به دسترسی سریع به انتخاب در کنار محتوا دارند، توصیه می‌شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MiniDrawer.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/MiniDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/MiniDrawer.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Permanent drawer-کشوی دائمی
      </Typography>
      <Typography className="mb-40" component="div">
      کشوهای پیمایش دائمی همیشه قابل مشاهده هستند و به لبه سمت چپ سنجاق می شوند، در همان ارتفاعی که محتوا یا پس زمینه وجود دارد. آنها را نمی توان بسته کرد.
      </Typography>
      <Typography className="mb-40" component="div">
      کشوهای پیمایش دائمی <strong>پیش‌فرض توصیه‌شده برای دسک‌تاپ</strong> هستند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Full-height navigation-ناوبری تمام قد
      </Typography>
      <Typography className="mb-40" component="div">
      برنامه‌هایی که بر مصرف اطلاعات متمرکز هستند و از سلسله مراتب چپ به راست استفاده می‌کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PermanentDrawerLeft.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/PermanentDrawerLeft.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/PermanentDrawerLeft.js')}
        />
        <FuseExample
          name="PermanentDrawerRight.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/PermanentDrawerRight.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/PermanentDrawerRight.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Clipped under the app bar
      </Typography>
      <Typography className="mb-40" component="div">
      برنامه های متمرکز بر بهره وری که به تعادل در سراسر صفحه نیاز دارند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClippedDrawer.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/drawers/ClippedDrawer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/drawers/ClippedDrawer.js')}
        />
      </Typography>
    </>
  );
}

export default DrawersDoc;
