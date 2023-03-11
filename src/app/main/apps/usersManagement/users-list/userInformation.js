import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Input, Row, Button, Text, Spacer } from '@nextui-org/react';
import { Grid } from '@mui/material';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import axios from 'axios';
import {
  apiUrlAddUserInformation,
  apiUrlUpdateUserInformation,
  apiUrlDeleteUserInformationAdmin,
} from 'app/services/jwtService/defaultValues';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { showMessage } from 'app/store/fuse/messageSlice';
import Select from 'react-select';


const styleButtonForText1 = {
  'font-size': '13px',
  'color': 'black',
  'z-index': '1',
  'width': '200px',
  'margin-top' : '2rem',
  'margin-right' : '1rem',
};

const styleButtonForText = {
  'font-size': '13px',
  'color': 'black',
  'z-index': '1',
  'width': '200px',
};
const styleInputText = {
  'font-size': '15px',
  border: '1px solid black',
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

const UserInformation = ({ userId, modalOpen, closeHandler }) => {
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  const [visible, setVisible] = useState(false);
  const gridRef = useRef();
  const gridStyleR = useMemo(() => ({ height: 300 }), []);
  const [rowData, setRowData] = useState();
  const [txtFormBtn, setTxtFormBtn] = useState('ذخیره');
  const [modalTitle, setModalTitle] = useState('اطلاعات جانبی');
  const [styleBtnForm, setStyleBtnForm] = useState(styleButtonForText);
  const [isRtlSelect, setIsRtlSelect] = useState(true);
  const [responseUpdate, setResponseUpdate] = useState({});

  const onGridReady = useEffect(() => {
    if (userId !== undefined) {
      try {
        axios
          .get(`/api/UserProfile/GetUserInformationList?userId=${userId}`)
          .then((response) => {
            if (response !== null && response.status === 200) {
              if (response.data !== null && response.data.status === 0) {
                setRowData([...response.data.result]);
              } else {
                dispatch(
                  showMessage({
                    message: 'خطا در گرفتن اطلاعات',
                    autoHideDuration: 6000,
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'right',
                    },
                    variant: 'alert',
                  })
                );
              }
            } else {
              dispatch(
                showMessage({
                  message: 'خطا در گرفتن اطلاعات',
                  autoHideDuration: 6000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'alert',
                })
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error2) {
        dispatch(
          showMessage({
            message: error2.message,
            autoHideDuration: 6000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'alert',
          })
        );
      }
    }
  }, [responseUpdate]);

  const changelabelSelect = (value) => options.filter((option) => option.value === value);

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
              setTxtFormBtn('ذخیره');
              dispatch(
                showMessage({
                  message: ' ویرایش اطلاعات با موفقیت انجام شد',
                  autoHideDuration: 6000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'success',
                })
              );
              setResponseUpdate(response.data);
              setUserInfo({ propertyValue: '', propertyName: '' });
            } else {
              dispatch(
                showMessage({
                  message: 'ویرایش اطلاعات با خطا انجام شد',
                  autoHideDuration: 6000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'alert',
                })
              );
            }
          } else {
            dispatch(
              showMessage({
                message: 'خطایی در فرایند  ویرایش اطلاعات رخ داده است',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'alert',
              })
            );
          }
        })
        .catch((erroere) => {
          console.log(erroere);
          dispatch(
            showMessage({
              message: 'خطا در ویرایش اطلاعات',
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'alert',
            })
          );
        });
    } catch (error2) {
      dispatch(
        showMessage({
          message: 'خطا در ویرایش اطلاعات',
          autoHideDuration: 6000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'alert',
        })
      );
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
              setUserInfo({ propertyName: '', propertyValue: '' });
              dispatch(
                showMessage({
                  message: 'اطلاعات با موفقیت اضافه شد',
                  autoHideDuration: 6000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'success',
                })
              );

              setResponseUpdate(response.data);
            } else if (addUserInfoRes === null) {
              dispatch(
                showMessage({
                  message: 'عملیات ناموفق ',
                  autoHideDuration: 6000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'success',
                })
              );
            } else {
              dispatch(
                showMessage({
                  message: 'عملیات ناموفق ',
                  autoHideDuration: 6000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'alert',
                })
              );
            }
          } else {
            dispatch(
              showMessage({
                message: 'خطایی در فرایند  اضافه کردن اطلاعات رخ داده است',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'alert',
              })
            );
          }
        })
        .catch((erroere) => {
          console.log(erroere);
          dispatch(
            showMessage({
              message: 'خطا در  فرایند عملیات',
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'alert',
            })
          );
        });
    } catch (error2) {
      dispatch(
        showMessage({
          message: 'خطا در  فرایند عملیات',
          autoHideDuration: 6000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'alert',
        })
      );
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
            const deleteUserInfoRes = response.data;
            if (deleteUserInfoRes !== null && deleteUserInfoRes.status === 0) {
              dispatch(
                showMessage({
                  message: 'حذف با موفقیت انجام شد',
                  autoHideDuration: 6000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'alert',
                })
              );
              setResponseUpdate(deleteUserInfo);
            } else if (deleteUserInfoRes === null) {
              dispatch(
                showMessage({
                  message: 'خطا در حذف اطلاعات',
                  autoHideDuration: 6000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'alert',
                })
              );
            } else {
              dispatch(
                showMessage({
                  message: 'خطایی در فرایند حذف اطلاعات رخ داده است',
                  autoHideDuration: 6000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  variant: 'alert',
                })
              );
            }
          }
        })
        .catch((erroere) => {
          dispatch(
            showMessage({
              message: erroere.message,
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'alert',
            })
          );
        });
    } catch (error2) {
      dispatch(
        showMessage({
          message: error2.message,
          autoHideDuration: 6000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          variant: 'alert',
        })
      );
    }
  };

  function editUserInfo(e) {
    const tagItem = (
      <div>
        <Button
          color="success"
          css={styleButtonForText}
          size="md"
          onPress={() => {
            setStyleBtnForm(styleButtonForText);
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
        {/* <Button onClick={() => onDeleteUserAddress(e.data.id)}>حذف</Button> */}
        <Button
          css={styleButtonForText}
          size="md"
          onClick={() => onDeleteUserAddress(e.data.id)}
          color="warning"
        >
          حذف
        </Button>
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

  return (
    <div>
      <Spacer y={0.2} />
      <Modal
        style={{ paddingTop: '0px' }}
        closeButton
        preventClose
        width="60%"
        aria-labelledby="modal-title"
        open={modalOpen}
        onClose={closeHandler}
      >
        <Modal.Header className="Modal-Header">
          <Text size={18}>{modalTitle}</Text>
        </Modal.Header>
        <Modal.Body>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Input
                value={userInfo.propertyValue}
                // clearable
                bordered
                fullWidth
                css={styleInputText}
                placeholder="مقدار"
                onChange={(e) => setUserInfo({ ...userInfo, propertyValue: e.target.value })}
              />
            </Grid>
            <Grid item xs={4}>
              <Select
                label="نوع اطلاعات"
                inputId="aria-example-input"
                aria-labelledby="aria-label"
                className="basic-single"
                classNamePrefix="select"
                options={options}
                value={options.filter((opt) => opt.value === userInfo.propertyName)}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    propertyName: e.value,
                  });
                }}
              />
            </Grid>
            <Button
            width="200px"
            color="secondary"
            css={styleButtonForText1}
            onPress={() => {
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

          <Row justify="space-between">
            <FuseScrollbars className="grow overflow-x-auto">
              <div style={gridStyleR} className="ag-theme-alpine">
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
            </FuseScrollbars>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button size="lg" css={styleButtonForText} flat onClick={closeHandler}>
            انصراف
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserInformation;
