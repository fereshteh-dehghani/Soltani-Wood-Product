import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function LinksDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/links"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Links-لینک ها
      </Typography>
      <Typography className="description">
      مؤلفه پیوند به شما امکان می دهد تا به راحتی عناصر لنگر را با رنگ های تم و سبک های تایپوگرافی خود سفارشی کنید.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic links-لینک های اساسی
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه پیوند در بالای مؤلفه <a href="/api/typography/">تایپوگرافی</a>{' '} ساخته شده است، به این معنی که می توانید از لوازم آن استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Links.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/links/Links.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/links/Links.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      با این حال، مولفه Link دارای چندین ویژگی پیش‌فرض متفاوت از مؤلفه تایپوگرافی است:
      </Typography>
      <ul>
        <li>
          <code>color="primary"</code> as the link needs to stand out.
        </li>
        <li>
          <code>variant="inherit"</code> as the link will, most of the time, be used as a child of a
          Typography component.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Underline-زیر خط
      </Typography>
      <Typography className="mb-40" component="div">
      برای تنظیم رفتار زیرخط می‌توان از پایه <code>underline</code> استفاده کرد. پیش فرض {' '} <code>همیشه</code> است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnderlineLink.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/links/UnderlineLink.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/links/UnderlineLink.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Security-امنیت
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی از <code>target="_blank"</code> با پیوندها استفاده می کنید،{' '}
      <a href="https://developers.google.com/web/tools/lighthouse/audits/noopener">توصیه می‌شود</a>{' '} همیشه <code>rel="noopener"</code> را تنظیم کنید یا <code>rel="noreferrer"</code> هنگام پیوند دادن به محتوای شخص ثالث.
      </Typography>
      <ul>
        <li>
          <code>rel="noopener"</code> prevents the new page from being able to access the{' '}
          <code>window.opener</code> property and ensures it runs in a separate process. Without
          this, the target page can potentially redirect your page to a malicious URL.
        </li>
        <li>
          <code>rel="noreferrer"</code> has the same effect, but also prevents the <em>Referer</em>{' '}
          header from being sent to the new page. ⚠️ Removing the referrer header will affect
          analytics.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Third-party routing library-کتابخانه مسیریابی شخص ثالث
      </Typography>
      <Typography className="mb-40" component="div">
      یکی از موارد استفاده مکرر این است که فقط روی کلاینت پیمایش انجام شود، بدون اینکه HTTP رفت و برگشت به سرور داشته باشد. مؤلفه <code>Link</code> {' '}
      پایه <code>component</code> برای رسیدگی به این مورد استفاده. اینجا یک است{' '}
        <a href="/guides/routing/#link">more detailed guide</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#link">
          https://www.w3.org/TR/wai-aria-practices/#link
        </a>
        )
      </Typography>
      <ul>
        <li>
          When providing the content for the link, avoid generic descriptions like &quot;click
          here&quot; or &quot;go to&quot;. Instead, use{' '}
          <a href="https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text">
            specific descriptions
          </a>
          .
        </li>
        <li>
          For the best user experience, links should stand out from the text on the page. For
          instance, you can keep the default <code>underline="always"</code> behavior.
        </li>
        <li>
          If a link doesn&#39;t have a meaningful href,{' '}
          <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
            it should be rendered using a <code>{`<button>`}</code> element
          </a>
          .
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonLink.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/links/ButtonLink.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/links/ButtonLink.js')}
        />
      </Typography>
    </>
  );
}

export default LinksDoc;
