import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  InputLabel,
  TextField,
  Grid,
  BottomNavigationAction,
  BottomNavigation,
} from '@mui/material';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { Button, Loading, Text, Badge, Spacer } from '@nextui-org/react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import Select from 'react-select';
import {
  ContentCopyOutlined,
  DeleteOutline,
  DownloadOutlined,
  HandymanRounded,
  HorizontalRuleOutlined,
  HorizontalSplitOutlined,
  Inventory2Outlined,
  PrintOutlined,
  ReceiptOutlined,
  Rectangle,
  Save,
  TaskAltOutlined,
} from '@mui/icons-material';
import FuseUtils from '@fuse/utils';
import {
  apiUrlGetPartyListForFactor,
  apiUrlUsersListWithFullNameAndId,
} from 'app/services/jwtService/defaultValues';
import axios from 'axios';
import { fetchProductList } from '../../baseInformation/store/productListSlice';
import { fetchStockList } from '../../baseInformation/store/stockSlice';
import {
  addToInvoiceItems,
  getInvoiceItems,
  setProduct,
  updateInvoiceItems,
} from '../store/salesInvoiceSlice';
import '../../../../../styles/MyStyles.css';

// import { useMutation } from 'react-query';
// import { apiUrlSaleInvoice } from 'app/services/jwtService/defaultValues';

// regester factor part ---------------

// const styleBtn = {
//   backgroundColor: '#00d041',
//   borderRadius: '5px',
//   height: '35px',
//   fontSize: '1.6rem',
//   '&:hover': {
//     backgroundColor: '#00d084',
//   },
// };

// const SalesInvoiceHeader = ({ handleSubmit, isLoading }) => {
// const methods = useFormContext();
// const { getValues, reset } = methods;
// const formData = getValues();

//   return (
//     <Grid container sm={12} xs={12} style={{ justifyContent: 'flex-end' }}>
//       <Button
//         sm={12}
//         shadow
//         ripple
//         animated
//         css={styleBtn}
//         style={{ marginLeft: '27px' }}
//         onClick={() => handleSubmit(formData)}
//       >
//         {!isLoading && <TaskAltOutlined className="mx-4" />}
//         {isLoading && <Loading color="currentColor" size="lg" />}
//         {!isLoading && 'ثبت فاکتور'}
//       </Button>
//     </Grid>
//   );
// };

// -----------------------------------

const styleDatePicker = {
  'text-align': 'right',
  padding: '4px 12px',
  'background-color': 'white',
  height: '36px',
  width: '150%',
  maxWidth: '200%',
};
const styleBtn = {
  backgroundColor: '#00d041',
  borderRadius: '7px',
  height: '30px',
  width: '35px',
  fontSize: '1.2rem',
  '&:hover': {
    backgroundColor: '#00d084',
  },
};

const styleBtnRegister = {
  backgroundColor: '#00d041',
  borderRadius: '7px',
  height: '25px',
  width: '30px',
  fontSize: '1.2rem',
  '&:hover': {
    backgroundColor: '#00d042',
  },
};

const styleBtnPrint = {
  backgroundColor: '#607D8B',
  borderRadius: '7px',
  height: '25px',
  width: '30px',
  fontSize: '1.2rem',
  '&:hover': {
    backgroundColor: '#807D8B',
  },
};

const styleResetBtn = {
  backgroundColor: '#ff5722',
  borderRadius: '7px',
  height: '30px',
  width: '20px',
  padding: '5px',
  marginLeft: '1rem',
  marginRight: '1rem',
  fontSize: '1.4rem',
  '&:hover': {
    backgroundColor: '#ff9800',
  },
};

const styleInfoBtn = {
  backgroundColor: '#697689',
  borderRadius: '7px',
  marginLeft: '10px',
  height: '30px',
  width: '20px',
  fontSize: '1.4rem',
  '&:hover': {
    backgroundColor: '#607d8b',
  },
};

const styletext = {
  '&:hover': {
    fontSize: '2rem',
  },
};

const defaultValueProduct = {
  saleInvoiceItemId: '',
  productId: '',
  productName: '',
  stockId: '',
  stockName: '',
  productPrice: '',
  sumProductPrice: '',
  description: '',
  quantity: '',
};

const SalesInvoiceForm = ({
  callback,
  invoiceItems,
  product,
  options,
  selectParty,
  saleInvoiceNumber,
  handleSubmit,
}) => {
  // prevent from navigation when form is editing ------------------

  const [isDataChange, setIsDataChange] = useState(true);
  function useBlocker(blocker, when = true) {
    const { navigator } = useContext(NavigationContext);

    useEffect(() => {
      if (!when) return;

      const unblock = navigator.block((tx) => {
        const autoUnblockingTx = {
          ...tx,
          retry() {
            unblock();
            tx.retry();
          },
        };

        blocker(autoUnblockingTx);
      });

      // return unblock;
    }, [navigator, blocker, when]);
  }

  function usePrompt(message, when = true) {
    const blocker = useCallback(
      (tx) => {
        if (window.confirm(message)) tx.retry();
      },
      [message]
    );

    useBlocker(blocker, when);
  }

  // -----------------------------------------------------

  const dispatch = useDispatch();
  const methods = useFormContext();
  const {
    control,
    setValue,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = methods;

  const formData = getValues();

  const [showHideForm, setShowHideForm] = useState(true);
  const [headCustomer, setHeadCustomer] = useState('');
  const [productOptions, setProductOptions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [productList, setProductList] = useState([]);
  const [selectValue, setSelectValue] = useState({});
  const [isHideSalesInvoiceForm, setIsHideSalesInvoiceForm] = useState(false);
  const [isHideProductSpecificationsForm, setIsHideProductSpecificationsForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [stockList, setStockList] = useState([]);
  const [newProduct, setNewProduct] = useState(defaultValueProduct);
  const [errorQuantity, setErrorQuantity] = useState({ error: false, message: '' });
  const [errorProductId, setErrorProductId] = useState({ error: false, message: '' });
  const [errorStockId, setErrorStockId] = useState({ error: false, message: '' });
  const [errorProductPrice, setErrorProductPrice] = useState({ error: false, message: '' });

  const partyId = watch('partyId');
  const partyRealName = watch('partyRealName');
  const routeParams = useParams();

  const addProductToList = () => {
    let quantityError = false;
    let stockIdError = false;
    let productIdError = false;
    let productPriceError = false;

    if (
      newProduct.quantity === '' ||
      newProduct.quantity === 0 ||
      newProduct.quantity === undefined
    ) {
      quantityError = true;
      setErrorQuantity({ error: true, message: 'تعداد کالای وارد شده از 1 کمتر است' });
    } else {
      setErrorQuantity({ error: false, message: '' });
    }
    if (
      newProduct.productPrice === '' ||
      newProduct.quantity === 0 ||
      newProduct.productPrice === undefined
    ) {
      productPriceError = true;
      setErrorProductPrice({ error: true, message: 'قیمت کالا  را وارد نمایید' });
    } else {
      setErrorProductPrice({ error: false, message: '' });
    }
    if (newProduct.stockId === '' || newProduct.stockId === undefined) {
      stockIdError = true;
      setErrorStockId({ error: true, message: 'عنوان انبار الزامی می باشد' });
    } else {
      setErrorStockId({ error: false, message: '' });
    }
    if (newProduct.productId === '' || newProduct.productId === undefined) {
      productIdError = true;
      setErrorProductId({ error: true, message: 'عنوان کالا الزامی می باشد' });
    } else {
      setErrorProductId({ error: false, message: '' });
    }

    if (!quantityError && !productIdError && !stockIdError && !productPriceError) {
      if (
        (newProduct.saleInvoiceItemId !== undefined && newProduct.saleInvoiceItemId !== '') ||
        (newProduct.id !== undefined && newProduct.id !== '')
      ) {
        dispatch(updateInvoiceItems({ ...newProduct }));
      } else {
        dispatch(addToInvoiceItems({ id: FuseUtils.generateGUID(), ...newProduct }));
      }
      dispatch(setProduct(defaultValueProduct));
      setNewProduct({ ...defaultValueProduct });
    }
  };

  usePrompt(' تغییرات اعمال نمی شود! آیا صفحه را ترک می کنید؟ ', isDataChange);

  useEffect(() => {
    if (product !== {}) {
      setNewProduct({ ...product });
    }
  }, [product]);

  useEffect(() => {
    setValue('saleInvoiceItems', invoiceItems);
    setValue('stockId', invoiceItems[0]?.stockId);
  }, [invoiceItems]);

  // Get Product List
  useEffect(() => {
    dispatch(fetchProductList())
      .unwrap()
      .then((resp) => {
        const tempArray = [];
        setProductList([...resp]);
        resp.forEach((item) => {
          tempArray.push({ value: item.productId, label: item.title });
        });
        setProductOptions([...tempArray]);
      });
  }, []);

  useEffect(() => {
    dispatch(fetchStockList())
      .unwrap()
      .then((resp) => {
        const tempArray = [];
        resp.forEach((item) => {
          tempArray.push({ value: item.stockId, label: item.title });
        });
        setStockList([...tempArray]);
      });
  }, []);

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
    <Grid style={{ display: 'flex', flexDirection: 'row' }}>
      <Box bgcolor="#fff" marginX="10px" padding="3px">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12}>
            <BottomNavigation
              showLabels
              width="400px"
              item
              justifyContent="space-between"
              onClick={() => setIsHideSalesInvoiceForm(!isHideSalesInvoiceForm)}
              sx={{ backgroundColor: '#333', height: 'max-content', flexWrap: 'nowrap' }}
            >
              {/* <BottomNavigationAction label="فاکتور فروش : " style={{ display: 'flex', color: 'white', alignItems: 'center' }}/> */}
              {/* <Spacer x={1} /> */}

              <Grid sm={6} xs={6} style={{ display: 'flex', color: 'white', alignItems: 'center' }}>
                <button
                  className="m-5"
                  type="button"
                  onClick={() => callback(setShowHideForm(e => !e))}
                >
                  <HorizontalSplitOutlined style={{ color: 'yellow'}} />
                </button>

                <p className="px-4"> فاکتور فروش شماره : </p>
                <span style={{ color: 'red', fontWeight: '700' }}>{saleInvoiceNumber}</span>{' '}
                <Spacer x={1} />
                <p className="px-4"> نام مشتری : </p>
                <span style={{ color: 'red', fontWeight: '700' }}>{headCustomer}</span>{' '}
              </Grid>

              <Grid
                container
                sm={6}
                xs={6}
                style={{ justifyContent: 'flex-end', alignItems: 'center' }}
              >
                <Button sm={12} ripple animated css={styleBtnPrint} className="m-5">
                  {!isLoading && <DownloadOutlined className="mx-4" />}
                  {isLoading && <Loading color="currentColor" size="lg" />}
                  {!isLoading && 'خروجی اکسل '}
                </Button>

                <Button sm={12} ripple animated css={styleBtnPrint} className="m-5">
                  {!isLoading && <DeleteOutline className="mx-4" />}
                  {isLoading && <Loading color="currentColor" size="lg" />}
                  {!isLoading && 'حذف فاکتور'}
                </Button>

                <Button sm={12} ripple animated css={styleBtnPrint} className="m-5">
                  {!isLoading && <ReceiptOutlined className="mx-4" />}
                  {isLoading && <Loading color="currentColor" size="lg" />}
                  {!isLoading && ' تسویه با جزئیات'}
                </Button>

                <Button sm={12} ripple animated css={styleBtnPrint} className="m-5">
                  {!isLoading && <ContentCopyOutlined className="mx-4" />}
                  {isLoading && <Loading color="currentColor" size="lg" />}
                  {!isLoading && 'کپی فاکتور'}
                </Button>

                <Button sm={12} ripple animated css={styleBtnPrint} className="m-5">
                  {!isLoading && <PrintOutlined className="m-5" />}
                  {isLoading && <Loading color="currentColor" size="lg" />}
                  {!isLoading && 'چاپ فاکتور'}
                </Button>

                <Button
                  sm={12}
                  ripple
                  animated
                  css={styleBtnRegister}
                  className="m-5"
                  onClick={() => handleSubmit(formData)}
                >
                  {!isLoading && <TaskAltOutlined className="mx-4" />}
                  {isLoading && <Loading color="currentColor" size="lg" />}
                  {!isLoading && 'ثبت فاکتور'}
                </Button>
              </Grid>
            </BottomNavigation>
          </Grid>
          {isHideSalesInvoiceForm && <Spacer x={22} />}
          {!isHideSalesInvoiceForm && (
            <>
              <Grid item xs={3} alignItems="center">
                <Controller
                  valueName="selected"
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      id="date"
                      style={styleDatePicker}
                      calendar={persian}
                      locale={persianFa}
                      value={field.value || 'تاریخ'}
                      placeholder="تاریخ YYYY/MM/DD"
                      calendarPosition="bottom-right"
                      onChange={(date) => {
                        setIsDataChange(true);
                        const d = new Date(date).toLocaleDateString('fa-IR');
                        setValue('date', d);
                      }}
                    />
                  )}
                />
                {errors?.date && <span className="text-danger">{errors.date.message}</span>}
              </Grid>
              {/* {saleInvoiceNumber && (
                <Grid item xs={6}>
                  <div className="saleInvoiceNumber-style">
                    شماره فاکتور :{' '}
                    <span style={{ color: 'red', fontSize: '20', fontWeight: '500' }}>
                      {saleInvoiceNumber}
                    </span>
                  </div>
                </Grid>
              )} */}

              <Grid item xs={3}>
                <div
                  className="saleInvoiceNumber-style"
                  style={{ border: '1px solid grey', borderRadius: '5px', padding: '8px' }}
                >
                  شماره فاکتور :{' '}
                  <span style={{ color: 'red', fontSize: '20', fontWeight: '500' }}>
                    {saleInvoiceNumber}
                  </span>
                </div>
              </Grid>

              <Grid item xs={3} sm={3} alignItems="center">
                <Controller
                  name="partyId"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable
                      name="userId"
                      style={{ direction: 'rtl' }}
                      options={options}
                      placeholder="مشتری"
                      value={options?.find((item) => item.value === partyId)}
                      // value={{ value: partyId, label: partyRealName }}
                      onChange={(event) => {
                        setIsDataChange(true);
                        setHeadCustomer(event.label);
                        selectParty(event.value);
                        setValue('partyId', event.value);
                        setValue('partyRealName', event.label);
                      }}
                    />
                  )}
                />
                {errors?.partyId && <span className="text-danger">{errors.name.message}</span>}
              </Grid>
              <Grid item xs={3} sm={3}>
                <Controller
                  name="remainingPrice"
                  defaultValue={0}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      fullWidth
                      disabled
                      // className="mt-8"
                      type="text"
                      size="small"
                      label="مانده حساب"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={9} sm={9}>
                <Controller
                  name="addrress"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      disabled
                      fullWidth
                      className="mt-8"
                      type="text"
                      size="small"
                      label="آدرس"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={3} sm={3}>
                <Controller
                  name="phoneNumber"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      disabled
                      fullWidth
                      className="mt-8"
                      type="text"
                      size="small"
                      label="موبایل"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mt-8"
                      fullWidth
                      textarea
                      minRows={2}
                      mb={5}
                      label="توضیحات"
                    />
                  )}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </Grid>
  );
};

export default SalesInvoiceForm;
