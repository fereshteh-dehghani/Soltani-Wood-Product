import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { Button, Grid, InputLabel, TextField } from '@mui/material';
import { Modal, Text } from '@nextui-org/react';
import { showMessage } from 'app/store/fuse/messageSlice';

const styleDiv = {
  'text-align': 'right',
};

function RolesManagement() {
  const mainTheme = useSelector(selectMainTheme);
  const [show, setShow] = useState(false);
  const [newRoleName, setNewRoleName] = useState('');
  const [modalOpenAddRole, setModalOpenAddRole] = useState(false);
  const [response, setResponse] = useState();
  const dispatch = useDispatch();
  const handleAddedNewRole = () => {
    try {
      axios
        .post(`/api/RolesManager/AddRole`
          ,
          {
            Name: newRoleName
          })
        .then((resp) => {
          if (resp !== null && resp.status === 200) {
            const responsData = resp.data;
            if (responsData !== null && responsData.status === 0) {
              dispatch(
                showMessage({
                  message: 'عملیات  با موفقیت انجام شد',
                  autoHideDuration: 4000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'success',
                })
              );
              setResponse(responsData);
            } else if (responsData === null) {
              dispatch(
                showMessage({
                  message: 'عملیات با خطا مواجه شد',
                  autoHideDuration: 4000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'error',
                })
              );
            } else {
              dispatch(
                showMessage({
                  message: responsData.errors[0],
                  autoHideDuration: 4000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'error',
                })
              );
            }
          } else {
            dispatch(
              showMessage({
                message: 'مشکلی در انجام عملیات پیش آمد لطفا دوباره سعی کنید',
                autoHideDuration: 4000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'error',
              })
            );
          }
        })
        .catch(() => {
          dispatch(
            showMessage({
              message: 'عملیات با خطا مواجه شد',
              autoHideDuration: 4000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'error',
            })
          );
        })
    } catch (error) {
      alert(error);
      dispatch(
        showMessage({
          message: 'عملیات با خطا مواجه شد',
          autoHideDuration: 4000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'error',
        })
      );
    }
    // setModalAdmin(false)
  }

  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex items-center">
        <Icon
          component={motion.span}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.2 } }}
          className="text-24 md:text-32"
        >
          groups
        </Icon>
        <Typography
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
        >
          مدیریت نقش ها
        </Typography>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      >
        <Button
          className="whitespace-nowrap"
          variant="contained"
          color="secondary"
          onClick={() => setModalOpenAddRole(true)}
        >
          <span className="hidden sm:flex">نقش جدید</span>
          <span className="flex sm:hidden">نقش جدید</span>
        </Button>
      </motion.div>
      <Modal
        closeButton
        preventClose
        width="40%"
        height="30%"
        aria-labelledby="modal-title"
        open={modalOpenAddRole}
        onClose={() => setModalOpenAddRole(false)}
      >
        <Modal.Header>
          <Text size={20}> اضافه کردن نقش جدید</Text>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Grid container spacing={1} style={styleDiv}>

              <Grid item xs={8}>
                <InputLabel id="address">نقش جدید</InputLabel>
                <TextField
                  fullWidth
                  size="small"
                  value={newRoleName}
                  type="textarea"
                  name="newRole"
                  id="newRole"
                  onChange={(e) => setNewRoleName(e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="lg"
            onClick={() => handleAddedNewRole()}
          >
            ذخیره
          </Button>
          <Button color="error" size="lg" onClick={() => setModalOpenAddRole(false)}>
            انصراف
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RolesManagement;
