import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiUrlGetPartyList, apiUrlPartyDelete } from 'app/services/jwtService/defaultValues';
import axios from 'axios';

const initialState = {
  stutus: null,
  data: [],
  loading: false,
  response: {},
};

export const fetchPartyList = createAsyncThunk('baseInformation/fetchPartyList', async () => {
  const response = await axios.get(apiUrlGetPartyList);
  return response.data.result;
});

export const deleteParty = createAsyncThunk('baseInformation/deleteParty', async (partyId) => {
  const response = await axios.post(apiUrlPartyDelete, { partyId });
  return response.data;
});

const partyListSlice = createSlice({
  name: 'partyListSlice',
  initialState,
  reducers: {
    resetPartyList: () => null,
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPartyList.pending, (state, action) => {
      state.loading = true;
      state.response = action.payload;
    });
    builder.addCase(fetchPartyList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPartyList.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(deleteParty.pending, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(deleteParty.fulfilled, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(deleteParty.rejected, (state, action) => {
      state.response = action.payload;
    });
  },
});

export const { resetPartyList } = partyListSlice.actions;
export default partyListSlice.reducer;
