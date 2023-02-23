import {
  createSlice,
  createAsyncThunk,
  //  createEntityAdapter,
} from '@reduxjs/toolkit';
import {
  apiUrlDeleteProductGroup,
  apiUrlGetProductGroupSubGroupList,
  apiUrlUpdateProductGroup,
  apiUrlAddProductGroup,
  apiUrlGetProductGroup,
  apiUrlGetProductGroupJustChildList,
  apiUrlGetAllProductGroupJustChildList,
  apiUrlGetProductGroupList
} from 'app/services/jwtService/defaultValues';
// import {  } from "app/services/jwtService/defaultValues";
import axios from 'axios';
import { functionsIn } from 'lodash';

const initialState = {
  loading: false,
  data: {},
  parentGroupList: [],
  childGroupList: [],
  error: '',
  response: {},
};

export const fetchProductGroup = createAsyncThunk('baseInformation/fetchProductGruop', async () => {
  const response = await axios.get(apiUrlGetProductGroupSubGroupList);
  return response.data.result[0];
});

export const fetchChildProductGroupList = createAsyncThunk(
  'baseInformation/fetchChildProductGroupList',
  async () => {
    const response = await axios.get(apiUrlGetProductGroupJustChildList);
    const arraynodes = [];
    response.data.result.forEach(function (element) {
      arraynodes.push({ value: element.productGroupId, label: element.title });
    });
    return arraynodes;
  }
);

export const fetchParentGroupList = createAsyncThunk(
  'baseInformation/fetchParentGruopList',
  async () => {
    const response = await axios.get(apiUrlGetProductGroupList);
    // const data = response.data.result;
    const arraynodes = [];
    response.data.result.forEach(function (element) {
      arraynodes.push({ value: element.productGroupId, label: element.title });
    });
    return arraynodes;
  }
);

export const updateProductGroup = createAsyncThunk(
  'baseInformation/updateProductGroup',
  async (productGroup) => {
    const response = await axios.post(apiUrlUpdateProductGroup, {
      productGroupId: productGroup.id,
      title: productGroup.label,
      hierarchyTitle: '',
      parentGroupId: productGroup.parentId,
      version: 0,
      code: productGroup.code,
      childCodeLength: 0,
      hirarchyCode: '',
      hasChild: true,
    });
    return response.data;
  }
);

export const addProductGroup = createAsyncThunk(
  'baseInformation/addProductGroup',
  async (productGroup) => {
    const response = await axios.post(apiUrlAddProductGroup, { ...productGroup });
    return response.data;
  }
);

export const deleteProductGroup = createAsyncThunk(
  'baseInformation/deleteProductGroup',
  async (id) => {
    const response = await axios.post(apiUrlDeleteProductGroup, { productGroupId: id });
    return response.data;
  }
);

const productGroupListSlice = createSlice({
  name: 'baseInformation/productGroup',
  initialState,
  reducers: {
    resetProduct: () => null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductGroup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductGroup.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductGroup.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
    builder.addCase(deleteProductGroup.fulfilled, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(deleteProductGroup.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(updateProductGroup.fulfilled, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(updateProductGroup.rejected, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(addProductGroup.fulfilled, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(addProductGroup.rejected, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(fetchChildProductGroupList.fulfilled, (state, action) => {
      state.childGroupList = action.payload;
      console.log('prl: ', state.parentGroupList);
    });
    builder.addCase(fetchParentGroupList.fulfilled, (state, action) => {
      state.parentGroupList = action.payload;
      console.log('prl: ', state.parentGroupList);
    });
  },
});

// export const { resetProduct } = productGroupListSlice.actions;
export default productGroupListSlice.reducer;
