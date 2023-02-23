import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TransitionsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/transitions"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Transitions-انتقال ها
      </Typography>
      <Typography className="description">
      انتقال کمک می کند تا یک رابط کاربری رسا و آسان برای استفاده باشد.
       </Typography>

      <Typography className="mb-40" component="div">
        MUI provides transitions that can be used to introduce some basic{' '}
        <a href="https://material.io/design/motion/">motion</a> to your applications.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Collapse
      </Typography>
      <Typography className="mb-40" component="div">
      از لبه شروع عنصر فرزند باز کنید. در صورت نیاز به فروپاشی افقی از پایه <code>orientation</code> استفاده کنید. پایه <code>collapsedSize</code> را می توان برای تنظیم حداقل عرض/ارتفاع در صورت باز نشدن استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleCollapse.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SimpleCollapse.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleCollapse.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fade-محو شدن
      </Typography>
      <Typography className="mb-40" component="div">
      محو شدن از شفاف به مات.
     </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleFade.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SimpleFade.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleFade.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Grow
      </Typography>
      <Typography className="mb-40" component="div">
      از مرکز عنصر کودک به سمت بیرون منبسط می شود، در حالی که از شفاف به مات نیز محو می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      مثال دوم نحوه تغییر <code>transform-origin</code> را نشان می‌دهد، و به صورت مشروط، سرپ <code>timeout</code> را برای تغییر سرعت ورودی اعمال می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleGrow.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SimpleGrow.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleGrow.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Slide-اسلاید
      </Typography>
      <Typography className="mb-40" component="div">
      از لبه صفحه به داخل بلغزانید. پایه <code>direction</code> کنترل می کند که انتقال از کدام لبه صفحه شروع می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        The Transition component&#39;s <code>mountOnEnter</code> prop prevents the child component
        from being mounted until <code>in</code> is <code>true</code>. This prevents the relatively
        positioned component from scrolling into view from its off-screen position. Similarly, the{' '}
        <code>unmountOnExit</code> prop removes the component from the DOM after it has been
        transition off-screen.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleSlide.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SimpleSlide.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleSlide.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      Slide relative to a container

      </Typography>
      <Typography className="mb-40" component="div">
      مؤلفه Slide همچنین prop <code>container</code> را می پذیرد که ارجاع به یک گره DOM است. اگر این پایه تنظیم شود، مولفه Slide از لبه آن گره DOM می لغزد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SlideFromContainer.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SlideFromContainer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SlideFromContainer.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بزرگنمایی
      </Typography>
      <Typography className="mb-40" component="div">
      از مرکز عنصر فرزند به سمت بیرون باز کنید.
     </Typography>
      <Typography className="mb-40" component="div">
      این مثال همچنین نحوه به تاخیر انداختن انتقال ورود را نشان می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleZoom.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/SimpleZoom.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/SimpleZoom.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Child requirement-نیاز کودک
      </Typography>
      <ul>
        <li>
          <strong>Forward the style</strong>: To better support server rendering, MUI provides a{' '}
          <code>style</code> prop to the children of some transition components (Fade, Grow, Zoom,
          Slide). The <code>style</code> prop must be applied to the DOM for the animation to work
          as expected.
        </li>
        <li>
          <strong>Forward the ref</strong>: The transition components require the first child
          element to forward its ref to the DOM node. For more details about ref, check out{' '}
          <a href="/guides/composition/#caveat-with-refs">Caveat with refs</a>
        </li>
        <li>
          <strong>Single element</strong>: The transition components require only one child element
          (<code>React.Fragment</code> is not allowed).
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
// The \`props\` object contains a \`style\` prop.
// You need to provide it to the \`div\` element as shown here.
const MyComponent = React.forwardRef((props, ref) {
  return (
    <div ref={ref} {...props}>
      Fade
    </div>
  );
})

export default Main() {
  return (
    <Fade>
      {/* MyComponent must the only child */}
      <MyComponent />
    </Fade>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        TransitionGroup
      </Typography>
      <Typography className="mb-40" component="div">
        To animate a component when it is mounted or unmounted, you can use the{' '}
        <a href="http://reactcommunity.org/react-transition-group/transition-group/">
          <code>TransitionGroup</code>
        </a>{' '}
        component from <em>react-transition-group</em>. As components are added or removed, the{' '}
        <code>in</code> prop is toggled automatically by <code>TransitionGroup</code>.
        <br/>
        انگلیسیش راحت تره 
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionGroupExample.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transitions/TransitionGroupExample.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transitions/TransitionGroupExample.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        TransitionComponent prop
      </Typography>
      <Typography className="mb-40" component="div">
      برخی از اجزای MUI از این انتقال ها به صورت داخلی استفاده می کنند. اینها یک{' '} را می پذیرند
  <code>TransitionComponent</code> برای سفارشی کردن انتقال پیش‌فرض. می توانید از هر کدام استفاده کنید
  از اجزای فوق یا خودتان. باید شرایط زیر را رعایت کند:
      </Typography>
      <ul>
        <li>
          Accepts an <code>in</code> prop. This corresponds to the open/close state.
        </li>
        <li>
          Call the <code>onEnter</code> callback prop when the enter transition starts.
        </li>
        <li>
          Call the <code>onExited</code> callback prop when the exit transition is completed. These
          two callbacks allow to unmount the children when in a closed state and fully transitioned.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        For more information on creating a custom transition, visit the{' '}
        <em>react-transition-group</em>{' '}
        <a href="http://reactcommunity.org/react-transition-group/transition/">
          <code>Transition</code> documentation
        </a>
        . You can also visit the dedicated sections of some of the components:
      </Typography>
      <ul>
        <li>
          <a href="/components/modal/#transitions">Modal</a>
        </li>
        <li>
          <a href="/components/dialogs/#transitions">Dialog</a>
        </li>
        <li>
          <a href="/components/popper/#transitions">Popper</a>
        </li>
        <li>
          <a href="/components/snackbars/#transitions">Snackbar</a>
        </li>
        <li>
          <a href="/components/tooltips/#transitions">Tooltip</a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      عملکرد و سئو
      </Typography>
      <Typography className="mb-40" component="div">
          The content of transition component is mounted by default even if{' '}
          <code>{`in={false}`}</code>. This default behavior has server-side rendering and SEO in
          mind. If you render expensive component trees inside your transition it might be a good idea
          to change this default behavior by enabling the
          <code>unmountOnExit</code> prop:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Fade in={false} unmountOnExit />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      مانند هر بهینه سازی عملکرد، این یک گلوله نقره ای نیست. حتما ابتدا تنگناها را شناسایی کنید و سپس این استراتژی های بهینه سازی را امتحان کنید.
      </Typography>
    </>
  );
}

export default TransitionsDoc;
