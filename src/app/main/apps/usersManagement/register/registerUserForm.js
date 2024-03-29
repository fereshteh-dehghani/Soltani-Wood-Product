import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withRouter from '@fuse/core/withRouter';
import { useDispatch, useSelectore } from 'react-redux';
import { apiUrlGetBranch, apiUrlRegisterUser } from 'app/services/jwtService/defaultValues';
import { showMessage } from 'app/store/fuse/messageSlice';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import { border } from '@mui/system';

const styleDatePicker = {
  'text-align': 'right',
  // 'border-radius': '15px',
  // 'border': '1px #0c8af8 solid',
  padding: '4px 12px',
  'background-color': 'white',
  height: '36px',
  width: '266px',
};

const RegisterUserForm = () => {
  const [image, setImage] = useState('');
  const [resultBranch, setResultBranch] = useState([]);
  const [userImage, setUserImage] = useState('');
  const [birthDateUser, setBirthDateUser] = useState('');
  // const [photoFileName, setPhotoFileName] = useState();

  // get Branch

  useEffect(() => {
    try {
      axios
        .get(apiUrlGetBranch)
        .then((response) => {
          setResultBranch([...response.data.result]);
        })
        .catch((err) => {
          console.log(`Error in get Users in Rols Api : ${err}`);
        });
    } catch (errors) {
      console.log(`Error in : ${{ errors }}`);
    }
  }, []);

  // Update User Profi
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const codeMelliRegex = /^[0-9]{10}$/;
  const schema = yup.object().shape({
    firstName: yup.string().required('نام* وارد نشده است'),
    lastName: yup.string().required('نام خانوادگی * وارد نشده است'),
    username: yup.string().required('نام کاربری* وارد نشده است'),
    phoneNumber: yup.string().matches(phoneRegExp, 'شماره تلفن معتبر نیست'),
    codeMelli: yup.string().matches(codeMelliRegex, 'کد ملی*  معتبر نیست'),
    password: yup.string().min(6).max(20).required('رمز عبور وارد نشده است'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'گذرواژه ها مطابقت ندارند'),
    // userImage: yup.mixed().test('required', 'لظفا یک تصویر انتخاب کنید', value => {
    //     return value && value.lenght;
    // }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result.toString());
      setUserImage(reader.result.toString());
    };
  };

  const onSubmit = async (data) => {
    // if (data.userImage.length > 0) {
    //     data.userImage = convertToBase64(data.userImage[0]);
    // }
    // console.log(data);
    await axios
      .post(apiUrlRegisterUser, {
        ...data,
        userImage,
        birthDate: birthDateUser,
      })
      .then((resp) => {
        if (resp !== null && resp.status === 200) {
          if (resp.data.result === true && resp.data.errors.length === 0) {
            dispatch(
              showMessage({
                message: 'ثبت نام شما با موفقیت انجام شد', // text or html
                autoHideDuration: 5000, // ms
                anchorOrigin: {
                  vertical: 'top', //   top bottom
                  horizontal: 'right', //  left center right
                },
                variant: 'success', //   success error info warning null
              })
            );
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
              message: 'خطایی در فرایند ثبت نام رخ داده است', // text or html
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
            message: 'خطایی در فرایند ثبت نام رخ داده است', // text or html
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
    <>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4} pt={3}>
                <InputLabel style={{ color: 'black' }} id="first-name">
                  نام
                </InputLabel>

                <TextField
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="first-name"
                  autoFocus
                  size="small"
                  error={!!errors.firstName}
                  helperText={errors?.firstName?.message}
                  {...register('firstName')}
                />
              </Grid>
              <Grid item xs={12} sm={4} pt={3}>
                <InputLabel style={{ color: 'black' }} id="last-name">
                  نام خانوادگی
                </InputLabel>
                <TextField
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  required
                  fullWidth
                  id="last-name"
                  name="lastName"
                  autoComplete="family-name"
                  error={!!errors.lastName}
                  helperText={errors?.lastName?.message}
                  size="small"
                  {...register('lastName')}
                />
              </Grid>

              <Grid>
                <Grid item xs={2} sm={4} mt={1} pr={5} pl={5} style={{ display:"flex" , flexDirection:"row"}}>
                  <Avatar
                    // mt={8}
                    alt="تصویر کاربر"
                    src={image}
                    sx={{ width: 80, height: 90, borderRadius: 5 }}
                    mb={8}
                  />

                  <Button component="label" variant="outline" fullWidth style={{paddingRight:"3rem" , paddingLeft:"3rem"}} >
                    آپلود تصویر
                    <input
                      accept="image/*"
                      type="file"
                      id="file"
                      name="file"
                      placeholder=""
                      hidden
                      // {...register('userImage')}
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          convertToBase64(e.target.files[0]);
                        } else {
                          setImage(Image);
                        }
                      }}
                    />
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12} md={4}>
                <InputLabel style={{ color: 'black' }} id="username">
                  نام کاربری
                </InputLabel>
                <TextField
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  required
                  fullWidth
                  id="username"
                  name="userName"
                  autoComplete="username"
                  size="small"
                  error={!!errors.username}
                  helperText={errors?.username?.message}
                  {...register('username')}
                  //   value={result.lastName}
                  //   onChange={(e) => setResult({ ...result, lastName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel style={{ color: 'black' , fontSize:"13px" }} htmlFor="select-branch" shrink>
                  انتخاب شعبه
                </InputLabel>
                <TextField
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  required
                  select
                  fullWidth
                  notched
                  // value={result.branchId}
                  size="small"
                  inputProps={{
                    id: 'select-branch',
                  }}
                  {...register('branchId')}
                >
                  {resultBranch !== null &&
                    resultBranch.map((branch) => {
                      return (
                        <MenuItem key={branch.name} value={branch.id}>
                          {branch.name}
                        </MenuItem>
                      );
                    })}
                </TextField>
                {/* </FormControl> */}
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel style={{ color: 'black' }} id="codeMelli">
                  کدملی
                </InputLabel>
                <TextField
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  required
                  fullWidth
                  name="codeMelli"
                  id="codeMelli"
                  type="text"
                  size="small"
                  error={!!errors.codeMelli}
                  helperText={errors?.codeMelli?.message}
                  {...register('codeMelli')}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel style={{ color: 'black' }} id="gender" shrink>
                  جنسیت
                </InputLabel>
                <TextField
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  select
                  fullWidth
                  size="small"
                  {...register('gender')}
                >
                  <MenuItem key="Male" value="Male">
                    آقا
                  </MenuItem>
                  <MenuItem key="Female" value="Female">
                    خانم
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel style={{ color: 'black' }} id="password">
                  رمز عبور
                </InputLabel>
                <TextField
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  size="small"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  {...register('password')}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel style={{ color: 'black' }} id="passwordConfirm">
                  تکرار رمز عبور
                </InputLabel>
                <TextField
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  required
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  error={!!errors.passwordConfirm}
                  helperText={errors?.passwordConfirm?.message}
                  size="small"
                  {...register('confirmPassword')}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <InputLabel style={{ color: 'black' }} id="phone-number">
                  موبایل
                </InputLabel>
                <TextField
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  required
                  fullWidth
                  name="phoneNumber"
                  type="text"
                  id="phone-number"
                  size="small"
                  error={!!errors.phoneNumber}
                  helperText={errors?.phoneNumber?.message}
                  {...register('phoneNumber')}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <InputLabel style={{ color: 'black' }} id="email">
                  ایمیل
                </InputLabel>
                <TextField
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  size="small"
                  {...register('email')}
                />
              </Grid>

              <Grid item xs={4} md={4}>
                <InputLabel style={{ color: 'black' }} id="birthDate">
                  تاریخ تولد
                </InputLabel>
                <Controller
                  render={() => (
                    <DatePicker
                      sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                      id="birthDate"
                      // render={<InputIcon />}
                      //   value={dateOfBirth}
                      style={styleDatePicker}
                      calendar={persian}
                      locale={persianFa}
                      calendarPosition="bottom-right"
                      onChange={(date) => {
                        const d = new Date(date).toLocaleDateString('fa-IR');
                        setBirthDateUser(d);
                      }}
                    />
                  )}
                  control={control}
                  valueName="selected"
                  name="birthDate"
                />
              </Grid>

              <Grid item xs={12} md={12} fullWidth >
                <InputLabel style={{ color: 'black' }} id="description">
                  توضیحات
                </InputLabel>
                <TextField
                  fullWidth
                  sx={{ border: '0.5px solid black', borderRadius: '5px' }}
                  textarea
                  id="description"
                  name="description"
                  minRows={2}
                  mb={5}
                  placeholder=""
                  {...register('description')}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              ثبت نام کاربر
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default withRouter(RegisterUserForm);
