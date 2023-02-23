import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ImageListDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/image-list"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Image list-لیست عکس
      </Typography>
      <Typography className="description">
      لیست های تصویری مجموعه ای از تصاویر را در یک شبکه سازمان یافته نمایش می دهند.
      </Typography>

      <Typography className="mb-40" component="div">
      لیست های تصویری مجموعه ای از موارد را در یک الگوی تکراری نشان می دهد. آنها به بهبود درک بصری محتوایی که دارند کمک می کنند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Standard image list-لیست تصاویر استاندارد
      </Typography>
      <Typography className="mb-40" component="div">
      لیست های تصویر استاندارد برای موارد با اهمیت یکسان بهترین هستند. اندازه، نسبت و فاصله ظرف یکنواخت دارند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StandardImageList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/StandardImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/StandardImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Quilted image list-لیست تصاویر لحافی
      </Typography>
      <Typography className="mb-40" component="div">
      فهرست‌های تصاویر لحاف‌دار بر برخی از موارد در یک مجموعه بیش از موارد دیگر تأکید دارند. آنها سلسله مراتبی را با استفاده از اندازه ها و نسبت های ظروف مختلف ایجاد می کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="QuiltedImageList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/QuiltedImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/QuiltedImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Woven image list-لیست تصاویر بافته شده
      </Typography>
      <Typography className="mb-40" component="div">
      فهرست‌های تصاویر بافته شده از نسبت‌های کانتینر متناوب برای ایجاد یک طرح‌بندی ریتمیک استفاده می‌کنند. لیست تصاویر بافته شده برای مرور محتوای همتا بهترین است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="WovenImageList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/WovenImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/WovenImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Masonry image list-لیست تصاویر بنایی
      </Typography>
      <Typography className="mb-40" component="div">
      فهرست‌های تصاویر بنایی از ارتفاع ظروف با اندازه پویا استفاده می‌کنند که نسبت ابعاد هر تصویر را منعکس می‌کند. این لیست تصویر بهترین استفاده را برای مرور محتوای همتای بدون برش دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MasonryImageList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/MasonryImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/MasonryImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Image list with title bars-لیست تصاویر با نوار عنوان
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>ImageListItemBar</code> را برای افزودن یک پوشش به هر مورد نشان می دهد. پوشش می‌تواند یک <code>عنوان</code>، <code>زیرنویس</code> و عملکرد ثانویه را در خود جای دهد - در این مثال یک <code>IconButton</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TitlebarImageList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/TitlebarImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/TitlebarImageList.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Title bar below image (standard)-نوار عنوان زیر تصویر (استاندارد)
      </Typography>
      <Typography className="mb-40" component="div">
      نوار عنوان را می توان در زیر تصویر قرار داد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TitlebarBelowImageList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/TitlebarBelowImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/TitlebarBelowImageList.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Title bar below image (masonry)-نوار عنوان زیر تصویر (سنگ تراشی)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TitlebarBelowMasonryImageList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/TitlebarBelowMasonryImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/TitlebarBelowMasonryImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom image list-لیست تصاویر سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      در این مثال، آیتم ها دارای یک نوار عنوان سفارشی شده هستند که در بالا و با یک گرادیان سفارشی <code>titleBackground</code> قرار گرفته است. عمل ثانویه <code>IconButton</code>{' '} در سمت چپ قرار دارد. پایه <code>gap</code> برای تنظیم فاصله بین موارد استفاده می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomImageList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/CustomImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/CustomImageList.js')}
        />
      </Typography>
    </>
  );
}

export default ImageListDoc;
