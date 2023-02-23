import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ContainerDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/container"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Container-ظرف
      </Typography>
      <Typography className="description">
      کانتینر محتوای شما را به صورت افقی متمرکز می کند. این اساسی ترین عنصر چیدمان است.
      </Typography>

      <Typography className="mb-40" component="div">
      در حالی که ظروف را می توان تو در تو قرار داد، اما اکثر چیدمان ها به ظرف تو در تو نیاز ندارند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fluid
      </Typography>
      <Typography className="mb-40" component="div">
        A fluid container width is bounded by the <code>maxWidth</code> prop value.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleContainer.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/container/SimpleContainer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/container/SimpleContainer.js')}
        />
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Container maxWidth="sm">
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fixed
      </Typography>
      <Typography className="mb-40" component="div">
      اگر ترجیح می دهید به جای تلاش برای قرار دادن یک نمای کاملاً روان، برای مجموعه ای ثابت از اندازه ها طراحی کنید، می توانید پایه <code>fixed</code> را تنظیم کنید. حداکثر عرض با حداقل عرض نقطه شکست فعلی مطابقت دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedContainer.js"
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/container/FixedContainer.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/container/FixedContainer.js')}
        />
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Container fixed>
`}
      </FuseHighlight>
    </>
  );
}

export default ContainerDoc;
