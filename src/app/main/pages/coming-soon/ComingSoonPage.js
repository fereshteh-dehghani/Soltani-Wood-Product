import FuseCountdown from '@fuse/core/FuseCountdown';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import _ from '@lodash';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('باید یک ایمیل معتبر وارد کنید').required('باید یک ایمیل وارد کنید'),
});

const defaultValues = {
  email: '',
};

function ComingSoonPage() {
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
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-32 text-center">
              <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

              <Typography variant="subtitle1" className="mb-16 font-semibold">
              سلام! با تشکر از شما برای بررسی برنامه ما.
              </Typography>

              <Typography color="textSecondary" className="max-w-288">
              هنوز کاملاً آماده نیست، اما ما سخت کار می‌کنیم و تقریباً در آینده آماده می‌شود:
              </Typography>

              <FuseCountdown endDate="2023-07-28" className="my-48" />

              <Divider className="w-48" />

              <Typography className="font-semibold my-32 w-full">
              اگر مایلید زمانی که برنامه آماده شد به شما اطلاع داده شود، می توانید در لیست ایمیل ما مشترک شوید.
              </Typography>

              <form
                name="subscribeForm"
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

                <Button
                  variant="contained"
                  color="secondary"
                  className="w-224 mx-auto my-16"
                  aria-label="Subscribe"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                  type="submit"
                >
                  اشتراک در خبرنامه
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default ComingSoonPage;
