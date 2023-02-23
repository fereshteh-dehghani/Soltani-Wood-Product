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
import { Button, Modal, Spacer, Text } from '@nextui-org/react';
import RightClickParty from '../../right-click/RightClickParty';

function SalesInvoiceTable({ rowData, handleDelete, handleUpdate, onGridReady, loading }) {
  const dispatch = useDispatch();
  const gridStyle = useMemo(
    () => ({ height: '35vh', width: '97%', justifyContent: 'center', margin: '2% auto' }),
    []
  );
  const gridRef = useRef();
  const [modalDelete, setModalDelete] = useState(false);
  const [productId, setproductId] = useState();

  function deleteSalesInvoiceItem(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="error"
          onPress={() => {
            setproductId(e.data.productId);
            setModalDelete(!modalDelete);
          }}
        >
          <Text size={12} color="#fff">
            {' '}
            حذف
          </Text>
        </Button>
      </div>
    );

    return tagItem;
  }

  function updateSalesInvoiceItem(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button color="gradient" onClick={() => handleUpdate({ ...e.data })}>
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
      field: 'productName',
      headerName: 'کالا',
    },
    {
      field: 'quantity',
      headerName: 'مقدار',
    },
    {
      field: 'stockName',
      headerName: 'عنوان انبار',
    },
    {
      field: 'productPrice',
      headerName: 'مبلغ',
    },
    {
      field: 'sumProductPrice',
      headerName: 'مبلغ کل',
    },
    {
      field: 'description',
      headerName: 'توضیحات',
    },
    {
      field: 'productId',
      headerName: 'ویرایش',
      cellRenderer: updateSalesInvoiceItem,
    },
    {
      field: 'productId',
      headerName: 'حذف',
      cellRenderer: deleteSalesInvoiceItem,
    },
  ]);

  // if (loading) {
  //     return <FuseLoading />;
  // }

  return (
    <>
      <div className="w-full flex flex-col" style={{ justifyContent: 'center' }}>
        <FuseScrollbars className="grow overflow-x-auto">
          <RightClickParty />
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
          <Text size={18}>آیا می خواهید این اطلاعات را حذف شوند؟</Text>
        </Modal.Header>
        <Modal.Body>
          <Button
            color="error"
            onClick={() => {
              handleDelete(productId);
              setModalDelete(!modalDelete);
            }}
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

export default SalesInvoiceTable;
