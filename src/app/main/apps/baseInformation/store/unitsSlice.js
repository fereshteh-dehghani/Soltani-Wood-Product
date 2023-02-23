import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { apiUrlAddUnit, apiUrlDeleteUnit, apiUrlGetUnitList } from 'app/services/jwtService/defaultValues';
import axios from 'axios';

const initialState = {
  stutus: null,
  data: [],
  loading: false,
  response: {},
}

export const fetchUnitsList = createAsyncThunk('baseInformation/getUnitList', async () => {
  const response = await axios
    .get(apiUrlGetUnitList)
  return response.data.result
})

export const addNewUnit = createAsyncThunk('baseInformation/addNewUnit', async (unit) => {
  const response = await axios
    .post(apiUrlAddUnit, { ...unit });
  return response.data;
})

export const deleteUnit = createAsyncThunk('baseInformation/deleteUnit', async (id) => {
  const response = await axios
    .post(apiUrlDeleteUnit, { id });
  return response.data;
})






const unitsSlice = createSlice({
  name: 'unitsSlice',
  initialState,
  reducers: {
    resetUnits: () => null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUnitsList.pending, (state, action) => {
      state.loading = true;
      state.response = action.payload;
    })
    builder.addCase(fetchUnitsList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    builder.addCase(fetchUnitsList.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    })
    builder.addCase(addNewUnit.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
      console.log('hhh: ', action.payload)
    })
    builder.addCase(addNewUnit.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    })
   
   
    builder.addCase(deleteUnit.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    })
    builder.addCase(deleteUnit.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    })
  }

})


export const { resetUnits } = unitsSlice.actions;
export default unitsSlice.reducer