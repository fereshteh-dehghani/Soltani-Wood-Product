import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function ThemeLayoutsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        لایوت های تم - Theme Layouts
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse دارای طرح‌بندی‌های مختلف تم است که می‌توانید آن‌ها را از نوار کناری پیکربندی ببینید و امتحان کنید (روی دکمه چرخان متحرک از سمت راست صفحه خود کلیک کنید).
      </Typography>

      <Typography className="mb-16" component="p">
        این طرح‌بندی‌ها از دایرکتوری<code> /src/app/fuse-layouts</code> قابل دسترسی هستند و می‌توانید آن‌ها را هر طور که دوست دارید تغییر دهید. هر طرح بندی گزینه های خاص خود را دارد. این گزینه ها به شما امکان می دهند عناصر طرح بندی مانند نوار ابزار، پاورقی و نوار ناوبری را پیکربندی کنید.

      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        File Structure
      </Typography>

      <Typography className="my-16" component="div">
        در پوشه <code>/src/app/fuse-layouts</code> :
        <ul className="my-8 list-disc ml-16">
          <li className="mb-8">
            <b>/layout-1</b> :
            <ul className="my-8 ml-12">
              <li className="mb-8">
                <b>/components</b> : حاوی عناصر Layout مانند Toolbar، Footer و Navbar است.
              </li>
              <li className="mb-8">
                <b>/Layout1.js</b> : Layout 1 component
              </li>
              <li className="mb-8">
                <b>/Layout1.config.js</b> : شامل عنوان، تنظیمات پیش‌فرض و گزینه‌های فرم طرح‌بندی است.
              </li>
            </ul>
          </li>
          <li className="mb-8">
            <b>/shared components</b> : هر طرح بندی اجزای این دایرکتوری را به اشتراک می گذارد
          </li>
          <li className="mb-8">
            <b>/FuseLayoutConfigs.js</b> : تمام تنظیمات طرح بندی را وارد می کند.
          </li>
          <li className="mb-8">
            <b>/FuseLayouts.js</b> : تمام اجزای طرح را وارد می کند.
          </li>
          <li className="mb-8">
            <b>/layout-2</b>
          </li>
          <li className="mb-8">
            <b>/layout-3</b>
          </li>
        </ul>
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Configuring
      </Typography>

      <Typography className="mb-16" component="p">
      Fuse React دارای یک سیستم چیدمان قدرتمند است که به شما امکان می دهد در هر مسیر یک طرح بندی متفاوت را پیکربندی و استفاده کنید.
      </Typography>

      <Typography className="mb-16" component="p">
      هر مسیر می‌تواند پیکربندی طرح‌بندی خاص خود را داشته باشد به این معنی که داشتن صفحاتی مانند صفحه ورود که در آن هیچ نوار ابزار یا نوار ناوبری نمایش داده نمی‌شود، بدون خروج از Fuse React بسیار آسان است.
      </Typography>

      <Typography className="mb-16" component="p">
      می توانید اطلاعات بیشتری در مورد پیکربندی مسیر و استفاده از آن از صفحه مستندات مسیریابی دریافت کنید.
      <br/>
      
        
        <Link to="/documentation/configuration/routing">the Routing documentation</Link>
      </Typography>
    </>
  );
}

export default ThemeLayoutsDoc;
