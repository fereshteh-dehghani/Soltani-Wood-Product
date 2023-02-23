import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function PageLayoutsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        لایوت صفحات - Page Layouts
      </Typography>

      <Typography className="mb-16" component="p">
      یکی از نقاط قوت Fuse React اجزای صفحه آرایی آن است.
      </Typography>
      <Typography className="mb-16" component="p">
      هر اپلیکیشن، صفحات از پیش ساخته شده از اجزای طرح بندی صفحه Fuse React استفاده می کند.
      </Typography>
      <Typography className="mb-16" component="p">
      به سادگی، اجزای طرح‌بندی صفحه، طرح‌بندی‌های از پیش ساخته شده‌ای هستند که می‌توانید به سادگی آن‌ها را کپی/پیست کنید و شروع به ساخت صفحه یا اپلیکیشن خود بر اساس آن کنید.
      </Typography>
      <Typography className="mb-16" component="p">
      از آنجا که اجزای طرح بندی صفحه هستند، تکرار هر سبک صفحه ای که می توانید در Fuse React پیدا کنید بسیار آسان است.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Page Layout Components
      </Typography>

      <Typography className="my-16" component="div">
        <ul>
          <li className="mb-8">
            <Link to="/documentation/fuse-components/fuse-page-simple">FusePageSimple</Link>
          </li>
          <li className="mb-8">
            <Link to="/documentation/fuse-components/fuse-page-carded">FusePageCarded</Link>
          </li>
        </ul>
      </Typography>
    </>
  );
}

export default PageLayoutsDoc;
