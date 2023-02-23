import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import axios from 'axios';
import { apiUrlChangePassword, apiUrlChangeUserPassword } from 'app/services/jwtService/defaultValues';
import { showMessage } from 'app/store/fuse/messageSlice';
import { useState } from 'react';
import withRouter from '@fuse/core/withRouter';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
    // email: yup.string().email('باید یک ایمیل معتبر وارد کنید').required('باید یک ایمیل وارد کنید'),
    newPassword: yup
        .string()
        .required('لطفا رمز عبور خود را وارد کنید.')
        .min(8, 'رمز عبور خیلی کوتاه است - حداقل باید 8 کاراکتر باشد.'),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'گذرواژه ها باید مطابقت داشته باشند'),
});

const defaultValues = {
    newPassword: '',
    confirmPassword: '',
};

function ResetPassword() {

    const { userId } = useParams();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { isValid, dirtyFields, errors },
    } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema),
    });


    const onSubmit = async (data) => {

        await axios
            .post(apiUrlChangeUserPassword, {
                ...data,
                userId
            })
            .then((resp) => {
                if (resp !== null && resp.status === 200) {
                    if (resp.data.result === true && resp.data.errors.length === 0) {
                        dispatch(
                            showMessage({
                                message: 'تغییر رمز عبور شما با موفقیت انجام شد', // text or html
                                autoHideDuration: 5000, // ms
                                anchorOrigin: {
                                    vertical: 'top', //   top bottom
                                    horizontal: 'right', //  left center right
                                },
                                variant: 'success', //   success error info warning null
                            })
                        );
                        reset(defaultValues)
                    } else {
                        // eslint-disable-next-line no-lonely-if
                        if (resp.data.errors.length > 1) {
                            dispatch(
                                showMessage({
                                    message: (
                                        <>
                                            {' '}
                                            {resp.data.errors[0]} <br /> {resp.data.errors[1]}{' '}
                                        </>
                                    ), // text or html
                                    autoHideDuration: 4000, // ms
                                    anchorOrigin: {
                                        vertical: 'top', //   top bottom
                                        horizontal: 'right', //  left center right
                                    },
                                    variant: 'error', //   success error info warning null
                                })
                            );
                        } else {
                            dispatch(
                                showMessage({
                                    message: resp.data.errors[0], // text or html
                                    autoHideDuration: 4000, // ms
                                    anchorOrigin: {
                                        vertical: 'top', //   top bottom
                                        horizontal: 'right', //  left center right
                                    },
                                    variant: 'error', //   success error info warning null
                                })
                            );
                        }
                        // resp.data.errors.forEach(function (name) {

                        // });
                    }
                } else {
                    dispatch(
                        showMessage({
                            message: 'خطایی در فرایند تغییر رمز عبور رخ داده است', // text or html
                            autoHideDuration: 5000, // ms
                            anchorOrigin: {
                                vertical: 'top', //   top bottom
                                horizontal: 'right', //  left center right
                            },
                            variant: 'error', //   success error info warning null
                        })
                    );
                }
            })
            .catch((err) => {
                dispatch(
                    showMessage({
                        message: 'خطایی در فرایند تغییر رمز عبور رخ داده است', // text or html
                        autoHideDuration: 5000, // ms
                        anchorOrigin: {
                            vertical: 'top', //   top bottom
                            horizontal: 'right', //  left center right
                        },
                        variant: 'error', //   success error info warning null
                    })
                );
            });
    };

    return (
        <div className="flex flex-col flex-auto p-16 sm:p-24 md:flex-row md:p-0 overflow-hidden">
            <div className="flex flex-col grow-0 items-center  p-16 text-center md:p-128 md:items-start md:shrink-0 md:flex-1 md:text-left">
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
                >
                    <img className="w-128 mb-32" src="assets/images/logos/fuse.svg" alt="logo" />
                </motion.div>

            </div>

            <Card
                component={motion.div}
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                transition={{ bounceDamping: 0 }}
                className="w-full max-w-400 mx-auto m-16 md:m-0 rounded-20 md:rounded-none"
                square
                layout
            >
                <CardContent className="flex flex-col items-center justify-center p-16 sm:p-32 md:p-48 md:pt-128 ">
                    <Typography variant="h6" className="mb-24 font-semibold text-18 sm:text-24">
                        تغییر رمز عبور
                    </Typography>

                    <form
                        name="resetForm"
                        noValidate
                        className="flex flex-col justify-center w-full"
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <Controller
                            name="newPassword"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    {...register("newPassword")}
                                    className="mb-16"
                                    label="رمز عبور جدید"
                                    type="password"
                                    name="newPassword"
                                    error={!!errors.password}
                                    helperText={errors?.password?.message}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    {...register("confirmPassword")}
                                    className="mb-16"
                                    label="تکرار رمز عبور"
                                    type="password"
                                    error={!!errors.confirmPassword}
                                    helperText={errors?.confirmPassword?.message}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            className="w-224 mx-auto mt-16"
                            aria-label="Reset"
                            disabled={_.isEmpty(dirtyFields) || !isValid}
                            type="submit"

                        >
                            ارسال
                        </Button>
                    </form>

                    <div className="flex flex-col items-center justify-center pt-32 pb-24">
                        <Link className="font-normal" to="/pages/auth/login-2">
                            بازگشت به صفحه ورود
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default withRouter(ResetPassword);
