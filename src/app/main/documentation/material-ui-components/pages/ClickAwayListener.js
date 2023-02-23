import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ClickAwayListenerDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/click-away-listener"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Click away listener
      </Typography>
      <Typography className="description">
      تشخیص اینکه آیا رویداد کلیکی خارج از یک عنصر اتفاق افتاده است یا خیر. به کلیک هایی که در جایی از سند رخ می دهد گوش می دهد.
      </Typography>

      <ul>
        <li>
          📦 <a href="/size-snapshot">1.5 kB gzipped</a>.
        </li>
        <li>⚛️ Support portals</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مثال
      </Typography>
      <Typography className="mb-40" component="div">
      به عنوان مثال، اگر نیاز دارید زمانی که افراد در هر نقطه دیگری از صفحه شما کلیک می کنند، یک منوی کشویی را پنهان کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickAway.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/click-away-listener/ClickAway.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/click-away-listener/ClickAway.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      توجه داشته باشید که کامپوننت فقط یک عنصر فرزند را می پذیرد. می توانید نسخه ی نمایشی پیشرفته تری را در آن پیدا کنید <a href="/components/menus/#menulist-composition">Menu documentation section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پورتال
      </Typography>
      <Typography className="mb-40" component="div">
      نسخه ی نمایشی زیر از{' '} استفاده می کند
      <a href="/components/portal/">
      <code>Portal</code>
      </a>{' '} برای تبدیل کشویی به یک &quot;زیردرخت&quot; خارج از سلسله مراتب فعلی DOM.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PortalClickAway.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/click-away-listener/PortalClickAway.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/click-away-listener/PortalClickAway.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Leading edge
      </Typography>
      <Typography className="mb-40" component="div">
      به‌طور پیش‌فرض، مؤلفه به رویدادهای انتهایی پاسخ می‌دهد (کلیک + پایان لمس). با این حال، می‌توانید آن را طوری پیکربندی کنید که به رویدادهای پیشرو پاسخ دهد (پایان دادن ماوس + شروع لمسی).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LeadingClickAway.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/click-away-listener/LeadingClickAway.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/click-away-listener/LeadingClickAway.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ در این حالت، فقط فعل و انفعالات روی نوار اسکرول سند نادیده گرفته می شود.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض <code>{`<ClickAwayListener />`}</code> یک کنترل کننده <code>onClick</code> را به فرزندان خود اضافه می کند. این می تواند به عنوان مثال منجر شود. صفحه‌خوان‌هایی که کودکان را قابل کلیک اعلام می‌کنند. با این حال، هدف کنترل کننده <code>onClick</code> این نیست که{' '}
      تعاملی <code>children</code>. 
      </Typography>
      <Typography className="mb-40" component="div">
      به منظور جلوگیری از علامت‌گذاری صفحه‌خوان‌های غیرتعاملی به‌عنوان &laquo;قابل کلیک&raquo; <code>role="presentation"</code> را به فرزندان فوری اضافه کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-tsx">
        {` 
<ClickAwayListener>
  <div role="presentation">
    <h1>non-interactive heading</h1>
  </div>
</ClickAwayListern>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        This is also required to fix a quirk in NVDA when using Firefox that prevents announcement
        of alert messages (see{' '}
        <a href="https://github.com/mui/material-ui/issues/29080">mui/material-ui#29080</a>).
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
      از آنجایی که کامپوننت هیچ گونه سبکی ندارد، با بسته پایه نیز همراه است.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import ClickAwayListener from '@mui/base/ClickAwayListener';
`}
      </FuseHighlight>
    </>
  );
}

export default ClickAwayListenerDoc;
