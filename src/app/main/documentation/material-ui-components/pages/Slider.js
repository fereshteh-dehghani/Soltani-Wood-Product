import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SliderDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/slider"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Slider-اسلایدر
      </Typography>
      <Typography className="description">
      اسلایدرها به کاربران این امکان را می دهند که از طیف وسیعی از مقادیر انتخاب کنند.
      </Typography>

      <Typography className="mb-40" component="div">
      لغزنده‌ها طیفی از مقادیر را در امتداد یک نوار منعکس می‌کنند که کاربران می‌توانند یک مقدار واحد را انتخاب کنند. آنها برای تنظیم تنظیماتی مانند صدا، روشنایی یا اعمال فیلترهای تصویر ایده آل هستند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Continuous sliders-لغزنده های پیوسته
      </Typography>
      <Typography className="mb-40" component="div">
      لغزنده های پیوسته به کاربران این امکان را می دهند که یک مقدار را در یک محدوده ذهنی انتخاب کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ContinuousSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/ContinuousSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/ContinuousSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes-اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای نوار لغزنده کوچکتر، از پایه <code>size="small"</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SliderSizes.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/SliderSizes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/SliderSizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Discrete sliders-لغزنده های گسسته
      </Typography>
      <Typography className="mb-40" component="div">
      لغزنده های گسسته را می توان با ارجاع به نشانگر مقدار آن به یک مقدار خاص تنظیم کرد. شما می توانید برای هر مرحله یک علامت ایجاد کنید <code>{`marks={true}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/DiscreteSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/DiscreteSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      قدم های کوچک
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید افزایش گام پیش فرض را تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderSteps.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/DiscreteSliderSteps.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/DiscreteSliderSteps.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Custom marks-علائم سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      شما می توانید با ارائه یک آرایه غنی به قسمت <code>marks</code> علامت های سفارشی داشته باشید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderMarks.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/DiscreteSliderMarks.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/DiscreteSliderMarks.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Restricted values-مقادیر محدود شده
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید مقادیر قابل انتخاب را به مقادیر ارائه شده با <code>marks</code> محدود کنید <code>{`step={null}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderValues.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/DiscreteSliderValues.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/DiscreteSliderValues.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Label always visible-برچسب همیشه قابل مشاهده است
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید برچسب شست را مجبور کنید که همیشه با آن قابل مشاهده باشد<code>valueLabelDisplay="on"</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderLabel.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/DiscreteSliderLabel.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/DiscreteSliderLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Range slider-لغزنده برد
      </Typography>
      <Typography className="mb-40" component="div">
      لغزنده را می توان برای تنظیم شروع و پایان یک محدوده با ارائه آرایه ای از مقادیر به <code>value</code> استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RangeSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/RangeSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/RangeSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Minimum distance-حداقل فاصله
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید حداقل فاصله بین مقادیر را در کنترل کننده رویداد <code>onChange</code> اعمال کنید. به‌طور پیش‌فرض، وقتی نشانگر را روی یک انگشت شست حرکت می‌دهید، در حالی که انگشت شست دیگر را می‌کشید،
  انگشت شست فعال با شست معلق شده جابجا می شود. می‌توانید این رفتار را با {' '}<code>disableSwap</code> غیرفعال کنید. اگر می‌خواهید با رسیدن به حداقل فاصله، محدوده تغییر کند، می‌توانید از پارامتر <code>activeThumb</code> در <code>onChange</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MinimumDistanceSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/MinimumDistanceSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/MinimumDistanceSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Slider with input field-نوار لغزنده با فیلد ورودی
      </Typography>
      <Typography className="mb-40" component="div">
      در این مثال، یک ورودی اجازه می دهد تا یک مقدار گسسته تنظیم شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InputSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/InputSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/InputSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color-رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/ColorSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/ColorSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می توانید در این مورد بیشتر بدانید{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/CustomizedSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/CustomizedSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      پخش کننده موسیقی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MusicPlayerSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/MusicPlayerSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/MusicPlayerSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Vertical sliders-لغزنده های عمودی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/VerticalSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/VerticalSlider.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>WARNING</strong>: Chrome, Safari and newer Edge versions i.e. any browser based on
        WebKit exposes <code>{`<Slider orientation="vertical" />`}</code> as horizontal (
        <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1158217">
          chromium issue #1158217
        </a>
        ). By applying <code>-webkit-appearance: slider-vertical;</code> the slider is exposed as
        vertical.
      </Typography>
      <Typography className="mb-40" component="div">
        However, by applying <code>-webkit-appearance: slider-vertical;</code> keyboard navigation
        for horizontal keys (<kbd className="key">Arrow Left</kbd>,{' '}
        <kbd className="key">Arrow Right</kbd>) is reversed (
        <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1162640">
          chromium issue #1162640
        </a>
        ). Usually, up and right should increase and left and down should decrease the value. If you
        apply <code>-webkit-appearance</code> you could prevent keyboard navigation for horizontal
        arrow keys for a truly vertical slider. This might be less confusing to users compared to a
        change in direction.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalAccessibleSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/VerticalAccessibleSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/VerticalAccessibleSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Track
      </Typography>
      <Typography className="mb-40" component="div">
      آهنگ محدوده موجود برای انتخاب کاربر را نشان می دهد.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Removed track
      </Typography>
      <Typography className="mb-40" component="div">
      آهنگ را می توان با <code>{`track={false}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TrackFalseSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/TrackFalseSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/TrackFalseSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Inverted track-مسیر معکوس
      </Typography>
      <Typography className="mb-40" component="div">
      مسیر را می توان با معکوس کرد <code>track="inverted"</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TrackInvertedSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/TrackInvertedSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/TrackInvertedSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Non-linear scale-مقیاس غیر خطی
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از پایه <code>scale</code> برای نمایش <code>مقدار</code> در مقیاس دیگری استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        In the following demo, the value <em>x</em> represents the value <em>2^x</em>. Increasing{' '}
        <em>x</em> by one increases the represented value by factor <em>2</em>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NonLinearSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/NonLinearSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/NonLinearSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled-بی استایل
      </Typography>

      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/package/@mui/base@latest">5.6 kB gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      نوار لغزنده همچنین با یک نسخه بدون استایل ارائه می شود. این برای انجام سفارشی سازی های سنگین و به حداقل رساندن اندازه بسته ایده آل است.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import SliderUnstyled from '@mui/base/SliderUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSlider.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/slider/UnstyledSlider.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/UnstyledSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#slider">
          https://www.w3.org/TR/wai-aria-practices/#slider
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت بیشتر کارهای لازم برای دسترسی به آن را انجام می دهد. با این حال، باید مطمئن شوید که:
      </Typography>
      <ul>
        <li>
          Each thumb has a user-friendly label (<code>aria-label</code>,{' '}
          <code>aria-labelledby</code> or <code>getAriaLabel</code> prop).
        </li>
        <li>
          Each thumb has a user-friendly text for its current value. This is not required if the
          value matches the semantics of the label. You can change the name with the{' '}
          <code>getAriaValueText</code> or <code>aria-valuetext</code> prop.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations-محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        IE 11
      </Typography>
      <Typography className="mb-40" component="div">
      برچسب مقدار لغزنده در IE 11 در مرکز قرار ندارد. ترازبندی برای آسان‌تر کردن سفارشی‌سازی با آخرین مرورگرها انجام نمی‌شود. شما می توانید مشکل را با:
      </Typography>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiSlider-valueLabel {
  left: calc(-50% - 4px);
}
`}
      </FuseHighlight>
    </>
  );
}

export default SliderDoc;
