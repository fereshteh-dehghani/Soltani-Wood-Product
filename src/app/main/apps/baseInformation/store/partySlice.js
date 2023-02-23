import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  apiUrlAddParty,
  apiUrlGetParty,
  apiUrlUpdateParty,
} from 'app/services/jwtService/defaultValues';
import axios from 'axios';

export const saveParty = createAsyncThunk(
  'baseInformation/party/saveParty',
  async (partyInfo, { dispatch, getState }) => {
    const { party } = getState().baseInformation;
    const response = await axios.post(apiUrlAddParty, {
      ...party,
      ...partyInfo,
    });
    const data = await response.data;
    return data;
  }
);

export const getParty = createAsyncThunk(
  'baseInformation/getParty',
  async (partyId) => {
    const response = await axios.get(`${apiUrlGetParty}?partyId=${partyId}`);
    const data = await response.data.result;

    return data === undefined ? null : data;
  }
);

export const updateParty = createAsyncThunk(
  'baseInformation/updateParty',
  async (partyData, { getState }) => {
    const { party } = getState().baseInformation;
    const response = await axios.post(apiUrlUpdateParty, {
      ...party,
      ...partyData,
    });
    const data = await response.data;
    return data;
  }
);

const partySlice = createSlice({
  name: 'baseInformaion/party',
  initialState: null,
  reducers: {
    resetParty: () => null,

    newParty: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          type: 0,
          firstName: '',
          lastName: '',
          email: '',
          code: '',
          economicCode: '',
          isCustomer:false,
          isVender: false,
          isSeller: false,
          hasCredit: false,
          customerCredit: 0,
          creditCheckingType: 0,
          acceptCustomerCheque: false,
          gender: '',
          codeMelli: '',
          identitySerialNumber: '',
          partyGroupParties: [],
          userAddress: [],
          userInformation: [],
          partyBankAccount: [],
          partyOpeningBalance: {},
        },
      }),
    },
  },
  extraReducers: {
    [saveParty.fulfilled]: (state, action) => action.payload,
    [getParty.fulfilled]: (state, action) => action.payload,
    [getParty.fulfilled]: (state, action) => action.payload,
  },
});

export const { newParty, resetParty } = partySlice.actions;
export default partySlice.reducer;
