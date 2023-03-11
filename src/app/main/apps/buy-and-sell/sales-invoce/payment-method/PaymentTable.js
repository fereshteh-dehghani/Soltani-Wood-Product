import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { fetchCashList } from 'app/main/apps/baseInformation/store/cashSlice';
import { Button, Dropdown, Modal, Spacer, Text, Tooltip } from '@nextui-org/react';
import { IconButton } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import DropdownMenu from './DropdownMenu';
import { deletePaymentMethodsItem, findPaymentMethodData } from '../../store/paymentMethodsSlice';
import { handleModals } from '../../store/handleModalsSlice';
import CashPayment from './payment-method-modals/CashPayment';
import CreditMethod from './payment-method-modals/CreditModal';
import DepositToAccount from './payment-method-modals/DepositToTheAccount';
import PayAndReceiveByCheck from './payment-method-modals/PayAndReceiveByCheck';
import PayOrReceiveAsDiscount from './payment-method-modals/PayOrRecieveAsDiscount';
import PayAndReceiveByCardBank from './payment-method-modals/PayAndRecieveByBank';
import TransferMethod from './payment-method-modals/TransferMethod';


const styleEditBtn = {
    backgroundColor: '#0693e3',
    borderRadius: '5px',
    fontSize: '1.2rem',
    width: '20px',
    padding: '3px',
}
const styleDeleteBtn = {
    backgroundColor: '#e91e63',
    borderRadius: '5px',
    fontSize: '1.2rem',
    width: '30px',
    padding: '2px',
}

function PaymentTable({ rowData, onGridReady, loading }) {

    const dispatch = useDispatch();
    const [optionSelectBank, setOptionSelectBank] = useState([]);
    const [cashList, setCashList] = useState([]);
    const { paymentMethodData } = useSelector(({ buyAndSell }) => buyAndSell.paymentMethodsSlice);
    const {
        modalOpenCashPayment,
        handleCreditModal,
        handleDepositToTheAccount,
        handleMethodCheck,
        handleMethodDiscount,
        handleCardBank,
        handleTransferMethod
    } = useSelector(({ buyAndSell }) => buyAndSell.handleModalsSlice);

    const [methodId, setMethodId] = useState();
    const gridStyle = useMemo(
        () => ({ height: '30vh', width: '100%', justifyContent: 'center', margin: '1% 0' }),
        []
    );
    const gridRef = useRef();
    const [modalDelete, setModalDelete] = useState(false);



    const handleDelete = () => {
        dispatch(deletePaymentMethodsItem(methodId));
        setModalDelete(!modalDelete);
    }

    const handleUpdate = (data) => {
        dispatch(findPaymentMethodData(data))
        dispatch(handleModals({ type: data.paymentMethod, isOpen: true }));
    }

    useEffect(() => {
        axios
            .get(`/api/Bank/GetBankList`)
            .then((resp) => {
                console.log(resp.data.result)
                const result = [...resp.data.result];
                const optionsArray = [];
                result.forEach((item) => {
                    optionsArray.push({ value: item.bankId, label: item.title });
                })
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
                    tempArray.push({ value: item.cashId, label: item.name })
                })
                setCashList([...tempArray]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    function deletePaymentMethod(e) {
        const tagItem = (
            <div>
                <Spacer y={0.5} />
                <Button
                    // color="error"
                    icon={<DeleteForeverOutlinedIcon />}
                    css={styleDeleteBtn}
                    onClick={() => {
                        setMethodId(e.data.id);
                        setModalDelete(!modalDelete)
                    }}
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
                    // color="gradient"
                    css={styleEditBtn}
                    icon={<AutoFixHighOutlinedIcon />}
                    onClick={() => {
                        handleUpdate(e.data)
                    }}
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
            field: 'paymentMethodPer',
            headerName: 'روش پرداخت',
            maxWidth: 150,
        },
        {
            field: 'type',
            headerName: 'نوع عملیات',
            maxWidth: 150,
        },
        {
            field: 'price',
            headerName: 'مبلغ',
            maxWidth: 120,

        },
        {
            field: 'cashValue',
            headerName: 'ارزش نقدی',
            maxWidth: 120,

        },
        {
            field: 'portion',
            headerName: 'بهره',
            maxWidth: 120,

        },
        {
            field: 'description',
            headerName: 'توضیحات',
        },
        {
            field: 'id',
            headerName: 'ویرایش',
            cellRenderer: updatePaymentMethod,
            maxWidth: 170

        },
        {
            field: 'id',
            headerName: 'حذف',
            cellRenderer: deletePaymentMethod,
            maxWidth: 150

        },

    ]);

    const operationOptions = [
        { value: 0, label: 'دریافت' },
        { value: 1, label: 'پرداخت' }
    ]

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
            <div className="w-full flex flex-col mt-5" style={{ justifyContent: 'center', marginTop: '3' }}>
                <DropdownMenu
                    optionSelectBank={optionSelectBank}
                    operationOptions={operationOptions}
                    cashList={cashList}
                    addCommas={addCommas}
                    removeNonNumeric={removeNonNumeric}
                    convertPriceToNumber={removeNonNumeric}
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
                    <Button
                        color="error"
                        onClick={handleDelete}
                        width="50%"
                    >
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
                    convertPriceToNumber={removeNonNumeric}

                />
            )}

            {handleCreditModal &&
                <CreditMethod
                    paymentMethodData={paymentMethodData}
                    operationOptions={operationOptions}
                    addCommas={addCommas}
                    removeNonNumeric={removeNonNumeric}
                    convertPriceToNumber={removeNonNumeric}

                />
            }

            {handleDepositToTheAccount &&
                <DepositToAccount
                    optionSelectBank={optionSelectBank}
                    paymentMethodData={paymentMethodData}
                    addCommas={addCommas}
                    removeNonNumeric={removeNonNumeric}
                    convertPriceToNumber={removeNonNumeric}
                />
            }

            {handleMethodCheck &&
                < PayAndReceiveByCheck
                    paymentMethodData={paymentMethodData}
                    addCommas={addCommas}
                    removeNonNumeric={removeNonNumeric}
                    convertPriceToNumber={removeNonNumeric}
                />
            }
            {handleMethodDiscount &&
                <PayOrReceiveAsDiscount
                    paymentMethodData={paymentMethodData}
                    operationOptions={operationOptions}
                    addCommas={addCommas}
                    removeNonNumeric={removeNonNumeric}
                    convertPriceToNumber={removeNonNumeric}
                />
            }

            {handleCardBank &&
                <PayAndReceiveByCardBank
                    optionSelectBank={optionSelectBank}
                    paymentMethodData={paymentMethodData}
                    operationOptions={operationOptions}
                    addCommas={addCommas}
                    removeNonNumeric={removeNonNumeric}
                    convertPriceToNumber={removeNonNumeric}
                    suppressColumnVirtualisation

                />
            }
            {handleTransferMethod &&
                <TransferMethod
                    paymentMethodData={paymentMethodData}
                    operationOptions={operationOptions}
                    cashList={cashList}
                    addCommas={addCommas}
                    removeNonNumeric={removeNonNumeric}
                    convertPriceToNumber={removeNonNumeric}
                />
            }
        </>
    );
}

export default PaymentTable;
