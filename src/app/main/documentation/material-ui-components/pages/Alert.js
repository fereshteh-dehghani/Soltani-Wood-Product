import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AlertDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/alert"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Alert-هشدار
      </Typography>
      <Typography className="description">
      یک هشدار یک پیام کوتاه و مهم را به گونه ای نمایش می دهد که توجه کاربر را بدون وقفه در کار کاربر جلب می کند.
      </Typography>

      <Typography className="mb-40" component="div">
        <strong>توجه داشته باشید:</strong> این جزء در مستند نیست{' '}
        <a href="https://material.io/">Material Design guidelines</a>, اما MUI از آن پشتیبانی می کند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic alerts-هشدارهای اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      این هشدار چهار سطح شدت را ارائه می دهد که یک نماد و رنگ متمایز را تعیین می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicAlerts.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/alert/BasicAlerts.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/alert/BasicAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Description-شرح
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید استفاده کنید<code>AlertTitle</code> کامپوننت برای نمایش عنوان فرمت شده در بالای محتوا.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DescriptionAlerts.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/alert/DescriptionAlerts.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/alert/DescriptionAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Actions-اقدامات
      </Typography>
      <Typography className="mb-40" component="div">
      یک هشدار می تواند عملکردی داشته باشد، مانند دکمه بستن یا لغو. پس از پیام، در پایان هشدار ارائه می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر یک <code>onClose</code> پاسخ تماس ارائه شده است و خیر <code>action</code> prop تنظیم شده است، یک نماد بسته نمایش داده می شود. <code>action</code> prop را می توان برای ارائه یک عمل جایگزین استفاده کرد، به عنوان مثال با استفاده از دکمه یا IconButton.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ActionAlerts.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/alert/ActionAlerts.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/alert/ActionAlerts.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Transition-انتقال
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از a استفاده کنید <a href="/components/transitions/">transition component</a> مانند{' '}
        <code>Collapse</code> برای انتقال ظاهر هشدار.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionAlerts.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/alert/TransitionAlerts.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/alert/TransitionAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        آیکون ها
      </Typography>
      <Typography className="mb-40" component="div">
         <code>icon</code> prop به شما امکان می دهد یک نماد به ابتدای جزء هشدار اضافه کنید. این نماد پیش فرض را برای شدت مشخص شده لغو می کند.
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید شدت پیش‌فرض را به نگاشت نماد با استفاده از <code>iconMapping</code> پشتیبانی.
      این را می توان در سطح جهانی با استفاده از تعریف کرد{' '}
        <a href="/customization/theme-components/#default-props">theme customization</a>.
      </Typography>
      <Typography className="mb-40" component="div">
      تنظیم پایه نماد روی<code>false</code> آیکون را به طور کلی حذف می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconAlerts.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/alert/IconAlerts.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/alert/IconAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Variants-انواع
      </Typography>
      <Typography className="mb-40" component="div">
      دو نوع دیگر موجود است - مشخص شده و پر شده:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Outlined-مشخص شده است
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OutlinedAlerts.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/alert/OutlinedAlerts.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/alert/OutlinedAlerts.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Filled-پر شده است
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FilledAlerts.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/alert/FilledAlerts.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/alert/FilledAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Toast-نان تست
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از Snackbar استفاده کنید{' '}
        <a href="/components/snackbars/#customized-snackbars">display a toast</a> با هشدار
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color-رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <code>color</code> prop رنگ پیش فرض را برای شدت مشخص شده لغو می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorAlerts.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/alert/ColorAlerts.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/alert/ColorAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility-دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#alert">
          https://www.w3.org/TR/wai-aria-practices/#alert
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      هنگامی که مؤلفه به صورت پویا نمایش داده می شود، محتوا به طور خودکار توسط اکثر صفحه خوان ها اعلام می شود. در این زمان، صفحه خوان ها کاربران را از هشدارهایی که هنگام بارگیری صفحه وجود دارد، مطلع نمی کنند.
      </Typography>
      <Typography className="mb-40" component="div">
      استفاده از رنگ برای افزودن معنی فقط یک نشانه بصری ارائه می دهد که به کاربران فناوری های کمکی مانند صفحه خوان ها منتقل نمی شود. اطمینان حاصل کنید که اطلاعات با نشان داده شده است
  رنگ یا از خود محتوا آشکار است (مثلاً متن قابل مشاهده)، یا از طریق ابزارهای جایگزین، مانند متن پنهان اضافی، گنجانده شده است.
      </Typography>
      <Typography className="mb-40" component="div">
      عملکردها باید دارای شاخص برگه 0 باشند تا کاربران فقط صفحه کلید بتوانند به آنها دسترسی پیدا کنند.
      </Typography>
    </>
  );
}

export default AlertDoc;
