import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TabsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tabs"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Tabs-زبانه ها
      </Typography>
      <Typography className="description">
      برگه ها کاوش و جابجایی بین نماهای مختلف را آسان می کنند.
      </Typography>

      <Typography className="mb-40" component="div">
      برگه‌ها سازماندهی می‌کنند و امکان پیمایش بین گروه‌هایی از محتوای مرتبط و در همان سطح سلسله مراتب را می‌دهند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic tabs-برگه های اصلی
      </Typography>
      <Typography className="mb-40" component="div">
      یک مثال اساسی با پانل های تب.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/BasicTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/BasicTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Experimental API
      </Typography>
      <Typography className="mb-40" component="div">
      <code>@mui/lab</code> مؤلفه‌های ابزاری را ارائه می‌دهد که برای پیاده‌سازی در دسترس، لوازم را تزریق می‌کند.
        برگه های زیر{' '}<a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel">شیوه های تألیف WAI-ARIA</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LabTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/LabTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/LabTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Wrapped labels-برچسب های بسته بندی شده
      </Typography>
      <Typography className="mb-40" component="div">
      برچسب های طولانی به طور خودکار روی برگه ها بسته می شوند. اگر برچسب برای برگه خیلی طولانی باشد، سرریز می شود و متن قابل مشاهده نخواهد بود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TabsWrappedLabel.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/TabsWrappedLabel.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/TabsWrappedLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Colored tab-زبانه رنگی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/ColorTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ColorTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Disabled tab-برگه غیرفعال
      </Typography>
      <Typography className="mb-40" component="div">
      یک برگه را می توان با تنظیم قسمت <code>disabled</code> غیرفعال کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisabledTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/DisabledTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/DisabledTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fixed tabs-برگه های ثابت
      </Typography>
      <Typography className="mb-40" component="div">
      زبانه های ثابت باید با تعداد محدودی از زبانه ها استفاده شوند و زمانی که قرار دادن ثابت به حافظه عضلانی کمک می کند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Full width-تمام عرض
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>variant="fullWidth"</code> prop should be used for smaller views. This demo also
        uses{' '}
        <a href="https://github.com/oliviertassinari/react-swipeable-views">
          react-swipeable-views
        </a>{' '}
        to animate the Tab transition, and allowing tabs to be swiped on touch devices.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullWidthTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/FullWidthTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/FullWidthTabs.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Centered
      </Typography>
      <Typography className="mb-40" component="div">
      برای نماهای بزرگتر باید از پایه <code>مرکز</code> استفاده شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CenteredTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/CenteredTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/CenteredTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      برگه های قابل پیمایش
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دکمه های اسکرول خودکار
            </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش‌فرض، دکمه‌های اسکرول چپ و راست به‌طور خودکار روی دسک‌تاپ نمایش داده می‌شوند و در موبایل پنهان می‌شوند. (بر اساس عرض درگاه دید)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonAuto.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonAuto.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonAuto.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دکمه های اسکرول اجباری
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌های اسکرول چپ و راست بدون توجه به عرض درگاه نمایش با<code>{`scrollButtons={true}`}</code> <code>allowScrollButtonsMobile</code>ارائه می‌شوند (فضا رزرو کنید)::
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonForce.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonForce.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonForce.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      اگر می خواهید مطمئن شوید که دکمه ها همیشه قابل مشاهده هستند، باید کدورت را سفارشی کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiTabs-scrollButtons.Mui-disabled {
  opacity: 0.3;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonVisible.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonVisible.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonVisible.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      جلوگیری از دکمه های اسکرول
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌های اسکرول چپ و راست هرگز با{' '} نمایش داده نمی‌شوند
  <code>{`scrollButtons={false}`}</code>. همه پیمایش‌ها باید از طریق مکانیسم‌های پیمایش عامل کاربر (مثلاً کشیدن انگشت به چپ/راست، چرخاندن چرخ ماوس و غیره) آغاز شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonPrevent.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonPrevent.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/ScrollableTabsButtonPrevent.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. شما می توانید در مورد این در{' '} بیشتر بیاموزید
         <a href="/customization/how-to-customize/">صفحه اسناد را لغو می‌کند</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/CustomizedTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/CustomizedTabs.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨اگر به دنبال الهام هستید، می‌توانید{' '}
   <a href="https://mui-treasury.com/styles/tabs/">
     نمونه های سفارشی سازی وزارت خزانه داری MUI
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      زبانه های عمودی      </Typography>
      <Typography className="mb-40" component="div">
      برای ساختن برگه های عمودی به جای برگه های افقی پیش فرض، {' '}
         <code>orientation="vertical"</code>:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/VerticalTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/VerticalTabs.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      توجه داشته باشید که می توانید نوار اسکرول را با <code>visibleScrollbar</code> بازیابی کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بدون برگه
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش‌فرض، برگه‌ها از عنصر <code>button</code> استفاده می‌کنند، اما شما می‌توانید تگ یا مؤلفه سفارشی خود را ارائه دهید. در اینجا نمونه ای از پیاده سازی ناوبری زبانه ای آورده شده است:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NavTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/NavTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/NavTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      زبانه های نماد
      </Typography>
      <Typography className="mb-40" component="div">
      برچسب‌های برگه ممکن است همه نمادها یا تمام متن باشند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/IconTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/IconTabs.js')}
        />
        <FuseExample
          name="IconLabelTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/IconLabelTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/IconLabelTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      موقعیت نماد
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، نماد در <code>بالای</code> یک برگه قرار دارد. سایر موقعیت های پشتیبانی شده عبارتند از <code>شروع</code>، <code>پایان</code>، <code>پایین</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconPositionTabs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/IconPositionTabs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/IconPositionTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کتابخانه مسیریابی شخص ثالث
      </Typography>
      <Typography className="mb-40" component="div">
      یکی از موارد استفاده مکرر این است که فقط روی کلاینت ناوبری انجام شود، بدون اینکه HTTP رفت و برگشت به سرور باشد. مؤلفه <code>Tab</code> پایه <code>کامپوننت</code>{' '} را برای رسیدگی به این مورد استفاده فراهم می کند. اینجا یک{' '}
  <a href="/guides/routing/#tabs">راهنمای دقیق‌تر</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel">
          https://www.w3.org/TR/wai-aria-practices/#tabpanel
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      مراحل زیر برای ارائه اطلاعات لازم برای فناوری های کمکی مورد نیاز است:
      </Typography>
      <ol>
        <li>
          Label <code>Tabs</code> via <code>aria-label</code> or <code>aria-labelledby</code>.
        </li>
        <li>
          <code>Tab</code>s need to be connected to their corresponding{' '}
          <code>[role="tabpanel"]</code> by setting the correct <code>id</code>,{' '}
          <code>aria-controls</code> and <code>aria-labelledby</code>.
        </li>
      </ol>
      <Typography className="mb-40" component="div">
      نمونه ای برای اجرای فعلی را می توان در دموهای موجود در این صفحه یافت. ما داریم
   همچنین <a href="#experimental-api">یک API آزمایشی</a> را در <code>@mui/lab</code>{' '} منتشر کرد که نیازی به کار اضافی ندارد.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ناوبری صفحه کلید
      </Typography>
      <Typography className="mb-40" component="div">
        The components implement keyboard navigation using the &quot;manual activation&quot;
        behavior. If you want to switch to the &quot;selection automatically follows focus&quot;
        behavior you have pass <code>selectionFollowsFocus</code> to the <code>Tabs</code>{' '}
        component. The WAI-ARIA authoring practices have a detailed guide on{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#kbd_selection_follows_focus">
          how to decide when to make selection automatically follow focus
        </a>
        .
        <br/>
        (انگلیسیش مفهوم بهتر میرسونه)
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        دمو
      </Typography>
      <Typography className="mb-40" component="div">
      دو دمو زیر فقط در رفتار ناوبری صفحه کلیدشان با هم تفاوت دارند. یک برگه را متمرکز کنید و با کلیدهای جهت‌نما پیمایش کنید تا تفاوت را متوجه شوید، مثلاً{' '}
        <kbd className="key">Arrow Left</kbd>.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
/* Tabs where selection follows focus */
<Tabs selectionFollowsFocus />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibleTabs1.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/AccessibleTabs1.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/AccessibleTabs1.js')}
        />
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
/* Tabs where each tab needs to be selected manually */
<Tabs />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibleTabs2.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/AccessibleTabs2.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/AccessibleTabs2.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بی استایل
      </Typography>
      <Typography className="mb-40" component="div">
      Tabs همچنین با یک نسخه بدون استایل ارائه می شود. این برای انجام سفارشی سازی های سنگین و به حداقل رساندن اندازه بسته ایده آل است.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      جزء بدون استایل
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledTabsBasic.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/UnstyledTabsBasic.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/UnstyledTabsBasic.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      سفارشی کردن عنصر ریشه
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، <code>TabUnstyled</code> یک عنصر <code>button</code> بومی را ارائه می دهد. شما آزاد هستید که با تنظیم <code>component</code> یا{' '} این مورد را لغو کنید
   پشتیبانی <code>components.Root</code>. اگر یک عنصر غیر تعاملی (مانند یک span) از این طریق ارائه شود، <code>TabUnstyled</code> از افزودن ویژگی‌های دسترسی مراقبت می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
      از طرف دیگر، <code>TabPanelUnstyled</code> یک عنصر بومی <code>div</code>{' '} را به طور پیش‌فرض ارائه می‌کند. شما آزاد هستید که این را نیز با تنظیم {' '} لغو کنید
  پایه <code>component</code> یا <code>components.Root</code> در{' '}<code>TabPanelUnstyled</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledTabsCustomized.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tabs/UnstyledTabsCustomized.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tabs/UnstyledTabsCustomized.js')}
        />
      </Typography>
    </>
  );
}

export default TabsDoc;
