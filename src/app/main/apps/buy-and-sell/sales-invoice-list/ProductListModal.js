import { useState, useEffect, useRef, useMemo } from 'react';
import { Modal, Button, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Card, CardContent, Grid } from '@mui/material';
// import '../../../../../../../styles/MyStyles.css'

const styleSaveBtn = {
  backgroundColor: '#00d084',
  borderRadius: '5px',
  fontSize: '1.2rem',
  width: '20%',
  padding: '5px',
};
const styleCancelBtn = {
  borderRadius: '5px',
  fontSize: '1.2rem',
  width: '15%',
  padding: '5px',
};

const styleDatePicker = {
  'text-align': 'right',
  padding: '4px 12px',
  'background-color': 'white',
  height: '36px',
  width: '120%',
};

function ProductListModal({ closeHandler, openModal, saleInvoiceInfo }) {
  const [rowData, setRowData] = useState(saleInvoiceInfo.saleInvoiceItems);
  const gridStyle = useMemo(
    () => ({ height: '40vh', width: '100%', justifyContent: 'center', margin: '2% 0' }),
    []
  );
  const gridRef = useRef();
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
  ]);

  // const onGridReady = useEffect(() => {
  //     if (Array.isArray(productList)) {
  //         setRowData([...productList])
  //     }
  // }, []);

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      width="50%"
      height="36%"
      open={openModal}
      onClose={closeHandler}
    >
      <Modal.Header className="modal-header-style">
        <Text id="modal-title" size={18}>
          اطلاعات فاکتور
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Card variant="outlined">
          <CardContent>
            <Grid container justifyContent="space-evenly">
              <Grid items sm={6}>
                <Text size={12}>نام مشتری: {saleInvoiceInfo.partyRealName}</Text>
                <Text size={12} >قیمت کل : {5000000}</Text>
              </Grid>
              <Grid items sm={6}>
                <Text size={12}>شماره فاکتور :{saleInvoiceInfo.saleInvoiceNumber}</Text>
                <Text size={12}>تاریخ : {saleInvoiceInfo.datePer}</Text>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <div className="w-full flex flex-col" style={{ justifyContent: 'center' }}>
          <FuseScrollbars className="grow overflow-x-auto">
            <div style={gridStyle} className="ag-theme-alpine">
              <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                gridOptions={gridOptions}
                rowSelection="single"
              // onGridReady={onGridReady}
              />
            </div>
          </FuseScrollbars>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="error" onClick={closeHandler} css={styleCancelBtn}>
          بستن
        </Button>
        {/* <Button onPress={() => closeHandler()} css={styleSaveBtn}>
                    ثبت
                </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ProductListModal;
