import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import withRouter from '@fuse/core/withRouter';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dropdown, Modal, Spacer, Text } from '@nextui-org/react';
import DropdownMenu from './DropdownMenu';


function PaymentTable({ rowData, handleDelete, handleUpdate, onGridReady, loading }) {
    const dispatch = useDispatch();
    const gridStyle = useMemo(
        () => ({ height: '20vh', width: '97%', justifyContent: 'center', margin: '2% auto' }),
        []
    );
    const gridRef = useRef();
    const [modalDelete, setModalDelete] = useState(false);





    function deletePaymentMethod(e) {
        const tagItem = (
            <div>
                <Spacer y={0.5} />
                <Button
                    color="error"
                >
                    <Text size={12}> حذف</Text>
                </Button>
            </div>
        );


        return tagItem;
    }

    function updatePaymentMethod(e) {
        const tagItem = (
            <div>
                <Spacer y={0.5} />
                <Button
                    color="gradient"
                >
                    <Text size={12}> ویرایش</Text>
                </Button>
            </div>
        );
        return tagItem;
    }


    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        editable: false,
        animateRows: true,
    }));

    const gridOptions = {
        columnDefs: defaultColDef,
        rowData: null,
        enableRtl: true,
        defaultColDef: {
            editable: true,
            sortable: true,
            flex: 1,
            minWidth: 100,
            filter: true,
            resizable: true,
            cellStyle: { border: 'solid 0.1px gray' },
        },
    };
    const [columnDefs] = useState([
        {
            field: 'operation',
            headerName: 'عملیات',
        },
        {
            field: 'amount',
            headerName: 'مبلغ',
        },
        {
            field: 'cashValue',
            headerName: 'ارزش نقدی',
        },
        {
            field: 'portion',
            headerName: 'بهره',
        },
        {
            field: 'description',
            headerName: 'توضیحات',
        },
        {
            field: 'id',
            headerName: 'ویرایش',
            cellRenderer: updatePaymentMethod,
        },
        {
            field: 'id',
            headerName: 'حذف',
            cellRenderer: deletePaymentMethod,
        },
    ]);




    // if (loading) {
    //     return <FuseLoading />;
    // }

    return (
        <>
            <div className="w-full flex flex-col" style={{ justifyContent: 'center' }}>
                <DropdownMenu />
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
            <Modal
                closeButton
                preventClose
                aria-labelledby="modal-title"
                open={modalDelete}
                onClose={() => setModalDelete(false)}
                width="30%"
                height="40%"
            >
                <Modal.Header>
                    <Text size={18}>آیا مایل به حذف اطلاعات هستید؟</Text>
                </Modal.Header>
                <Modal.Body>
                    <Button
                        color="error"
                        // onClick={handleDelete}
                        width="50%"
                    >
                        <Text size={14}>بلی</Text>
                    </Button>{' '}
                    <Button color="warning" width="50%" onClick={() => setModalDelete(false)}>
                        <Text size={14}>خیر</Text>
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default PaymentTable;
