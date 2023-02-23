import { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import { AgGridReact } from "ag-grid-react";
import { showMessage } from 'app/store/fuse/messageSlice';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import withRouter from '@fuse/core/withRouter';
import { Link, useParams } from 'react-router-dom';
import {
    apiUrlChangeUserLockoutMode,
    apiUrlChangeTwoFactorAuthentication,
    apiUrlChangeActiveUser,
} from 'app/services/jwtService/defaultValues';
import { Switch } from '@mui/material';
import axios from 'axios';
import { Button, Spacer } from '@nextui-org/react';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import ChangeRole from '../users-list/changeRole';


// import UserInformation from "./userInformation"
// import ChangeRole from './changeRole'
// import ChangeAddress from './changeAddress';

const styleButtonForUpdateBtn = {
    'font-size': '12px',
    'background-color': '#07D7D4 ',
};


function UsersInRoleHeader() {

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
                    لیست کاربران
                </Typography>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            >
                {/* <Button
            className="whitespace-nowrap"
            variant="contained"
            color="secondary"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span className="hidden sm:flex">افزودن واحد جدید</span>
            <span className="flex sm:hidden">جدید</span>
          </Button> */}
            </motion.div>
        </div>
    );
}


function UsersInRoleTable() {

    const [rowData, setRowData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { rolesId } = useParams();
    const gridStyle = useMemo(() => ({ height: '400px', width: '100%' }), []);
    const dispatch = useDispatch();
    const [isChangeUserRoles, setisChangeUserRoles] = useState();


    const onGridReady = useEffect(() => {
        axios
            .get(`/api/RolesManager/UsersInRole?id=${rolesId}&page=1&field=1`)
            .then((resp) => {
                // params.api.showLoadingOverlay();
                setRowData([...resp.data.result.users]);
                setLoading(false);
            })
            .catch((err) => {
                console.log('Error in Get Userslist', err)
            });
    }, [isChangeUserRoles]);

    const updateGrid = (newProductGroup, isChangeSuccess) => {
        if (isChangeSuccess) {
            setisChangeUserRoles({ ...newProductGroup });
            // setRowData({});
        }
    };

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
                            dispatch(showMessage({
                                message: "عملیات  با موفقیت انجام شد",
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right',
                                },
                                variant: 'success',
                            }))
                        } else if (responsData === null) {
                            showMessage({
                                message: "عملیات با خطا مواجه شد",
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right'
                                },
                                variant: 'success'
                            })

                        } else {
                            dispatch(showMessage({
                                message: responsData.errors[0],
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right'
                                },
                                variant: 'success'
                            }))
                        }
                    } else {
                        dispatch(showMessage({
                            message: "مشکلی در انجام عملیات پیش آمد لطفا دوباره سعی کنید ",
                            autoHideDuration: 6000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right',
                            },
                            variant: 'success',
                        }))
                    }
                })
                .catch((erroere) => {
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
                variant: 'danger',
            }));
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
                                message: "عملیات  با موفقیت انجام شد",
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right',
                                },
                                variant: 'success',
                            })

                        } else if (responsData === null) {
                            showMessage({
                                message: "عملیات با خطا مواجه شد",
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right'
                                },
                                variant: 'success'
                            })

                        } else {
                            showMessage({
                                message: responsData.errors[0],
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right'
                                },
                                variant: 'success'
                            })
                        }
                    } else {
                        showMessage({
                            message: "مشکلی در انجام عملیات پیش آمد لطفا دوباره سعی کنید ",
                            autoHideDuration: 6000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right',
                            },
                            variant: 'success',
                        })

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
                            dispatch(showMessage({
                                message: "عملیات  با موفقیت انجام شد",
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right',
                                },
                                variant: 'success',
                            }))

                        } else if (responsData === null) {
                            dispatch(showMessage({
                                message: "عملیات با خطا مواجه شد",
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right'
                                },
                                variant: 'success'
                            }))
                        } else {
                            dispatch(showMessage({
                                message: responsData.errors[0],
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right'
                                },
                                variant: 'success'
                            }))
                        }
                    } else {
                        dispatch(showMessage({
                            message: "مشکلی در انجام عملیات پیش آمد لطفا دوباره سعی کنید ",
                            autoHideDuration: 6000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right',
                            },
                            variant: 'alert',
                        }))
                    }
                })
                .catch((erroere) => {
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
                variant: 'alert',
            }))
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
                        console.log(e.data.id)
                    }}


                    inputProps={{ "aria-label": "controlled" }}
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
    function changePassword(e) {
        const tagItem = (
            <div>
                <spacer y={0.2} />
                <Button css={styleButtonForUpdateBtn} size="md" shadow>
                    <Link
                        to={`/apps/usersManagement/roles-management/resetPassword/${e.value}`}
                        style={{ color: 'white', textDecoration: 'none' }}
                    >
                        تغییر رمز عبور
                    </Link>
                </Button>
            </div>
        );
        return tagItem;
    }
    function changeRole(e) {
        const rolsIds = [];
        e.data.roles.forEach((x) => rolsIds.push(x.id));
        const tagItem = (
            <div>
                <ChangeRole
                    userId={e.data.id}
                    userRolesId={rolsIds}
                    handleClick={updateGrid}
                />
            </div>
        );
        return tagItem;
    }
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
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


    const [columnDefs] = useState([
        { field: "id", headerName: "Id", minWidth: 65 },
        { field: "userName", headerName: "نام کاربری", minWidth: 140 },
        { field: "displayName", headerName: "نام", minWidth: 120 },
        {
            field: "isActive",
            headerName: "وضعیت کاربری",
            cellRenderer: userStatus,
            minWidth: 150,
        },
        {
            field: "lockoutEnabled",
            headerName: "امکان قفل شدن اکانت",
            cellRenderer: possibilityOfLockingAccount,
            minWidth: 180,
        },
        {
            field: "twoFactorEnabled",
            headerName: "اعتبار سنجی دو مرحله ای",
            cellRenderer: twoStepValidation,
            minWidth: 200,
        },
        {
            field: "id",
            headerName: "ویرایش مشخصات",
            cellRenderer: updateUserProfile,
            minWidth: 160,
        },
        {
            field: "id",
            headerName: "تغییر رمز عبور",
            cellRenderer: changePassword,
            minWidth: 150,
        },
        {
            field: "id",
            headerName: "تغییر نقش",
            cellRenderer: changeRole,
            minWidth: 120,
        },
    ]);

    if (loading) {
        return <FuseLoading />;
    }
    // if(rowData.length)
    return (
        <>
            <div className="w-full flex flex-col" style={containerStyle}>
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
                        />
                    </div>
                </FuseScrollbars>

            </div>
        </>
    )
};
const Root = styled(FusePageCarded)(({ theme }) => ({
    '& .FusePageCarded-header': {
        minHeight: 72,
        height: 72,
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            minHeight: 136,
            height: 136,
        },
    },
    '& .FusePageCarded-content': {
        display: 'flex',
    },
}));

function UsersInRole() {
    return <Root header={<UsersInRoleHeader />} content={<UsersInRoleTable />} />;
}

export default withReducer('UsersInRole', reducer)(UsersInRole);


// export default withRouter(UsersInRole);

