import FuseHighlight from '@fuse/core/FuseHighlight';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

function TypographyUI() {
  return (
    <FusePageSimple
      header={
        <div className="flex flex-1 items-center justify-between p-12 md:p-24">
          <div className="flex flex-col">
            <div className="flex items-center mb-16">
              <Icon className="text-18" color="action">
                home
              </Icon>
              <Icon className="text-16" color="action">
                chevron_right
              </Icon>
              <Typography color="textSecondary" className="font-medium">
                رابط کاربری
              </Typography>
            </div>
            <Typography variant="h6" className="text-18 sm:text-24 font-semibold">
              تایپوگرافی
            </Typography>
          </div>

          <Button
            variant="contained"
            color="secondary"
            component="a"
            href="https://mui.com/components/typography"
            target="_blank"
            role="button"
          >
            <Icon>link</Icon>
            <span className="mx-4 hidden sm:flex">منبع</span>
          </Button>
        </div>
      }
      content={
        <div className="p-12 md:p-24 max-w-2xl">
          <Card className="shadow">
            <CardContent>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h1">نمایش متن 4</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography variant="h1">نمایش متن 4</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h2">نمایش متن 3</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography variant="h2">نمایش متن 3</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h3">نمایش متن 2</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography variant="h3">نمایش متن 2</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h4">نمایش متن 1</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography variant="h4">نمایش متن 1</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h5">هدلاین</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                          <Typography variant="h5">هدلاین</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h6">عنوان</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography variant="h6">عنوان</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="subtitle1">روتیتر</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                             <Typography variant="subtitle1">روتیتر</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="body1">بدنه 2</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                            <Typography variant="body1">بدنه 2</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="body2">بدنه 1</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                            <Typography variant="body2">بدنه 1</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="caption">کپشن</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                            <Typography variant="caption">کپشن</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography gutterBottom noWrap>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                  </Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography noWrap>
                                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                            </Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="button">دکمه</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                             <Typography variant="button">دکمه</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      }
    />
  );
}

export default TypographyUI;
