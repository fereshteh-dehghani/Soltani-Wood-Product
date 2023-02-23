import Typography from '@mui/material/Typography';

function IntroductionDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        معرفی قالب
      </Typography>
      <Typography className="mb-16" component="p">
        این نسخه از Fuse یک قالب مدیریت سنتی نیست، یک برنامه React است که به طور کامل با جاوا اسکریپت نوشته شده است و هیچ وابستگی به jQuery ندارد.
      </Typography>
      <Typography className="mb-16" component="p">
        در حالی که Fuse React یک ابزار و منبع عالی برای یادگیری React است، اما به حداقل سطح اولیه دانش React، Redux نیز نیاز دارد تا بتوانید مسیر خود را در سورس کد پیدا کنید.
      </Typography>
      <Typography className="mb-32" component="p">
        در اینجا می توانید لیستی از کتابخانه های اصلی، مشخصات طراحی و استانداردهای کدگذاری را که در Fuse React استفاده می کنیم، بیابید:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Google's Material Design
      </Typography>
      <Typography className="mb-16" component="p">
        همه کتابخانه ها و اجزای سفارشی ساخته شده از
        {' '}
        <a
          href="https://www.google.com/design/spec/material-design/introduction.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          Google's Material Design
        </a> استفاده میکنند
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        React
      </Typography>
      <Typography className="mb-16" component="p">
        هسته ی قالب ما از
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
          React
        </a>{' '}ساخته شده. اگه نمیدونین که React چیه بهتره کتابخانهقبل از کار با قالب آن را یاد بگیرید
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Material-UI
      </Typography>
      <Typography className="mb-16" component="p">
        <a href="https://mui.com" target="_blank" rel="noreferrer noopener">
          Material-UI
        </a>{' '}
        یکی از کتابخانه های react UI هست
        که
        اجزای طراحی متریال گوگل را پیاده سازی می کند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Create React App (CLI)
      </Typography>
      <Typography className="mb-16" component="p">
        <a
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          Create React App
        </a>{' '}
        ابزاری است که توسط توسعه دهندگان فیس بوک ساخته شده است تا به شما در ساخت برنامه های React کمک کند. این شما را از راه اندازی و پیکربندی وقت گیر نجات می دهد.
      </Typography>
    </>
  );
}

export default IntroductionDoc;
