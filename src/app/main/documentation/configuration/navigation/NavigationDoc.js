import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function NavigationDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
      ناوبری - Navigation

      </Typography>

      <Typography className="mb-24" variant="h5">
        تنظیمات پیش فرض
      </Typography>

      <Typography className="mb-16" component="p">
        برای تنظیمات ناوبری یک آرایه وجود داره. و این آرایه توی این فایل موجوده:
        <br/>
        <code>src/app/fuse-configs/navigationConfig.js</code>
        <br/>
        <br/>
        انگلیسی داکیومنت برای فهم بهتر:
        <br/>
        The theme navigation array is located at{' '}
        <code>src/app/fuse-configs/navigationConfig.js</code>
      </Typography>

      <Typography className="mb-16" component="p">
      این پیکربندی حالت اولیه حالت Fuse.navigation redux است.
      </Typography>

      <Typography className="mb-16" component="p">
      آیتم های ناوبری را می توان حین کار با برنامه، به روز رسانی کرد، حذف کرد، با اقدامات redux از هر نقطه از برنامه اضافه کرد.
      </Typography>

      <Typography className="mb-16" component="p">
        Check out FuseNavigation component details for redux actions, item types, etc. at:{' '}
        <Link to="/documentation/fuse-components/fuse-navigation">FuseNavigation Docs</Link>
      </Typography>
    </>
  );
}

export default NavigationDoc;
