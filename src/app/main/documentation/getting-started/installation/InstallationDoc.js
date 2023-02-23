import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function InstallationDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Installation
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Prerequisites
      </Typography>

      <Typography className="mb-16" component="p">
        در این بخش اطلاعاتی در مورد ابزارهایی که نیاز دارید به شما ارائه می شود.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Node.js
      </Typography>

      <Typography className="mb-16" component="p">
        برای نصب قالب شما به{' '}
        <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener">
          Node.js
        </a>{' '}بر روی سیستم خود نیاز دارید.&nbsp;
        ما به جزئیات زیادی در مورد Node.js نمی پردازیم زیرا خارج از محدوده این مستندات است. همچنین، نیازی به استفاده از Node.js نخواهید داشت، فقط برای فرآیند توسعه مورد نیاز است.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Installation
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        A. Installing Prerequisites
      </Typography>

      <Typography className="my-16" component="div">
        <ol>
          <li className="mb-16">
            حداقل LTS یا آخرین نسخه
            {' '}<a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener">
              Node.js
            </a>{' '}
            را از وب سایت آن دانلود و نصب کنید.
          </li>
        </ol>
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        B. Installing Fuse React
      </Typography>

      <Typography className="my-16" component="div">
        <ol>
          <li className="mb-16">
            فایل فشرده ای را که از Themeforest دانلود کرده اید از حالت فشرده خارج کنید. در داخل فایل فشرده، پروژه Skeleton (Fuse-react-x.x.x-skeleton.zip) را به همراه پروژه آزمایشی (Fuse-react-x.x.x-demo.zip)، طرح های PSD و یک فایل readme خواهید دید.
          </li>
          <li className="mb-16">
          محتویات فایل فشرده (Fuse-react-x.x.x-skeleton.zip) را در پوشه ای که در آن کار خواهید کرد استخراج کنید. برای این مستندات، ما به آن به عنوان "پوشه کاری شما" اشاره می کنیم.
          </li>
          <li className="mb-16">
          برنامه کنسول مورد علاقه خود (ترمینال، خط فرمان و غیره) را باز کنید، به پوشه کاری خود بروید، دستور زیر را اجرا کنید و منتظر بمانید تا تمام شود:
            <FuseHighlight component="pre" className="language-bash my-16">
              {` npm install `}
            </FuseHighlight>
            این دستور تمام ماژول های Node.js مورد نیاز را در پوشه کاری node_modules نصب می کند.
            <Typography className="mt-16" component="p">
            و اکنون، برای اولین بار آماده اجرای Fuse React هستید.
            </Typography>
          </li>
        </ol>
      </Typography>
    </>
  );
}

export default InstallationDoc;
