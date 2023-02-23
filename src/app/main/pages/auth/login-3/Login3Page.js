import { yupResolver } from '@hookform/resolvers/yup';
import { styled, darken } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';

const Root = styled('div')(({ theme }) => ({
  '& .Login3-leftSection': {},

  '& .Login3-rightSection': {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
      theme.palette.primary.dark,
      0.5
    )} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('باید یک ایمیل معتبر وارد کنید').required('باید یک ایمیل وارد کنید'),
  password: yup
    .string()
    .required('لطفا رمز عبور خود را وارد کنید.')
    .min(8, 'رمز عبور خیلی کوتاه است - حداقل باید 8 کاراکتر باشد.'),
});

const defaultValues = {
  email: '',
  password: '',
  remember: true,
};

function Login3Page() {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
  }

  return (
    <Root className="flex flex-col flex-auto items-center justify-center shrink-0 p-16 md:p-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden"
      >
        <Card
          className="Login3-leftSection flex flex-col w-full max-w-sm items-center justify-center shadow-0"
          square
        >
          <CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
              <div className="flex items-center mb-48">
                <img className="logo-icon w-48" src="assets/images/logos/fuse.svg" alt="logo" />
                <div className="border-l-1 mr-4 w-1 h-40" />
                <div>
                  <Typography className="text-24 font-semibold logo-text" color="inherit">
                    FUSE
                  </Typography>
                  <Typography
                    className="text-16 tracking-widest -mt-8 font-700"
                    color="textSecondary"
                  >
                    REACT
                  </Typography>
                </div>
              </div>
            </motion.div>

            <form
              name="loginForm"
              noValidate
              className="flex flex-col justify-center w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-16"
                    label="پست الکترونیک"
                    autoFocus
                    type="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-16"
                    label="رمز عبور"
                    type="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                <Controller
                  name="remember"
                  control={control}
                  render={({ field }) => (
                    <FormControl>
                      <FormControlLabel label="منو به خاطر بسپار" control={<Checkbox {...field} />} />
                    </FormControl>
                  )}
                />

                <Link className="font-normal" to="/pages/auth/forgot-password-2">
                  رمز عبورت رو فراموش کردی؟!
                </Link>
              </div>

              <Button
                variant="contained"
                color="primary"
                className="w-full mx-auto mt-16"
                aria-label="LOG IN"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                type="submit"
              >
                ورود
              </Button>
            </form>

            <div className="my-24 flex items-center justify-center">
              <Divider className="w-32" />
              <span className="mx-8 font-semibold">یا</span>
              <Divider className="w-32" />
            </div>

            <Button variant="outlined" color="primary" size="small" className="w-192 mb-8">
              ورود با گوگل
            </Button>

            <Button variant="outlined" color="primary" size="small" className="w-192">
              ورود با فیس بوک
            </Button>
          </CardContent>

          <div className="flex flex-col items-center justify-center pb-32">
            <span className="font-normal">حساب کاربری توی سایت نداری؟!</span>
            <Link className="font-normal" to="/pages/auth/register-3">
              ایجاد حساب کاربری
            </Link>
          </div>
        </Card>

        <div className="Login3-rightSection flex hidden md:flex flex-1 items-center justify-center p-64">
          <div className="max-w-320">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            >
              <Typography
                color="inherit"
                className="text-32 sm:text-44 font-semibold leading-tight"
              >
                به پنل <br />
                 FUSE React<br />
                 خیلی خیلی خوش اومدی 😉
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography variant="subtitle1" color="inherit" className="mt-32 font-medium">
              قالب مدیریت قدرتمند و حرفه ای برای برنامه های کاربردی وب، CRM، CMS، پنل های مدیریت و موارد دیگر.
              </Typography>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Root>
  );
}

export default Login3Page;
