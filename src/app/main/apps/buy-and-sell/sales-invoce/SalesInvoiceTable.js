import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import withRouter from '@fuse/core/withRouter';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Spacer, Text } from '@nextui-org/react';

function SalesInvoiceTable({
  rowData,
  handleDelete,
  handleUpdate,
  onGridReady,
  loading,
}) {
  const dispatch = useDispatch();
  const gridStyle = useMemo(
    () => ({
      height: "66vh",
      width: '97%',
      margin: 'auto',
    }),
    []
  );
  const gridRef = useRef();
  const [modalDelete, setModalDelete] = useState(false);
  const [productId, setproductId] = useState();

  // open update party on double click---------
  const navigate = useNavigate();

  // ----------------------------------------
  const [updateData, setUpdateData] = useState();

  useEffect(()=>{
    console.log("hooooy")

  },[updateData])

  // Ag Grid onContext Menu***********************

  const getContextMenuItems = useCallback(() => {
    const result = [
      {
        name: 'ویرایش',
        action: (e) => {
          handleUpdate({...updateData});
        },
      },
      {
        name: ' حذف  ',
        action: () => {
          setModalDelete(true);
        },
        icon: <EditOutlined />,
      },
      'separator',
      'chartRange',
    ];
    return result;
  }, []);

  // *********************************************

  function deleteSalesInvoiceItem(e) {
    const tagItem = (
      <div>
        <button
          type="button"
          onClick={() => {
            setproductId(e.data.productId);
            setModalDelete(!modalDelete);
          }}
        >
          <DeleteOutline style={{ backgroundColor: 'red', borderRadius: '50%', padding: '3px' }} />
        </button>
      </div>
    );

    return tagItem;
  }

  function updateSalesInvoiceItem(e) {
    const tagItem = (
      <button type="button" onClick={() => handleUpdate({ ...e.data })}>
        <EditOutlined
          style={{ backgroundColor: 'yellowgreen', borderRadius: '50%', padding: '3px' }}
        />
      </button>
    );
    return tagItem;
  }

  // Auto size ag grid -------------

  const autoSizeAll = useCallback((skipHeader) => {
    const allColumnIds = [];
    gridRef.current.columnApi.getColumns().forEach((column) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }, []);

  // -------------------------------

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
      width: 90,
    },
    {
      field: 'stockName',
      headerName: 'عنوان انبار',
      width: 170,
    },
    {
      field: 'productPrice',
      headerName: 'مبلغ',
      width: 100,
    },
    {
      field: 'sumProductPrice',
      headerName: 'مبلغ کل',
      width: 170,
    },
    {
      field: 'description',
      headerName: 'توضیحات',
      cellStyle: { 'white-space': 'normal' },
    },
    {
      field: 'productId',
      headerName: 'ویرایش',
      cellRenderer: updateSalesInvoiceItem,
      width: 80,
    },
    {
      field: 'productId',
      headerName: 'حذف',
      cellRenderer: deleteSalesInvoiceItem,
      width: 80,
    },
  ]);

  // if (loading) {
  //     return <FuseLoading />;
  // }

  return (
    <>
      <div className="w-full flex flex-col" style={{ justifyContent: 'flex-end' }}>
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
              enableRangeSelection="true"
              allowContextMenuWithControlKey="true"
              getContextMenuItems={getContextMenuItems}
              onCellContextMenu={(e) => {
                setUpdateData(e.data);
                setproductId(e.data.productId);
              }}
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
