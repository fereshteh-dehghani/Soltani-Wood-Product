import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  apiUrlUpdateStock,
  apiUrlAddStock,
  apiUrlDeleteStock,
  apiUrlGetStock,
  apiUrlGetStockList,
  apiUrlUsersListWithFullNameAndId,
} from 'app/services/jwtService/defaultValues';
import axios from 'axios';

const initialState = {
  stutus: null,
  data: [],
  loading: false,
  response: {},
};

export const fetchStockList = createAsyncThunk('baseInformation/fetchStockList', async () => {
  const response = await axios.get(apiUrlGetStockList);
  return response.data.result;
});

export const fetchStock = createAsyncThunk('baseInformation/fetchStock', async (stockId) => {
  const response = await axios.get(`${apiUrlGetStock}stockId=${stockId}`);
  return response.data.result;
});

export const fetchUsersListWithFullName = createAsyncThunk('baseInformation/fetchUsersListWithFullName', async (textTofindUser) => {
    const response = await axios.get(
      `${apiUrlUsersListWithFullNameAndId}textToFind=${textTofindUser}`
    );
    return response.data.result;
  });

export const updateStock = createAsyncThunk('baseInformation/stockUpdate', async (newStock) => {
  const response = await axios.post(apiUrlUpdateStock, { ...newStock });
  return response.data;
});

export const addNewStock = createAsyncThunk('baseInformation/addNewStock', async (newStock) => {
  const response = await axios.post(apiUrlAddStock, { ...newStock });
  return response.data;
});

export const deleteStock = createAsyncThunk('baseInformation/deleteStock', async (id) => {
  const response = await axios.post(apiUrlDeleteStock, { StockId:id });
  return response.data;
});

const stockSlice = createSlice({
  name: 'stockSlice',
  initialState,
  reducers: {
    resetStock: () => null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchStockList.pending, (state, action) => {
      state.loading = true;
      state.response = action.payload;
    });
    builder.addCase(fetchStockList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchStockList.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(addNewStock.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(addNewStock.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(updateStock.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(updateStock.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(deleteStock.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(deleteStock.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
  },
});

export const { resetStock } = stockSlice.actions;
export default stockSlice.reducer;
