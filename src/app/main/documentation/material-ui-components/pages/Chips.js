import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ChipsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/chips"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Chip-تراشه
      </Typography>
      <Typography className="description">
      تراشه ها عناصر فشرده ای هستند که یک ورودی، ویژگی یا عمل را نشان می دهند.
      </Typography>

      <Typography className="mb-40" component="div">
      تراشه‌ها به کاربران اجازه می‌دهند اطلاعات را وارد کنند، انتخاب‌هایی انجام دهند، محتوا را فیلتر کنند یا اقداماتی را آغاز کنند.
      </Typography>
      <Typography className="mb-40" component="div">
      در حالی که در اینجا به عنوان یک مؤلفه مستقل گنجانده شده است، رایج ترین استفاده در برخی از اشکال ورودی است، بنابراین برخی از رفتارهای نشان داده شده در اینجا در زمینه نشان داده نمی شوند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic chip-تراشه اصلی
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه <code>Chip</code> از یک ظاهر طراحی شده و پر شده پشتیبانی می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicChips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/BasicChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/BasicChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip actions-اقدامات تراشه
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از اقدامات زیر استفاده کنید.
      </Typography>
      <ul>
        <li>
          Chips with the <code>onClick</code> prop defined change appearance on focus, hover, and
          click.
        </li>
        <li>
          Chips with the <code>onDelete</code> prop defined will display a delete icon which changes
          appearance on hover.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      قابل کلیک
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickableChips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ClickableChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ClickableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      قابل حذف
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DeletableChips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/DeletableChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/DeletableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      قابل کلیک و حذف
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickableAndDeletableChips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ClickableAndDeletableChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ClickableAndDeletableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      لینک قابل کلیک
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickableLinkChips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ClickableLinkChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ClickableLinkChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      نماد حذف سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomDeleteIconChips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/CustomDeleteIconChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/CustomDeleteIconChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تزئینات تراشه ای
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید تزئینات را به ابتدای کامپوننت اضافه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      برای افزودن یک آواتار از پایه <code>avatar</code> یا برای افزودن یک نماد از پایه <code>icon</code> استفاده کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Avatar chip-تراشه آواتار
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AvatarChips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/AvatarChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/AvatarChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Icon chip-تراشه آیکون
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconChips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/IconChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/IconChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color chip-تراشه رنگی
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پایه <code>color</code> برای تعریف رنگ از پالت تم استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorChips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ColorChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ColorChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes chip-تراشه اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای تعریف یک تراشه کوچک می توانید از پروپ <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizesChips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/SizesChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/SizesChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip array-آرایه تراشه
      </Typography>
      <Typography className="mb-40" component="div">
      مثالی از رندر کردن چند تراشه از آرایه ای از مقادیر. حذف یک تراشه آن را از آرایه حذف می کند. توجه داشته باشید که از آنجایی که خیر
      پایه <code>onClick</code> تعریف شده است، <code>تراشه</code> را می توان فوکوس کرد، اما با کلیک یا لمس عمق پیدا نمی کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ChipsArray.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ChipsArray.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ChipsArray.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip playground-زمین بازی چیپ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ChipsPlayground.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ChipsPlayground.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ChipsPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      اگر تراشه قابل حذف یا کلیک باشد، یک دکمه به ترتیب تب است. هنگامی که تراشه متمرکز است (به عنوان مثال هنگام استفاده از زبانه ها) در حال انتشار (<code>keyup</code> رویداد) <code>Backspace</code> یا{' '}
  <code>Delete</code> کنترل کننده <code>onDelete</code> را فراخوانی می کند در حالی که آزاد کردن{' '} <code>Escape</code> تراشه را محو می کند.
      </Typography>
    </>
  );
}

export default ChipsDoc;
