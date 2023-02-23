import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TimelineDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/timeline"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Timeline-جدول زمانی
      </Typography>
      <Typography className="description">
      جدول زمانی فهرستی از رویدادها را به ترتیب زمانی نمایش می دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      <strong>توجه:</strong> این مؤلفه در مستند نیست{' '}
        <a href="https://material.io/">Material Design guidelines</a>,اما MUI از آن پشتیبانی می کند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جدول زمانی اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      یک جدول زمانی اولیه که لیستی از رویدادها را نشان می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTimeline.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/BasicTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/BasicTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جدول زمانی سمت چپ
      </Typography>
      <Typography className="mb-40" component="div">
      محتوای اصلی جدول زمانی را می توان در سمت چپ نسبت به محور زمان قرار داد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LeftPositionedTimeline.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/LeftPositionedTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/LeftPositionedTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جدول زمانی متناوب
      </Typography>
      <Typography className="mb-40" component="div">
      جدول زمانی می تواند رویدادها را در دو طرف متناوب نمایش دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AlternateTimeline.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/AlternateTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/AlternateTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
      <code>TimelineDot</code> می تواند در رنگ های مختلف از پالت تم ظاهر شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorsTimeline.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/ColorsTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/ColorsTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Outlined-مشخص شده
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OutlinedTimeline.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/OutlinedTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/OutlinedTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Opposite content-محتوای مخالف
      </Typography>
      <Typography className="mb-40" component="div">
      جدول زمانی می تواند محتوا را در طرف مقابل نمایش دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OppositeContentTimeline.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/OppositeContentTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/OppositeContentTimeline.js')}
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
          name="CustomizedTimeline.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/CustomizedTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/CustomizedTimeline.js')}
        />
      </Typography>
    </>
  );
}

export default TimelineDoc;
