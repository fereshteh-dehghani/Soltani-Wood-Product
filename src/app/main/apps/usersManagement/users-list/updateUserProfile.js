import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import withRouter from '@fuse/core/withRouter';
import { apiUrlGetBranch, apiUrlUpdateUserProfile } from 'app/services/jwtService/defaultValues';
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
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';

const styleDatePicker = {
  'text-align': 'right',
  padding: '4px 12px',
  'background-color': 'white',
  height: '36px',
  width: '266px',
};

const UpdateUserProfile = () => {
  const reader = new FileReader();
  const [selectedFile, setSelectedFile] = useState('/assets/img/profiles/1-12.png');
  const [result, setResult] = useState({});
  const [resultBranch, setResultBranch] = useState([]);
  const [fileBase64, setFileBase64] = useState('');
  const [datePickerValue, setDatePickerValue] = useState();
  const [request, setRequest] = useState({});
  const [isTrue, setIsTrue] = useState(true);

  // get Id from url
  const { userId } = useParams();

  const { control } = useForm();

  // get user profile
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/UserProfile/GetUser?id=${userId}&isAdminEdit=true`);
        return response;
      } catch (error) {
        return error;
      }
    };

    fetchData()
      .then((response) => {
        if (response !== null && response.status === 200) {
          if (response.data !== null && response.data.status === 0) {
            setResult({ ...response.data.result });
            setSelectedFile(response.data.result.userImage);
          } else {
            showMessage({
              message: 'خطا در گرفتن اطلاعات',
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'alert',
            });
          }
        } else {
          showMessage({
            message: 'خطا در گرفتن اطلاعات',
            autoHideDuration: 6000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'alert',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId, request]);

  const [firstName, setFirstName] = useState(result.firstName);
  const [lastName, setLastName] = useState(result.lastName);
  const [email, setEmail] = useState(result.email);

  const [gender, setgender] = useState(result.gender);
  const [location] = useState(result.location);
  const [phoneNumber, setPhoneNumber] = useState(result.phoneNumber);
  const [birthDateUser, setBirthDateUser] = useState(moment(result.dateBirth).format('MM/DD/YYYY'));
  const [photoFileName, setPhotoFileName] = useState(result.photoFileName);
  const [branchId, setBranchId] = useState(result.branchId);
  const [description, setDescription] = useState(result.description);
  const [codeMelli, setCodeMelli] = useState(result.codeMelli);
  const [userImage, setUserImage] = useState(result.userImage);

  const convertToBase64 = (file) => {
    const reader2 = new FileReader();
    reader2.readAsDataURL(file);
    reader2.onloadend = () => {
      setUserImage(reader2.result.toString());
    };
  };

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

  const onUserProfileUpdate = () => {
    try {
      axios
        .post(apiUrlUpdateUserProfile, {
          firstName: firstName === undefined || firstName === null ? result.firstName : firstName,
          lastName: lastName === undefined || lastName === null ? result.lastName : lastName,
          email: email === undefined || email === null ? result.email : email,
          birthDate:
            birthDateUser === undefined || birthDateUser == null ? result.BirthDate : birthDateUser,
          location: location === undefined || location === null ? result.location : location,
          phoneNumber:
            phoneNumber === undefined || phoneNumber === null ? result.phoneNumber : phoneNumber,
          // photo: result.photo,
          description:
            description === undefined || description === null ? result.description : description,
          branchId: branchId === undefined || branchId === null ? result.branchId : branchId,
          codeMelli: codeMelli === undefined || codeMelli === null ? result.codeMelli : codeMelli,
          isAdminEdit: result.isAdminEdit,
          gender: gender === undefined || gender === null ? result.gender : gender,
          UserImage: userImage === undefined || userImage === null ? result.userImage : userImage,
          Pid: 'asdfasdf',
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const updateProfileRes = response.data;
            if (updateProfileRes !== null && updateProfileRes.status === 0) {
              // NotificationManager.success(
              //   "ویرایش اطلاعات شما با موفقیت انجام شد",
              //   "ویرایش اطلاعات",
              //   4000,
              //   null,
              //   null,
              //   ""
              // );
            } else if (updateProfileRes === null) {
              // NotificationManager.error(
              //   "عملیات ناموفق ",
              //   "خطا در ویرایش اطلاعات",
              //   3000,
              //   null,
              //   null,
              //   ""
              // );
            } else {
              // NotificationManager.error(
              //   updateProfileRes.errors[0],
              //   "خطا در ویرایش اطلاعات",
              //   3000,
              //   null,
              //   null,
              //   ""
              // );
            }
          } else {
            // NotificationManager.error(
            //   "خطایی در فرایند ویرایش اطلاعات رخ داده است",
            //   "خطا در ویرایش اطلاعات",
            //   3000,
            //   null,
            //   null,
            //   ""
            // );
          }
        })
        .catch((erroere) => {
          // NotificationManager.error(
          //   erroere.message,
          //   "خطا در ویرایش اطلاعات",
          //   3000,
          //   null,
          //   null,
          //   ""
          // );
        });
    } catch (error2) {
      // NotificationManager.error(error2.message, 'خطا در ویرایش', 4000, null, null, '');
      // history.push("/app/swpUserManagment/swpRegister");
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // encodeFileBase64(selectedFile);
    onUserProfileUpdate();
  };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel id="last-name">نام</InputLabel>

                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="first-name"
                  autoFocus
                  size="small"
                  value={result.firstName}
                  onChange={(e) => setResult({ ...result, firstName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel id="last-name">نام خانوادگی</InputLabel>
                <TextField
                  required
                  fullWidth
                  id="last-name"
                  name="lastName"
                  autoComplete="family-name"
                  size="small"
                  value={result.lastName}
                  onChange={(e) => setResult({ ...result, lastName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="select-branch" shrink>
                  انتخاب شعبه
                </InputLabel>
                <TextField
                  required
                  select
                  fullWidth
                  notched
                  // defaultValue={resultBranch.filter((opt) => opt.id === result.branchId)}
                  value={result.branchId}
                  size="small"
                  inputProps={{
                    id: 'select-branch',
                  }}
                  // value={valueBranch.id}
                  onChange={(e) => setResult({ ...result, branchId: e.target.value })}
                >
                  {resultBranch !== null &&
                    resultBranch.map((branch) => {
                      return (
                        <MenuItem
                          key={branch.id}
                          value={branch.name}
                          selected={branch.id === result.branchId}
                        >
                          {branch.name}
                        </MenuItem>
                      );
                    })}
                </TextField>
                {/* </FormControl> */}
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel id="code-melli">کدملی</InputLabel>
                <TextField
                  required
                  fullWidth
                  name="codeMelli"
                  id="code-melli"
                  type="text"
                  size="small"
                  value={result.codeMelli}
                  onChange={(e) => setResult({ ...result, codeMelli: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel id="email">ایمیل</InputLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  size="small"
                  value={result.email}
                  onChange={(e) => setResult({ ...result, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <FormControl sx={{ minWidth: 270 }} size="small"> */}
                <InputLabel id="gender" shrink>
                  جنسیت
                </InputLabel>
                <TextField
                  select
                  fullWidth
                  size="small"
                  value={result.gender}
                  // === 'M' ? 'Male' : 'Female'
                  onChange={(e) => setResult({ ...result, gender: e.target.value })}
                >
                  <MenuItem
                    key="Male"
                    value="Male"
                    //  selected={result.gender === 'Male'}
                  >
                    آقا
                  </MenuItem>
                  <MenuItem
                    key="Female"
                    value="Female"
                    // selected={result.gender === 'Female'}
                  >
                    خانم
                  </MenuItem>
                </TextField>
                {/* </FormControl> */}
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel id="phone-number">موبایل</InputLabel>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  type="text"
                  id="phone-number"
                  size="small"
                  value={result.phoneNumber}
                  onChange={(e) => setResult({ ...result, phoneNumber: e.target.value })}
                />
              </Grid>
              {/* <Grid item xs={12} md={8}>
                <InputLabel id="birthDate">تاریخ تولد</InputLabel>
                <DatePicker
                  id="birthDate"
                  render={<InputIcon />}
                  value={dateOfBirth}
                  calendar={persian}
                  locale={persianFa}
                  calendarPosition="bottom-right"
                  onChange={(value) => {
                    setDatePickerValue(value);
                    setDateOfBirth(value);
                  }}
                />
              </Grid> */}
              <Grid item xs={12} md={6}>
                <InputLabel id="birthDate">تاریخ تولد</InputLabel>
                <Controller
                  render={() => (
                    <DatePicker
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

              <Grid item xs={12}>
                <InputLabel id="description">توضیحات</InputLabel>
                <TextField
                  textArea
                  id="description"
                  minRows={2}
                  mb={5}
                  placeholder=""
                  style={{ width: 550 }}
                  value={result.description}
                  onChange={(e) => setResult({ ...result, description: e.target.value })}
                />
              </Grid>
              <Grid item xs={2} mt={3}>
                <Avatar
                  // mt={8}
                  alt="تصویر کاربر"
                  src={selectedFile}
                  sx={{ width: 80, height: 90, borderRadius: 5 }}
                  mb={8}
                />
              </Grid>
              <Grid item xs={12} mt={5}>
                <Button component="label" variant="outline">
                  آپلود تصویر
                  <input
                    accept="image/*"
                    type="file"
                    id="file"
                    name="file"
                    placeholder=""
                    hidden
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        convertToBase64(e.target.files[0]);
                      }
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
              ارسال
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default withRouter(UpdateUserProfile);
