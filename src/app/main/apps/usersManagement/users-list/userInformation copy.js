import { useEffect, useMemo, useRef, useState } from 'react';
import { Modal, Input, Row, Checkbox, Button, Text, Card, Spacer, Grid } from '@nextui-org/react';
import withRouter from '@fuse/core/withRouter';
import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {
  apiUrlBase,
  apiUrlAddUserInformation,
  apiUrlUpdateUserInformation,
  apiUrlDeleteUserInformationAdmin,
} from 'app/services/jwtService/defaultValues';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { showMessage } from 'app/store/fuse/messageSlice';
import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';

const styleSelect = {
  width: 500,
  height: '10px',
};
const styleButton = {
  fontSize: '50',
  borderRadius: '$xs', // radii.xs
  border: '$space$1 solid transparent',
  background: '$pink800', // colors.pink800
  color: '$pink100',
  height: '$12', // space[12]
  boxShadow: '$md', // shadows.md
  '&:hover': {
    background: '$pink100',
    color: '$pink800',
  },
  '&:active': {
    background: '$pink200',
  },
  '&:focus': {
    borderColor: '$pink400',
  },
};
const styleButtonForm = {
  fontSize: '50',
  fontWeight: 'bold',
  borderRadius: '$xs', // radii.xs
  border: '$space$1 solid transparent',
  background: '#F5086C ', // colors.pink800
  color: '$white',
  height: '$12', // space[12]
  boxShadow: '$md', // shadows.md
  '&:hover': {
    background: '$pink100',
    color: '$pink800',
  },
  '&:active': {
    background: '$pink200',
  },
  '&:focus': {
    borderColor: '$pink400',
  },
};
const styleButtonEdit = {
  fontSize: '17',
  fontWeight: 'bold',
  borderRadius: '$xs', // radii.xs
  border: '$space$1 solid transparent',
  background: '#40E0D0', // colors.pink800
  color: '$white',
  height: '$12', // space[12]
  boxShadow: '$md', // shadows.md
  '&:hover': {
    background: '#9FE2BF',
    color: '#E9967A',
  },
  '&:active': {
    background: '#B5F6F7 ',
  },
  '&:focus': {
    borderColor: '$pink400',
  },
};

const defaultValues = {
  typeInfo: '',
  valueInfo: '',
};
const options = [
  { value: 'phoneNumber', label: 'شماره همراه' },
  { value: 'email', label: 'ایمیل' },
  { value: 'bankAccountNumber', label: 'شماره حساب' },
  { value: 'socialMedia', label: 'حساب شبکه های اجتماعی' },
];

const UserInformation = ({ userInformation, userId }) => {
  // const [showModal, setShowModal] = useState(false);

  const [userInfo, setUserInfo] = useState({});
  const [visible, setVisible] = useState(false);
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: 400 }), []);
  const [rowData, setRowData] = useState(userInformation);
  const [txtFormBtn, setTxtFormBtn] = useState('ذخیره');
  const [modalTitle, setModalTitle] = useState('اطلاعات جانبی');
  const [styleBtnForm, setStyleBtnForm] = useState(styleButtonForm);

  const onGridReady = useEffect(() => {
    setRowData(userInformation);
  }, [userInfo]);
  const onUserInformationUpdate = () => {
    try {
      axios
        .post(apiUrlUpdateUserInformation, {
          userId,
          ...userInfo,
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const updateUserInfoRes = response.data;
            if (updateUserInfoRes !== null && updateUserInfoRes.status === 0) {
              showMessage({
                message: ' ویرایش اطلاعات با خطا انجام شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            } else {
              showMessage({
                message: 'ویرایش اطلاعات با خطا انجام شد',
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
              message: 'خطایی در فرایند  ویرایش اطلاعات رخ داده است',
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'alert',
            });
          }
        })
        .catch((erroere) => {
          console.log(erroere);
          showMessage({
            message: 'خطا در ویرایش اطلاعات',
            autoHideDuration: 6000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'alert',
          });
        });
    } catch (error2) {
      showMessage({
        message: 'خطا در ویرایش اطلاعات',
        autoHideDuration: 6000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        variant: 'alert',
      });
    }
  };

  const onUserInformationAdd = () => {
    try {
      axios
        .post(apiUrlAddUserInformation, {
          userId,
          propertyName: userInfo.propertyName,
          propertyValue: userInfo.propertyValue,
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const addUserInfoRes = response.data;
            if (addUserInfoRes !== null && addUserInfoRes.status === 0) {
              setUserInfo({});
              showMessage({
                message: 'اطلاعات با موفقیت اضافه شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            } else if (addUserInfoRes === null) {
              showMessage({
                message: 'عملیات ناموفق ',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            } else {
              showMessage({
                message: 'عملیات ناموفق ',
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
              message: 'خطایی در فرایند  اضافه کردن اطلاعات رخ داده است',
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'alert',
            });
          }
        })
        .catch((erroere) => {
          console.log(erroere);
          showMessage({
            message: 'خطا در  فرایند عملیات',
            autoHideDuration: 6000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'alert',
          });
        });
    } catch (error2) {
      showMessage({
        message: 'خطا در  فرایند عملیات',
        autoHideDuration: 6000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        variant: 'alert',
      });
    }
  };

  const onDeleteUserAddress = (id) => {
    try {
      axios
        .post(apiUrlDeleteUserInformationAdmin, {
          userId,
          id,
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const deketeUserInfoRes = response.data;
            if (deketeUserInfoRes !== null && deketeUserInfoRes.status === 0) {
              showMessage({
                message: 'حذف با موفقیت انجام شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'alert',
              });
            } else if (deketeUserInfoRes === null) {
              showMessage({
                message: 'خطا در حذف اطلاعات',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'alert',
              });
            } else {
              showMessage({
                message: 'خطایی در فرایند حذف اطلاعات رخ داده است',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'alert',
              });
            }
          }
        })
        .catch((erroere) => {
          showMessage({
            message: erroere.message,
            autoHideDuration: 6000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'alert',
          });
        });
    } catch (error2) {
      showMessage({
        message: error2.message,
        autoHideDuration: 6000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        variant: 'alert',
      });
    }
  };

  function editUserInfo(e) {
    const tagItem = (
      <div>
        <Button
          css={styleButtonEdit}
          onClick={() => {
            setStyleBtnForm(styleButtonEdit);
            setTxtFormBtn('ویرایش');
            setModalTitle('ویرایش اطلاعات');
            setUserInfo(e.data);
          }}
        >
          ویرایش
        </Button>
      </div>
    );
    return tagItem;
  }

  function deleteUserInfo(e) {
    const tagItem = (
      <div>
        <Button onClick={() => onDeleteUserAddress(e.data.id)}>حذف</Button>
      </div>
    );
    return tagItem;
  }
  const [columnDefs] = useState([
    { field: 'propertyName', headerName: 'نوع اطلاعات', minWidth: 250 },
    { field: 'propertyValue', headerName: 'مقدار اطلاعات', minWidth: 120 },
    {
      field: 'edit',
      headerName: 'ویرایش',
      cellRenderer: editUserInfo,
      minWidth: 80,
    },
    {
      field: 'delete',
      headerName: 'حذف',
      cellRenderer: deleteUserInfo,
      minWidth: 80,
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 50,
      sortable: true,
      filter: true,
    };
  }, []);
  const gridOptions = {
    columnDefs: defaultColDef,
    rowData: null,
    enableRtl: true,
    scroll: true,
    domLayout: 'autoHeight',
    animateRows: true,
    defaultColDef: {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    },
  };

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <div>
      <Spacer y={0.5} />
      <Button css={styleButton} auto onClick={handler}>
        اطلاعات جانبی
      </Button>
      <Modal
        closeButton
        blur
        width="60%"
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text size={18}>{modalTitle}</Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container justify="center">
            <Grid xs={12}>
              <form noValidate className="flex flex-col justify-center w-full">
                {/* <label id="aria-label"  htmlFor="aria-example-input"> */}
                <Grid.Container gap={4} justify="center" AlignItems="stretch">
                  <Grid xs={6}>
                    <Select
                      label="نوع اطلاعات"
                      inputId="aria-example-input"
                      aria-labelledby="aria-label"
                      className="basic-single"
                      defaultValue={{ value: userInfo.propertyName, label: userInfo.propertyName }}
                      classNamePrefix="select"
                      style={{ width: '500px' }}
                      isRtl
                      options={options}
                      onChange={(e) => {
                        setUserInfo({
                          ...userInfo,
                          propertyName: e.value,
                        });
                      }}
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Input
                      type="text"
                      shadow
                      status="scondary"
                      bordered
                      label="مقدار اطلاعات"
                      defaultValue={userInfo.propertyValue}
                      width="200px"
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          propertyValue: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Button
                      css={styleBtnForm}
                      // onClick={closeHandler}
                      onClick={() => {
                        if (userInfo.id !== undefined) {
                          onUserInformationUpdate();
                        } else {
                          onUserInformationAdd();
                        }
                      }}
                    >
                      {txtFormBtn}
                    </Button>
                  </Grid>
                  <Grid xs={6}>
                    <Button auto color="error" onClick={closeHandler}>
                      صرف نظر
                    </Button>
                  </Grid>
                </Grid.Container>
              </form>
            </Grid>
            <Grid xs={12}>
              <Card>
                <Card.Body>
                  <div style={gridStyle} className="ag-theme-alpine">
                    <AgGridReact
                      ref={gridRef}
                      rowData={rowData}
                      columnDefs={columnDefs}
                      defaultColDef={defaultColDef}
                      gridOptions={gridOptions}
                      rowSelection="single"
                      onGridReady={onGridReady}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button auto onClick={closeHandler}>
            Sign in
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(UserInformation);
