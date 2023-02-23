import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { apiUrlAddProduct, apiUrlProductUpdate } from 'app/services/jwtService/defaultValues';



// const initialState = {
//   subUnits: [],
// }

export const getProduct = createAsyncThunk('baseInformation/product/getProduct', async (params) => {
  const response = await axios.get(`/api/Product/GetProduct?productId=${params.productId}`);
  const data = await response.data.result;

  return data === undefined ? null : data;
});

export const removeProduct = createAsyncThunk(
  'baseInformation/product/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().baseInformation.product;
    await axios.post('/api/e-commerce-app/remove-product', { id });

    return id;
  }
);

export const saveProduct = createAsyncThunk(
  'baseInformation/product/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { product } = getState().baseInformation;
    const response = await axios.post(apiUrlAddProduct, {
      ...product,
      ...productData,
    });
    const data = await response.data;

    return data;
  }
);

export const updateProduct = createAsyncThunk(
  'baseInformation/product/updateProduct',
  async (productData, { dispatch, getState }) => {
    const { product, subUnits } = getState().baseInformation;

    const response = await axios.post(apiUrlProductUpdate, {
      ...product,
      ...productData,
    });
    const data = await response.data;

    return data;
  }
);

const productSlice = createSlice({
  name: 'baseInformation/product',
  initialState: null,
  reducers: {
    resetProduct: () => null,
  
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          title: '',
          productGroupProducts: '',
          code: '',
          taxPercent: 0,
          dutyPercent: 0,
          minimumAmount: 0,
          maximumAmount: 0,
          salePriceHasTaxAndDuty: false,
          purchaseHasTaxAndDuty: false,
          isActive: '',
          unitId: '',
          description: '',
          images: [],
          barCode: '',
          dimension: '',
          type: 0,
          // amountProduct: '',
          salePrice: 0,
          purchaseLastPrice: 0,
        },
      }),
    },
  },
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => action.payload,
    [saveProduct.fulfilled]: (state, action) => action.payload,
    [updateProduct.fulfilled]: (state, action) => action.payload,
    [removeProduct.fulfilled]: (state, action) => null,

  },
});

export const { newProduct, resetProduct, subUnits } = productSlice.actions;

export default productSlice.reducer;
