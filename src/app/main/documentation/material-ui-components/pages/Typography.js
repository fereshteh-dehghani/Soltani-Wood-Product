import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TypographyDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/typography"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      تایپوگرافی
      </Typography>
      <Typography className="description">
      از تایپوگرافی برای ارائه طرح و محتوای خود تا حد امکان واضح و کارآمد استفاده کنید.
      </Typography>

      <Typography className="mb-40" component="div">
      اندازه های تایپ و سبک های زیاد به طور همزمان می تواند هر طرحی را خراب کند{' '}
        <a href="https://material.io/design/typography/#type-scale">مقیاس تایپوگرافی</a> دارای مجموعه محدودی از اندازه‌های نوع است که همراه با شبکه طرح‌بندی به خوبی کار می‌کنند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      عمومی
      </Typography>
      <Typography className="mb-40" component="div">
        The <em>Roboto</em> font will <strong>not</strong> be automatically loaded by MUI. You are
        responsible for loading any fonts used in your application. Roboto Font has a few easy ways
        to get started. For more advanced configuration, check out
        <a href="/customization/typography/">the theme customization section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Roboto Font CDN
      </Typography>
      <Typography className="mb-40" component="div">
      در زیر یک نمونه نشانه گذاری پیوند مورد استفاده برای بارگیری فونت Roboto از یک CDN نشان داده شده است:      </Typography>

      <FuseHighlight component="pre" className="language-html">
        {` 
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Install with npm-با npm نصب کنید
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید با تایپ دستور زیر در ترمینال خود<a href="https://www.npmjs.com/package/@fontsource/roboto">آن را نصب کنید</a> 
      </Typography>
      <Typography className="mb-40" component="div">
        <code>npm install @fontsource/roboto</code>
      </Typography>
      <Typography className="mb-40" component="div">
      سپس، می توانید آن را در نقطه ورود خود وارد کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        For more info check out <a href="https://github.com/fontsource/fontsource">Fontsource</a>.
      </Typography>
      <Typography className="mb-40" component="div">
      منبع فونت را می توان برای بارگیری زیرمجموعه ها، وزن ها و سبک های خاص پیکربندی کرد. پیکربندی پیش‌فرض تایپوگرافی MUI فقط بر وزن فونت‌های 300، 400، 500 و 700 متکی است.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Component-مولفه
      </Typography>
      <Typography className="mb-40" component="div">
      مولفه تایپوگرافی اعمال یک مجموعه پیش فرض از وزن و اندازه فونت را در برنامه شما آسان می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Types.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/typography/Types.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/typography/Types.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Theme-موضوع
      </Typography>
      <Typography className="mb-40" component="div">
        In some situations you might not be able to use the <code>Typography</code> component.
        Hopefully, you might be able to take advantage of the{' '}
        <a href="/customization/default-theme/?expand-path=$.typography">
          <code>typography</code>
        </a>{' '}
        keys of the theme.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TypographyTheme.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/typography/TypographyTheme.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/typography/TypographyTheme.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تغییر عنصر معنایی      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه تایپوگرافی از پایه <code>variantMapping</code> برای مرتبط کردن یک نوع رابط کاربری با یک عنصر معنایی استفاده می کند. مهم است که بدانیم سبک یک جزء تایپوگرافی مستقل از عنصر زیربنایی معنایی است.
      </Typography>
      <ul>
        <li>
          You can change the underlying element for a one-off situation with the{' '}
          <code>component</code> prop:
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
{
  /* There is already an h1 in the page, let's not duplicate it. */
}
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>;
`}
      </FuseHighlight>
      <ul>
        <li>
          You can change the mapping{' '}
          <a href="/customization/theme-components/#default-props">globally using the theme</a>:
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-js">
        {` 
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Adding &amp; disabling variants-افزودن و غیرفعال کردن انواع
      </Typography>
      <Typography className="mb-40" component="div">
      علاوه بر استفاده از انواع تایپوگرافی پیش فرض، می توانید انواع سفارشی را اضافه کنید یا غیرفعال کنید
         هر چیزی که نیاز ندارید ببینید{' '}
        <a href="/customization/typography/#adding-amp-disabling-variants">
        افزودن &amp; غیرفعال کردن انواع
        </a>{' '}
        مثال برای اطلاعات بیشتر
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لوازم سیستم
      </Typography>
      <Typography className="mb-40" component="div">
      به عنوان یک مؤلفه ابزار <code>Typography</code> از همه پشتیبانی می کند{' '}
        <a href="/system/properties/">
          <code>system</code>
        </a>{' '}
        ویژگی. می توانید از آنها به عنوان پایه مستقیماً روی کامپوننت استفاده کنید. به عنوان مثال، یک حاشیه بالا:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Typography mt={2}>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility-دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      چند فاکتور کلیدی که برای یک تایپوگرافی قابل دسترسی باید رعایت شود:
      </Typography>
      <ul>
        <li>
          <strong>Color</strong>. Provide enough contrast between text and its background, check out
          the minimum recommended{' '}
          <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">
            WCAG 2.0 color contrast ratio
          </a>{' '}
          (4.5:1).
        </li>
        <li>
          <strong>Font size</strong>. Use{' '}
          <a href="/customization/typography/#font-size">relative units (rem)</a> to accommodate the
          user&#39;s settings.
        </li>
        <li>
          <strong>Heading hierarchy</strong>.{' '}
          <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Don&#39;t skip</a>{' '}
          heading levels. In order to solve this problem, you need to{' '}
          <a href="#changing-the-semantic-element">separate the semantics from the style</a>.
        </li>
      </ul>
    </>
  );
}

export default TypographyDoc;
