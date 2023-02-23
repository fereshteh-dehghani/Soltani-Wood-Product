import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';

import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import { AgGridReact } from 'ag-grid-react';
import { showMessage } from 'app/store/fuse/messageSlice';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import withRouter from '@fuse/core/withRouter';
import { Link, NavLink } from 'react-router-dom';
import {
  apiUrlAddUserInformation,
  apiUrlChangeActiveUser,
  apiUrlChangeTwoFactorAuthentication,
  apiUrlChangeUserLockoutMode,
  apiUrlUpdateUserInformation,
} from 'app/services/jwtService/defaultValues';
import { Switch } from '@mui/material';
import axios from 'axios';
import { Button, Spacer } from '@nextui-org/react';
import UserInformation from './userInformation';
import ChangeAddress from './changeAddress';
import ChangeRole from './changeRole';

const styleButtonForText = {
  'font-size': '12px',
};
const styleButtonForUpdateBtn = {
  'font-size': '12px',
  'background-color': '#069DCD',
};
function UsersTable() {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState();
  const isTrue = true;
  const [isChangeUserRoles, setisChangeUserRoles] = useState();
  const [openModalChangeAddrress, setOpenModalChangeAddrress] = useState(false);
  const [opendModalUserInfo, setOpenModalUserInfo] = useState(false);
  const [usersInfoFormValues, setUsersInfoFormValues] = useState({
    propertyName: '',
    propertyValue: '',
  });

  // const handleInputChangeUserInfoForm = (e) => {
  //   const { value, name } = e.target;
  //   setUsersInfoFormValues({
  //     ...usersInfoFormValues,
  //     [name]: value,
  //   });
  // }

  const onGridReady = useEffect(() => {
    axios
      .get(`/api/UsersManager/GetPagedUsersList?page=1&field=1`)
      .then((resp) => {
        // params.api.showLoadingOverlay();
        setRowData([...resp.data.result.users]);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error in Get Userslist', err);
      });
  }, [isChangeUserRoles]);

  const LockOutEnableChange = (Id, status) => {
    try {
      axios
        .post(apiUrlChangeUserLockoutMode, {
          userId: Id,
          activate: status.target.checked,
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const responsData = response.data;
            if (responsData !== null && responsData.status === 0) {
              showMessage({
                message: 'عملیات  با موفقیت انجام شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            } else if (responsData === null) {
              showMessage({
                message: 'عملیات با خطا مواجه شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            } else {
              showMessage({
                message: responsData.errors[0],
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            }
          } else {
            showMessage({
              message: 'مشکلی در انجام عملیات پیش آمد لطفا دوباره سعی کنید ',
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'success',
            });
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
            variant: 'success',
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
        variant: 'danger',
      });
    }
  };
  const ActiveUserChange = (Id, status) => {
    try {
      axios
        .post(apiUrlChangeActiveUser, {
          userId: Id,
          activate: status.target.checked,
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const responsData = response.data;
            if (responsData !== null && responsData.status === 0) {
              showMessage({
                message: 'عملیات  با موفقیت انجام شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            } else if (responsData === null) {
              showMessage({
                message: 'عملیات با خطا مواجه شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            } else {
              showMessage({
                message: responsData.errors[0],
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            }
          } else {
            showMessage({
              message: 'مشکلی در انجام عملیات پیش آمد لطفا دوباره سعی کنید ',
              autoHideDuration: 6000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
              variant: 'success',
            });
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
            variant: 'success',
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
        variant: 'danger',
      });
    }
  };
  const TwoFactorAuthenticationChange = (Id, status) => {
    try {
      axios
        .post(apiUrlChangeTwoFactorAuthentication, {
          userId: Id,
          activate: status.target.checked,
        })
        .then((response) => {
          if (response !== null && response.status === 200) {
            const responsData = response.data;
            if (responsData !== null && responsData.status === 0) {
              showMessage({
                message: 'عملیات  با موفقیت انجام شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            } else if (responsData === null) {
              showMessage({
                message: 'عملیات با خطا مواجه شد',
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            } else {
              showMessage({
                message: responsData.errors[0],
                autoHideDuration: 6000,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
                variant: 'success',
              });
            }
          } else {
            showMessage({
              message: 'مشکلی در انجام عملیات پیش آمد لطفا دوباره سعی کنید ',
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
          showMessage({
            message: erroere.message,
            autoHideDuration: 6000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            variant: 'success',
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
  function possibilityOfLockingAccount(e) {
    const tagItem = (
      <div>
        <Switch
          defaultChecked={e.data.lockoutEnabled}
          height={20}
          width={48}
          onChange={(checked) => {
            LockOutEnableChange(e.data.id, checked);
          }}
        />
      </div>
    );
    return tagItem;
  }
  function userStatus(e) {
    const tagItem = (
      <div>
        <Switch
          defaultChecked={e.value}
          onChange={(checked) => {
            ActiveUserChange(e.data.id, checked);
            console.log(e.data.id);
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    );
    return tagItem;
  }
  function twoStepValidation(e) {
    const tagItem = (
      <div>
        <Switch
          defaultChecked={e.data.twoFactorEnabled}
          height={20}
          width={48}
          onChange={(checked) => {
            TwoFactorAuthenticationChange(e.data.id, checked);
          }}
        />
      </div>
    );
    return tagItem;
  }
  function userInfo(e) {
    const tagItem = (
      <Button
        shadow
        color="gradient"
        css={styleButtonForText}
        size="md"
        onClick={() => {
          setUserId(e.data.id);
          setOpenModalUserInfo(true);
        }}
      >
        اطلاعات جانبی
      </Button>
      // <div>
      //         // </div>
    );
    return tagItem;
  }
  function updateUserProfile(e) {
    const tagItem = (
      <div>
        <Spacer y={0.2} />
        <Button css={styleButtonForUpdateBtn} size="md" shadow>
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to={`/apps/usersManagement/users-list/updateUserProfile/${e.value}`}
          >
            ویرایش اطلاعات
          </Link>
        </Button>
      </div>
    );
    return tagItem;
  }
  function changeAddress(e) {
    const tagItem = (
      <div>
        <Spacer y={0.2} />
        <Button
          css={styleButtonForUpdateBtn}
          size="md"
          shadow
          color="gradient"
          onClick={() => {
            setUserId(e.data.id);
            setOpenModalChangeAddrress(true);
          }}
        >
          آدرس کاربر
        </Button>
      </div>
    );
    return tagItem;
  }
  const updateGrid = (newProductGroup, isChangeSuccess) => {
    if (isChangeSuccess) {
      setisChangeUserRoles({ ...newProductGroup });
      // setRowData({});
    }
  };
  function changeRole(e) {
    const rolsIds = [];
    e.data.roles.forEach((x) => rolsIds.push(x.id));

    const tagItem = (
      <div>
        <ChangeRole userId={e.data.id} userRolesId={rolsIds} handleClick={updateGrid} />
      </div>
    );
    return tagItem;
  }
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: 400 }), []);
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
    defaultColDef: {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    },
  };
  const onFirstDataRendered = useCallback(() => {
    gridRef.current.api.paginationGoToPage(1);
  }, []);

  const paginationNumberFormatter = useCallback((params) => {
    return `${params.value.toLocaleString()}`;
  }, []);

  const [columnDefs] = useState([
    { field: 'id', headerName: 'Id', minWidth: 65 },
    { field: 'userName', headerName: 'نام کاربری', minWidth: 140 },
    { field: 'displayName', headerName: 'نام', minWidth: 120 },
    {
      field: 'isActive',
      headerName: 'وضعیت کاربری',
      cellRenderer: userStatus,
      minWidth: 150,
    },
    {
      field: 'lockoutEnabled',
      headerName: 'امکان قفل شدن اکانت',
      cellRenderer: possibilityOfLockingAccount,
      minWidth: 180,
    },
    {
      field: 'twoFactorEnabled',
      headerName: 'اعتبار سنجی دو مرحله ای',
      cellRenderer: twoStepValidation,
      minWidth: 200,
    },
    {
      field: 'userInformation',
      headerName: 'اطلاعات جانبی',
      cellRenderer: userInfo,
      minWidth: 180,
    },
    {
      field: 'id',
      headerName: 'ویرایش اطلاعات',
      cellRenderer: updateUserProfile,
      minWidth: 180,
    },
    {
      field: 'userAddresses',
      headerName: 'آدرس کاربر  ',
      cellRenderer: changeAddress,
      minWidth: 180,
    },
    {
      field: 'id',
      headerName: 'تغییر نقش',
      cellRenderer: changeRole,
      minWidth: 120,
    },
  ]);

  if (loading) {
    return <FuseLoading />;
  }

  return (
    <>
      <div className="w-full flex flex-col">
        <FuseScrollbars className="grow overflow-x-auto">
          <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              gridOptions={gridOptions}
              rowSelection="single"
              onGridReady={onGridReady}
              onFirstDataRendered={onFirstDataRendered}
              paginationNumberFormatter={paginationNumberFormatter}
              paginationAutoPageSize={isTrue}
              pivotPanelShow="always"
              pagination={isTrue}
              suppressPaginationPanel={false}
            />
          </div>
        </FuseScrollbars>
        {openModalChangeAddrress && (
          <ChangeAddress
            userId={userId}
            modalOpen={openModalChangeAddrress}
            closeHandler={() => setOpenModalChangeAddrress(false)}
          />
        )}
        {opendModalUserInfo && (
          <UserInformation
            userId={userId}
            modalOpen={opendModalUserInfo}
            closeHandler={() => setOpenModalUserInfo(false)}
          />
        )}
      </div>
    </>
  );
}

export default withRouter(UsersTable);
