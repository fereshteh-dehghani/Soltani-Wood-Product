import Typography from '@mui/material/Typography';

function UpdatingFuseReactDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        بروزرسانی قالب Fuse React
      </Typography>

      <Typography className="mb-16" component="p">
      Fuse React یک محصول نهایی یا یک افزونه نیست، بنابراین هیچ راه آسانی برای به روز رسانی پروژه وجود ندارد. به دلیل ماهیت برنامه‌ها، نمی‌توانیم دستورالعمل‌های مجموعه‌ای برای به‌روزرسانی Fuse React ارائه دهیم. این به شدت به پروژه شما بستگی دارد و این به شما بستگی دارد که کد خود را به روز کنید. با این حال، چند نکته وجود دارد که می خواهیم به شما کمک کند تا Fuse React را به روز نگه دارید:
      </Typography>

      <Typography className="my-16" component="div">
        <ol>
          <li className="mb-16">
          مهمترین چیز این است که دایرکتوری /@Fuse را تغییر ندهید، اما گاهی اوقات این امر اجتناب ناپذیر است و در این موارد، سعی کنید تغییرات را به حداقل برسانید.
          </li>
          <li className="mb-16">
          معمولاً کتابخانه‌های React و Material UI تغییرات اساسی انجام می‌دهند و دستان ما را مجبور می‌کنند تا چیزها را تغییر دهیم. در این موارد، همیشه خوب است که تغییرات رسمی آنها را بررسی کنید تا ببینید چه کاری انجام داده اند. معمولاً آنها دستورالعمل های واضح و حتی ابزارهای کمکی را برای به روز رسانی کد شما ارائه می دهند.
          </li>

        </ol>
      </Typography>
    </>
  );
}

export default UpdatingFuseReactDoc;
