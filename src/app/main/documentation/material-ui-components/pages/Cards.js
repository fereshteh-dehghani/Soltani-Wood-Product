import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function CardsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/cards"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Card
      </Typography>
      <Typography className="description">
      کارت ها حاوی محتوا و اقدامات مربوط به یک موضوع واحد هستند.
      </Typography>

      <Typography className="mb-40" component="div">
      کارت ها سطوحی هستند که محتوا و اقدامات مربوط به یک موضوع را نمایش می دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      اسکن آنها برای اطلاعات مرتبط و قابل اجرا باید آسان باشد. عناصری مانند متن و تصاویر باید به گونه ای بر روی آنها قرار گیرند که به وضوح نشان دهنده سلسله مراتب باشد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic card-کارت پایه
      </Typography>
      <Typography className="mb-40" component="div">
      اگرچه کارت‌ها می‌توانند چندین عملکرد، کنترل‌های UI و منوی سرریز را پشتیبانی کنند، از محدودیت استفاده کنید و به یاد داشته باشید که کارت‌ها نقاط ورود به اطلاعات پیچیده‌تر و دقیق‌تر هستند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicCard.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/BasicCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/BasicCard.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Outlined Card-کارت مشخص شده
      </Typography>
      <Typography className="mb-40" component="div">
      <code>variant="outlined"</code> را برای ارائه یک کارت مشخص شده تنظیم کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OutlinedCard.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/OutlinedCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/OutlinedCard.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complex Interaction
      </Typography>
      <Typography className="mb-40" component="div">
      در دسکتاپ، محتوای کارت می تواند گسترش یابد. (برای مشاهده دستور غذا بر روی شورون رو به پایین کلیک کنید.)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RecipeReviewCard.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/RecipeReviewCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/RecipeReviewCard.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Media-رسانه ها
      </Typography>
      <Typography className="mb-40" component="div">
      نمونه کارتی که از یک تصویر برای تقویت محتوا استفاده می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MediaCard.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/MediaCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/MediaCard.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، ما از ترکیب یک عنصر <code>{`<div>`}</code> و یک{' '}<em>background image</em> برای نمایش رسانه استفاده می‌کنیم. در برخی شرایط ممکن است مشکل ساز باشد، به عنوان مثال، ممکن است بخواهید یک ویدیو یا یک تصویر واکنشگرا نمایش دهید. برای موارد استفاده از {' '} <code>component</code> prop استفاده کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ImgMediaCard.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/ImgMediaCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/ImgMediaCard.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ When <code>component="img"</code>, CardMedia relies on <code>object-fit</code> for
          centering the image. It&#39;s not supported by IE11.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Primary action
      </Typography>
      <Typography className="mb-40" component="div">
      اغلب یک کارت به کاربران اجازه می دهد تا با تمام سطح آن تعامل داشته باشند تا عملکرد اصلی آن را آغاز کنند، خواه یک بسط، پیوند به صفحه دیگر یا رفتار دیگری باشد. ناحیه عمل کارت را می توان با قرار دادن محتویات آن در یک جزء <code>CardActionArea</code>{' '} مشخص کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ActionAreaCard.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/ActionAreaCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/ActionAreaCard.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      یک کارت همچنین می تواند اقدامات تکمیلی را ارائه دهد که باید از ناحیه اصلی عمل جدا باشد تا از همپوشانی رویدادها جلوگیری شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultiActionAreaCard.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/MultiActionAreaCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/MultiActionAreaCard.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        UI Controls
      </Typography>
      <Typography className="mb-40" component="div">
      اقدامات تکمیلی در کارت به صراحت با استفاده از نمادها، متن و کنترل‌های رابط کاربری که معمولاً در پایین کارت قرار می‌گیرند، فراخوانی می‌شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از کارت کنترل رسانه آورده شده است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MediaControlCard.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/MediaControlCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/MediaControlCard.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 اگر به دنبال الهام هستید، می توانید بررسی کنید{' '}
        <a href="https://mui-treasury.com/components/card/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
    </>
  );
}

export default CardsDoc;
