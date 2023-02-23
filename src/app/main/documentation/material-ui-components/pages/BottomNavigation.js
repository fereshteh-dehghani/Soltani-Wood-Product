import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BottomNavigationDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/bottom-navigation"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Bottom Navigation-ناوبری پایین
      </Typography>
      <Typography className="description">
      نوارهای پیمایش پایین امکان حرکت بین مقصدهای اصلی در یک برنامه را فراهم می کند.
      </Typography>

      <Typography className="mb-40" component="div">
      نوارهای پیمایش پایین سه تا پنج مقصد را در پایین صفحه نمایش می دهند. هر مقصد با یک نماد و یک برچسب متن اختیاری نشان داده می شود. هنگامی که یک ناوبری پایین
      روی نماد ضربه زده می شود، کاربر به مقصد ناوبری سطح بالا مرتبط با آن نماد منتقل می شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Bottom Navigation-ناوبری پایین
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی فقط <strong>three</strong> عمل وجود دارد، نمادها و برچسب‌های نوشتاری را همیشه نمایش دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleBottomNavigation.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/bottom-navigation/SimpleBottomNavigation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/bottom-navigation/SimpleBottomNavigation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پیمایش پایین بدون برچسب
      </Typography>
      <Typography className="mb-40" component="div">
      اگر <strong>four</strong> یا <strong>five</strong> عملکرد وجود دارد، نماهای غیرفعال را فقط به عنوان نماد نمایش دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LabelBottomNavigation.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/bottom-navigation/LabelBottomNavigation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/bottom-navigation/LabelBottomNavigation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fixed positioning-موقعیت یابی ثابت
      </Typography>
      <Typography className="mb-40" component="div">
      این نسخه نمایشی، بدون توجه به میزان محتوای روی صفحه، پیمایش پایین را در پایین ثابت نگه می دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedBottomNavigation.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/bottom-navigation/FixedBottomNavigation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/bottom-navigation/FixedBottomNavigation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کتابخانه مسیریابی شخص ثالث
      </Typography>
      <Typography className="mb-40" component="div">
      یکی از موارد استفاده مکرر این است که فقط روی کلاینت ناوبری انجام شود، بدون اینکه HTTP رفت و برگشت به سرور باشد. مؤلفه <code>BottomNavigationAction</code> {' '}
      پایه <code>component</code> برای رسیدگی به این مورد استفاده. اینجا یک است{' '}
        <a href="/guides/routing/">more detailed guide</a>.
      </Typography>
    </>
  );
}

export default BottomNavigationDoc;
