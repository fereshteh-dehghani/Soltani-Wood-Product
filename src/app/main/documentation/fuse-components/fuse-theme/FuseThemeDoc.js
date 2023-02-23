import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function FuseThemeDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseTheme
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseTheme</code> جزء موضوعی Fuse React است. این به ما امکان می دهد تم های از پیش تعریف شده Material UI را تغییر دهیم. باید مولفه<code>FuseLayout</code> را بپیچد.
      </Typography>

      <Typography className="mb-16" component="p">
        <code>src/app/App.js</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!app/App.js')}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      پیکربندی
      </Typography>

      <Typography className="mb-16" component="p">
        Please checkout
        <Link className="font-normal mx-4" to="/documentation/theming/theme-schemes">
          theming
        </Link>
        at documentation.
      </Typography>
    </>
  );
}

export default FuseThemeDoc;
