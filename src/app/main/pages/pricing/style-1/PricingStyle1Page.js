import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Root = styled('div')(({ theme }) => ({
  '& .PricingStyle1Page-header': {
    height: 600,
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

function PricingStyle1Page() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Root className="w-full">
      <div className="PricingStyle1Page-header flex">
        <div className="p-24 w-full max-w-2xl mx-auto">
          <div className="text-center my-128 mx-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            >
              <Typography color="inherit" className="font-bold text-32 md:text-52">
                جدول های قیمت گذاری برای همه!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography color="inherit" className="text-16 opacity-75 mt-16 mx-auto max-w-512">
                پیشرفته ترین ابزارهای پشتیبانی مشتری با قیمتی ساده و مقرون به صرفه. و شما همیشه می توانید به مدت 30 روز، رایگان امتحان کنید!
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="-mt-192">
        <div className="w-full max-w-2xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center flex-wrap"
          >
            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="rounded-16">
                <div className={clsx('px-24 py-16')}>
                  <Typography variant="subtitle1" className="font-medium">
                    پایه
                  </Typography>
                </div>

                <CardContent className="p-32">
                  <div className="flex justify-center">
                    <Typography variant="h5" color="textSecondary">
                      تومان
                    </Typography>
                    <div className="flex items-end">
                      <Typography className="text-72 mx-4 tracking-tight font-semibold leading-none">
                        4
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className="font-normal">
                        / ماهانه
                      </Typography>
                    </div>
                  </div>

                  <Divider className="my-32" />

                  <div className="flex flex-col">
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">10</span>
                      پروژه ها
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">10</span>
                      صفحات
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">100</span>
                      فضای دیسک \ مگابایت
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <Button variant="outlined" className="w-128">
                    سفارش
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="rounded-16" raised>
                <div className={clsx('flex items-center justify-between px-24 py-16')}>
                  <Typography variant="subtitle1" className="font-medium">
                    استاندارد
                  </Typography>
                  <Typography variant="caption" color="inherit" className="font-normal">
                    سود کنید 15%
                  </Typography>
                </div>

                <CardContent className="p-32">
                  <div className="flex justify-center">
                    <Typography variant="h5" color="textSecondary">
                      تومان
                    </Typography>
                    <div className="flex items-end">
                      <Typography className="text-72 mx-4 tracking-tight font-semibold leading-none">
                        8
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className="font-normal">
                        / ماهانه
                      </Typography>
                    </div>
                  </div>

                  <Divider className="my-32" />

                  <div className="flex flex-col">
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">20</span>
                      پروژه ها
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">20</span>
                      صفحات
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">200</span>
                       فضای دیسک \ مگابایت
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <Button variant="contained" color="secondary" className="w-128">
                  سفارش
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="rounded-16">
                <div className={clsx('px-24 py-16')}>
                  <Typography variant="subtitle1" className="font-medium">
                    پیشرفته
                  </Typography>
                </div>

                <CardContent className="p-32">
                  <div className="flex justify-center">
                    <Typography variant="h5" color="textSecondary" className="font-normal">
                      تومان
                    </Typography>
                    <div className="flex items-end">
                      <Typography className="text-72 mx-4 tracking-tight font-semibold leading-none">
                        12
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className="font-normal">
                        / ماهانه
                      </Typography>
                    </div>
                  </div>

                  <Divider className="my-32" />

                  <div className="flex flex-col">
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">40</span>
                      پروژه ها
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">40</span>
                      صفحات
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">500</span>
                       فضای دیسک \ مگابایت
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <Button variant="outlined" className="w-128">
                  سفارش
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-medium">
              سوالات متداول
            </Typography>

            <div className="flex flex-wrap w-full">
              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">آزمایش رایگان چگونه کار می کند؟</Typography>
                <Typography className="text-16" color="textSecondary">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">آیا می توانم هر زمان لغو کنم؟</Typography>
                <Typography className="text-16" color="textSecondary">
                  کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">بعد از تمام شدن مدت آزمایشی چه می شود؟</Typography>
                <Typography className="text-16" color="textSecondary">
                  کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">شامل تخفیف هم میشه؟</Typography>
                <Typography className="text-16" color="textSecondary">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}

export default PricingStyle1Page;
