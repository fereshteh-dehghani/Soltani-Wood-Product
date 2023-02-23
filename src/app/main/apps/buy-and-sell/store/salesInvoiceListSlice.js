import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiUrlSaleInvoice } from 'app/services/jwtService/defaultValues';
import axios from 'axios';

const initialState = {
    stutus: null,
    data: [],
    loading: false,
    response: {},
};

export const fetchSalesInvoiceList = createAsyncThunk('buyAndSell/fetchSalesInvoiceList', async () => {
    const response = await axios.get(apiUrlSaleInvoice);
    return response.data;
});

export const fetchSalesInvoice = createAsyncThunk('buyAndSell/fetchSalesInvoice', async (saleInvoiceId) => {
    const response = await axios.get(`${apiUrlSaleInvoice}/${saleInvoiceId}`);
    return response.data;
});

export const updateSaleInvoice = createAsyncThunk('buyAndSell/updateSaleInvoice', async (saleInvoice) => {
    const response = await axios.put(apiUrlSaleInvoice, { saleInvoice });
    console.log(response);
    return response;
});

export const deleteSaleInvoice = createAsyncThunk('buyAndSell/deleteSaleInvoice', async (saleInvoiceId) => {
    const response = await axios.delete(apiUrlSaleInvoice, { saleInvoiceId });
    return response.data;
});

const salesInvoiceListSlice = createSlice({
    name: 'salesInvoiceListSlice',
    initialState,
    reducers: {
        resetSalesInvoiceList: () => null,

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSalesInvoiceList.pending, (state, action) => {
            state.loading = true;
            state.response = action.payload;
        });
        builder.addCase(fetchSalesInvoiceList.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchSalesInvoiceList.rejected, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        });
        builder.addCase(deleteSaleInvoice.pending, (state, action) => {
            state.response = action.payload;
        });
        builder.addCase(deleteSaleInvoice.fulfilled, (state, action) => {
            state.response = action.payload;
        });
        builder.addCase(deleteSaleInvoice.rejected, (state, action) => {
            state.response = action.payload;
        });
    },
});

export const { resetSalesInvoiceList } = salesInvoiceListSlice.actions;
export default salesInvoiceListSlice.reducer;
