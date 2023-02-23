import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const Root = styled('div')(({ theme }) => ({
  '& .PricingStyle3Page-header': {
    height: 600,
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },
  '& .PricingStyle3Page-price': {
    backgroundColor: theme.palette.primary[600],
    color: theme.palette.getContrastText(theme.palette.primary[600]),
  },
}));

function PricingStyle3Page() {
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
      <div className="PricingStyle3Page-header flex">
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
              <Card className="relative rounded-16">
                <div className="p-32 text-center">
                  <Typography className="text-32 font-semibold">استارتر</Typography>
                  <Typography color="textSecondary" className="text-16 font-normal">
                    برای تیم های کوچک
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="PricingStyle3Page-price flex items-end justify-center py-16 px-32">
                    <div className="flex justify-center">
                      <Typography color="inherit" className="font-normal">
                        تومان
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-semibold leading-none"
                      >
                        29
                      </Typography>
                    </div>
                    <Typography color="inherit" className="mx-4 font-normal">
                      ماهانه به ازای هرکاربر
                    </Typography>
                  </div>

                  <div className="flex flex-col p-32">
                    <Typography color="textSecondary" className="mb-16">
                      پروژه های بی نهایت
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      صفحات بی نهایت
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      فضای دیسک بی نهایت
                    </Typography>
                    <Typography color="textSecondary">24 / 7 پشتیبانی رایگان</Typography>
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">
                  <Button variant="outlined" className="w-full">
                    رایگان شروع کنید
                  </Button>
                  <Typography color="textSecondary" className="mt-16">
                    7  روز رایگان برای شروع
                  </Typography>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="relative rounded-16" raised>
                <div className="p-32 text-center">
                  <Typography className="text-32 font-semibold">حرفه ای</Typography>
                  <Typography color="textSecondary" className="text-16 font-normal">
                    برای تیم های بزرگ
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="PricingStyle3Page-price flex items-end justify-center py-16 px-32">
                    <div className="flex justify-center">
                      <Typography color="inherit" className="font-normal">
                        تومان
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-semibold leading-none"
                      >
                        59
                      </Typography>
                    </div>
                    <Typography color="inherit" className="mx-4 font-normal">
                      ماهانه به ازای هرکاربر
                    </Typography>
                  </div>

                  <div className="flex flex-col p-32">
                    <Typography color="textSecondary" className="mb-16">
                      پروژه های بی نهایت
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      صفحات بی نهایت
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      فضای دیسک بی نهایت
                    </Typography>
                    <Typography color="textSecondary">24 / 7 پشتیبانی رایگان</Typography>
                    <Typography color="textSecondary">گزارش گیری پیشرفته</Typography>
                    <Typography color="textSecondary">قالب قابل تغییر</Typography>
                    <Typography color="textSecondary">یکپارچه سازی CRM</Typography>
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">
                  <Button variant="contained" color="secondary" className="w-full">
                    رایگان شروع کنید
                  </Button>
                  <Typography color="textSecondary" className="mt-16">
                    30 روز رایگان برای شروع
                  </Typography>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="relative rounded-16">
                <div className="p-32 text-center">
                  <Typography className="text-32 font-semibold">شرکتی</Typography>
                  <Typography color="textSecondary" className="text-16 font-normal">
                    برای تیم های خیلی بزرگ
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="PricingStyle3Page-price flex items-end justify-center py-16 px-32">
                    <div className="flex justify-center">
                      <Typography color="inherit" className="font-normal">
                        تومان
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-semibold leading-none"
                      >
                        29
                      </Typography>
                    </div>
                    <Typography color="inherit" className="mx-4 font-normal">
                      ماهانه به ازای هرکاربر
                    </Typography>
                  </div>

                  <div className="flex flex-col p-32">
                    <Typography color="textSecondary" className="mb-16">
                      پروژه های بی نهایت
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      صفحات بی نهایت
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      فضای دیسک بی نهایت
                    </Typography>
                    <Typography color="textSecondary">برای لیست کامل ویژگی ها، با ما تماس بگیرید</Typography>
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">
                  <Button variant="outlined" className="w-full">
                    تماس بگیرید
                  </Button>
                  <Typography color="textSecondary" className="mt-16">
                    90 روز رایگان برای شروع
                  </Typography>
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

export default PricingStyle3Page;
