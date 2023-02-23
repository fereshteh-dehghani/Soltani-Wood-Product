import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  formData: {},
  product: {},
  invoiceItems: [],
};

const salesInvoiceSlice = createSlice({
  name: 'buyAndSell/salesInvoiceSlice',
  initialState,
  reducers: {
    resetForm: () => null,

    setProduct: (state, action) => {
      state.product = action.payload;
    },
    addToInvoiceItems: (state, action) => {
      state.invoiceItems.push(action.payload);
    },
    updateInvoiceItems(state, action) {
      const updatedList = state.invoiceItems.map((p) => {
        if (p.id === action.payload.id || p.saleInvoiceId === action.payload.saleInvoiceId) p = action.payload;
        return p;
      });
      state.invoiceItems = [...updatedList];
    },
    deleteFromInvoiceItems(state, action) {
      const newList = state.invoiceItems.filter((p) => p.productId !== action.payload);
      state.invoiceItems = [...newList];
    },
    getInvoiceItems: (state, action) => state.invoiceItems,

    resetInvoiceItems(state, action) {
      state.invoiceItems = action.payload;
    },
  },
});

export const {
  resetForm,
  newInvoice,
  setProduct,
  addToInvoiceItems,
  deleteFromInvoiceItems,
  updateInvoiceItems,
  getInvoiceItems,
  resetInvoiceItems,
} = salesInvoiceSlice.actions;

export default salesInvoiceSlice.reducer;
