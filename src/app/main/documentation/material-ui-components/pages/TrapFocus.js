import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TrapFocusDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/trap-focus"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Trap Focus
      </Typography>
      <Typography className="description">تمرکز را در یک گره DOM به دام بیندازید.</Typography>

      <Typography className="mb-40" component="div">
      TrapFocus مؤلفه ای است که تمرکز را برای فرزندان خود مدیریت می کند. این در هنگام اجرای همپوشانی‌هایی مانند دیالوگ‌های مدال مفید است، که نباید اجازه دهد هنگام باز بودن فوکوس از بین برود.
      </Typography>
      <Typography className="mb-40" component="div">
        When <code>{`open={true}`}</code> the trap is enabled, and pressing{' '}
        <kbd className="key">Tab</kbd> or{' '}
        <kbd>
          <kbd className="key">Shift</kbd>+<kbd className="key">Tab</kbd>
        </kbd>{' '}
        will rotate focus within the inner focusable elements of the component.
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ جزء آزمایشی و ناپایدار است.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مثال
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTrapFocus.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/trap-focus/BasicTrapFocus.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/trap-focus/BasicTrapFocus.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بی استایل      </Typography>
      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/package/@mui/base@latest">2.0 kB gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      از آنجایی که کامپوننت هیچ استایلی ندارد، بسته Base نیز دارد.      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import TrapFocus from '@mui/base/Unstable_TrapFocus';
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      فوکوس را غیرفعال کنید
      </Typography>
      <Typography className="mb-40" component="div">
      کلیک‌های درون تله فوکوس به‌طور معمول رفتار می‌کنند، اما کلیک‌های خارج از تله فوکوس مسدود می‌شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید این رفتار را با پروپوزال <code>disableEnforceFocus</code> غیرفعال کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisableEnforceFocus.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/trap-focus/DisableEnforceFocus.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/trap-focus/DisableEnforceFocus.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Lazy activation
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، مؤلفه به محض باز شدن، فوکوس را به فرزندان خود منتقل می کند:{' '}
        <code>{`open={true}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید این رفتار را غیرفعال کرده و با پروپوزال <code>disableAutoFocus</code> تنبل کنید.
  هنگامی که فوکوس خودکار غیرفعال است، مانند نسخه نمایشی زیر، مؤلفه تنها زمانی که فوکوس شود، فوکوس را به دام می‌اندازد.   
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LazyTrapFocus.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/trap-focus/LazyTrapFocus.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/trap-focus/LazyTrapFocus.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پورتال
      </Typography>
      <Typography className="mb-40" component="div">
      نسخه نمایشی زیر از{' '}
        <a href="/components/portal/">
         
          <code>Portal</code>
        </a>{' '} استفاده می‌کند

        مؤلفه ای برای ارائه زیرمجموعه ای از تله تمرکز کودکان در یک &laquo;زیردرخت&raquo;
         خارج از سلسله مراتب فعلی DOM؛ به طوری که آنها دیگر بخشی از حلقه تمرکز را تشکیل نمی دهند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PortalTrapFocus.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/trap-focus/PortalTrapFocus.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/trap-focus/PortalTrapFocus.js')}
        />
      </Typography>
    </>
  );
}

export default TrapFocusDoc;
