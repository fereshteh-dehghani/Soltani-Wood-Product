import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';


const initialState = {
  stutus: null,
  response: {},
  data: [],
}


export const addNewproduct = createAsyncThunk('baseInformatin/addNewProduct', async (newProduct) => {
  const response = await axios
    .post(apiUrlAddProduct, { ...newProduct })
  return response.data;
})

const productDifinationSlice = createSlice({
  name: 'productDifinationSlice',
  initialState,
  reducers: {
    resetProduct: () => null,
  },

  extraReducers: (builder) => {
    builder.addCase(addNewproduct.fulfilled, (state, action) => {
      state.response = action.payload;
    })
  }

})


export const { resetProduct } = productDifinationSlice.actions;
export default productDifinationSlice.reducer