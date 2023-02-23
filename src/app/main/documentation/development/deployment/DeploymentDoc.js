import Typography from '@mui/material/Typography';

function DeploymentDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Deployment در قالب
      </Typography>

      <Typography className="mb-16" component="p">
        ممکن است هنگام بازخوانی URL برنامه مشکل داشته باشید. اگر چنین است، باید تنظیمات سرور را پیکربندی کنید.
      </Typography>

      <Typography className="mb-16" component="p">
        این ننظیمات خیلی خاص رو میتونین در داکیومنت فیس بوک مطالعه کنید

        <br />
        <a
          href="https://facebook.github.io/create-react-app/docs/deployment"
          target="_blank"
          rel="noreferrer noopener"
          className="ml-4"
        >
          Deployment Settings
        </a>
      </Typography>
    </>
  );
}

export default DeploymentDoc;
