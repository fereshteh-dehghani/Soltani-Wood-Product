import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import { AgGridReact } from "ag-grid-react";
import { showMessage } from 'app/store/fuse/messageSlice';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Modal, Button, Text, Row, Checkbox, Grid, Spacer } from "@nextui-org/react";
import withRouter from '@fuse/core/withRouter';
// import { Link, NavLink } from 'react-router-dom';

import {
    apiUrlDeleteRole,
    apiUrlGetRoleItems
} from 'app/services/jwtService/defaultValues';
import { Input, InputLabel, Switch, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const styleInputText = {
    'font-size': '14px',
};
const styleEditBtn = {
    'background-color': '#2D8EF5',
    'font-size': '12px',
}



const UpdateRole = ({ id, name, handleUpdateRole }) => {
    const [updateRole, setUpdateRole] = useState({ id, name });
    const [visible, setVisible] = useState(false);

    const handler = () => setVisible(true);

    const dispatch = useDispatch();

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <div>
            <Spacer y={0.2} />
            <Button
                shadow
                css={styleEditBtn}
                onClick={handler}
            >
                ویرایش
            </Button>
            <Modal
                closeButton
                preventClose
                width="40%"
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" b size={18}>
                        ویرایش نقش
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <InputLabel id="nameRole">نام نقش</InputLabel>
                            <TextField
                                fullWidth
                                size="small"
                                type="text"
                                name="nameRole"
                                id="nameRole"
                                value={updateRole.name}
                                onChange={(e) => {
                                    setUpdateRole({ id: updateRole.id, name: e.target.value })
                                }}

                            />
                        </Grid>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        css={{ 'font-size': '14px' }}
                        onClick={(e) => {
                            handleUpdateRole(updateRole)
                        }}>
                        ویرایش
                    </Button>
                    <Button flat color="error" css={{ 'font-size': '14px' }} onClick={closeHandler}>
                        انصراف
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}


function RolesTable() {
    const [rowData, setRowData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [roleId, setRoleId] = useState(0);
    const [response, setResponse] = useState([]);
    const [visibleModalDelete, setVisibleModalDelete] = useState(false);
    const dispatch = useDispatch();


    const closeHandlerModaldelete = () => {
        setVisibleModalDelete(false);
        console.log("closed");
    }
    const handleUpdate = (updateRole) => {
        // e.preventDefault();
        try {
            axios
                .post(`/api/RolesManager/UpdateRole`, {
                    id: updateRole.id,
                    name: updateRole.name
                })
                .then((resp) => {
                    const res = resp.data.result;
                    setResponse(res);
                    dispatch(
                        showMessage({
                            message: "عملیات  با موفقیت انجام شد",
                            autoHideDuration: 6000,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right',
                            },
                            variant: 'success',
                        })
                    )
                })
                .catch((err) => {
                    alert(err)
                })
        } catch (error) {
            console.log(error)
        }
    }
    const handleDeleteRole = (roleIdDelete) => {

        try {
            axios
                .post(
                    apiUrlDeleteRole,
                    { id: roleIdDelete })
                .then((resp) => {
                    if (resp !== null && resp.status === 200) {
                        const responsData = resp.data;
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
                            setResponse(resp);
                        } else if (responsData === null) {
                            dispatch(showMessage({
                                message: "عملیات با خطا مواجه شد",
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right'
                                },
                                variant: 'error'
                            }))

                        } else {
                            dispatch(showMessage({
                                message: responsData.errors[0],
                                autoHideDuration: 6000,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right'
                                },
                                variant: 'error'
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
                            variant: 'error',
                        }))
                    }
                })
                .catch((error) => {
                    dispatch(showMessage({
                        message: error.message,
                        autoHideDuration: 6000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                        variant: 'error',
                    })
                    )
                })
        } catch (error) {
            dispatch(showMessage({
                message: "عملیات حذف با خطا مواجه شد",
                autoHideDuration: 6000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                variant: 'error',
            }))
        }
    }

    function editRole(e) {
        const tagItem = <div>
            <UpdateRole
                id={e.data.id}
                name={e.data.name}
                handleUpdateRole={handleUpdate} />
        </div>;
        return tagItem;
    }
    function deleteRole(e) {
        const tagItem = <div>

            <Button
                shadow
                color="error"
                css={{ 'font-size': '12px' }}
                onClick={() => {
                    setRoleId(e.data.id);
                    setVisibleModalDelete(true)
                }}

            >حذف
            </Button>
        </div>;
        return tagItem;
    }
    function UsersInRole(e) {
        const tagItem = <div>
            <Spacer y={0.2} />



            <Button
                css={{ 'font-size': '12px', 'backgroundColor': '#2D8EF5' }}
                shadow
            >
                <Link
                    style={{ color: '#fff', textDecoration: 'none' }}
                    to={`/apps/usersManagement/roles-management/usersInRole/${e.value}`}
                >
                    مشاهده و تغییر لیست اعضاء
                </Link>
            </Button>

        </div>
        return tagItem;
    }
    const onGridReady = useEffect(() => {
        axios
            .get(apiUrlGetRoleItems)
            .then((resp) => {
                setRowData([...resp.data.result]);
                setLoading(false);
            })
            .catch((err) => {
                console.log('Error in Get Userslist', err)
            });
    }, [response]);

    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
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


    const [columnDefs] = useState([
        {
            field: 'name',
            headerName: 'نام نقش',
            maxWidth: 100
        },
        {
            field: 'usersCount',
            headerName: 'تعداد اعضا',
            maxWidth: 111
        },

        {
            field: 'id',
            headerName: 'مدیریت اعضای نقش',
            cellRenderer: UsersInRole,
            minWidth: 200
        },
        // {
        //     field: 'id',
        //     headerName: 'مدیریت دسترسی پویای نقش',
        //     // cellRenderer: DynamicAccessToRole,
        //     minWidth: 200
        // }
        {
            field: 'id',
            headerName: 'ویرایش نقش',
            cellRenderer: editRole,
            minWidth: 100
        },
        {
            field: 'id',
            headerName: 'حذف نقش',
            cellRenderer: deleteRole,
            minWidth: 100
        },

    ]);
    if (loading) {
        return <FuseLoading />;
    }
    // if(rowData.length)
    return (
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
            <Modal
                closeButton
                preventClose
                aria-labelledby="modal-title"
                open={visibleModalDelete}
                onClose={closeHandlerModaldelete}
            >
                <Modal.Header>
                    <Text id="modal-title" b size={18}>
                        ویرایش نقش
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <h3>
                        {' '}آیا می خواهید نقش
                        <b>Admin</b>{' '}
                        را حذف کنید؟


                    </h3>
                    <p>
                        لطفا دقت داشته باشید که با حذف این نقش تمام فیلترهای
                        Authorize استفاده کننده از آن از کار خواهند افتاد.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        css={{ 'font-size': '14px' }}
                        color="warning"
                        onClick={() => {
                            handleDeleteRole(roleId);
                            closeHandlerModaldelete()
                        }}
                    >
                        تایید حذف
                    </Button>{' '}
                    <Button
                        css={{ 'font-size': '14px' }}
                        color="error"
                        onClick={() => closeHandlerModaldelete()}
                    >
                        انصراف
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default withRouter(RolesTable);

