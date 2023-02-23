import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function FuseLayoutDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseLayout
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseLayout</code> جزء اصلی چیدمان Fuse React است. این به ما امکان می‌دهد تا طرح‌بندی‌های تم را تغییر دهیم، تنظیمات طرح‌بندی را بر اساس پیکربندی پیش‌فرض و تنظیمات مسیر را تنظیم کنیم.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      پیکربندی
      </Typography>

      <Typography className="mb-16" component="p">
        Please checkout{' '}
        <Link className="font-normal" to="/documentation/theming/theme-layouts">
          Theme Layouts
        </Link>{' '}
        at documentation.
      </Typography>
    </>
  );
}

export default FuseLayoutDoc;
