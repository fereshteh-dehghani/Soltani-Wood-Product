import { combineReducers } from "@reduxjs/toolkit";
import salesInvoiceSlice from './salesInvoiceSlice';
import salesInvoiceListSlice from './salesInvoiceListSlice';


const reducer = combineReducers({
    salesInvoiceSlice,
    salesInvoiceListSlice
})

export default reducer;