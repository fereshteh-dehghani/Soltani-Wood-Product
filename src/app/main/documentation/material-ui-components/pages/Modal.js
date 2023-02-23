import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ModalDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/modal"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Modal
      </Typography>
      <Typography className="description">
      مولفه مودال یک پایه محکم برای ایجاد دیالوگ، پاپاور، لایت باکس یا هر چیز دیگری فراهم می کند.
      </Typography>

      <Typography className="mb-40" component="div">
      کامپوننت گره <code>children</code> خود را در مقابل یک جزء پس‌زمینه نمایش می‌دهد. {' '} <code>Modal</code> ویژگی های مهمی را ارائه می دهد:
      </Typography>
      <ul>
        <li>💄 Manages modal stacking when one-at-a-time just isn&#39;t enough.</li>
        <li>🔐 Creates a backdrop, for disabling interaction below the modal.</li>
        <li>🔐 It disables scrolling of the page content while open.</li>
        <li>
          ♿️ It properly manages focus; moving to the modal content, and keeping it there until the
          modal is closed.
        </li>
        <li>♿️ Adds the appropriate ARIA roles automatically.</li>
      </ul>
      <blockquote>
        <Typography className="mb-40" component="div">
          <strong>Terminology note</strong>. The term &quot;modal&quot; is sometimes used to mean
          &quot;dialog&quot;, but this is a misnomer. A modal window describes parts of a UI. An
          element is considered modal if{' '}
          <a href="https://en.wikipedia.org/wiki/Modal_window">
            it blocks interaction with the rest of the application
          </a>
          .
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
      اگر در حال ایجاد یک گفتگوی مودال هستید، احتمالاً می خواهید از {' '} استفاده کنید
  جزء <a href="/components/dialogs/">Dialog</a> به جای استفاده مستقیم از Modal. Modal یک ساختار سطح پایین تر است که توسط مؤلفه های زیر استفاده می شود:
      </Typography>
      <ul>
        <li>
          <a href="/components/dialogs/">Dialog</a>
        </li>
        <li>
          <a href="/components/drawers/">Drawer</a>
        </li>
        <li>
          <a href="/components/menus/">Menu</a>
        </li>
        <li>
          <a href="/components/popover/">Popover</a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic modal-مدال پایه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicModal.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/BasicModal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/BasicModal.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      توجه داشته باشید که می توانید طرح کلی (اغلب آبی یا طلایی) را با ویژگی{' '}<code>outline: 0</code> CSS غیرفعال کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        بی استایل
      </Typography>
      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/package/@mui/base@latest">4.7 kB gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      مودال با یک نسخه بدون استایل نیز عرضه می شود. این برای انجام سفارشی سازی های سنگین و به حداقل رساندن اندازه بسته ایده آل است.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import ModalUnstyled from '@mui/base/ModalUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ModalUnstyled.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/ModalUnstyled.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/ModalUnstyled.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Nested modal-مدال تو در تو
      </Typography>
      <Typography className="mb-40" component="div">
      مدال‌ها را می‌توان تو در تو قرار داد، به‌عنوان مثال یک انتخاب در یک گفتگو، اما انباشتن بیش از دو مدال یا هر دو مدال با پس‌زمینه ممنوع است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedModal.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/NestedModal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/NestedModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Transitions-انتقال ها
      </Typography>
      <Typography className="mb-40" component="div">
      حالت باز/بستن مودال را می توان با یک جزء انتقال متحرک کرد. این جزء باید شرایط زیر را رعایت کند:
      </Typography>
      <ul>
        <li>Be a direct child descendent of the modal.</li>
        <li>
          Have an <code>in</code> prop. This corresponds to the open/close state.
        </li>
        <li>
          Call the <code>onEnter</code> callback prop when the enter transition starts.
        </li>
        <li>
          Call the <code>onExited</code> callback prop when the exit transition is completed. These
          two callbacks allow the modal to unmount the child content when closed and fully
          transitioned.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      Modal دارای پشتیبانی داخلی برای{' '}
        <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsModal.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/TransitionsModal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/TransitionsModal.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      به طور متناوب، می توانید استفاده کنید<a href="https://github.com/pmndrs/react-spring">react-spring</a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpringModal.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/SpringModal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/SpringModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کارایی
      </Typography>
      <Typography className="mb-40" component="div">
      محتوای modal وقتی بسته می‌شود، نصب نمی‌شود. اگر نیاز دارید که محتوا را در دسترس موتورهای جستجو قرار دهید یا در حین بهینه سازی، درختان جزء گران قیمت را در داخل مدال خود ارائه دهید
      پاسخگویی تعامل ممکن است ایده خوبی باشد که این رفتار پیش فرض را با فعال کردن پایه <code>keepMounted</code> تغییر دهید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Modal keepMounted />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="KeepMountedModal.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/KeepMountedModal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/KeepMountedModal.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      مانند هر بهینه سازی عملکرد، این یک گلوله نقره ای نیست. حتما ابتدا تنگناها را شناسایی کنید و سپس این استراتژی های بهینه سازی را امتحان کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Server-side modal-مدال سمت سرور
      </Typography>
      <Typography className="mb-40" component="div">
        React <a href="https://github.com/facebook/react/issues/13097">doesn&#39;t support</a> the{' '}
        <a href="https://reactjs.org/docs/portals.html">
          <code>createPortal()</code>
        </a>{' '}
        API on the server. In order to display the modal, you need to disable the portal feature
        with the <code>disablePortal</code> prop:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ServerModal.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/modal/ServerModal.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/ServerModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations-محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      تله تمرکز
      </Typography>
      <Typography className="mb-40" component="div">
      اگر فوکوس سعی کند از آن خارج شود، مودال فوکوس را به بدنه مؤلفه برمی‌گرداند.
      </Typography>
      <Typography className="mb-40" component="div">
      این برای اهداف دسترسی انجام می شود. با این حال، ممکن است مشکلاتی ایجاد کند. در صورتی که کاربران نیاز به تعامل با بخش دیگری از صفحه داشته باشند، به عنوان مثال. با یک پنجره چت بات، می توانید رفتار را غیرفعال کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Modal disableEnforceFocus />
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#dialog_modal">
          https://www.w3.org/TR/wai-aria-practices/#dialog_modal
        </a>
        )
      </Typography>
      <ul>
        <li>
          <Typography className="mb-40" component="div">
            Be sure to add <code>aria-labelledby="id..."</code>, referencing the modal title, to the{' '}
            <code>Modal</code>. Additionally, you may give a description of your modal with the{' '}
            <code>aria-describedby="id..."</code> prop on the <code>Modal</code>.
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<Modal aria-labelledby="modal-title" aria-describedby="modal-description">
  <h2 id="modal-title">My Title</h2>
  <Typography id="modal-description">My Description</Typography>
</Modal>
`}
          </FuseHighlight>
        </li>
        <li>
          <Typography className="mb-40" component="div">
            The{' '}
            <a href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html">
              WAI-ARIA authoring practices
            </a>{' '}
            می تواند به شما کمک کند تا تمرکز اولیه را بر روی مرتبط ترین عنصر، بر اساس محتوای مودال خود قرار دهید.
          </Typography>
        </li>
        <li>
          <Typography className="mb-40" component="div">
          به خاطر داشته باشید که &quot;پنجره مودال&raquo; روی پنجره اصلی یا پنجره مودال دیگری همپوشانی دارد. ویندوزهای تحت یک مدال <strong>بی اثر</strong> هستند. یعنی کاربران نمی توانند با محتوای خارج از یک پنجره مودال فعال تعامل داشته باشند. این ممکن است ایجاد کند{' '}
            <a href="#focus-trap">conflicting behaviors</a>.
          </Typography>
        </li>
      </ul>
    </>
  );
}

export default ModalDoc;
