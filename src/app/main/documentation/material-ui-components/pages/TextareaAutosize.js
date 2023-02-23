import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TextareaAutosizeDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/textarea-autosize"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Textarea Autosize
      </Typography>
      <Typography className="description">
      یک جزء متنی برای React که با محتوا رشد می کند.
      </Typography>

      <ul>
        <li>
          📦 <a href="/size-snapshot">2.1 kB gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      مؤلفه <code>TextareaAutosize</code> به طور خودکار ارتفاع ناحیه متنی را در رویدادهای تغییر اندازه صفحه کلید و پنجره تنظیم می کند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Empty-خالی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="EmptyTextarea.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/textarea-autosize/EmptyTextarea.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/textarea-autosize/EmptyTextarea.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      حداقل ارتفاع
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MinHeightTextarea.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/textarea-autosize/MinHeightTextarea.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/textarea-autosize/MinHeightTextarea.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      حداکثر ارتفاع
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MaxHeightTextarea.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/textarea-autosize/MaxHeightTextarea.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/textarea-autosize/MaxHeightTextarea.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بی استایل
      </Typography>
      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/package/@mui/base@latest">784 B gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      از آنجایی که کامپوننت هیچ استایلی ندارد، بسته Base نیز دارد.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import TextareaAutosize from '@mui/base/TextareaAutosize';
`}
      </FuseHighlight>
    </>
  );
}

export default TextareaAutosizeDoc;
