import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function MasonryDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/masonry"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Masonry-سنگ تراشی
      </Typography>
      <Typography className="description">
      سنگ تراشی محتویات با ابعاد مختلف را به صورت بلوک هایی با عرض و ارتفاع متفاوت با شکاف های قابل تنظیم قرار می دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      سنگ تراشی فهرستی از بلوک های محتوا را با عرض ثابت اما ارتفاع متفاوت حفظ می کند. مطالب بر اساس ردیف مرتب شده اند. اگر یک ردیف از قبل با تعداد ستون های مشخص شده پر شده باشد، مورد بعدی یک ردیف دیگر را شروع می کند و به منظور بهینه سازی استفاده از فضا به کوتاه ترین ستون اضافه می شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic masonry-سنگ تراشی اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      یک مثال ساده از یک <code>Masonry</code>. <code>Masonry</code> ظرفی برای یک یا است
  موارد بیشتر می تواند هر عنصری از جمله <code>{`<div />`}</code> و{' '} را دریافت کند
         <code>{`<img />`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicMasonry.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/BasicMasonry.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/BasicMasonry.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Image masonry-سنگ تراشی تصویر
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>Masonry</code> را برای تصاویر نشان می دهد. <code>Masonry</code>{' '} فرزندان خود را ردیف می کند. اگر می خواهید تصاویر را بر اساس ستون سفارش دهید، بررسی کنید{' '}
        <a href="/components/image-list/#masonry-image-list">ImageList</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ImageMasonry.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/ImageMasonry.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/ImageMasonry.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Items with variable height-اقلام با ارتفاع متغیر
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>Masonry</code> را برای موارد با ارتفاع متغیر نشان می دهد. آیتم ها می توانند به ستون های دیگر منتقل شوند تا از این قانون پیروی کنند که موارد همیشه به کوتاه ترین ستون اضافه می شوند و در نتیجه استفاده از فضا را بهینه می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MasonryWithVariableHeightItems.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/MasonryWithVariableHeightItems.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/MasonryWithVariableHeightItems.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Columns-ستون ها
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>ستون‌ها</code> را برای پیکربندی تعداد ستون‌های یک <code>Masonry</code> نشان می‌دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedColumns.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/FixedColumns.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/FixedColumns.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      <code>columns</code> مقادیر پاسخگو را می پذیرد:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveColumns.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/ResponsiveColumns.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/ResponsiveColumns.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Spacing-فاصله گذاری
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>فاصله</code> را برای پیکربندی فاصله بین آیتم ها نشان می دهد. توجه به این نکته مهم است که مقدار ارائه شده به قسمت <code>spacing</code>{' '} در قسمت فاصله موضوع ضرب می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedSpacing.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/FixedSpacing.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/FixedSpacing.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      <code>spacing</code> مقادیر پاسخگو را می پذیرد:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveSpacing.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/ResponsiveSpacing.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/ResponsiveSpacing.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Server-side rendering-رندر سمت سرور
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>defaultHeight</code>،{' '} <code>defaultColumns</code> و <code>defaultSpacing</code> را نشان می‌دهد که برای پشتیبانی از رندر سمت سرور استفاده می‌شوند.
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
        <strong>Note</strong>: <code>defaultHeight</code> باید به اندازه‌ای بزرگ باشد که بتواند همه ردیف‌ها را نمایش دهد. همچنین قابل ذکر است که موارد در صورت رندر سمت سرور به کوتاه ترین ستون اضافه نمی شود.
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SSRMasonry.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/SSRMasonry.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/SSRMasonry.js')}
        />
      </Typography>
    </>
  );
}

export default MasonryDoc;
