import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BreadcrumbsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/breadcrumbs"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Breadcrumbs
      </Typography>
      <Typography className="description">
      Breadcrumbs شامل فهرستی از پیوندها است که به کاربر کمک می کند مکان یک صفحه را در ساختار سلسله مراتبی یک وب سایت تجسم کند و به هر یک از "اجداد" آن امکان ناوبری را می دهد.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic breadcrumbs
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/BasicBreadcrumbs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/BasicBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Active last breadcrumb
      </Typography>
      <Typography className="mb-40" component="div">
      آخرین breadcrumb  را تعاملی نگه دارید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ActiveLastBreadcrumb.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/ActiveLastBreadcrumb.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/ActiveLastBreadcrumb.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom separator-جداکننده سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      در مثال های زیر از دو جداکننده رشته و یک نماد SVG استفاده می کنیم.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomSeparator.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/CustomSeparator.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/CustomSeparator.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Breadcrumbs with icons
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/IconBreadcrumbs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/IconBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Collapsed breadcrumbs
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CollapsedBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/CollapsedBreadcrumbs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/CollapsedBreadcrumbs.js')}
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
          name="CustomizedBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/CustomizedBreadcrumbs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/CustomizedBreadcrumbs.js')}
        />
      </Typography>
      {/* <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Integration with react-router
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RouterBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/breadcrumbs/RouterBreadcrumbs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/breadcrumbs/RouterBreadcrumbs.js')}
        />
      </Typography> */}
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb">
          https://www.w3.org/TR/wai-aria-practices/#breadcrumb
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      حتماً یک توضیح <code>aria-label</code> در مؤلفه <code>Breadcrumbs</code>{' '} اضافه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      دسترسی به این مؤلفه به موارد زیر بستگی دارد:
      </Typography>
      <ul>
        <li>
          The set of links is structured using an ordered list (<code>{`<ol>`}</code> element).
        </li>
        <li>
          To prevent screen reader announcement of the visual separators between links, they are
          hidden with <code>aria-hidden</code>.
        </li>
        <li>
          A nav element labeled with <code>aria-label</code> identifies the structure as a
          breadcrumb trail and makes it a navigation landmark so that it is easy to locate.
        </li>
      </ul>
    </>
  );
}

export default BreadcrumbsDoc;
