import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { showMessage } from 'app/store/fuse/messageSlice';
import {
  apiUrlGetPartyListForFactor,
  apiUrlSaleInvoice,
} from 'app/services/jwtService/defaultValues';
import { navbarToggle, navbarToggleMobile } from 'app/store/fuse/navbarSlice';
import { setDefaultSettings } from 'app/store/fuse/settingsSlice';
import { useTheme } from 'styled-components';
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import { Spacer } from '@nextui-org/react';
import reducer from '../store';
import SalesInvoiceForm from './SalesInvoiceForm';
import SalesInvoiceTable from './SalesInvoiceTable';
import {
  deleteFromInvoiceItems,
  resetInvoiceItems,
  setProduct,
  resetPartyBankAccountlist,
  resetDebitPartyInfo,
} from '../store/salesInvoiceSlice';
import { fetchSalesInvoice } from '../store/salesInvoiceListSlice';
import SaleInvoiceProductSpecification from './saleInvoiceProductSpecification';
import PaymentTable from './payment-method/PaymentTable';
// import { resetPartyBankAccountlist } from '../../baseInformation/store/partyListSlice';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 10,
    height: 10,
    width: 1465,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 10,
      height: 10,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
    width: 1465,
  },
}));

const schema = yup.object().shape({
  datePer: yup.string().required('فیلد تاریخ الزامی می باشد!'),
  partyId: yup.number().required('نام مشتری الزامی می باشد'),
  saleInvoiceItems: yup.array().min(1, 'فاکتور فروش باید حداقل شامل یک  قلم کالا باشد!'),
});

function SalesInvoice() {
  const { invoiceItems, product } = useSelector(({ buyAndSell }) => buyAndSell.salesInvoiceSlice);
  const { paymentMethodsItems } = useSelector(({ buyAndSell }) => buyAndSell.paymentMethodsSlice);
  const [rowData, setRowData] = useState([...invoiceItems]);
  const [saleInvoiceData, setSaleInvoiceData] = useState({});
  const [options, setOptions] = useState([]);
  const [partyList, setPartyList] = useState([]);
  const [selectedPartyId, setSelectedPartyId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [saleInvoiceNumber, setSaleInvoiceNumber] = useState();
  const { isDisabled, setIsDisabled } = useState(true);

  // const [paymentMethods, setPaymentMethods] = useState({
  //   settlementCashItems: [],
  //   receiptBankReceiptItems: [],
  //   paymentBankDraftItems: [],
  //   receiptChequeItems: [],
  //   paymentChequeItems: [],
  // })
  const routeParams = useParams();
  // const { reset, watch, control, onChange, formState, getValues } = methods;
  useEffect(() => {
    axios
      .get(`${apiUrlGetPartyListForFactor}?textToFind=${''}`)
      .then((resp) => {
        const result = [...resp.data.result];
        const tempArray = [];
        setPartyList(result);
        result.forEach((item) => {
          tempArray.push({ value: item.partyId, label: item.fullName });
        });
        setOptions([...tempArray]);
      })
      .catch((err) => {
        console.log('Error in Get Userslist', err);
      });
  }, []);

  const dispatch = useDispatch();

  const onGridReady = useEffect(() => {
    setRowData([...invoiceItems]);
  }, [invoiceItems]);
  /* Get Users List */

  const selectParty = (partyId) => {
    const partyFind = partyList.find((x) => x.partyId === partyId);
    setValue('phoneNumber', partyFind.mobile);
    setValue('addrress', partyFind.userAddressMain);
    setValue('remainingPrice', partyFind.openingBalance);
  };

  useEffect(() => {
    if (partyList.length !== 0 && routeParams.invoiceId !== 'new' && selectedPartyId !== undefined)
      selectParty(selectedPartyId);
  }, [selectedPartyId]);

  const handleDelete = (id) => {
    dispatch(deleteFromInvoiceItems(id));
  };

  const handleUpdate = (selectedProduct) => {
    dispatch(setProduct(selectedProduct));
  };

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      datePer: '',
      partyId: 0,
      stockId: 0,
      partyRealName: '',
      remainingPrice: 0,
      saleInvoiceItems: [],
    },
    resolver: yupResolver(schema),
  });
  const { getValues, watch, reset, setValue } = methods;
  const form = watch();
  const { datePer } = watch();
  const { partyId } = watch();
  const { saleInvoiceItems } = watch();

  useEffect(() => {
    function updatedSaleInvoice() {
      const { saleInvoiceId } = routeParams;
      if (saleInvoiceId !== 'new') {
        dispatch(fetchSalesInvoice(saleInvoiceId))
          .unwrap()
          .then((data) => {
            setSaleInvoiceData({ ...data });
            setSaleInvoiceNumber(data.saleInvoiceNumber);
            dispatch(resetInvoiceItems([...data.saleInvoiceItems]));
            setValue('partyId', data.partyId);
            setValue('partyRealName', data.partyRealName);
            setValue('description', data.description);
            setValue('datePer', data.datePer);
            setSelectedPartyId(data.partyId);
            // selectParty(data.partyId);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        dispatch(resetInvoiceItems([]));
        setSelectedPartyId();
        setSaleInvoiceData({});
        setSaleInvoiceNumber();
        reset({
          datePer: '',
          partyId: 0,
          partyRealName: '',
          phoneNumber: '',
          description: '',
          remainingPrice: '',
          addrress: '',
          invoiceItems: [],
        });
      }
    }
    updatedSaleInvoice();
  }, [routeParams]);

  const resetData = () => {
    setIsLoading(false);
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
    dispatch(resetInvoiceItems([]));
    reset({
      datePer: '',
      partyId: 0,
      partyRealName: '',
      phoneNumber: '',
      description: '',
      remainingPrice: '',
      addrress: '',
      invoiceItems: [],
    });
    setSaleInvoiceData({});
    setPartyList([]);
  };

  /* Categorize the payment method */
  const categorizePaymentMethods = () => {
    const cashArray = [];
    const receiptBank = [];
    const paymentBank = [];
    const receiptCheque = [];
    const paymentCheque = [];

    const paymentMethods = {
      settlementCashItems: [],
      receiptBankReceiptItems: [],
      paymentBankDraftItems: [],
      receiptChequeItems: [],
      paymentChequeItems: [],
      offSettings: [],
      totalDiscount:0,
    };
    paymentMethodsItems?.forEach((item) => {
      if (item.paymentMethod === 'settlementCashItems') {
        cashArray.push(item);
      }
      if (item.paymentMethod === 'receiptBank') {
        receiptBank.push(item);
      }
      if (item.paymentMethod === 'paymentBank') {
        paymentBank.push(item);
      }
      if (item.paymentMethod === 'recieptCheque') {
        receiptCheque.push(item);
      }
      if (item.paymentMethod === 'paymentCheque') {
        paymentCheque.push(item);
      }
      if (item.paymentMethod === 'offSetting') {
        paymentMethods.offSettings.push(item);
      }
      if (item.paymentMethod === 'discount') {
        paymentMethods.totalDiscount=item.amount;
      }
      // recieptCheque
    });

    paymentMethods.settlementCashItems = cashArray;
    paymentMethods.receiptBankReceiptItems = receiptBank;
    paymentMethods.paymentBankDraftItems = paymentBank;
    paymentMethods.paymentBankDraftItems = paymentBank;
    paymentMethods.receiptChequeItems = receiptCheque;
    paymentMethods.paymentChequeItems = paymentCheque;

    return paymentMethods;
  };

  /* end ...  */

  const submitForm = async () => {
    const paymentMethods = categorizePaymentMethods();
    console.log(paymentMethods);
    const { saleInvoiceId } = routeParams;
    setIsLoading(!isLoading);
    if (partyId === 0 || partyId === undefined) {
      dispatch(
        showMessage({
          message: 'نام مشتری را وارد کنید!', // text or html
          autoHideDuration: 6000, // ms
          anchorOrigin: {
            vertical: 'top', //   top bottom
            horizontal: 'right', //  left center right
          },
          variant: 'warning', //   success error info warning null
        })
      );
      setIsLoading(!isLoading);
      return;
    }
    if (datePer === '' || datePer === undefined) {
      dispatch(
        showMessage({
          message: 'تاریخ را وارد کنید!', // text or html
          autoHideDuration: 6000, // ms
          anchorOrigin: {
            vertical: 'top', //   top bottom
            horizontal: 'right', //  left center right
          },
          variant: 'warning', //   success error info warning null
        })
      );
      setIsLoading(!isLoading);
      return;
    }
    if (saleInvoiceItems.lenght === 0 || saleInvoiceItems === undefined) {
      dispatch(
        showMessage({
          message: 'فاکتور فروش باید حداقل شامل یک قلم کالا باشد !', // text or html
          autoHideDuration: 6000, // ms
          anchorOrigin: {
            vertical: 'top', //   top bottom
            horizontal: 'right', //  left center right
          },
          variant: 'warning', //   success error info warning null
        })
      );
      setIsLoading(!isLoading);
      return;
    }
    const formData = getValues();

    if (saleInvoiceId !== 'new') {
      axios
        .put(apiUrlSaleInvoice, {
          ...saleInvoiceData,
          datePer: formData.datePer,
          partyId: formData.partyId,
          stockId: formData.stockId,
          remainingPrice: formData.remainingPrice,
          isOnConsignment: false,
          description: formData.description,
          partyRealName: formData.partyRealName,
          saleInvoiceItems: formData.saleInvoiceItems,
        })
        .then((res) => {
          console.log(res);
          resetData();
        })
        .catch((error) => {
          dispatch(
            showMessage({
              message: `${error} \n عملیات با خطا مواجه شد`, // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'error', //   success error info warning null
            })
          );
          setIsLoading(false);
        });
    } else {
      const response = await axios
        .post(apiUrlSaleInvoice, {
          datePer: formData.datePer,
          partyId: formData.partyId,
          stockId: formData.stockId,
          remainingPrice: formData.remainingPrice,
          isOnConsignment: false,
          description: formData.description,
          partyRealName: formData.partyRealName,
          saleInvoiceItems: formData.saleInvoiceItems,
          settlementCashItems: paymentMethods.settlementCashItems,
          receiptBankReceiptItems: paymentMethods.receiptBankReceiptItems,
          paymentBankDraftItems: paymentMethods.paymentBankDraftItems,
          receiptChequeItems: paymentMethods.receiptChequeItems,
          paymentChequeItems: paymentMethods.paymentChequeItems,
          offSettings: paymentMethods.offSettings,
          totalDiscount:paymentMethods.totalDiscount,
        })
        .then(() => {
          if (response.status === 201) {
            resetData();
            setSaleInvoiceNumber(response.data.saleInvoiceNumber);
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
            setIsLoading(false);
          }
        })
        .catch((error) => {
          dispatch(
            showMessage({
              message: `${error} \n عملیات با خطا مواجه شد`, // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'error', //   success error info warning null
            })
          );
        });
    }
  };
  /* FIND PARTY BANK ACCOUNT LIST FUNCTION */
  function findPartyBankAccountList(partyIdSelected) {
    const findParty = partyList?.find((party) => party.partyId === partyIdSelected);
    dispatch(resetPartyBankAccountlist([...findParty.partyBankAccount]));
    dispatch(
      resetDebitPartyInfo({ debitPartyId: partyIdSelected, debitPartyName: findParty.fullName })
    );
    setIsDisabled(false);
  }
  /* END FUNCTION  */
  const theme = useTheme();
  // const mdDown = useMediaQuery(theme.breakpoints.down('lg'));
  const settings = useSelector(({ fuse }) => fuse.settings.current);
  const { config } = settings.layout;
  useEffect(() => {
    dispatch(navbarToggleMobile());
    if (config.navbar.style === 'style-2') {
      dispatch(
        setDefaultSettings(
          _.set({}, 'layout.config.navbar.folded', !settings.layout.config.navbar.folded)
        )
      );
    } else {
      dispatch(navbarToggle());
    }
  }, []);

  const [showHideForm, setShowHideForm] = useState(true);

  return (
    <FormProvider {...methods}>
      <Root
        content={
          <>
            <Grid container mt={1} alignItems="flex-start">
              <Grid container item sm={12} md={12}>
                <Grid container item sm={12} md={12}>
                  <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
                    <SaleInvoiceProductSpecification
                      showHideForm={showHideForm}
                      invoiceItems={invoiceItems}
                      product={product}
                      options={options}
                      selectParty={selectParty}
                      saleInvoiceNumber={saleInvoiceNumber}
                    />

                    <Grid item xs={12} justifyContent="flex-end" marginX="3px">
                      <SalesInvoiceForm
                        callback={setShowHideForm}
                        invoiceItems={invoiceItems}
                        product={product}
                        options={options}
                        selectParty={selectParty}
                        saleInvoiceNumber={saleInvoiceNumber}
                        getSaleInvoice={saleInvoiceData}
                        findPartyBankAccountList={findPartyBankAccountList}
                        handleSubmit={submitForm}
                        isLoading={isLoading}
                      />
                      <Spacer y={0.5} />
                      <SalesInvoiceTable
                        justifyContent="flex-end"
                        loading={false}
                        onGridReady={onGridReady}
                        rowData={rowData}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                      />
                      <Spacer y={0.5} />
                      <PaymentTable
                        rowData={paymentMethodsItems}
                        partyId={partyId}
                        isDisabled={isDisabled}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                {/* <Grid container justifyContent="flex-end" mt={3} row>
                  <Grid item xs={12} sm={8}>
                    <PaymentTable
                      rowData={paymentMethodsItems}
                    />
                  </Grid>

                </Grid>
                 */}
              </Grid>
            </Grid>
          </>
        }
        innerScroll
      />
    </FormProvider>
  );
}

export default withReducer('buyAndSell', reducer)(SalesInvoice);
