import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function RTLSupportDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        پشتیبانی از راستچین و چپ چین - RTL-LTR Support
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse React از زبان های راست به چپ مانند عربی، فارسی یا عبری و غیره پشتیبانی می کند.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Development
      </Typography>

      <Typography className="mb-16" component="p">
        دو پلاگین
        <a
          href="https://github.com/RonMelkhior/tailwindcss-dir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>tailwindcss-dir</code>
        </a>{' '}
        و
        {' '}
        <a href="https://github.com/alitaheri/jss-rtl" target="_blank" rel="noopener noreferrer">
          <code>jss-rtl</code>
        </a>{' '}
        وجود دارد که ما از آنها برای توسعه پشتیبانی RTL از Fuse React استفاده می کنیم.

      </Typography>

      <Typography className="mb-16" component="p">
        <a href="https://github.com/alitaheri/jss-rtl" target="_blank" rel="noopener noreferrer">
          <code>jss-rtl</code>
        </a>{' '}
        با برگرداندن هر قانون سبک های jss در محور x، پشتیبانی از راست به چپ را فعال می کند. با استفاده از این افزونه می توانید برنامه را از چپ به راست بنویسید و سپس آن را به راست به چپ تبدیل کنید. یا می توانید از راست به چپ شروع کنید و آن را به چپ به راست تبدیل کنید.

      </Typography>

      <Typography className="mb-16" component="p">
        <a
          href="https://github.com/RonMelkhior/tailwindcss-dir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>tailwindcss-dir</code>
        </a>{' '}
        یک نوع جهت سفارشی را به پروژه tailwind شما اضافه می کند و به شما امکان می دهد قوانین CSS سفارشی برای طرح بندی های LTR و RTL داشته باشید. مثلا:

      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
                            <div class="text-green text-2xl ltr:pl-4 rtl:pr-4">
                                Hello, world.
                            </div>
                        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Configuration
      </Typography>

      <Typography className="mb-16" component="p">
      برای تغییر جهت پیش‌فرض Fuse React، باید تنظیمات جهت را در فایل 
      <code>src/app/fuse-configs/settingsConfig.js</code>
       تغییر دهید.

      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!app/fuse-configs/settingsConfig.js')}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Dynamically Direction Changing
      </Typography>

      <Typography className="mb-16" component="p">
      اگر می خواهید جهت تم را به صورت پویا تغییر دهید، برای مثال زمانی که باید LTR را به زبان RTL تغییر دهید، باید اقدامی را مانند زیر ارسال کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
                            dispatch(setDefaultSettings({direction: 'rtl'}));
                        `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        نمونه در این فایل وجود دارد: 
        <code>src/app/fuse-layouts/shared-components/LanguageSwitcher.js</code>
      </Typography>
    </>
  );
}

export default RTLSupportDoc;
