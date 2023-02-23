import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TablesDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tables"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      جدول
      </Typography>
      <Typography className="description">
      جداول مجموعه ای از داده ها را نمایش می دهد. آنها را می توان به طور کامل سفارشی کرد.
      </Typography>

      <Typography className="mb-40" component="div">
      جداول اطلاعات را به گونه ای نمایش می دهند که اسکن آن آسان باشد، به طوری که کاربران بتوانند الگوها و بینش ها را جستجو کنند. آنها را می توان در محتوای اصلی، مانند کارت ها، جاسازی کرد. آنها می توانند شامل موارد زیر باشند:
      </Typography>
      <ul>
        <li>A corresponding visualization</li>
        <li>Navigation</li>
        <li>Tools to query and manipulate data</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جدول پایه
      </Typography>
      <Typography className="mb-40" component="div">
      یک مثال ساده بدون حاشیه.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/BasicTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/BasicTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جدول داده ها
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه <code>Table</code> نگاشت نزدیک به عناصر بومی <code>{`<table>`}</code>{' '} دارد. این محدودیت ساخت جداول داده های غنی را چالش برانگیز می کند.
      </Typography>
      <Typography className="mb-40" component="div">
      {' '}<a href="/components/data-grid/">
مؤلفه <code>DataGrid</code> </a>{' '} برای موارد استفاده ای طراحی شده است که بر روی مدیریت حجم زیادی از داده های جدولی تمرکز دارند. در حالی که ساختار سفت تری دارد، در ازای آن، ویژگی های قدرتمندتری به دست می آورید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DataTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/DataTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/DataTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dense table-جدول متراکم
      </Typography>
      <Typography className="mb-40" component="div">
      یک مثال ساده از یک جدول متراکم بدون حاشیه.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DenseTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/DenseTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/DenseTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sorting &amp; selecting-مرتب سازی و انتخاب
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>Checkbox</code> و ردیف‌های قابل کلیک را برای انتخاب، با <code>Toolbar</code> سفارشی نشان می‌دهد. از مؤلفه <code>TableSortLabel</code> برای کمک به استایل کردن عناوین ستون ها استفاده می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        The Table has been given a fixed width to demonstrate horizontal scrolling. In order to
        prevent the pagination controls from scrolling, the TablePagination component is used
        outside of the Table. (The{' '}
        <a href="#custom-pagination-actions">&#39;Custom Table Pagination Action&#39; example</a>{' '}
        below shows the pagination within the TableFooter.)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="EnhancedTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/EnhancedTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/EnhancedTable.js')}
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
          name="CustomizedTables.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/CustomizedTables.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/CustomizedTables.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      گزینه های صفحه بندی سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      این امکان وجود دارد که گزینه های نشان داده شده در &quot;ردیف در هر صفحه&raquo; با استفاده از پایه <code>rowsPerPageOptions</code> انتخاب کنید. شما باید آرایه ای از موارد زیر را ارائه دهید:
      </Typography>
      <ul>
        <li>
          <Typography className="mb-40" component="div">
          <strong>اعداد</strong>، هر عدد برای برچسب و مقدار گزینه استفاده خواهد شد.
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<TablePagination rowsPerPageOptions={[10, 50]} />
`}
          </FuseHighlight>
        </li>
        <li>
          <Typography className="mb-40" component="div">
            <strong>objects</strong>, the <code>value</code> and <code>label</code> keys will be
            used respectively for the value and label of the option (useful for language strings
            such as &#39;All&#39;).
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />
`}
          </FuseHighlight>
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      اقدامات صفحه بندی سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      پایه <code>ActionsComponent</code> مؤلفه <code>TablePagination</code> اجازه اجرای اقدامات سفارشی را می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomPaginationActionsTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/CustomPaginationActionsTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/CustomPaginationActionsTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      هدر چسبنده
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از جدول با ردیف های قابل پیمایش و سرصفحه های ستون ثابت آورده شده است. این از پایه <code>stickyHeader</code> استفاده می کند. (⚠️ no IE 11 support)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StickyHeadTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/StickyHeadTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/StickyHeadTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گروه بندی ستون ها
      </Typography>
      <Typography className="mb-40" component="div">
       می‌توانید سرصفحه‌های ستون را با رندر کردن چندین ردیف جدول در یک سر جدول گروه‌بندی کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TableHead>
  <TableRow />
  <TableRow />
</TableHead>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColumnGroupingTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/ColumnGroupingTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/ColumnGroupingTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Collapsible table
      </Typography>
      <Typography className="mb-40" component="div">
      نمونه‌ای از جدول با ردیف‌های قابل گسترش که مؤلفه‌های بیشتری را نشان می‌دهد.{' '}
        <a href="/api/collapse/">
          <code>Collapse</code>
        </a>{' '}.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CollapsibleTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/CollapsibleTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/CollapsibleTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Spanning table
      </Typography>
      <Typography className="mb-40" component="div">
      یک مثال ساده با سطرها و ستون های پوشا.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpanningTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/SpanningTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/SpanningTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جدول مجازی
      </Typography>
      <Typography className="mb-40" component="div">
      در مثال زیر نحوه استفاده از{' '}
        <a href="https://github.com/bvaughn/react-virtualized">react-virtualized</a> با{' '}
        <code>Table</code> جزء. 200 ردیف را رندر می کند و به راحتی می تواند تعداد بیشتری را مدیریت کند. مجازی سازی به مشکلات عملکرد کمک می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ReactVirtualizedTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/ReactVirtualizedTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/ReactVirtualizedTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled-بی استایل
      </Typography>
      <Typography className="mb-40" component="div">
      اگر می‌خواهید از جدول بدون استایل استفاده کنید، می‌توانید از عناصر اولیه استفاده کنید و جدول را با صفحه‌بندی بدون استایل، همانطور که در دمو زیر نشان داده شده است، تقویت کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TableUnstyled.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/TableUnstyled.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/TableUnstyled.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ظاهر و احساس سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TableCustomized.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/TableCustomized.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/TableCustomized.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI tutorial:{' '}
        <a href="https://www.w3.org/WAI/tutorials/tables/">
          https://www.w3.org/WAI/tutorials/tables/
        </a>
        )
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      عنوان
      </Typography>
      <Typography className="mb-40" component="div">
      یک عنوان مانند یک عنوان برای یک جدول عمل می کند. اکثر صفحه‌خوان‌ها محتوای زیرنویس‌ها را اعلام می‌کنند. شرح‌ها به کاربران کمک می‌کنند تا جدولی را پیدا کنند و بفهمند که در مورد چیست و تصمیم بگیرند که آیا می‌خواهند آن را بخوانند یا خیر.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AcccessibleTable.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tables/AcccessibleTable.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/AcccessibleTable.js')}
        />
      </Typography>
    </>
  );
}

export default TablesDoc;
