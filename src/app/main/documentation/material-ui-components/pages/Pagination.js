import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PaginationDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/pagination"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Pagination-صفحه بندی
      </Typography>
      <Typography className="description">
      مولفه صفحه بندی به کاربر امکان می دهد یک صفحه خاص را از طیف وسیعی از صفحات انتخاب کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic pagination-صفحه بندی اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicPagination.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/BasicPagination.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/BasicPagination.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Outlined pagination-صفحه بندی مشخص شده
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationOutlined.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/PaginationOutlined.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/PaginationOutlined.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Rounded pagination-صفحه بندی گرد
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationRounded.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/PaginationRounded.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/PaginationRounded.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Pagination size-اندازه صفحه بندی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationSize.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/PaginationSize.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/PaginationSize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Buttons-دکمه ها
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید به صورت اختیاری دکمه های صفحه اول و صفحه آخر را فعال کنید یا دکمه های صفحه قبل و صفحه بعدی را غیرفعال کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/PaginationButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/PaginationButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom icons-آیکون های سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      امکان سفارشی کردن نمادهای کنترل وجود دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomIcons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/CustomIcons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/CustomIcons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Pagination ranges-محدوده صفحه بندی
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید تعیین کنید چند رقم در دو طرف صفحه فعلی با پایه{' '} <code>siblingRange</code> و در مجاورت شماره صفحه شروع و پایان با{' '}<code>boundaryRange</code> نمایش داده شود
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationRanges.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/PaginationRanges.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/PaginationRanges.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlled pagination-صفحه بندی کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationControlled.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/PaginationControlled.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/PaginationControlled.js')}
        />
      </Typography>
      {/* <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Router integration
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationLink.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/PaginationLink.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/PaginationLink.js')}
        />
      </Typography> */}
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        <code>usePagination</code>
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده سفارشی‌سازی پیشرفته، یک قلاب بدون سر <code>usePagination()</code> در معرض دید قرار می‌گیرد. تقریباً همان گزینه‌های مؤلفه صفحه‌بندی را منهای همه لوازم مربوط به رندر کردن JSX می‌پذیرد. جزء صفحه بندی بر روی این قلاب ساخته شده است
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import { usePagination } from '@mui/material/Pagination';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UsePagination.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/UsePagination.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/UsePagination.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Table pagination-صفحه بندی جدول
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه <code>Pagination</code> برای صفحه بندی فهرستی از موارد دلخواه در زمانی که بارگذاری بی نهایت استفاده نمی شود طراحی شده است. در زمینه هایی که SEO مهم است، ترجیح داده می شود، به عنوان مثال، وبلاگ.
      </Typography>
      <Typography className="mb-40" component="div">
      برای صفحه بندی مجموعه بزرگی از داده های جدولی، باید از{' '}
        <code>TablePagination</code> component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TablePagination.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pagination/TablePagination.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pagination/TablePagination.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ توجه داشته باشید که پایه صفحه <code>Pagination</code> از عدد 1 شروع می‌شود تا با الزام درج مقدار در URL مطابقت داشته باشد، در حالی که پایه صفحه <code>TablePagination</code> از 0 شروع می‌شود تا با شرط صفر مطابقت داشته باشد. آرایه های جاوا اسکریپت مبتنی بر که با ارائه داده های جدولی زیادی همراه است.
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
      می توانید در مورد این مورد استفاده بیشتر بیاموزید{' '}
        <a href="/components/tables/#custom-pagination-options">table section</a> از مستندات
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       دسترسی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="mb-40" component="div">
        The root node has a role of &quot;navigation&quot; and aria-label &quot;pagination
        navigation&quot; by default. The page items have an aria-label that identifies the purpose
        of the item (&quot;go to first page&quot;, &quot;go to previous page&quot;, &quot;go to page
        1&quot; etc.). You can override these using the <code>getItemAriaLabel</code> prop.
        <br/>
        (انگلیسیش مفهموم بهتر میرسونه)
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        صفحه کلید
      </Typography>
      <Typography className="mb-40" component="div">
      آیتم های صفحه بندی به ترتیب برگه ها با شاخص برگه &quot;0&quot; هستند.
      </Typography>
    </>
  );
}

export default PaginationDoc;
