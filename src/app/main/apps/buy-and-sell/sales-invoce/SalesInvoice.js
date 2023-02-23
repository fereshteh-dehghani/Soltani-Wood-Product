import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { showMessage } from 'app/store/fuse/messageSlice';
import { apiUrlGetPartyListForFactor, apiUrlSaleInvoice } from 'app/services/jwtService/defaultValues';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import SalesInvoiceForm from './SalesInvoiceForm';
import SalesInvoiceTable from './SalesInvoiceTable';
import { deleteFromInvoiceItems, resetInvoiceItems, setProduct } from '../store/salesInvoiceSlice';
import SalesInvoiceHeader from './SalesInvoiceHeader';
import { fetchSalesInvoice, updateSaleInvoice } from '../store/salesInvoiceListSlice';

const styleResetBtn = {
  backgroundColor: '#ff5722',
  borderRadius: '5px',
  height: '35px',
  fontSize: '1.6rem',
  '&:hover': {
    backgroundColor: '#ff9800',
  },
};

const styleInfoBtn = {
  backgroundColor: '#697689',
  borderRadius: '5px',
  marginLeft: '20px',
  height: '35px',
  width: '20%',
  fontSize: '1.2rem',
  '&:hover': {
    backgroundColor: '#607d8b',
  },
};

const styletext = {
  '&:hover': {
    fontSize: '2rem',
  },
};

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 80,
    height: 80,
    width: 90,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 60,
      height: 60,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
}));

function SalesInvoice() {
  const { invoiceItems, product } = useSelector(({ buyAndSell }) => buyAndSell.salesInvoiceSlice);
  const [rowData, setRowData] = useState([...invoiceItems]);
  const [saleInvoiceData, setSaleInvoiceData] = useState({});
  const [options, setOptions] = useState([]);
  const [partyList, setPartyList] = useState([]);
  const [selectedPartyId, setSelectedPartyId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [saleInvoiceNumber, setSaleInvoiceNumber] = useState();
  const routeParams = useParams()
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
    setValue("phoneNumber", partyFind.mobile);
    setValue("addrress", partyFind.userAddressMain);
    setValue("remainingPrice", partyFind.openingBalance);

  };

  useEffect(() => {
    if (partyList.length !== 0 && routeParams.invoiceId !== 'new' && selectedPartyId !== undefined) selectParty(selectedPartyId)
  }, [selectedPartyId])

  const handleDelete = (id) => {
    dispatch(deleteFromInvoiceItems(id));
  };

  const handleUpdate = (selectedProduct) => {
    dispatch(setProduct(selectedProduct));
  };

  const methods = useForm({
    defaultValues: {
      date: '',
      partyId: 0,
      stockId: 0,
      partyRealName: '',
      remainingPrice: 0,
      saleInvoiceItems: [],
    },
  });
  const { getValues, watch, reset, setValue } = methods;
  const form = watch();

  useEffect(() => {
    function updatedSaleInvoice() {
      const { saleInvoiceId } = routeParams;
      if (saleInvoiceId !== 'new') {
        dispatch(fetchSalesInvoice(saleInvoiceId))
          .unwrap()
          .then((data) => {
            setSaleInvoiceData({ ...data });
            setSaleInvoiceNumber(data.saleInvoiceId)
            dispatch(resetInvoiceItems([...data.saleInvoiceItems]));
            setValue('partyId', data.partyId);
            setValue('partyRealName', data.partyRealName);
            setValue('description', data.description);
            setSelectedPartyId(data.partyId);
            // selectParty(data.partyId);
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        dispatch(resetInvoiceItems([]));
        setSelectedPartyId();
        setSaleInvoiceData({});
        setSaleInvoiceNumber();
        reset({
          date: '',
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
  }, [routeParams])


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
      date: '',
      partyId: 0,
      partyRealName: '',
      phoneNumber: '',
      description: '',
      remainingPrice: '',
      addrress: '',
      invoiceItems: [],
    });
    setSaleInvoiceData({})
    setPartyList([])
  }

  const submitForm = async () => {
    const { saleInvoiceId } = routeParams;
    setIsLoading(!isLoading);
    const formData = getValues();
    if (saleInvoiceId !== 'new') {
      axios.put(apiUrlSaleInvoice, {
        ...saleInvoiceData,
        date: formData.date,
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
        })
    } else {
      const response = await axios.post(apiUrlSaleInvoice, {
        date: formData.date,
        partyId: formData.partyId,
        stockId: formData.stockId,
        remainingPrice: formData.remainingPrice,
        isOnConsignment: false,
        description: formData.description,
        partyRealName: formData.partyRealName,
        saleInvoiceItems: formData.saleInvoiceItems,
      });

      if (response.status === 201) {
        resetData();
        setSaleInvoiceNumber(response.data.saleInvoiceNumber)

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
    }

  };

  return (
    <FormProvider {...methods}>
      <Root
        // header={<PartyHeader />}

        content={
          <>
            <Grid container mt={1} alignItems="flex-start">
              <Grid container item sm={12} md={4}>
                <Grid item xs={12}>
                  {/* <FormProvider {...methods}> */}
                  <SalesInvoiceForm
                    invoiceItems={invoiceItems}
                    product={product}
                    options={options}
                    selectParty={selectParty}
                    saleInvoiceNumber={saleInvoiceNumber}
                  />
                  {/* </FormProvider> */}
                </Grid>
              </Grid>
              <Grid container item sm={12} md={8}>
                <Grid item xs={2} margin="5px" alignItems="flex-start">
                  <SalesInvoiceHeader
                    getSaleInvoice={saleInvoiceData}
                    handleSubmit={submitForm}
                    isLoading={isLoading}
                  />
                </Grid>
                <Grid item xs={12} marginX="3px">
                  <SalesInvoiceTable
                    loading={false}
                    onGridReady={onGridReady}
                    rowData={rowData}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                </Grid>
                {/* <Grid item xs={12} marginX="3px">
                                <PaymentTable />
                            </Grid> */}
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
