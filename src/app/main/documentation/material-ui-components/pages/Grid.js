import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function GridDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/grid"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Grid
      </Typography>
      <Typography className="description">
      شبکه طرح‌بندی پاسخ‌گوی Material Design با اندازه و جهت صفحه‌نمایش سازگار می‌شود و از یکنواختی در طرح‌بندی‌ها اطمینان می‌دهد
      </Typography>

      <Typography className="mb-40" component="div">
        The <a href="https://material.io/design/layout/responsive-layout-grid.html">grid</a> هماهنگی بصری بین طرح‌بندی‌ها ایجاد می‌کند در حالی که امکان انعطاف‌پذیری را در طیف گسترده‌ای از طرح‌ها فراهم می‌کند. رابط کاربری پاسخگوی متریال دیزاین بر اساس طرح شبکه ای 12 ستونی است
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
        ⚠️ مؤلفه <code>Grid</code> نباید با شبکه داده اشتباه گرفته شود. به یک شبکه طرح بندی نزدیک تر است. برای یک شبکه داده به{' '}<a href="/components/data-grid/"> بروید
        جزء <code>DataGrid</code></a>
          .
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چگونه کار می کند
      </Typography>
      <Typography className="mb-40" component="div">
      سیستم گرید با مولفه <code>Grid</code> پیاده سازی می شود:
      </Typography>
      <ul>
        <li>
          It uses <a href="https://www.w3.org/TR/css-flexbox-1/">CSS&#39;s Flexible Box module</a>{' '}
          for high flexibility.
        </li>
        <li>
          There are two types of layout: <em>containers</em> and <em>items</em>.
        </li>
        <li>
          Item widths are set in percentages, so they&#39;re always fluid and sized relative to
          their parent element.
        </li>
        <li>Items have padding to create the spacing between individual items.</li>
        <li>There are five grid breakpoints: xs, sm, md, lg, and xl.</li>
        <li>
          Integer values can be given to each breakpoint, indicating how many of the 12 available
          columns are occupied by the component when the viewport width satisfies the{' '}
          <a href="/customization/breakpoints/#default-breakpoints">breakpoint constraints</a>.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      اگر <strong>تازه با flexbox</strong> آشنا نیستید، توصیه می کنیم این مطلب را بخوانید.{' '}
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS-Tricks flexbox</a>{' '}
        
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fluid grids
      </Typography>
      <Typography className="mb-40" component="div">
      شبکه‌های سیال از ستون‌هایی استفاده می‌کنند که محتوا را مقیاس و اندازه می‌دهند. طرح بندی شبکه سیال می تواند از نقاط شکست برای تعیین اینکه آیا چیدمان نیاز به تغییر چشمگیر دارد یا خیر استفاده کند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Basic grid
      </Typography>
      <Typography className="mb-40" component="div">
      عرض ستون مقادیر صحیحی بین 1 و 12 هستند. آنها در هر نقطه شکست اعمال می شوند و نشان می دهند که چند ستون توسط مؤلفه اشغال شده است.
      </Typography>
      <Typography className="mb-40" component="div">
      مقداری که به یک نقطه انفصال داده می شود برای تمام نقاط شکست دیگر وسیع تر از آن اعمال می شود (مگر اینکه لغو شود، همانطور که در ادامه این صفحه می توانید بخوانید). برای مثال، <code>{`xs={12}`}</code> اندازه یک مؤلفه را به گونه‌ای اندازه می‌دهد که بدون توجه به اندازه آن، کل عرض درگاه نمایش را اشغال کند
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/BasicGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/BasicGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Grid with multiple breakpoints-شبکه با نقاط شکست متعدد
      </Typography>
      <Typography className="mb-40" component="div">
       کامپوننت ها ممکن است دارای چندین عرض تعریف شده باشند که باعث می شود طرح در نقطه شکست تعریف شده تغییر کند. مقادیر عرض داده شده به نقاط شکست بزرگتر، مقادیر داده شده به نقاط شکست کوچکتر را لغو می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        For example, <code>{`xs={12} sm={6}`}</code> sizes a component to occupy half of the
        viewport width (6 columns) when viewport width is{' '}
        <a href="/customization/breakpoints/#default-breakpoints">600 or more pixels</a>. For
        smaller viewports, the component fills all 12 available columns.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullWidthGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/FullWidthGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/FullWidthGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Spacing
      </Typography>
      <Typography className="mb-40" component="div">
      برای کنترل فضای بین کودکان، از پایه <code>spacing</code> استفاده کنید. مقدار فاصله می تواند هر عدد مثبت، از جمله اعشار و هر رشته باشد. prop با استفاده از ویژگی CSS تبدیل می شود{' '}
        <a href="/customization/spacing/">
          <code>theme.spacing()</code>
        </a>{' '}.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpacingGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/SpacingGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/SpacingGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Row &amp; column spacing-ردیف &amp; فاصله ستون  
      </Typography>
      <Typography className="mb-40" component="div">
      پروپوزال‌های <code>rowSpacing</code> و <code>columnSpacing</code> امکان تعیین شکاف‌های ردیف و ستون را به طور مستقل فراهم می‌کنند. شبیه به <code>row-gap</code> و{' '}
      ویژگی های <code>column-gap</code>{' '}
        <a href="/system/grid/#row-gap-amp-column-gap">CSS Grid</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RowAndColumnSpacing.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/RowAndColumnSpacing.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/RowAndColumnSpacing.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsive values-مقادیر پاسخگو
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید وسایل را تغییر دهید&#39; مقدار بر اساس نقطه شکست فعال. به عنوان مثال، ما می توانیم اجرا کنیم{' '}
        <a href="https://material.io/design/layout/responsive-layout-grid.html">
          &quot;recommended&quot;
        </a>{' '}
        شبکه چیدمان پاسخگو طراحی متریال.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/ResponsiveGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/ResponsiveGrid.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      مقادیر پاسخگو توسط:
      </Typography>
      <ul>
        <li>
          <code>columns</code>
        </li>
        <li>
          <code>columnSpacing</code>
        </li>
        <li>
          <code>direction</code>
        </li>
        <li>
          <code>rowSpacing</code>
        </li>
        <li>
          <code>spacing</code>
        </li>
        <li>
          all the <a href="#system-props">other props</a> of the system
        </li>
      </ul>
      <blockquote>
        <Typography className="mb-40" component="div">
        ⚠️ هنگام استفاده از یک پایه <code>columns</code> پاسخگو، هر مورد شبکه به نقطه شکست مربوطه خود نیاز دارد. به عنوان مثال، این کار نمی کند. مورد گرید
        مقدار <code>md</code>:
        </Typography>

        <FuseHighlight component="pre" className="language-jsx">
          {` 
<Grid container columns={{ xs: 4, md: 12 }}>
  <Grid item xs={2} />
</Grid>
`}
        </FuseHighlight>
      </blockquote>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Interactive-در ارتباط بودن
      </Typography>
      <Typography className="mb-40" component="div">
      در زیر یک نسخه نمایشی تعاملی وجود دارد که به شما امکان می دهد نتایج بصری تنظیمات مختلف را بررسی کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InteractiveGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/InteractiveGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/InteractiveGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Auto-layout-طرح بندی خودکار
      </Typography>
      <Typography className="mb-40" component="div">
      طرح‌بندی خودکار باعث می‌شود <em>items</em> به طور عادلانه فضای موجود را به اشتراک بگذارند. این همچنین به این معنی است که می توانید عرض یک <em>items</em> را تنظیم کنید و بقیه به طور خودکار اندازه اطراف آن را تغییر می دهند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AutoGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/AutoGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/AutoGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Variable width content-محتوای عرض متغیر
      </Typography>
      <Typography className="mb-40" component="div">
      یکی از نشانه‌های نقطه شکست اندازه را به جای <code>true</code> / a{' '} <code>number</code> روی <code>"auto"</code> تنظیم کنید تا یک ستون را بر اساس طبیعی اندازه کنید. عرض محتوای آن
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariableWidthGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/VariableWidthGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/VariableWidthGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complex Grid-شبکه پیچیده
      </Typography>
      <Typography className="mb-40" component="div">
      نسخه نمایشی زیر از دستورالعمل‌های طراحی متریال پیروی نمی‌کند، اما نشان می‌دهد که چگونه می‌توان از شبکه برای ساخت طرح‌بندی‌های پیچیده استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ComplexGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/ComplexGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/ComplexGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Nested Grid
      </Typography>
      <Typography className="mb-40" component="div">
      عناصر <code>container</code> و <code>item</code> دو بولی مستقل هستند. آنها را می توان ترکیب کرد تا به یک جزء Grid اجازه دهد که هم یک ظرف انعطاف پذیر و هم فرزند باشد.
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
        یک <strong>کانتینر</strong> انعطاف‌پذیر جعبه‌ای است که توسط یک عنصر با نمایشگر محاسبه‌شده <code>flex</code> یا <code>inline-flex</code> ایجاد می‌شود. فرزندان در جریان یک فلکس
        ظرف <strong>اقلام</strong> flex نامیده می‌شوند و با استفاده از مدل طرح‌بندی flex چیده می‌شوند.
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
        <a href="https://www.w3.org/TR/css-flexbox-1/#box-model">
          https://www.w3.org/TR/css-flexbox-1/#box-model
        </a>
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/NestedGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/NestedGrid.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      ⚠️ تعریف یک عرض صریح برای یک عنصر Grid که محفظه انعطاف‌پذیر، آیتم انعطاف‌پذیر است و در عین حال دارای فاصله است، منجر به رفتار غیرمنتظره می‌شود، از انجام آن اجتناب کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid spacing={1} container item xs={12}>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      اگر نیاز به انجام چنین کاری دارید، یکی از پایه ها را بردارید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Columns-ستون ها
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید تعداد ستون‌های پیش‌فرض (12) را با پایه <code>columns</code> تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColumnsGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/ColumnsGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/ColumnsGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      حاشیه منفی
      </Typography>
      <Typography className="mb-40" component="div">
      فاصله بین آیتم ها با حاشیه منفی اجرا می شود. این ممکن است منجر به رفتارهای غیرمنتظره شود. برای مثال، برای اعمال رنگ پس‌زمینه، باید{' '} <code>display: flex;</code> را روی والد اعمال کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        white-space: nowrap
      </Typography>
      <Typography className="mb-40" component="div">
      تنظیم اولیه در موارد انعطاف پذیر <code>min-width: auto</code> است. هنگامی که کودکان از <code>white-space: nowrap;</code> استفاده می کنند، باعث تضاد موقعیت می شود. می توانید مشکل را با موارد زیر تجربه کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item xs>
  <Typography noWrap>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      برای اینکه آیتم در داخل ظرف بماند، باید <code>min-width: 0</code> را تنظیم کنید. در عمل، می توانید پایه <code>zeroMinWidth</code> را تنظیم کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item xs zeroMinWidth>
  <Typography noWrap>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AutoGridNoWrap.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/AutoGridNoWrap.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/AutoGridNoWrap.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        direction: column | column-reverse
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>{' '}
        props are <strong>not supported</strong> within <code>direction="column"</code> and{' '}
        <code>direction="column-reverse"</code> containers.
      </Typography>
      <Typography className="mb-40" component="div">
      آنها تعداد شبکه هایی را که جزء برای یک نقطه شکست معین استفاده می کند، تعریف می کنند. آنها برای کنترل <strong>عرض</strong> با استفاده از <code>flex-basis</code> در <code>row</code>{' '} در نظر گرفته شده‌اند.
  کانتینرها اما بر ارتفاع در ظروف <code>column</code> تأثیر می‌گذارند. در صورت استفاده، این ابزارها ممکن است اثرات نامطلوبی بر ارتفاع عناصر آیتم <code>Grid</code> داشته باشند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        CSS Grid Layout
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه <code>Grid</code> در داخل از CSS flexbox استفاده می کند. اما همانطور که در زیر مشاهده می کنید، می توانید به راحتی از <a href="/system/grid/">سیستم</a> و CSS Grid برای چیدمان صفحات خود استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CSSGrid.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/grid/CSSGrid.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/grid/CSSGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        System props
      </Typography>
      <Typography className="mb-40" component="div">
      به عنوان یک جزء ابزار CSS، <code>Grid</code> همه را پشتیبانی می کند{' '}
        <a href="/system/properties/">
          <code>system</code>
        </a>{' '}
        خواص می توانید از آنها به عنوان پایه مستقیماً روی کامپوننت استفاده کنید. به عنوان مثال، یک بالشتک:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item p={2}>
`}
      </FuseHighlight>
    </>
  );
}

export default GridDoc;
