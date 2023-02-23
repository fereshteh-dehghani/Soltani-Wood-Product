import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ToggleButtonDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/toggle-button"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Toggle Buttons-دکمه های جابجایی
      </Typography>
      <Typography className="description">
      از دکمه های جابجایی می توان برای گروه بندی گزینه های مرتبط استفاده کرد.
      </Typography>

      <Typography className="mb-40" component="div">
      برای تأکید بر گروه‌های دکمه‌های Toggle مرتبط، یک گروه باید یک ظرف مشترک را به اشتراک بگذارد. {' '}
  <code>ToggleButtonGroup</code> وضعیت انتخابی دکمه‌های فرزند خود را هنگامی که به <code>value</code> خودش اختصاص داده می‌شود، کنترل می‌کند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Exclusive selection-انتخاب انحصاری
      </Typography>
      <Typography className="mb-40" component="div">
      با انتخاب انحصاری، انتخاب یک گزینه هر گزینه دیگری را لغو می کند.
      </Typography>
      <Typography className="mb-40" component="div">
      در این مثال، دکمه‌های جابجایی توجیه متن، گزینه‌هایی را برای متن چپ، مرکز، راست و کاملاً توجیه‌شده (غیرفعال) ارائه می‌کنند، که هر بار تنها یک مورد برای انتخاب در دسترس است.
      </Typography>
      <Typography className="mb-40" component="div">
      <strong>توجه</strong>: انتخاب انحصاری به این معنی نیست که یک دکمه باید فعال باشد. برای آن اثر ببینید <a href="#enforce-value-set">enforce value set</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ToggleButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/toggle-button/ToggleButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/toggle-button/ToggleButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Multiple selection-انتخاب چندگانه
      </Typography>
      <Typography className="mb-40" component="div">
      انتخاب چندگانه به گزینه‌های گروه‌بندی منطقی مانند پررنگ، مورب و زیرخط اجازه می‌دهد تا چندین گزینه انتخاب شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ToggleButtonsMultiple.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/toggle-button/ToggleButtonsMultiple.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/toggle-button/ToggleButtonsMultiple.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اندازه
      </Typography>
      <Typography className="mb-40" component="div">
      برای دکمه های بزرگتر یا کوچکتر، از پایه <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ToggleButtonSizes.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/toggle-button/ToggleButtonSizes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/toggle-button/ToggleButtonSizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorToggleButton.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/toggle-button/ColorToggleButton.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/toggle-button/ColorToggleButton.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه های عمودی
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌ها را می‌توان به صورت عمودی با پایه <code>orientation</code> روی &quot;عمودی&quot; تنظیم کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalToggleButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/toggle-button/VerticalToggleButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/toggle-button/VerticalToggleButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Enforce value set
      </Typography>
      <Typography className="mb-40" component="div">
      اگر می خواهید اعمال کنید که حداقل یک دکمه باید فعال باشد، می توانید عملکرد handleChange خود را تنظیم کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const handleAlignment = (event, newAlignment) => {
  if (newAlignment !== null) {
    setAlignment(newAlignment);
  }
};

const handleDevices = (event, newDevices) => {
  if (newDevices.length) {
    setDevices(newDevices);
  }
};
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ToggleButtonNotEmpty.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/toggle-button/ToggleButtonNotEmpty.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/toggle-button/ToggleButtonNotEmpty.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه جابجایی مستقل
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StandaloneToggleButton.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/toggle-button/StandaloneToggleButton.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/toggle-button/StandaloneToggleButton.js')}
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
          name="CustomizedDividers.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/toggle-button/CustomizedDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/toggle-button/CustomizedDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <ul>
        <li>
          ToggleButtonGroup has <code>role="group"</code>. You should provide an accessible label
          with <code>aria-label="label"</code>, <code>aria-labelledby="id"</code> or{' '}
          <code>{`<label>`}</code>.
        </li>
        <li>
          ToggleButton sets <code>{`aria-pressed="<bool>"`}</code> according to the button state.
          You should label each button with <code>aria-label</code>.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      صفحه کلید
      </Typography>
      <Typography className="mb-40" component="div">
      در حال حاضر، دکمه های جابجایی به ترتیب DOM هستند. با کلید تب بین آنها حرکت کنید. رفتار دکمه از معنای استاندارد صفحه کلید پیروی می کند.
      </Typography>
    </>
  );
}

export default ToggleButtonDoc;
