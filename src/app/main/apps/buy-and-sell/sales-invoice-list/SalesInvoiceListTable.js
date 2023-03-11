import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import { AgGridReact } from 'ag-grid-react';
import { showMessage } from 'app/store/fuse/messageSlice';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { EditOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Spacer, Text } from '@nextui-org/react';
import { fetchSalesInvoiceList, deleteSaleInvoice } from '../store/salesInvoiceListSlice';
import ProductListModal from './ProductListModal';

function SalesInvoiceListTable() {

  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const gridStyle = useMemo(
    () => ({ height: '70vh', width: '100%', justifyContent: 'center', margin: '2% 0' }),
    []
  );
  const gridRef = useRef();
  const [modalDelete, setModalDelete] = useState(false);
  const [saleInvoiceInfo, setSaleinvoiceInfo] = useState({});
  const isTrue = true;

  const [saleInvoiceId, setSaleInvoiceId] = useState();
  const { response, loading } = useSelector(({ buyAndSell }) => buyAndSell.salesInvoiceListSlice);
  const rowData = useSelector(({ buyAndSell }) => buyAndSell.salesInvoiceListSlice.data);

  const handleDeleteproduct = () => {
    setModalDelete(!modalDelete);
    dispatch(deleteSaleInvoice(saleInvoiceId))
      .unwrap()
      .then((res) => {
        if (res !== undefined && res.status === 204) {
          dispatch(
            showMessage({
              message: 'عملیات با موفقیت انجام شد', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'success', //   success error info warning null
            })
          );
        } else {
          dispatch(
            showMessage({
              message: 'عملیات با خطا انجام شد', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'error', //   success error info warning null
            })
          );
        }
      })
      .catch((err) => {
        dispatch(
          showMessage({
            message: 'عملیات با خطا انجام شد', // text or html
            autoHideDuration: 6000, // ms
            anchorOrigin: {
              vertical: 'top', //   top bottom
              horizontal: 'right', //  left center right
            },
            variant: 'success', //   success error info warning null
          })
        );
      });
  };

  function deletePartyItem(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="error"
          onClick={() => {
            setSaleInvoiceId(e.data.saleInvoiceId);
            setModalDelete(true);
          }}
        >
          <Text size={12}> حذف</Text>
        </Button>
      </div>
    );

    return tagItem;
  }

  function updatePartyItem(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="gradient"
          onClick={() => {
            setSaleInvoiceId(e.data.saleInvoiceId);
          }}
        >
          <Link to={`/apps/buy-and-sell/sales-invoice/${e.value}/sale-invoice-detailes`}>
            <Text size={12}> ویرایش</Text>
          </Link>
        </Button>
      </div>
    );
    return tagItem;
  }

  function showProductlist(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="gradient"
          onClick={() => {
            const factorData = e.data;
            setSaleinvoiceInfo(factorData);
            setOpenModal(!openModal);
          }}
        >
          <Text size={12}>مشاهده فاکتور</Text>
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
  const onFirstDataRendered = useCallback(() => {
    gridRef.current.api.paginationGoToPage(1);
  }, []);
  const paginationNumberFormatter = useCallback((params) => {
    return `${params.value.toLocaleString()}`;
  }, []);
  const [columnDefs] = useState([
    {
      field: 'datePer',
      headerName: 'تاریخ',
      minWidth: 100,
    },
    {
      field: 'partFullName',
      headerName: 'نام مشتری',
      minWidth: 50,
    },
    {
      field: 'saleInvoiceNumber',
      headerName: 'شماره فاکتور',
      // minWidth: 50,
    },
    {
      field: 'saleInvoiceId',
      headerName: 'مشاهده فاکتور',
      cellRenderer: showProductlist,
      minWidth: 50,
    },

    {
      field: 'saleInvoiceId',
      headerName: 'ویرایش',
      cellRenderer: updatePartyItem,
      minWidth: 50,
    },
    {
      field: 'saleInvoiceId',
      headerName: 'حذف',
      cellRenderer: deletePartyItem,
      minWidth: 50,
    },
  ]);

    // open update party on double click---------
    const navigate = useNavigate();

    // Ag Grid onContext Menu***********************

    const getContextMenuItems = useCallback(() => {
      const result = [
        {
        name:"ویرایش",
        subMenu:  [ 
          {
            name: 'ویرایش در همین صفحه (دبل کلیک)',
            action: ()=>{
              navigate(`/apps/baseInformation/party/${localStorage.getItem('partyId')}/party-detailes`);
            },
            icon: <EditOutlined />,
          },
          {
            name: 'ویرایش در صفحه دیگر',
            action: ()=>{
              window.open(`/apps/baseInformation/party/${localStorage.getItem('partyId')}/party-detailes`);
            },
            icon: <EditOutlined />,
          },
        ],
      },
        {
          name: ' حذف  ',
          action: ()=>{
            setModalDelete(true);
          },
          icon: <EditOutlined />,
          
        },
        // {
        //   // custom item
        //   name: 'Alert ',
        //   action: () => {
        //     window.alert('Alerting about ');
        //   },
        //   cssClasses: ['redFont', 'bold'],
        // },
        // {
        //   // custom item
        //   name: 'Always Disabled',
        //   disabled: true,
        //   tooltip:
        //     'Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!',
        // },
        {
          name: 'Country',
          subMenu: [
            {
              name: 'Ireland',
              action: () => {
                console.log('Ireland was pressed');
              },
            },
            {
              name: 'UK',
              action: () => {
                console.log('UK was pressed');
              },
            },
            {
              name: 'France',
              action: () => {
                console.log('France was pressed');
              },
            },
          ],
        },
        {
          name: 'Person',
          subMenu: [
            {
              name: 'Niall',
              action: () => {
                console.log('Niall was pressed');
              },
            },
            {
              name: 'Sean',
              action: () => {
                console.log('Sean was pressed');
              },
            },
          ],
        },
        'separator',
        {
          // custom item
          name: 'Windows',
          shortcut: 'Alt + W',
          action: () => {
            console.log('Windows Item Selected');
          },
          icon:
            '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />',
        },
        {
          // custom item
          name: 'Mac',
          shortcut: 'Alt + M',
          action: () => {
            console.log('Mac Item Selected');
          },
          icon:
            '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
        },
        'separator',
        {
          // custom item
          name: 'Checked',
          checked: true,
          action: () => {
            console.log('Checked Selected');
          },
          icon:
            '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
        },
        'separator',
        'chartRange',
      ];
      return result;
    }, []);

  const onGridReady = useEffect(() => {
    dispatch(fetchSalesInvoiceList());
    console.log('rowData listproduct ', rowData);
  }, [response]);

  if (loading) {
    return <FuseLoading />;
  }

  function handlePartyId(e) {
    localStorage.setItem('partyId', e.data.partyId);
  }

  return (
    <>
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
              onGridReady={onGridReady}
              enableRangeSelection="true"
              allowContextMenuWithControlKey="true"
              animateRows="true"
              getContextMenuItems={getContextMenuItems}
              paginationNumberFormatter={paginationNumberFormatter}
              onFirstDataRendered={onFirstDataRendered}
              paginationAutoPageSize={isTrue}
              onCellContextMenu={(e) => handlePartyId(e)}
              pivotPanelShow="always"
              suppressPaginationPanel={false}
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
          <Button color="error" onClick={handleDeleteproduct} width="50%">
            <Text size={14}>بلی</Text>
          </Button>{' '}
          <Button color="warning" width="50%" onClick={() => setModalDelete(false)}>
            <Text size={14}>خیر</Text>
          </Button>
        </Modal.Body>
      </Modal>
      {(openModal && saleInvoiceInfo) &&
        <ProductListModal
          openModal={openModal}
          saleInvoiceInfo={saleInvoiceInfo}
          closeHandler={() => setOpenModal(!openModal)}
        />
      }
    </>
  );
}

export default SalesInvoiceListTable;
