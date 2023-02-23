import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BoxDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/box"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Box-جعبه
      </Typography>
      <Typography className="description">
      کامپوننت Box به عنوان یک جزء بسته بندی برای اکثر نیازهای ابزار CSS عمل می کند.
      </Typography>

      <Typography className="mb-40" component="div">
      بسته های جزء جعبه{' '}
        <a href="/system/basics/#all-inclusive">all the style functions</a> که در معرض دید قرار می گیرند{' '}
        <code>@mui/system</code>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       مثال
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="/system/palette/">The palette</a> تابع سبک.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        The <code>sx</code> prop
      </Typography>
      <Typography className="mb-40" component="div">
      همه خصوصیات سیستم از طریق{' '} در دسترس هستند
      <a href="/system/basics/#the-sx-prop">
      <code>sx</code> prop</a>. علاوه بر این، سرپ <code>sx</code> به شما اجازه می‌دهد تا هر قانون CSS دیگری را که ممکن است نیاز داشته باشید مشخص کنید. در اینجا مثالی از نحوه استفاده از آن آورده شده است:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BoxSx.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/box/BoxSx.js').default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/box/BoxSx.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Overriding MUI components-نادیده گرفتن اجزای MUI
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت Box کامپوننت شما را می پیچد. یک عنصر DOM جدید ایجاد می‌کند، یک{' '} <code>{`<div>`}</code> که به‌طور پیش‌فرض می‌تواند با پایه <code>component</code> تغییر کند. بیایید بگوییم که می خواهید به جای آن از یک <code>{`<span>`}</code> استفاده کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BoxComponent.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/box/BoxComponent.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/box/BoxComponent.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      این زمانی که تغییرات را بتوان به یک عنصر DOM جدید جدا کرد، عالی عمل می کند. به عنوان مثال، می توانید حاشیه را از این طریق تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
      با این حال، گاهی اوقات باید عنصر DOM زیربنایی را هدف قرار دهید. به عنوان مثال، ممکن است بخواهید مرز دکمه را تغییر دهید. مولفه Button استایل های خاص خود را تعریف می کند. وراثت CSS کمکی نمی کند. برای حل مشکل، می‌توانید از{' '}<a href="/system/basics/#the-sx-prop"> استفاده کنید
      اگر یک جزء MUI باشد، <code>sx</code></a>{' '} مستقیماً روی کودک قرار می گیرد.
      </Typography>

      <FuseHighlight component="pre" className="language-diff">
        {` 
-<Box sx={{ border: '1px dashed grey' }}>
-  <Button>Save</Button>
-</Box>
+<Button sx={{ border: '1px dashed grey' }}>Save</Button>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      برای مؤلفه‌های غیر MUI، از پایه <code>component</code> استفاده کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-diff">
        {` 
-<Box sx={{ border: '1px dashed grey' }}>
-  <button>Save</button>
-</Box>
+<Box component="button" sx={{ border: '1px dashed grey' }}>Save</Box>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        API
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import Box from '@mui/material/Box';
`}
      </FuseHighlight>
      <table>
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Default</th>
            <th align="left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="left">
              <span className="prop-name">children</span>
            </td>
            <td align="left">
              <span className="prop-type">
                node
                <br />
              </span>
            </td>
            <td align="left" />
            <td align="left">Box render function or node.</td>
          </tr>
          <tr>
            <td align="left">
              <span className="prop-name">component</span>
            </td>
            <td align="left">
              <span className="prop-type">
                union:&nbsp;string&nbsp;&#124;
                <br />
                &nbsp;func&nbsp;&#124;
                <br />
                &nbsp;object
                <br />
              </span>
            </td>
            <td align="left">
              <span className="prop-default">&#39;div&#39;</span>
            </td>
            <td align="left">
              The component used for the root node. Either a string to use a DOM element or a
              component.
            </td>
          </tr>
          <tr>
            <td align="left">
              <span className="prop-name">sx</span>
            </td>
            <td align="left">
              <span className="prop-type">object</span>
            </td>
            <td align="left">
              <span className="prop-default">{}</span>
            </td>
            <td align="left">
              Accepts all system properties, as well as any valid CSS properties.
            </td>
          </tr>
        </tbody>
      </table>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        System props-لوازم سیستم
      </Typography>
      <Typography className="mb-40" component="div">
      به عنوان یک مؤلفه ابزار CSS، <code>Box</code> همچنین از همه{' '}<a href="/system/properties/"> پشتیبانی می کند
      ویژگی های <code>system</code> </a>{' '}.
      می توانید از آنها به عنوان پایه مستقیماً روی کامپوننت استفاده کنید. به عنوان مثال، یک حاشیه بالا:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Box mt={2}>
`}
      </FuseHighlight>
    </>
  );
}

export default BoxDoc;
