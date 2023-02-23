import {
  createSlice,
  createAsyncThunk,
  //  createEntityAdapter,
} from '@reduxjs/toolkit';
import {
  apiUrlAddPartyGroup,
  apiGetPartyGroupJustChildList,
  apiUrlGetPartyGroupSubGroupList,
  apiUrlUpdatePartyGroup,
  apiUrlGetPartyGroupList,
  apiUrlGetPartyGroup,
  apiUrlDeletePartyGroup
} from 'app/services/jwtService/defaultValues';
import axios from 'axios';

const initialState = {
  loading: false,
  data: [],
  partyGroupChildList: [],
  error: '',
  response: {},
};

export const fetchPartyGroupSubList = createAsyncThunk('baseInformation/fetchPartyGruopSubList', async () => {
  const response = await axios.get(apiUrlGetPartyGroupSubGroupList);
  return response.data.result;
});



export const fetchPartyGroupList = createAsyncThunk('baseInformation/fetchPartyGruopList', async () => {
  const response = await axios.get(apiUrlGetPartyGroupList);
  return response.data.result;
});

export const fetchPartyGroup = createAsyncThunk('baseInformation/fetchPartyGruop', async (partyId) => {
  const response = await axios.get(`${apiUrlGetPartyGroup}?partyGroupId=${partyId}`);
  return response.data.result;
});

export const fetchPartyGroupJustChildList = createAsyncThunk('baseInformation/fetchPartyGruopJustChildList', async () => {
  const response = await axios.get(apiGetPartyGroupJustChildList);
  return response.data.result;
});



export const updatePartyGroup = createAsyncThunk(
  'baseInformation/updateCustomerGroup',
  async (customerGroup) => {
    const response = await axios.post(apiUrlUpdatePartyGroup, {
      ...customerGroup
    });
    return response.data;
  }
);

export const addPartyGroup = createAsyncThunk(
  'baseInformation/addPartyGroup',
  async (customerGroup) => {
    const response = await axios.post(apiUrlAddPartyGroup, { ...customerGroup });
    return response.data;
  }
);

export const deletePartyGroup = createAsyncThunk(
  'baseInformation/deleteCustomerGroup',
  async (id) => {
    const response = await axios.post(
      apiUrlDeletePartyGroup,
      { PartyGroupId: id }
    );
    return response.data;
  }
);

const partyGroupSlice = createSlice({
  name: 'baseInformation/customerGroup',
  initialState,

  extraReducers: (builder) => {
   
    builder.addCase(fetchPartyGroupJustChildList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPartyGroupJustChildList.fulfilled, (state, action) => {
      state.loading = false;
      state.partyGroupChildList = action.payload;
    });
    builder.addCase(fetchPartyGroupSubList.fulfilled, (state, action) => {
      // state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPartyGroupSubList.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
    builder.addCase(deletePartyGroup.fulfilled, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(deletePartyGroup.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(updatePartyGroup.fulfilled, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(updatePartyGroup.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(addPartyGroup.fulfilled, (state, action) => {
      state.response = action.payload;
      });
    builder.addCase(addPartyGroup.rejected, (state, action) => {
      state.error = action.error.message;
    });

  },
});

// export const { resetProduct } = productGroupListSlice.actions;
export default partyGroupSlice.reducer;
