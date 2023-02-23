import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function MenusDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/menus"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Menu-منو
      </Typography>
      <Typography className="description">
      منوها فهرستی از انتخاب ها را روی سطوح موقت نمایش می دهند.
      </Typography>

      <Typography className="mb-40" component="div">
      یک منو لیستی از انتخاب ها را روی یک سطح موقت نمایش می دهد. زمانی ظاهر می شود که کاربر با یک دکمه یا کنترل دیگر تعامل داشته باشد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic menu-منوی اصلی
      </Typography>
      <Typography className="mb-40" component="div">
        A basic menu opens over the anchor element by default (this option can be{' '}
        <a href="#menu-positioning">changed</a> via props). When close to a screen edge, a basic
        menu vertically realigns to make sure that all menu items are completely visible.
      </Typography>
      <Typography className="mb-40" component="div">
      انتخاب یک گزینه باید فوراً گزینه را commit کرده و منو را ببندد.
      </Typography>
      <Typography className="mb-40" component="div">
      <strong>ابهام‌زدایی</strong>: برخلاف منوهای ساده، گفتگوهای ساده می‌توانند جزئیات بیشتری را در رابطه با گزینه‌های موجود برای یک مورد فهرست ارائه دهند یا اقدامات ناوبری یا متعامد مربوط به کار اصلی را ارائه دهند. اگرچه آنها می توانند همان را نشان دهند
  محتوا، منوهای ساده بر دیالوگ های ساده ترجیح داده می شوند زیرا منوهای ساده کمتر مخل شرایط فعلی کاربر هستند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicMenu.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/BasicMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/BasicMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Icon menu-منوی نماد
      </Typography>
      <Typography className="mb-40" component="div">
      در نمای دسکتاپ، padding افزایش یافته است تا فضای بیشتری به منو داده شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconMenu.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/IconMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/IconMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dense menu-منوی متراکم
      </Typography>
      <Typography className="mb-40" component="div">
      برای منویی که دارای فهرست طولانی و متن طولانی است، می‌توانید از پایه <code>ndense</code> برای کاهش اندازه و اندازه متن استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DenseMenu.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/DenseMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/DenseMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Selected menu-منوی انتخاب شده
      </Typography>
      <Typography className="mb-40" component="div">
        If used for item selection, when opened, simple menus places the initial focus on the
        selected menu item. The currently selected menu item is set using the <code>selected</code>{' '}
        prop (from <a href="/api/list-item/">ListItem</a>). To use a selected menu item without
        impacting the initial focus, set the <code>variant</code> prop to &quot;menu&quot;.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleListMenu.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/SimpleListMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/SimpleListMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Positioned menu-منوی موقعیت
      </Typography>
      <Typography className="mb-40" component="div">
      از آنجایی که مؤلفه <code>Menu</code> از مؤلفه <code>Popover</code> برای موقعیت‌یابی استفاده می‌کند، می‌توانید از همان مولفه استفاده کنید.{' '}
        <a href="/components/popover/#anchor-playground">positioning props</a> برای قرار دادن آن به عنوان مثال، می توانید منو را در بالای لنگر نمایش دهید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PositionedMenu.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/PositionedMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/PositionedMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        MenuList composition-ترکیب فهرست فهرست
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه <code>Menu</code> از مؤلفه <code>Popover</code> به صورت داخلی استفاده می کند. با این حال، ممکن است بخواهید از استراتژی موقعیت یابی متفاوتی استفاده کنید یا اسکرول را مسدود نکنید. برای پاسخ به این نیازها، یک مؤلفه <code>MenuList</code> را که می‌توانید با <code>Popper</code> در این مثال بنویسید، در معرض دید قرار می‌دهیم.
      </Typography>
      <Typography className="mb-40" component="div">
      مسئولیت اصلی مؤلفه <code>MenuList</code> مدیریت تمرکز است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MenuListComposition.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/MenuListComposition.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/MenuListComposition.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Account menu-منوی حساب
      </Typography>
      <Typography className="mb-40" component="div">
      محتوای <code>منو</code> را می توان با اجزای دیگری مانند <code>آواتار</code> ترکیب کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccountMenu.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/AccountMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/AccountMenu.js')}
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
          name="CustomizedMenus.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/CustomizedMenus.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/CustomizedMenus.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      <code>MenuItem</code> یک بسته بندی در اطراف <code>ListItem</code> با چند سبک اضافی است. می‌توانید از همان ویژگی‌های ترکیب فهرست با مؤلفه <code>MenuItem</code>{' '} استفاده کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 اگر به دنبال الهام هستید، می توانید بررسی کنید{' '}
        <a href="https://mui-treasury.com/styles/menu/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Max height menu-منوی حداکثر ارتفاع
      </Typography>
      <Typography className="mb-40" component="div">
      اگر ارتفاع یک منو مانع از نمایش همه آیتم های منو شود، منو می تواند به صورت داخلی پیمایش کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LongMenu.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/LongMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/LongMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدودیت ها
      </Typography>
      <Typography className="mb-40" component="div">
        There is{' '}
        <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=327437">a flexbox bug</a>{' '}
        that prevents <code>text-overflow: ellipsis</code> from working in a flexbox layout. You can
        use the <code>Typography</code> component with <code>noWrap</code> to workaround this issue:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TypographyMenu.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/TypographyMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/TypographyMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Change transition-تغییر انتقال
      </Typography>
      <Typography className="mb-40" component="div">
      از یک انتقال متفاوت استفاده کنید.
            </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FadeMenu.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/FadeMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/FadeMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Context menu-منوی زمینه
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از منوی زمینه است. (برای باز کردن کلیک راست کنید.)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ContextMenu.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/ContextMenu.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/ContextMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complementary projects-پروژه های تکمیلی
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده پیشرفته تر، ممکن است بتوانید از مزایای زیر استفاده کنید:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        PopupState helper-کمک کننده PopupState
      </Typography>
      <Typography className="mb-40" component="div">
      یک بسته شخص ثالث وجود دارد{' '}
        <a href="https://github.com/jcoreio/material-ui-popup-state">
          <code>material-ui-popup-state</code>
        </a>{' '}
        که در بیشتر موارد از وضعیت منو برای شما مراقبت می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MenuPopupState.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/menus/MenuPopupState.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/menus/MenuPopupState.js')}
        />
      </Typography>
    </>
  );
}

export default MenusDoc;
