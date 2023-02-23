import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AccordionDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/accordion"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Accordion-آکاردئون
      </Typography>
      <Typography className="description">
      مولفه آکاردئون به کاربر این امکان را می دهد که بخش هایی از محتوای مرتبط را در یک صفحه نشان دهد و پنهان کند.
      </Typography>

      <Typography className="mb-40" component="div">
      آکاردئون یک ظرف سبک وزن است که می تواند به صورت مستقل استفاده شود یا به یک سطح بزرگتر مانند کارت متصل شود.
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          <strong>Note:</strong> آکاردئون ها دیگر در مستند نیستند{' '}
          <a href="https://material.io/">Material Design guidelines</a>, اما MUI به حمایت از آنها ادامه خواهد داد. قبلاً به نام &quot;پانل توسعه&quot;.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic accordion-آکاردئون پایه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicAccordion.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/accordion/BasicAccordion.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/accordion/BasicAccordion.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آکاردئون کنترل شده      </Typography>
      <Typography className="mb-40" component="div">
      رفتار پیش فرض را برای ایجاد آکاردئون با <code>Accordion</code>{' '}
      جزء.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledAccordions.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/accordion/ControlledAccordions.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/accordion/ControlledAccordions.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می توانید در این مورد بیشتر بدانید{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedAccordions.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/accordion/CustomizedAccordions.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/accordion/CustomizedAccordions.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کارایی      </Typography>
      <Typography className="mb-40" component="div">
      توای آکاردئون ها به طور پیش فرض نصب می شود حتی اگر آکاردئون گسترش نیابد. این رفتار پیش‌فرض رندر سمت سرور و سئو را در ذهن دارد. اگر درختان جزء گران قیمت را در جزئیات آکاردئون خود رندر می کنید یا به سادگی آکاردئون های زیادی را رندر می کنید، ممکن است ایده خوبی باشد که این رفتار پیش فرض را با فعال کردن
        <code>unmountOnExit</code> در <code>TransitionProps</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Accordion TransitionProps={{ unmountOnExit: true }} />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      مانند هر بهینه سازی عملکرد، این یک گلوله نقره ای نیست. حتما ابتدا تنگناها را شناسایی کنید و سپس این استراتژی های بهینه سازی را امتحان کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#accordion">
          https://www.w3.org/TR/wai-aria-practices/#accordion
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      برای دسترسی بهینه، ما تنظیم را توصیه می کنیم <code>id</code> و{' '}
        <code>aria-controls</code>در
        <code>AccordionSummary</code>. <code>Accordion</code> لازم را استخراج خواهد کرد{' '}
        <code>aria-labelledby</code>
        و <code>id</code> برای منطقه محتوای آکاردئون.
      </Typography>
    </>
  );
}

export default AccordionDoc;
