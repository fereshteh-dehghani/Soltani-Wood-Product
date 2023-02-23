import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import { Button, Loading, Text, Badge } from '@nextui-org/react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import Select from 'react-select';
import { Rectangle, Save } from '@mui/icons-material';
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

const styleDatePicker = {
  'text-align': 'right',
  padding: '4px 12px',
  'background-color': 'white',
  height: '36px',
  width: '120%',
};
const styleBtn = {
  backgroundColor: '#00d041',
  borderRadius: '5px',
  height: '35px',
  width: '35px',
  fontSize: '1.6rem',
  '&:hover': {
    backgroundColor: '#00d084',
  },
};

const styleResetBtn = {
  backgroundColor: '#ff5722',
  borderRadius: '5px',
  height: '35px',
  width: '20px',
  padding: '5px',
  marginLeft: '2rem',
  marginRight: '2rem',
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
  width: '40px',
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
  productId: '',
  productName: '',
  stockId: '',
  stockName: '',
  productPrice: '',
  sumProductPrice: '',
  description: '',
  quantity: '',
};

const SalesInvoiceForm = ({ invoiceItems, product, options, selectParty, saleInvoiceNumber }) => {
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

  const [productOptions, setProductOptions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectValue, setSelectValue] = useState({});
  const [isHideSalesInvoiceForm, setIsHideSalesInvoiceForm] = useState(false);
  const [isHideProductSpecificationsForm, setIsHideProductSpecificationsForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [stockList, setStockList] = useState([]);
  const [newProduct, setNewProduct] = useState(defaultValueProduct);
  const partyId = watch('partyId');
  const partyRealName = watch('partyRealName');
  const routeParams = useParams();

  const addProductToList = () => {
    if (newProduct.id !== undefined || newProduct.saleInvoiceId !== undefined) {
      dispatch(updateInvoiceItems({ ...newProduct }));
    } else {
      dispatch(addToInvoiceItems({ id: FuseUtils.generateGUID(), ...newProduct }));
    }
    dispatch(setProduct(defaultValueProduct));
    setNewProduct({ ...defaultValueProduct })
  };

  useEffect(() => {
    if (product !== {}) {
      setNewProduct({ ...product })
    };
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
    <Box bgcolor="#fff" marginX="10px" padding="15px">
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12}>
          <BottomNavigation
            showLabels
            width="400px"
            onClick={() => setIsHideSalesInvoiceForm(!isHideSalesInvoiceForm)}
            sx={{ backgroundColor: '#333', height: '45px' }}
          >
            <BottomNavigationAction label="فاکتور فروش *" sx={{ width: '100%', color: '#fff' }} />
          </BottomNavigation>
        </Grid>
        {!isHideSalesInvoiceForm && (
          <>
            <Grid item xs={9} alignItems="center">
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
                      const d = new Date(date).toLocaleDateString('fa-IR');
                      setValue('date', d);
                    }}
                  />
                )}
              />

            </Grid>
            {saleInvoiceNumber &&
              <Grid item xs={3} alignItems="center">
                <Text blockquote color='secondary' size={14}>
                  شماره فاکتور : <Badge
                    css={{ backgroundColor: "#00d084", width: '15px' }}
                    shape="rectangle"
                    size={14}
                    borderedWeights="bold"
                    isSquared
                  >
                    {saleInvoiceNumber}
                  </Badge>

                </Text>
              </Grid>}
            <Grid item xs={12} sm={7} alignItems="center">
              <Controller
                name="partyId"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    isRtl
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable
                    name="userId"
                    style={{ direction: 'rtl' }}
                    options={options}
                    placeholder="مشتری"
                    value={{ value: partyId, label: partyRealName }}
                    onChange={(event) => {
                      selectParty(event.value);
                      setValue('partyId', event.value);
                      setValue('partyRealName', event.label);
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    disabled
                    fullWidth
                    // className="mt-8"
                    type="text"
                    size="small"
                    label="موبایل"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
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
            <Grid item xs={12} sm={5}>
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
                    className="mt-8"
                    type="text"
                    size="small"
                    label="مانده حساب"
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

        {/* Product Specification form */}
        <Grid item xs={12} mt={isHideSalesInvoiceForm ? '5px' : null}>
          <BottomNavigation
            showLabels
            width="400px"
            onClick={() => setIsHideProductSpecificationsForm(!isHideProductSpecificationsForm)}
            sx={{ backgroundColor: '#333', height: '45px' }}
          >
            <BottomNavigationAction
              label="مشخصات کالا"
              sx={{ width: '100%', color: '#fff', fontSize: '2rem' }}
            />
          </BottomNavigation>
        </Grid>
        {!isHideProductSpecificationsForm && (
          <>
            <Grid item xs={12} sm={7}>
              <Select
                isRtl
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                name="product"
                style={{ direction: 'rtl' }}
                options={productOptions}
                placeholder="کالا"
                value={productOptions?.find((item) => item.value === newProduct.productId)}
                onChange={(event) => {
                  setNewProduct({
                    ...newProduct,
                    productId: event.value,
                    productName: event.label,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                required
                fullWidth
                // className="mt-8"
                name="quantity"
                type="text"
                size="small"
                label="تعداد"
                defaultValue={0}
                value={newProduct.quantity}
                onChange={(e) => {
                  let totalPrice = 0;
                  if (newProduct.productPrice)
                    totalPrice = +e.target.value * newProduct.productPrice;

                  setNewProduct({
                    ...newProduct,
                    quantity: +e.target.value,
                    sumProductPrice: totalPrice,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                name="productPrice"
                className="mt-8"
                required
                fullWidth
                type="text"
                size="small"
                label="فی"
                defaultValue={0}
                value={addCommas(newProduct.productPrice)}
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
                }}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                name="sumProductPrice"
                className="mt-8"
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
            <Grid item xs={12} className="mt-8">
              <Select
                isRtl
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                name="stock"
                style={{ direction: 'rtl' }}
                options={stockList}
                placeholder="انبار"
                value={stockList?.find((item) => item.value === newProduct.stockId)}
                onChange={(event) => {
                  setNewProduct({ ...newProduct, stockId: event.value, stockName: event.label });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="mt-8"
                name="description"
                fullWidth
                textarea
                id="description"
                minRows={2}
                mb={5}
                label="توضیحات"
                value={newProduct.description}
                onChange={(event) => {
                  setNewProduct({ ...newProduct, description: event.target.value });
                }}
              />
            </Grid>
          </>
        )}
        <Grid
          container
          spacing={2}
          item
          xs={12}
          justifyContent="flex-start"
          mt="10px"
          marginX="0px"
        >
          <Grid item xs={2} className="ml-48">
            <Button ml="10px" css={styleInfoBtn}>
              اطلاعات بیشتر
            </Button>
          </Grid>
          <Grid item xs={2} className="ml-48">
            <Button ml="10px" auto css={styleResetBtn}>
              {'     ریست  '}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              shadow
              ripple
              animated
              css={styleBtn}
              iconRight={!isLoading && <Save />}
              onClick={addProductToList}
            >
              {isLoading && <Loading color="currentColor" size="lg" />}
              {!isLoading && 'ذخیره'}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalesInvoiceForm;
