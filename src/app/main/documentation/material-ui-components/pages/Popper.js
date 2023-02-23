import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PopperDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/popper"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Popper-پاپر
      </Typography>
      <Typography className="description">
      از یک Popper می توان برای نمایش برخی از محتواها روی دیگری استفاده کرد. این جایگزینی برای react-popper است.
      </Typography>

      <Typography className="mb-40" component="div">
      برخی از ویژگی های مهم مؤلفه <code>Popper</code>:
      </Typography>
      <ul>
        <li>
          🕷 Popper relies on the 3rd party library (<a href="https://popper.js.org/">Popper.js</a>)
          for perfect positioning.
        </li>
        <li>💄 It&#39;s an alternative API to react-popper. It aims for simplicity.</li>
        <li>
          📦 <a href="/size-snapshot">8 kB gzipped</a>.
        </li>
        <li>
          The children is{' '}
          <a href="/components/portal/">
            <code>Portal</code>
          </a>{' '}
          to the body of the document to avoid rendering problems. You can disable this behavior
          with <code>disablePortal</code>.
        </li>
        <li>
          The scroll isn&#39;t blocked like with the{' '}
          <a href="/components/popover/">
            <code>Popover</code>
          </a>{' '}
          component. The placement of the popper updates with the available area in the viewport.
        </li>
        <li>
          Clicking away does not hide the <code>Popper</code> component. If you need this behavior,
          you can use{' '}
          <a href="/components/click-away-listener/">
            <code>ClickAwayListener</code>
          </a>{' '}
          - see the example in the{' '}
          <a href="/components/menus/#menulist-composition">menu documentation section</a>.
        </li>
        <li>
          The <code>anchorEl</code> is passed as the reference object to create a new{' '}
          <code>Popper.js</code> instance.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic popper-پاپر پایه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimplePopper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popper/SimplePopper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/SimplePopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Transitions-انتقال ها
      </Typography>
      <Typography className="mb-40" component="div">
      حالت باز/بستن پوپر را می توان با یک رندر prop child و یک جزء انتقال متحرک کرد. این جزء باید شرایط زیر را رعایت کند:
      </Typography>
      <ul>
        <li>Be a direct child descendent of the popper.</li>
        <li>
          Call the <code>onEnter</code> callback prop when the enter transition starts.
        </li>
        <li>
          Call the <code>onExited</code> callback prop when the exit transition is completed. These
          two callbacks allow the popper to unmount the child content when closed and fully
          transitioned.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      پوپر دارای پشتیبانی داخلی برای{' '}
        <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsPopper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popper/TransitionsPopper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/TransitionsPopper.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      به طور متناوب، می توانید استفاده کنید<a href="https://github.com/pmndrs/react-spring">react-spring</a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpringPopper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popper/SpringPopper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/SpringPopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Positioned popper-پوپر موقعیت
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PositionedPopper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popper/PositionedPopper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/PositionedPopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Scroll playground-زمین بازی اسکرول
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollPlayground.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popper/ScrollPlayground.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/ScrollPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Virtual element-عنصر مجازی
      </Typography>
      <Typography className="mb-40" component="div">
      مقدار پروپ <code>anchorEl</code> می تواند اشاره ای به یک عنصر DOM جعلی باشد. شما باید یک شی به شکل ایجاد کنید{' '}
        <a href="https://popper.js.org/docs/v2/virtual-elements/">
          <code>VirtualElement</code>
        </a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
      قسمتی از متن را برجسته کنید تا پوپر را ببینید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VirtualElementPopper.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popper/VirtualElementPopper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/VirtualElementPopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complementary projects-پروژه های تکمیلی
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده پیشرفته تر، ممکن است بتوانید از مزایای زیر استفاده کنید:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        PopupState helper-کمک کننده PopupState
      </Typography>
      <Typography className="mb-40" component="div">
      یک بسته شخص ثالث وجود دارد{' '}
        <a href="https://github.com/jcoreio/material-ui-popup-state">
          <code>material-ui-popup-state</code>
        </a>{' '}
        که در بیشتر موارد از وضعیت پوپر برای شما مراقبت می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PopperPopupState.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/popper/PopperPopupState.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/popper/PopperPopupState.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بی استایل 
     </Typography>
      <Typography className="mb-40" component="div">
      بسته @mui/base حاوی یک نسخه بدون استایل از Popper - PopperUnstyled است. وابستگی به @mui/material ندارد. تنها تفاوت بین Popper و PopperUnstyled این است
  پشتیبانی از قالب بندی Popper می‌تواند فیلد <code>direction</code> را از موضوع فعلی بخواند، در حالی که PopperUnstyled به جای آن پروپوزال <code>direction</code> را می‌پذیرد.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import Popper from '@mui/base/PopperUnstyled';
`}
      </FuseHighlight>
    </>
  );
}

export default PopperDoc;
