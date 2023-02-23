import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TooltipsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tooltips"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      راهنمای ابزار 
     </Typography>
      <Typography className="description">
      هنگامی که کاربران ماوس را روی یک عنصر می‌برند، روی آن تمرکز می‌کنند یا روی آن ضربه می‌زنند، راهنمای ابزار متن آموزنده را نمایش می‌دهد.      </Typography>

      <Typography className="mb-40" component="div">
      هنگامی که Tooltips فعال می شود، برچسب متنی را نشان می دهد که یک عنصر را شناسایی می کند، مانند شرح عملکرد آن.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      راهنمای ابزار اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTooltip.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/BasicTooltip.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/BasicTooltip.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نکات ابزار موقعیت‌یافته
      </Typography>
      <Typography className="mb-40" component="div">
      <code>نکته ابزار</code> دارای 12 انتخاب <strong>مکان</strong> است. آنها فلش جهت دار ندارند. در عوض، آنها برای انتقال جهت به حرکتی که از منبع سرچشمه می‌گیرد تکیه می‌کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PositionedTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/PositionedTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/PositionedTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی 
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>درباره این موضوع بیشتر بیاموزید..
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/CustomizedTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/CustomizedTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      راهنمای ابزار پیکان
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پایه <code>پیکان</code> استفاده کنید تا به راهنمای ابزار خود فلشی بدهید که نشان می‌دهد به کدام عنصر اشاره دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ArrowTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/ArrowTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/ArrowTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      عنصر فرزند سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      راهنمای ابزار باید شنوندگان رویداد DOM را در عنصر فرزند خود اعمال کند. اگر فرزند یک عنصر React سفارشی است، باید مطمئن شوید که عناصر خود را به عنصر DOM زیرین گسترش می‌دهد.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const MyComponent = React.forwardRef(function MyComponent(props, ref) {
  //  Spread the props to the underlying DOM element.
  return <div {...props} ref={ref}>Bin</div>
});

// ...

<Tooltip title="Delete">
  <MyComponent>
</Tooltip>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        You can find a similar concept in the{' '}
        <a href="/guides/composition/#wrapping-components">wrapping components</a> guide.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Triggers-محرک ها
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید انواع رویدادهایی را که باعث نمایش راهنمای ابزار می شوند تعریف کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      عمل لمسی به فشار طولانی نیاز دارد زیرا پایه <code>enterTouchDelay</code> به طور پیش فرض روی <code>700</code>ms تنظیم شده است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TriggersTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/TriggersTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/TriggersTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نکات ابزار کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      برای کنترل رفتار راهنمای ابزار می‌توانید از عناصر <code>open</code>، <code>onOpen</code> و <code>onClose</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/ControlledTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/ControlledTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      عرض متغیر
      </Typography>
      <Typography className="mb-40" component="div">
      <code>Tooltip</code> به طور پیش‌فرض متن طولانی را می‌پیچد تا قابل خواندن باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariableWidth.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/VariableWidth.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/VariableWidth.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Interactive-در ارتباط بودن
      </Typography>
      <Typography className="mb-40" component="div">
        Tooltips are interactive by default (to pass{' '}
        <a href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">
          WCAG 2.1 success criterion 1.4.13
        </a>
        ). It won&#39;t close when the user hovers over the tooltip before the{' '}
        <code>leaveDelay</code> is expired. You can disable this behavior (thus failing the success
        criterion which is required to reach level AA) by passing <code>disableInteractive</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NonInteractiveTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/NonInteractiveTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/NonInteractiveTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      عناصر غیر فعال 
       </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش‌فرض عناصر غیرفعال شده مانند <code>{`<button>`}</code> باعث ایجاد تعامل با کاربر نمی‌شوند.
      بنابراین یک <code>Tooltip</code> در رویدادهای عادی مانند شناور فعال نمی شود. برای قرار دادن عناصر غیرفعال، یک عنصر پیچیده ساده مانند <code>span</code> اضافه کنید.
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ به منظور کار با سافاری، حداقل به یک بلوک نمایشگر یا آیتم انعطاف پذیر در زیر پوشش راهنمای ابزار نیاز دارید.
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisabledTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/DisabledTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/DisabledTooltips.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
        اگر یک مؤلفه MUI را که از <code>ButtonBase</code> به ارث می برد، به عنوان مثال، یک عنصر <code>{`<button>`}</code> به ارث نمی برد، باید CSS را نیز اضافه کنید. ویژگی{' '}
        <em>pointer-events: none;</em> به عنصر شما در صورت غیرفعال شدن:
        </Typography>
      </blockquote>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Tooltip title="You don't have permission to do this">
  <span>
    <button disabled={disabled} style={disabled ? { pointerEvents: 'none' } : {}}>
      A disabled button
    </button>
  </span>
</Tooltip>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Transitions-انتقال ها
      </Typography>
      <Typography className="mb-40" component="div">
      از یک انتقال متفاوت استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/TransitionsTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/TransitionsTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مکان نما را دنبال کنید
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید با تنظیم، راهنمای ابزار را برای دنبال کردن مکان نما فعال کنید{' '}
        <code>{`followCursor={true}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FollowCursorTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/FollowCursorTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/FollowCursorTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      عنصر مجازی
      </Typography>
      <Typography className="mb-40" component="div">
        In the event you need to implement a custom placement, you can use the <code>anchorEl</code>{' '}
        prop: The value of the <code>anchorEl</code> prop can be a reference to a fake DOM element.
        You need to create an object shaped like the{' '}
        <a href="https://popper.js.org/docs/v2/virtual-elements/">
          <code>VirtualElement</code>
        </a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AnchorElTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/AnchorElTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/AnchorElTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نشان دادن و پنهان کردن
      </Typography>
      <Typography className="mb-40" component="div">
      معمولاً وقتی ماوس کاربر روی عنصر قرار می‌گیرد، راهنمای ابزار بلافاصله نشان داده می‌شود و وقتی ماوس کاربر را ترک می‌کند، بلافاصله پنهان می‌شود. تأخیر در نمایش یا مخفی کردن راهنمای ابزار را می‌توان از طریق برنامه‌های <code>enterDelay</code> و <code>leaveDelay</code> اضافه کرد، همانطور که در نسخه نمایشی Controlled Tooltps در بالا نشان داده شده است.
      </Typography>
      <Typography className="mb-40" component="div">
        On mobile, the tooltip is displayed when the user longpresses the element and hides after a
        delay of 1500ms. You can disable this feature with the <code>disableTouchListener</code>{' '}
        prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DelayTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/DelayTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/DelayTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility-دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#tooltip">
          https://www.w3.org/TR/wai-aria-practices/#tooltip
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، راهنمای ابزار فقط عنصر فرزند خود را برچسب گذاری می کند. این به طور قابل‌توجهی با{' '} <code>title</code> متفاوت است که می‌تواند بسته به اینکه آیا کودک قبلاً برچسبی دارد یا نه، <strong>یا</strong> فرزند خود را توصیف کند. به عنوان مثال، در:
      </Typography>

      <FuseHighlight component="pre" className="language-html">
        {` 
<button title="some more information">A button</button>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      <code>عنوان</code> به عنوان یک توضیح قابل دسترسی عمل می کند. اگر می‌خواهید راهنمای ابزار به‌عنوان یک توضیح قابل دسترسی عمل کند، می‌توانید <code>describeChild</code> را ارسال کنید. توجه داشته باشید که اگر راهنمای ابزار تنها برچسب تصویری را ارائه می‌کند، نباید از <code>describeChild</code> استفاده کنید. در غیر این صورت، کودک نامی در دسترس نخواهد داشت و راهنمای ابزار نقض می شود{' '}
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">
          success criterion 2.5.3 in WCAG 2.1
        </a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibilityTooltips.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/AccessibilityTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/AccessibilityTooltips.js')}
        />
      </Typography>
    </>
  );
}

export default TooltipsDoc;
