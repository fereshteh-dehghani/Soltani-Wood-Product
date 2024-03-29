import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { fetchCashList } from 'app/main/apps/baseInformation/store/cashSlice';
import { Button, Dropdown, Modal, Spacer, Text, Tooltip } from '@nextui-org/react';
import { IconButton } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { EditOutlined } from '@mui/icons-material';
import DropdownMenu from './DropdownMenu';
import { deletePaymentMethodsItem, findPaymentMethodData } from '../../store/paymentMethodsSlice';
import { handleModals } from '../../store/handleModalsSlice';
import CashPayment from './payment-method-modals/CashPayment';
import CreditMethod from './payment-method-modals/CreditModal';
import DepositToAccount from './payment-method-modals/DepositToTheAccount';
import PayOrReceiveAsDiscount from './payment-method-modals/PayOrRecieveAsDiscount';
import TransferMethod from './payment-method-modals/TransferMethod';
import PaymentBankMethod from './payment-method-modals/PaymentBankMethod';
import ReceiptBankMethod from './payment-method-modals/ReceiptBankMethod';
import PaymentChequeModal from './payment-method-modals/PaymentChequeModal';
import ReceiptChequeModal from './payment-method-modals/ReceiptChequeModal';

const styleEditBtn = {
  backgroundColor: '#0693e3',
  borderRadius: '5px',
  fontSize: '1.2rem',
  width: '20px',
  padding: '3px',
};
const styleDeleteBtn = {
  backgroundColor: '#e91e63',
  borderRadius: '5px',
  fontSize: '1.2rem',
  width: '30px',
  padding: '2px',
};

function PaymentTable({ rowData, onGridReady, isDisabled }) {
  const dispatch = useDispatch();
  const [optionSelectBank, setOptionSelectBank] = useState([]);
  const [cashList, setCashList] = useState([]);
  const { paymentMethodData } = useSelector(({ buyAndSell }) => buyAndSell.paymentMethodsSlice);
  const {
    modalOpenCashPayment,
    handleCreditModal,
    handlePaymentBank,
    handleReceiptBank,
    handleMethodDiscount,
    handleDepositToTheAccount,
    handleTransferMethod,
    handleReceiptCheque,
    handlePaymentCheque,
  } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice);

  const [methodId, setMethodId] = useState();
  const gridStyle = useMemo(
    () => ({ height: '30vh', width: '95%', justifyContent: 'center', margin: '1% 0' }),
    []
  );
  const gridRef = useRef();
  const [modalDelete, setModalDelete] = useState(false);

  const handleDelete = () => {
    dispatch(deletePaymentMethodsItem(methodId));
    setModalDelete(!modalDelete);
  };

  const handleUpdate = (data) => {
    dispatch(findPaymentMethodData(data));
    dispatch(handleModals({ type: data.paymentMethod, isOpen: true }));
  };

  useEffect(() => {
    axios
      .get(`/api/Bank/GetBankList`)
      .then((resp) => {
        console.log(resp.data.result);
        const result = [...resp.data.result];
        const optionsArray = [];
        result.forEach((item) => {
          optionsArray.push({ value: item.bankId, label: item.title });
        });
        setOptionSelectBank([...optionsArray]);
      })
      .catch((err) => {
        console.log('Error in Get bank', err);
      });
  }, []);

  useEffect(() => {
    dispatch(fetchCashList())
      .unwrap()
      .then((response) => {
        const tempArray = [];
        response.forEach((item) => {
          tempArray.push({ value: item.cashId, label: item.name });
        });
        setCashList([...tempArray]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function deletePaymentMethod(e) {
    const tagItem = (
      <div>
        <button
          type="button"
          onClick={() => {
            setMethodId(e.data.id);
            setModalDelete(!modalDelete);
          }}
        >
          <DeleteForeverOutlinedIcon
            style={{
              backgroundColor: '#F4074C',
              borderRadius: '50%',
              padding: '5px',
              width: '33px',
              height: '33px',
            }}
          />
        </button>
      </div>
    );
    return tagItem;
  }
  function updatePaymentMethod(e) {
    const tagItem = (
      <div>
        <button
          type="button"
          onClick={() => {
            handleUpdate(e.data);
          }}
        >
          <EditOutlined
            style={{
              backgroundColor: '#B7F407',
              borderRadius: '50%',
              padding: '5px',
              width: '33px',
              height: '33px',
            }}
          />
        </button>
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
      field: 'paymentMethodPer',
      headerName: 'روش پرداخت',
      maxWidth: 150,
    },
    {
      field: 'amount',
      headerName: 'مبلغ',
      maxWidth: 150,
    },

    {
      field: 'description',
      headerName: 'توضیحات',
      minWidth: 500,
    },
    {
      field: 'id',
      headerName: 'ویرایش',
      cellRenderer: updatePaymentMethod,
      maxWidth: 100,
    },
    {
      field: 'id',
      headerName: 'حذف',
      cellRenderer: deletePaymentMethod,
      maxWidth: 100,
    },
  ]);

  const operationOptions = [
    { value: 0, label: 'دریافت' },
    { value: 1, label: 'پرداخت' },
  ];

  const addCommas = (num) => num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const removeNonNumeric = (num) => num?.toString().replace(/[^0-9]/g, '');
  const convertPriceToNumber = (price) => {
    if (price !== 0 && typeof price !== 'number') {
      const numberArray = price.split(',');
      price = +numberArray.join('');
    }
    return price;
  };

  return (
    <>
      <div
        className="w-full flex flex-col mt-5"
        style={{ justifyContent: 'center', marginTop: '3' }}
      >
        <DropdownMenu
          optionSelectBank={optionSelectBank}
          operationOptions={operationOptions}
          cashList={cashList}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={removeNonNumeric}
          isDisabled={isDisabled}
        />
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
          <Button color="error" onClick={handleDelete} width="50%">
            <Text size={14}>بلی</Text>
          </Button>{' '}
          <Button color="warning" width="50%" onClick={() => setModalDelete(false)}>
            <Text size={14}>خیر</Text>
          </Button>
        </Modal.Body>
      </Modal>

      {modalOpenCashPayment && (
        <CashPayment
          paymentMethodData={paymentMethodData}
          operationOptions={operationOptions}
          cashList={cashList}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={convertPriceToNumber}
        />
      )}

      {handleCreditModal && (
        <CreditMethod
          paymentMethodData={paymentMethodData}
          operationOptions={operationOptions}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={convertPriceToNumber}
        />
      )}

      {handleDepositToTheAccount && (
        <DepositToAccount
          optionSelectBank={optionSelectBank}
          paymentMethodData={paymentMethodData}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={convertPriceToNumber}
        />
      )}

      {handlePaymentCheque && (
        <PaymentChequeModal
          paymentMethodData={paymentMethodData}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={convertPriceToNumber}
        />
      )}

      {handleReceiptCheque && (
        <ReceiptChequeModal
          paymentMethodData={paymentMethodData}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={convertPriceToNumber}
        />
      )}

      {handleMethodDiscount && (
        <PayOrReceiveAsDiscount
          paymentMethodData={paymentMethodData}
          operationOptions={operationOptions}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={removeNonNumeric}
        />
      )}

      {handleReceiptBank && (
        <ReceiptBankMethod
          optionSelectBank={optionSelectBank}
          paymentMethodData={paymentMethodData}
          operationOptions={operationOptions}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={convertPriceToNumber}
          suppressColumnVirtualisation
        />
      )}
      {handlePaymentBank && (
        <PaymentBankMethod
          optionSelectBank={optionSelectBank}
          paymentMethodData={paymentMethodData}
          operationOptions={operationOptions}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={convertPriceToNumber}
          suppressColumnVirtualisation
        />
      )}
      {handleTransferMethod && (
        <TransferMethod
          paymentMethodData={paymentMethodData}
          operationOptions={operationOptions}
          cashList={cashList}
          addCommas={addCommas}
          removeNonNumeric={removeNonNumeric}
          convertPriceToNumber={removeNonNumeric}
        />
      )}
    </>
  );
}

export default PaymentTable;
