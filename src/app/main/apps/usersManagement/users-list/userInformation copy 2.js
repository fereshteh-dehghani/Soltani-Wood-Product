import { useEffect, useMemo, useRef, useState } from 'react';
import { Modal, Input, Row, Checkbox, Button, Text, Card, Spacer, Grid } from '@nextui-org/react';
import withRouter from '@fuse/core/withRouter';
import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
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
import { size } from 'lodash';

const styleButtonForText = {
  'font-size': '12px',
};
const styleInputText = {
  'font-size': '14px',
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
  const gridStyleR = useMemo(() => ({ height: 400 }), []);
  const [rowData, setRowData] = useState(userInformation);
  const [txtFormBtn, setTxtFormBtn] = useState('ذخیره');
  const [modalTitle, setModalTitle] = useState('اطلاعات جانبی');
  const [styleBtnForm, setStyleBtnForm] = useState(styleButtonForText);
  const [isRtlSelect, setIsRtlSelect] = useState(true);
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
        {/* <Button
          css={styleButtonEdit}
          onClick={() => {
            setStyleBtnForm(styleButtonEdit);
            setTxtFormBtn('ویرایش');
            setModalTitle('ویرایش اطلاعات');
            setUserInfo(e.data);
          }}
        >
          ویرایش
        </Button> */}
        <Button
          color="success"
          css={styleButtonForText}
          // css = "font-size: 16px"
          // style = "font-size:16px"
          size="md"
          onClick={() => {
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

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <div>
      <Spacer y={0.5} />

      <Button shadow color="gradient" onClick={handler} css={styleButtonForText} size="md">
        Gradient
      </Button>
      <Modal
        closeButton
        blur
        preventClose
        width="60%"
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text size={18}>{modalTitle}</Text>
        </Modal.Header>
        <Modal.Body>
          {/* <Input  css={styleInputText} clearable bordered color="primary"  placeholder="مقدار" size="lg" /> */}
          
          <Input
            clearable
            bordered
            width="400px"
            css={styleInputText}
            size="xxl"
            placeholder="مقدار"
          />

          <Select
            label="نوع اطلاعات"
            inputId="aria-example-input"
            aria-labelledby="aria-label"
            className="basic-single"
            defaultValue={{ value: userInfo.propertyName, label: userInfo.propertyName }}
            classNamePrefix="select"
            style={{ width: '500px' }}
            isRtl={isRtlSelect}
            options={options}
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                propertyName: e.value,
              });
            }}
          />

          <Button
            width="400px"
            size="lg"
            css={styleButtonForText}
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
          <Button size="lg"   css={styleButtonForText} flat color="error" onClick={closeHandler}>
            انصراف
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(UserInformation);
