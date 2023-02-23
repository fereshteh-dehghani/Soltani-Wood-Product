import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

function MaintenancePage() {
  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <Grow in>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center text-center p-16 sm:p-48">
              <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

              <Typography variant="subtitle1" className="mb-16 text-24 font-semibold">
              برای تعمیر و نگهداری برنامه ریزی شده بسته است!
              </Typography>

              <Typography color="textSecondary" className="mb-40 font-medium">
                خیلی خیلی متاسفیم اما سایت در دست تعمیره <br /> لطفا ساعاتی دیگر مجددا تلاش کنید.
              </Typography>
            </CardContent>
          </Card>
        </Grow>
      </div>
    </div>
  );
}

export default MaintenancePage;
