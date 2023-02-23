import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function RatingDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/rating"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Rating-رتبه بندی
      </Typography>
      <Typography className="description">
      رتبه‌بندی‌ها بینشی در مورد نظرات و تجربیات دیگران ارائه می‌کنند و به کاربر اجازه می‌دهند رتبه‌بندی خود را ارسال کنند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic rating-رتبه بندی پایه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicRating.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/BasicRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/BasicRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Rating precision-دقت رتبه بندی
      </Typography>
      <Typography className="mb-40" component="div">
      رتبه بندی می تواند هر عدد شناور را با پایه <code>value</code> نمایش دهد. برای تعریف حداقل تغییر مقدار افزایشی مجاز از {' '} <code>precision</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HalfRating.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/HalfRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/HalfRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Hover feedback-بازخورد شناور
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید برچسبی را روی شناور نمایش دهید تا به کاربر کمک کند تا مقدار رتبه‌بندی صحیح را انتخاب کند. نسخه ی نمایشی از پایه <code>onChangeActive</code> استفاده می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HoverRating.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/HoverRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/HoverRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes-اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای رتبه‌بندی‌های بزرگ‌تر یا کوچک‌تر از پایه <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RatingSize.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/RatingSize.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/RatingSize.js')}
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
          name="CustomizedRating.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/CustomizedRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/CustomizedRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Radio group-گروه رادیویی
      </Typography>
      <Typography className="mb-40" component="div">
      رتبه بندی با یک گروه رادیویی اجرا می شود، <code>highlightSelectedOnly</code> را برای بازیابی رفتار طبیعی تنظیم کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RadioGroupRating.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/RadioGroupRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/RadioGroupRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (
        <a href="https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating">
          WAI tutorial
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      دسترسی به این مؤلفه به موارد زیر بستگی دارد:
      </Typography>
      <ul>
        <li>
          A radio group with its fields visually hidden. It contains six radio buttons, one for each
          star, and another for 0 stars that is checked by default. Be sure to provide a value for
          the <code>name</code> prop that is unique to the parent form.
        </li>
        <li>
          Labels for the radio buttons containing actual text (&quot;1 Star&quot;, &quot;2
          Stars&quot;, …). Be sure to provide a suitable function to the <code>getLabelText</code>{' '}
          prop when the page is in a language other than English. You can use the{' '}
          <a href="https://mui.com/guides/localization/">included locales</a>, or provide your own.
        </li>
        <li>
          A visually distinct appearance for the rating icons. By default, the rating component uses
          both a difference of color and shape (filled and empty icons) to indicate the value. In
          the event that you are using color as the only means to indicate the value, the
          information should also be also displayed as text, as in this demo. This is important to
          match <a href="https://www.w3.org/TR/WCAG21/#use-of-color">success Criterion 1.4.1</a> of
          WCAG2.1.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextRating.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/TextRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/TextRating.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="mb-40" component="div">
      رتبه بندی فقط خواندنی دارای نقش "img" و یک برچسب آریا است که رتبه نمایش داده شده را توصیف می کند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      صفحه کلید
      </Typography>
      <Typography className="mb-40" component="div">
      از آنجایی که جزء رتبه‌بندی از دکمه‌های رادیویی استفاده می‌کند، تعامل صفحه کلید از رفتار مرورگر بومی پیروی می‌کند. Tab امتیاز فعلی را متمرکز می کند و کلیدهای مکان نما رتبه انتخابی را کنترل می کنند.
      </Typography>
      <Typography className="mb-40" component="div">
      رتبه‌بندی فقط خواندنی قابل تمرکز نیست.
      </Typography>
    </>
  );
}

export default RatingDoc;
