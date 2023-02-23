import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function ChangingDefaultFontDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        تغییر فونت پیش فرض
      </Typography>

      <Typography className="mb-16" component="p">
        دو راه برای تزریق font-family وجود دارد.
      </Typography>

      <ul className="list-decimal ml-16">
        <li>
          <Typography className="mb-24">
            می توانید پیوند فونت را در head of the public/index.html اضافه کنید.

          </Typography>
          <FuseHighlight component="pre" className="language-html mb-24">
            {`
                          <link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=vietnamese" rel="stylesheet">
                        `}
          </FuseHighlight>
        </li>
        <li>
          <Typography className="mb-24">
            می‌توانید بسته فونت تایپ‌فیس را نصب کنید و مانند ما در src/index.js وارد کنید
          </Typography>
          <FuseHighlight component="pre" className="language-jsx mb-24">
            {`
                            import 'typeface-roboto';
                        `}
          </FuseHighlight>
        </li>
      </ul>

      <Typography className="mt-16 mb-8" component="p">
        باید مقادیر
        <code>typography.fontFamily</code>
        را به پیکربندی تم مورد نظر در
        <code>src/app/fuse-configs/themesConfig</code>
        اضافه کنید.

      </Typography>
      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
					default    : {
					  typography: {
						fontFamily: [
							'Roboto',
							'"Helvetica"',
							'Arial',
							'sans-serif'
						].join(','),
				`}
      </FuseHighlight>

      <Typography className="mt-16 mb-8" component="p">
        همچنین در
        <code>src/styles/app-base.css </code>
        تخصیص خانواده فونت وجود دارد.
      </Typography>

      <FuseHighlight component="pre" className="language-css mb-24">
        {`
					html {
						font-size: 62.5%;
            font-family: 'Inter var', Roboto, Helvetica Neue, Arial, sans-serif;
            background-color: #121212;
            -webkit-font-smoothing: antialiased;
            text-size-adjust: 100%;
					}
				`}
      </FuseHighlight>
    </>
  );
}

export default ChangingDefaultFontDoc;
