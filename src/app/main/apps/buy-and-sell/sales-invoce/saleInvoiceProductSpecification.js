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
import { ExitToAppOutlined, Inventory2Outlined, Rectangle, Save } from '@mui/icons-material';
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

const styleDatePicker = {
  'text-align': 'right',
  padding: '4px 12px',
  'background-color': 'white',
  height: '36px',
  width: '150%',
};
const styleBtn = {
  backgroundColor: '#00d041',
  borderRadius: '7px',
  height: '30px',
  width: '35px',
  fontSize: '1.2rem',
  zIndex: '1',
  '&:hover': {
    backgroundColor: '#00d084',
  },
};

const styleResetBtn = {
  backgroundColor: '#ff5722',
  borderRadius: '7px',
  height: '30px',
  width: '20px',
  padding: '5px',
  fontSize: '1.2rem',
  zIndex: '1',
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
  fontSize: '1.2rem',
  zIndex: '1',
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

const SaleInvoiceProductSpecification = ({
  showHideForm,
  invoiceItems,
  product,
  options,
  selectParty,
  saleInvoiceNumber,
}) => {
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

  // prevent from navigation when form is edditing ------------------

  const [isDataChange, setIsDataChange] = useState(false);
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

  usePrompt(' تغییرات اعمال نمی شود! آیا صفحه را ترک می کنید؟ ', isDataChange);

  useEffect(() => {
    document.querySelector('#PSForm1').focus();
  }, []);

  // -----------------------------------------------------

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

  // next field on press enter----------

  // ---------------------------------

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
    <>
      {showHideForm && (
        <Grid style={{ display: 'flex', flexDirection: 'column' }}>
          <Box bgcolor="#fff" marginX="5px" padding="3px" maxWidth="400px">
            <Grid container spacing={1} justifyContent="right">
              {/* Product Specification form */}
              <Grid item xs={12} mt={isHideSalesInvoiceForm ? '5px' : null}>
                <BottomNavigation
                  showLabels
                  width="400px"
                  // onClick={() =>
                  //   setIsHideProductSpecificationsForm(!isHideProductSpecificationsForm)
                  // }
                  sx={{ backgroundColor: '#333', height: '45px' }}
                >
                  <BottomNavigationAction
                    label="مشخصات کالا"
                    sx={{ width: '90%', color: '#fff', fontSize: '2rem' }}
                  />
                </BottomNavigation>
              </Grid>
              {/* {isHideProductSpecificationsForm && <Spacer x={29} />} */}
              {!isHideProductSpecificationsForm && (
                <>
                  <Grid item xs={12} sm={12} style={{ direction: 'rtl' }}>
                    <Select
                      required
                      className="basic-single"
                      id="PSForm1"
                      classNamePrefix="select"
                      isSearchable
                      name="product"
                      style={{ direction: 'rtl' }}
                      options={productOptions}
                      placeholder="کالا"
                      value={productOptions?.find((item) => item.value === newProduct.productId)}
                      onKeyDown={(e) =>
                        e.key === 'Enter'
                          ? document.querySelector('#PSForm2').focus()
                          : console.log('salam')
                      }
                      onChange={(event) => {
                        const findProduct = productList.find(
                          (item) => item.productId === event.value
                        );
                        setIsDataChange(true);
                        setNewProduct({
                          ...newProduct,
                          productId: event.value,
                          productName: event.label,
                          productPrice: findProduct.salePrice,
                        });
                      }}
                    />
                    {errorProductId.error && (
                      <span className="text-danger">{errorProductId.message}</span>
                    )}
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <TextField
                      required
                      fullWidth
                      className="mt-8"
                      id="PSForm2"
                      name="quantity"
                      type="text"
                      size="small"
                      label="تعداد"
                      error={errorQuantity.error}
                      helperText={errorQuantity.message}
                      defaultValue={0}
                      value={newProduct.quantity}
                      onKeyDown={(e) =>
                        e.key === 'Enter'
                          ? document.querySelector('#PSForm3').focus()
                          : console.log('salam')
                      }
                      onChange={(e) => {
                        let totalPrice = 0;
                        if (newProduct.productPrice)
                          totalPrice = +e.target.value * newProduct.productPrice;

                        setNewProduct({
                          ...newProduct,
                          quantity: +e.target.value,
                          sumProductPrice: totalPrice,
                        });
                        setIsDataChange(true);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <TextField
                      name="productPrice"
                      className="mt-8"
                      id="PSForm3"
                      required
                      fullWidth
                      type="text"
                      size="small"
                      label="فی"
                      error={errorProductPrice.error}
                      helperText={errorProductPrice.message}
                      defaultValue={0}
                      value={addCommas(newProduct.productPrice)}
                      onKeyDown={(e) =>
                        e.key === 'Enter'
                          ? document.getElementsByName('stock').focus()
                          : console.log('salam')
                      }
                      onChange={(event) => {
                        let totalPrice = 0;
                        // const newValue = addCommas(removeNonNumeric(event.target.value));
                        const newValue = convertPriceToNumber(event.target.value);
                        if (newProduct.quantity) {
                          totalPrice = newProduct.quantity * newValue;
                        }
                        setNewProduct({
                          ...newProduct,
                          productPrice: newValue,
                          sumProductPrice: totalPrice,
                        });
                        setIsDataChange(true);
                      }}
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={12}>
                    <TextField
                      name="sumProductPrice"
                      className="mt-8 "
                      required
                      fullWidth
                      type="text"
                      size="small"
                      isDisable
                      label="قیمت کل"
                      defaultValue={0}
                      disabled
                      sx={{ backgroundColor: '#d9d9d9', padding: '-1px', color: 'red' }}
                      value={addCommas(newProduct.sumProductPrice)}
                    />
                  </Grid> */}

                  <Grid item xs={12} className="mt-8">
                    <Select
                      required
                      className="basic-single"
                      classNamePrefix="select"
                      isSearchable
                      name="stock"
                      style={{ direction: 'rtl' }}
                      options={stockList}
                      placeholder="انبار"
                      id="PSForm4"
                      value={stockList?.find((item) => item.value === newProduct.stockId)}
                      onKeyDown={(e) =>
                        e.key === 'Enter'
                          ? document.querySelector('#PSForm5').focus()
                          : console.log('salam')
                      }
                      onChange={(event) => {
                        setNewProduct({
                          ...newProduct,
                          stockId: event.value,
                          stockName: event.label,
                        });
                        setIsDataChange(true);
                      }}
                    />
                    {errorStockId.error && (
                      <span className="text-danger">{errorStockId.message}</span>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      className="mt-8"
                      name="description"
                      fullWidth
                      textarea
                      // id="description"
                      id="PSForm5"
                      minRows={2}
                      mb={5}
                      label="توضیحات"
                      value={newProduct.description}
                      onChange={(event) => {
                        setNewProduct({ ...newProduct, description: event.target.value });
                        setIsDataChange(true);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="sumProductPrice"
                      className="mt-8 "
                      required
                      fullWidth
                      type="text"
                      size="small"
                      isDisable
                      label="قیمت کل"
                      defaultValue={0}
                      disabled
                      sx={{ backgroundColor: '#d9d9d9', padding: '-1px', color: 'red' }}
                      value={addCommas(newProduct.sumProductPrice)}
                    />
                  </Grid>

                  <Grid
                    container
                    spacing={1}
                    item
                    xs={12}
                    justifyContent="center"
                    mt="10px"
                    marginX="0px"
                    flexWrap="nowrap"
                  >
                    <Grid item xs={4}>
                      <Button css={styleInfoBtn}>اطلاعات بیشتر</Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button css={styleResetBtn}>ریست</Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        id="PSForm6"
                        shadow
                        ripple
                        animated
                        css={styleBtn}
                        onClick={() => {
                          addProductToList();
                          setIsDataChange(false);
                        }}
                      >
                        {!isLoading && <Inventory2Outlined />}
                        {isLoading && <Loading color="currentColor" />}
                        {!isLoading && 'افزودن کالا'}
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
          <Spacer y={0.5} />
          <Box bgcolor="#fff" marginX="10px" padding="15px" maxWidth="400px">
            <Grid item flexDirection="column" style={{ fontSize: '15px' }}>
              <Grid
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: '7px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                  marginBottom: '1rem',
                }}
              >
                <h6>موجودی کالا :</h6>
                <span style={{ marginLeft: '1rem' }}>12</span>
              </Grid>
              <Grid
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: '7px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                  marginBottom: '1rem',
                }}
              >
                <h6> آخرین قیمت فروش :</h6>
                <span style={{ marginLeft: '1rem' }}>12</span>
              </Grid>
              <Grid
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: '7px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                  marginBottom: '1rem',
                }}
              >
                <h6> آخرین قیمت فروش به مشتری :</h6>
                <span style={{ marginLeft: '1rem' }}>12</span>
              </Grid>
              <Grid
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: '7px',
                  border: '1px solid grey',
                  borderRadius: '5px',
                  marginBottom: '1rem',
                }}
              >
                <h6> نام گروه :</h6>
                <span style={{ marginLeft: '1rem' }}>12</span>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      )}
    </>
  );
};

export default SaleInvoiceProductSpecification;
