import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TreeViewDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tree-view"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      نمای درختی      </Typography>
      <Typography className="description">
      ویجت نمای درختی یک لیست سلسله مراتبی را ارائه می دهد.      </Typography>

      <Typography className="mb-40" component="div">
      نماهای درختی را می توان برای نمایش یک ناوبر سیستم فایل که پوشه ها و فایل ها را نمایش می دهد، استفاده کرد، آیتمی که یک پوشه را نشان می دهد را می توان گسترش داد تا محتویات پوشه را که ممکن است فایل ها، پوشه ها یا هر دو باشد، نشان دهد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نمای درختی پایه      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FileSystemNavigator.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/FileSystemNavigator.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/FileSystemNavigator.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چند انتخابی      </Typography>
      <Typography className="mb-40" component="div">
      نمای درختی نیز از چند انتخاب پشتیبانی می کند.      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultiSelectTreeView.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/MultiSelectTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/MultiSelectTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نمای درختی کنترل شده      </Typography>
      <Typography className="mb-40" component="div">
      نمای درختی همچنین یک API کنترل شده ارائه می دهد.      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledTreeView.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/ControlledTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/ControlledTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Rich object
      </Typography>
      <Typography className="mb-40" component="div">
      در حالی که API مؤلفه <code>TreeView</code>/<code>TreeItem</code> انعطاف‌پذیری را به حداکثر می‌رساند، یک مرحله اضافی برای مدیریت یک شی غنی مورد نیاز است.
      </Typography>
      <Typography className="mb-40" component="div">
      بیایید یک متغیر داده با شکل زیر در نظر بگیریم، از بازگشت می‌توان برای مدیریت آن استفاده کرد.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
const data = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    // …
  ],
};
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RichObjectTreeView.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/RichObjectTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/RichObjectTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        ContentComponent prop
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پایه <code>ContentComponent</code> و قلاب <code>useTreeItem</code> برای سفارشی‌سازی بیشتر رفتار TreeItem استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      مانند محدود کردن گسترش به کلیک کردن روی نماد:      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconExpansionTreeView.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/IconExpansionTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/IconExpansionTreeView.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      یا افزایش عرض نشانگر حالت:      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BarTreeView.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/BarTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/BarTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      آیکون های سفارشی، حاشیه و انیمیشن      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedTreeView.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/CustomizedTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/CustomizedTreeView.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      شبیه سازی جیمیل      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GmailTreeView.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/GmailTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/GmailTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اقلام درختی از کار افتاده      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisabledTreeItems.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/DisabledTreeItems.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/DisabledTreeItems.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      رفتار اقلام درختی غیرفعال به پایه <code>disabledItemsFocusable</code> بستگی دارد.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر نادرست است:
      </Typography>
      <ul>
        <li>
          Arrow keys will not focus disabled items and, the next non-disabled item will be focused.
        </li>
        <li>Typing the first character of a disabled item&#39;s label will not focus the item.</li>
        <li>Mouse or keyboard interaction will not expand/collapse disabled items.</li>
        <li>Mouse or keyboard interaction will not select disabled items.</li>
        <li>
          Shift + arrow keys will skip disabled items and, the next non-disabled item will be
          selected.
        </li>
        <li>Programmatic focus will not focus disabled items.</li>
      </ul>
      <Typography className="mb-40" component="div">
      اگر درست باشد:      </Typography>
      <ul>
        <li>Arrow keys will focus disabled items.</li>
        <li>Typing the first character of a disabled item&#39;s label will focus the item.</li>
        <li>Mouse or keyboard interaction will not expand/collapse disabled items.</li>
        <li>Mouse or keyboard interaction will not select disabled items.</li>
        <li>
          Shift + arrow keys will not skip disabled items but, the disabled item will not be
          selected.
        </li>
        <li>Programmatic focus will focus disabled items.</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#TreeView">
          https://www.w3.org/TR/wai-aria-practices/#TreeView
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه از شیوه های تألیف WAI-ARIA پیروی می کند.      </Typography>
      <Typography className="mb-40" component="div">
        To have an accessible tree view you must use <code>aria-labelledby</code> or{' '}
        <code>aria-label</code> to reference or provide a label on the TreeView, otherwise screen
        readers will announce it as &quot;tree&quot;, making it hard to understand the context of a
        specific tree item.
        <br/>
        انگلیسیش مفهوم بهتر میرسونه
      
      </Typography>
    </>
  );
}

export default TreeViewDoc;
