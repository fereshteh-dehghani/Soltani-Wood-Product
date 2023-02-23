import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  apiUrlAddCash,
  apiUrlDeleteCash,
  apiUrlGetCashList,
  apiUrlGetCash,
  apiUrlUpdateCash,
  apiUrlChangeStatus,
} from 'app/services/jwtService/defaultValues';
import axios from 'axios';

const initialState = {
  stutus: null,
  data: [],
  loading: false,
  response: {},
  cash:{}
};

export const fetchCashList = createAsyncThunk('baseInformation/fetchCashList', async () => {
  const response = await axios.get(apiUrlGetCashList);
  return response.data.result;
});

export const fetchCash = createAsyncThunk('baseInformation/fetchCash', async (cashId) => {
  const response = await axios.get(`${apiUrlGetCash}cashId=${cashId}`);
  return response.data.result;
});

export const updateCash = createAsyncThunk('baseInformation/updateCash', async (newCash) => {
  const response = await axios.post(apiUrlUpdateCash, { ...newCash });
  return response.data;
});

export const addNewCash = createAsyncThunk('baseInformation/addNewCash', async (newCash) => {
  const response = await axios.post(apiUrlAddCash, { ...newCash });
  return response.data;
});

export const deleteCash = createAsyncThunk('baseInformation/deleteCash', async (cashId) => {
  const response = await axios.post(apiUrlDeleteCash, { cashId });
  return response.data;
});

export const cashDisabled = createAsyncThunk('baseInformation/cashDisabled', async (data) => {
  const response = await axios.post(apiUrlChangeStatus, {
    ...data,
  });
  return response.data;
});

const cashSlice = createSlice({
  name: 'cashSlice',
  initialState,
  reducers: {
    resetCash: () => null,
    newCash: {
      reducer: (state, action) =>{
        state.cash= action.payload;
      },
      prepare: (event) => ({
        title: '',
        code: '',
        initCash: 0,
        cashTypeAcceptNegativeValue: 0,
        description: '',
      })

    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCashList.pending, (state, action) => {
      state.loading = true;
      state.response = action.payload;
    });
    builder.addCase(fetchCashList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCashList.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(fetchCash.fulfilled, (state, action) => {
      state.cash = action.payload;
    });
    builder.addCase(addNewCash.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(addNewCash.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(updateCash.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(updateCash.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(deleteCash.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(deleteCash.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(cashDisabled.fulfilled, (state, action) => {
      state.response = action.payload;
    });
  },
});

export const { resetCash, newCash } = cashSlice.actions;
export default cashSlice.reducer;
