import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function MailConfirmPage() {
  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <div className="m-32">
                <Icon className="text-96" color="action">
                  email
                </Icon>
              </div>

              <Typography variant="h5" className="text-center mb-16 font-semibold">
                آدرس ایمیل خود را تایید کنید!
              </Typography>

              <Typography className="text-center mb-16 w-full" color="textSecondary">
                ایمیل تاییدیه فرستاده شد به <b>fkazemi5236@gmail.com</b>.
              </Typography>

              <Typography className="text-center w-full" color="textSecondary">
              صندوق ورودی خود را بررسی کنید و برای تأیید آدرس ایمیل خود، روی پیوند "تأیید ایمیل من" کلیک کنید.
              </Typography>

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <Link className="font-normal" to="/pages/auth/login">
                  بازگشت به صفحه ورود
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default MailConfirmPage;
