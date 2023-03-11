import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

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
import { Text } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import Select from 'react-select';
import { fetchProductList } from '../../baseInformation/store/productListSlice';

const styleDatePicker = {
  'text-align': 'right',
  padding: '4px 12px',
  'background-color': 'white',
  height: '36px',
  width: '266px',
};

const ProductSpecificationsForm = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectValue, setSelectValue] = useState({});
  const [totalPrice, setTotalPrice] = useState();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const quantity = watch('quantity');
  const productPrice = watch('productPrice');
  const sumProduct = watch('sumProduct');

  useEffect(() => {
    dispatch(fetchProductList())
      .unwrap()
      .then((resp) => {
        setProductList([...resp]);
        const tempArray = [];
        resp.forEach((item) => {
          tempArray.push({ value: item.productId, label: item.title });
        });
        setOptions([...tempArray]);
      });
  }, []);

  return (
    <>
      <Box bgcolor="#fff" marginX="10px" padding="15px">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} sm={7}>
            <Controller
              name="productId"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  isRtl
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable
                  name="product"
                  style={{ direction: 'rtl' }}
                  options={options}
                  placeholder="کالا"
                  value={selectValue}
                  onChange={(event) => {
                    setSelectValue({ ...event });
                    const product = productList.find((item) => item.productId === event.value);
                    setSelectedProduct({ ...product });
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Controller
              name="quantity"
              defaultValue={0}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  type="text"
                  size="small"
                  label="تعداد"
                  onChange={(event) => {
                    field.onChange(+event.target.value);
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Controller
              name="productPrice"
              defaultValue={0}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  type="text"
                  size="small"
                  label="فی"
                  onChange={(event) => {
                    field.onChange(+event.target.value);
                    setTotalPrice(quantity * productPrice);
                    setValue('sumProduct', quantity * productPrice);
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Controller
              name="sumProduct"
              defaultValue={0}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  fullWidth
                  type="text"
                  size="small"
                  isDisable
                  label="قیمت کل"
                  disabled
                  sx={{ backgroundColor: '#d9d9d9', padding: '-1px' }}
                  value={totalPrice}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              isRtl
              className="basic-single"
              classNamePrefix="select"
              isSearchable
              name="stock"
              style={{ direction: 'rtl' }}
              options={options}
              placeholder="انبار"
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="description"
              defaultValue={selectedProduct.description}
              control={control}
              render={({ field }) => (
                <TextField fullWidth textarea id="description" minRows={2} mb={5} label="توضیحات" />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductSpecificationsForm;
