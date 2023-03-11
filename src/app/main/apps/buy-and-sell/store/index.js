import { combineReducers } from "@reduxjs/toolkit";
import salesInvoiceSlice from './salesInvoiceSlice';
import salesInvoiceListSlice from './salesInvoiceListSlice';
import paymentMethodsSlice from "./paymentMethodsSlice";
import handleModalsSlice from './handleModalsSlice'

const reducer = combineReducers({
    salesInvoiceSlice,
    salesInvoiceListSlice,
    paymentMethodsSlice,
    handleModalsSlice
})

export default reducer;