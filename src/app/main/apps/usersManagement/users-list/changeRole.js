import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withRouter from '@fuse/core/withRouter';
import { apiURLChangeUserRole, apiUrlGetRoleItems } from 'app/services/jwtService/defaultValues';
import { Grid } from '@mui/material';
import { showMessage } from 'app/store/fuse/messageSlice';
import { Button, Modal, Spacer, Text, Checkbox } from '@nextui-org/react';
import { useDispatch } from 'react-redux';

const styleButtonForText = {
  'font-size': '12px',
  //   background: '#0FB0A7',
};
const styleDiv = {
  'text-align': 'right',
};

const ChangeRole = ({ userId, userRolesId,handleClick  }) => {
  const dispatch = useDispatch();
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const [result, setResult] = useState([]);
  const [roleIds, setRoleId] = useState(userRolesId);
  const [visible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [request, setrequest] = useState(false);

  const CheckHandler = (e, roleIdSet) => {
    const array = [...roleIds];
    // const chk = e.target.checked;
    const chk = e;
    // const val = Number(e.target.value);
    const index = array.indexOf(roleIdSet);
    if (chk && index === -1) {
      setRoleId([...roleIds, roleIdSet]);
    } else if (index !== -1) {
      array.splice(index, 1);
      setRoleId([...array]);
    }
  };

  useEffect(() => {
    try {
      axios
        .get(apiUrlGetRoleItems)
        .then((response) => {
          setResult([...response.data.result]);
        })
        .catch((err) => {
          console.log(`Error in get Users in Rols Api : ${err}`);
        });
    } catch (error) {
      console.log(`Error in : ${{ error }}`);
    }
  }, [request]);
  // get Roles Of Users

  const onChangeRole = () => {
    try {
      axios
        .post(apiURLChangeUserRole, {
          userId,
          roleIds,
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const responsData = response.data;
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
              setIsResponseSuccess(true);
              handleClick({}, true);
              setVisible(false);
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
        .catch((erroere) => {
          dispatch(
            showMessage({
              message: erroere.message,
              autoHideDuration: 4000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'error',
            })
          );
        });
    } catch (error2) {
      dispatch(
        showMessage({
          message: error2.message,
          autoHideDuration: 4000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'error',
        })
      );
    }
  };

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div>
      <Spacer y={0.5} />

      <Button shadow color="gradient" onClick={handler} css={styleButtonForText} size="md">
        تغییر نقش
      </Button>
      <Modal
        closeButton
        preventClose
        width="50%"
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text size={20}> تغییر نقش</Text>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Grid container spacing={1} style={styleDiv}>
              {result !== null &&
                result.map((roles) => {
                  const { id, name } = roles.role;
                  const isEnabled = userRolesId.findIndex((o) => o === id) !== -1;
                  return (
                    <Grid item xs={12}>
                      <Checkbox
                        color="gradient"
                        defaultSelected={isEnabled}
                        value={id}
                        onChange={(e) => CheckHandler(e, id)}
                        size="lg"
                      >
                        {name}
                      </Checkbox>
                    </Grid>
                  );
                })}
            </Grid>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="lg"
            onClick={(e) => {
              onChangeRole();
            }}
          >
            تغییر نقش
          </Button>
          <Button color="error" size="lg" onClick={() => setVisible(false)}>
            انصراف
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default withRouter(ChangeRole);
