import { useState, useMemo, useRef, useEffect } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import withRouter from '@fuse/core/withRouter';
import { showMessage } from 'app/store/fuse/messageSlice';
import { useDispatch } from 'react-redux';
import {
  apiUrlAddUserAddress,
  apiUrlDeleteUserAddress,
  apiUrlUpdateUserAddress,
} from 'app/services/jwtService/defaultValues';
import { Box, Checkbox, FormControlLabel, Grid, InputLabel, TextField } from '@mui/material';
import { Button, Input, Modal, Row, Spacer, Text } from '@nextui-org/react';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';

const styleButtonForText = {
  'font-size': '12px',
  // background: '#CD0A55',
  'background-color': '#069DCD ',
};
const styleDiv = {
  'text-align': 'right',
};
const styleInputText = {
  'font-size': '14px',
};

// /api/UserProfile/GetUserAddressDetail?userAddressId=5

const ChangeAddress = ({ userId, modalOpen, closeHandler }) => {
  const dispatch = useDispatch();
  const gridRef = useRef();
  const gridStyle = useMemo(() => ({ height: 400 }), []);
  const [visible, setVisible] = useState(false);
  const [rowData, setRowData] = useState();
  const [visibleAddress, setVisibleAddress] = useState({});
  const [responseApi, setResponseApi] = useState({});
  const [modalTitle, setModalTitle] = useState('addAddress');
  // const [loading, setLoading] = useState(true);
  const gridStyleR = useMemo(() => ({ height: 400 }), []);

  const onDeleteUserAddress = (id) => {
    try {
      axios
        .post(apiUrlDeleteUserAddress, {
          userId,
          id,
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const deleteAddressRes = response.data;
            if (deleteAddressRes !== null && deleteAddressRes.status === 0) {
              dispatch(showMessage({
                message: 'عملیات  با موفقیت انجام شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              }));
              setResponseApi(deleteAddressRes);

            } else if (deleteAddressRes === null) {
              dispatch(showMessage({
                message: 'عملیات ناموفق ',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              }));
            } else {
              dispatch(showMessage({
                message: 'عملیات ناموفق ',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              }));
            }
          } else {
            dispatch(showMessage({
              message: 'خطایی در فرایند ویرایش اطلاعات رخ داده است',
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'success',
            }));
          }
        })
        .catch((erroere) => {
          console.log(erroere);
          dispatch(showMessage({
            message: erroere.message,
            autoHideDuration: 6000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'success',
          }));
        });
    } catch (error2) {
      dispatch(showMessage({
        message: error2.message,
        autoHideDuration: 6000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        variant: 'success',
      }));
    }
  };
  function editAddress(e) {
    const tagItem = (
      <div>
        <Button
          css={{ styleButtonForText }}
          color="success"
          size="sm"
          onClick={() => {
            setModalTitle('editAddress');
            setVisibleAddress(e.data);
          }}
        >
          ویرایش
        </Button>
      </div>
    );
    return tagItem;
  }
  function deleteAddress(e) {
    const tagItem = (
      <div>
        <Button
          css={{ styleButtonForText }}
          color="error"
          size="sm"
          onClick={() => onDeleteUserAddress(e.data.id)}
        >
          حذف
        </Button>
      </div>
    );
    return tagItem;
  }
  const onGridReady = useEffect(() => {
    try {
      axios
        .get(`/api/UserProfile/GetUserAddressList?userId=${userId}`)
        .then((response) => {
          if (response !== null && response.status === 200) {
            const getAddrressRes = response.data;
            if (getAddrressRes !== null && getAddrressRes.status === 0) {
              setRowData(response.data.result);
            } else if (getAddrressRes === null) {
              dispatch(showMessage({
                message: 'خطا در گرفتن آدرس کاربر',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'alert',
              }));
            } else {
              dispatch(showMessage({
                message: getAddrressRes.errors[0],
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'alert',
              }));
            }
          } else {
            dispatch(showMessage({
              message: 'خطایی در فرایند گرفتن اطلاعات رخ داده است',
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'alert',
            }));
          }
        })
        .catch((erroere) => {
          console.log(erroere);
          dispatch(showMessage({
            message: erroere.message,
            autoHideDuration: 6000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'alert',
          }));
        });
    } catch (error2) {
      dispatch(showMessage({
        message: error2.message,
        autoHideDuration: 6000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        variant: 'alert',
      }));
    }

  }, [responseApi]);
  const [columnDefs] = useState([
    // { field: "id", headerName: "Id", minWidth: 65 },
    { field: 'address', headerName: 'آدرس', minWidth: 250 },
    { field: 'phone', headerName: 'شماره تلفن', minWidth: 120 },
    { field: 'phone2', headerName: 'شماره تلفن 2', minWidth: 130 },
    { field: 'postalCode', headerName: 'کدپستی', minWidth: 120 },
    { field: 'isMain', headerName: 'آدرس اصلی', minWidth: 120 },
    {
      field: 'edit',
      headerName: 'ویرایش آدرس',
      cellRenderer: editAddress,
      minWidth: 120,
    },
    {
      field: 'delete',
      headerName: 'حذف آدرس',
      cellRenderer: deleteAddress,
      minWidth: 100,
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
  const onUserAddressUpdate = () => {
    try {
      axios
        .post(apiUrlUpdateUserAddress, {
          userId,
          ...visibleAddress,
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const updateAddressRes = response.data;
            if (updateAddressRes !== null && updateAddressRes.status === 0) {
              setVisibleAddress({ isMain:false, address: '', postalCode: '', phone: '', phone2: '' });
              setModalTitle('addAddress');
              dispatch(showMessage({
                message: 'ویرایش اطلاعات شما با موفقیت انجام شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'alert',
              }));
              setResponseApi(updateAddressRes);
            } else if (updateAddressRes === null) {
              dispatch(showMessage({
                message: 'عملیات ناموفق ',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'alert',
              }));
            } else {
              dispatch(showMessage({
                message: updateAddressRes.errors[0],
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'alert',
              }));
            }
          } else {
            dispatch(showMessage({
              message: 'خطایی در فرایند ویرایش اطلاعات رخ داده است',
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'alert',
            }));
          }
        })
        .catch((erroere) => {
          console.log(erroere);
          dispatch(showMessage({
            message: erroere.message,
            autoHideDuration: 6000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'alert',
          }));
        });
    } catch (error2) {
      dispatch(showMessage({
        message: error2.message,
        autoHideDuration: 6000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        variant: 'alert',
      }));
    }
  };
  const onUserAddressAdd = () => {
    try {
      axios
        .post(apiUrlAddUserAddress, {
          userId,
          ...visibleAddress,
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const addAddressRes = response.data;
            if (addAddressRes !== null && addAddressRes.status === 0) {
              setVisibleAddress({ isMain:false, address: '', postalCode: '', phone: '', phone2: '' });
              setResponseApi(addAddressRes);
              dispatch(showMessage({
                message: 'عملیات با موفقیت انجام شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              }));
            } else if (addAddressRes === null) {
              dispatch(showMessage({
                message: 'عملیات ناموفق ',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'error',
              }));
              setVisibleAddress({});
            } else {
              dispatch(showMessage({
                message: addAddressRes.errors[0],
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'error',
              }));
            }
          } else {
            dispatch(showMessage({
              message: 'خطایی در فرایند عملیات رخ داده است',
              autoHideDuration: 3000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'error',
            }));
          }
        })
        .catch((erroere) => {
          dispatch(showMessage({
            message: erroere.message,
            autoHideDuration: 3000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'error',
          }));
        });
    } catch (error2) {
      dispatch(showMessage({
        message: error2.message,
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        variant: 'error',
      }));
    }
  };

  // if (loading) {
  //   return <FuseLoading />;
  // }

  return (
    <div>

      <Modal
        closeButton
        preventClose
        width="60%"
        aria-labelledby="modal-title"
        open={modalOpen}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text size={20}>اطلاعات آدرس کاربر</Text>
        </Modal.Header>
        <Modal.Body>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <form
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Grid
                style={styleDiv}
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <InputLabel id="address">آدرس</InputLabel>
                  <TextField
                    fullWidth
                    size="small"
                    value={visibleAddress.address}
                    type="textarea"
                    name="address"
                    id="address"
                    onChange={(e) =>
                      setVisibleAddress({
                        ...visibleAddress,
                        address: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel id="mobileNumber1">شماره تلفن</InputLabel>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    name="mobileNumber1"
                    id="mobileNumber1"
                    value={visibleAddress.phone}
                    onChange={(e) =>
                      setVisibleAddress({
                        ...visibleAddress,
                        phone: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel id="mobileNumber2">2شماره تلفن</InputLabel>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    name="mobileNumber2"
                    id="mobileNumber2"
                    value={visibleAddress.phone2}
                    onChange={(e) =>
                      setVisibleAddress({
                        ...visibleAddress,
                        phone2: e.target.value,
                      })
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <InputLabel id="postalecode">کدپستی</InputLabel>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    name="postalcode"
                    id="postalecode"
                    value={visibleAddress.postalCode}
                    onChange={(e) =>
                      setVisibleAddress({
                        ...visibleAddress,
                        postalCode: e.target.value,
                      })
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  {/* <InputLabel id="mainaddress" >آدرس اصلی</InputLabel> */}
                  <FormControlLabel
                    label="آدرس اصلی"
                    control={
                      <Checkbox
                        type="checkbox"
                        checked={visibleAddress.isMain}
                        name="mainaddress"
                        onChange={(e) =>
                          setVisibleAddress({
                            ...visibleAddress,
                            isMain: e.target.checked,
                          })
                        }
                      />
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  {' '}
                </Grid>
              </Grid>
            </form>
            <Spacer y={0.8} />
            <div className="btnInline">
              <Button
                type="submit"
                width="400px"
                size="lg"
                css={styleButtonForText}
                className="btn-shadow btn-multiple-state"
                onPress={() => {
                  if (visibleAddress.id !== undefined) {
                    onUserAddressUpdate();
                  } else {
                    onUserAddressAdd();
                  }
                }}
              >
                {modalTitle === 'addAddress' ? 'اضافه کردن آدرس' : 'ویرایش آدرس'}
              </Button>
            </div>
          </Box>
          <Row justify="space-between" mt={5}>
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
          <Button size="lg" css={styleButtonForText} flat color="error" onClick={closeHandler}>
            انصراف
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default withRouter(ChangeAddress);
