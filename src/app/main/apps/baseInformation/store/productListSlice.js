import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiUrlGetProductList, apiUrlProductDelete } from 'app/services/jwtService/defaultValues';
import axios from 'axios';
import productSlice from './productSlice';

const initialState = {
  stutus: null,
  data: [],
  loading: false,
  response: {},
  subUnits: [],
};

export const fetchProductList = createAsyncThunk('baseInformation/fetchProductList', async () => {
  const response = await axios.get(apiUrlGetProductList);
  return response.data.result;
});

export const deleteProduct = createAsyncThunk('', async (productId) => {
  const response = await axios.post(apiUrlProductDelete, { productId });
  return response.data;
});

const productListSlice = createSlice({
  name: 'productListSlice',
  initialState,
  reducers: {
    resetProductList: () => null,
    addSubUnits: (state, action) => {
      state.subUnits =action.payload;
    console.log(state.subUnits);
    },
    deleteSubUnits: (state, action) => {
      state.subUnits = action.payload;
      console.log(state.subUnits);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.pending, (state, action) => {
      state.loading = true;
      state.response = action.payload;
    });
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductList.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.response = action.payload;
    });
  },
});

export const { resetProductList,addSubUnits,deleteSubUnits } = productListSlice.actions;
export default productListSlice.reducer;
