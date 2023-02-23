import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ListsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/lists"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Lists-لیست ها
      </Typography>
      <Typography className="description">
      فهرست ها نمایه های پیوسته و عمودی متن یا تصاویر هستند.
      </Typography>

      <Typography className="mb-40" component="div">
      لیست ها گروهی پیوسته از متن یا تصاویر هستند. آنها از آیتم های حاوی اقدامات اولیه و تکمیلی تشکیل شده اند که با نمادها و متن نشان داده می شوند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic List-لیست پایه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/BasicList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/BasicList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      آخرین مورد از نسخه ی نمایشی قبلی نشان می دهد که چگونه می توانید یک پیوند را ارائه دهید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemButton>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        You can find a{' '}
        <a href="/guides/routing/#list">demo with React Router following this section</a> of the
        documentation.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Nested List-لیست تودرتو
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/NestedList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/NestedList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Folder List-لیست پوشه ها
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FolderList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/FolderList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/FolderList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Interactive-در ارتباط بودن
      </Typography>
      <Typography className="mb-40" component="div">
      در زیر یک نسخه نمایشی تعاملی وجود دارد که به شما امکان می دهد نتایج بصری تنظیمات مختلف را بررسی کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InteractiveList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/InteractiveList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/InteractiveList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Selected ListItem-List Item انتخاب شد
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectedListItem.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/SelectedListItem.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/SelectedListItem.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Align list items-موارد فهرست را تراز کنید
      </Typography>
      <Typography className="mb-40" component="div">
      هنگام نمایش سه خط یا بیشتر، آواتار در بالا تراز نیست. باید پایه <code>alignItems="flex-start"</code> را برای تراز کردن آواتار در بالا، طبق دستورالعمل‌های طراحی مواد تنظیم کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AlignItemsList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/AlignItemsList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/AlignItemsList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        List Controls-لیست کنترل ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Checkbox-چک باکس
      </Typography>
      <Typography className="mb-40" component="div">
      یک چک باکس می تواند یک اقدام اولیه یا یک اقدام ثانویه باشد.
      </Typography>
      <Typography className="mb-40" component="div">
      کادر انتخاب کنش اصلی و نشانگر وضعیت مورد فهرست است. دکمه نظر یک عمل ثانویه و یک هدف جداگانه است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/CheckboxList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/CheckboxList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      چک باکس اقدام ثانویه برای آیتم فهرست و یک هدف جداگانه است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxListSecondary.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/CheckboxListSecondary.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/CheckboxListSecondary.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Switch-تعویض
      </Typography>
      <Typography className="mb-40" component="div">
      سوئیچ یک عمل ثانویه و یک هدف جداگانه است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwitchListSecondary.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/SwitchListSecondary.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/SwitchListSecondary.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      عنوان فرعی چسبنده
      </Typography>
      <Typography className="mb-40" component="div">
      پس از پیمایش، عنوان‌های فرعی به بالای صفحه سنجاق می‌شوند تا زمانی که زیر عنوان بعدی از صفحه خارج شوند. این ویژگی به موقعیت یابی چسبنده CSS متکی است. (⚠️ بدون پشتیبانی از IE 11)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PinnedSubheaderList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/PinnedSubheaderList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/PinnedSubheaderList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Inset List Item-درج مورد فهرست
      </Typography>
      <Typography className="mb-40" component="div">
      سرپ <code>inset</code> یک آیتم لیست را که نماد یا آواتار اصلی ندارد را قادر می‌سازد تا به درستی با مواردی که دارای آن هستند تراز شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InsetList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/InsetList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/InsetList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Gutterless list-لیست بدون ناودان
      </Typography>
      <Typography className="mb-40" component="div">
      هنگام رندر کردن یک لیست در یک مؤلفه که ناودان خود را تعریف می کند، ناودان <code>ListItem</code>{' '} را می توان با <code>disableGutters</code> غیرفعال کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GutterlessList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/GutterlessList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/GutterlessList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Virtualized List-لیست مجازی
      </Typography>
      <Typography className="mb-40" component="div">
      در مثال زیر نحوه استفاده از{' '}
        <a href="https://github.com/bvaughn/react-window">react-window</a> with the{' '}
        <code>List</code> جزء. 200 ردیف را رندر می کند و به راحتی می تواند تعداد بیشتری را مدیریت کند. مجازی سازی به مشکلات عملکرد کمک می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VirtualizedList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/VirtualizedList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/VirtualizedList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The use of <a href="https://github.com/bvaughn/react-window">react-window</a> when possible
        is encouraged. If this library doesn&#39;t cover your use case, you should consider using{' '}
        <a href="https://github.com/bvaughn/react-virtualized">react-virtualized</a>, then
        alternatives like <a href="https://github.com/petyosi/react-virtuoso">react-virtuoso</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می توانید در این مورد بیشتر بدانید
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedList.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/lists/CustomizedList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/lists/CustomizedList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 اگر به دنبال الهام هستید، می توانید بررسی کنید{' '}
        <a href="https://mui-treasury.com/styles/list-item/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
    </>
  );
}

export default ListsDoc;
