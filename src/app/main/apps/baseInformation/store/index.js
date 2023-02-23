import { combineReducers } from '@reduxjs/toolkit';
import productGroupListSlice from './productGroupListSlice';
import unitsSlice from './unitsSlice';
import product from './productSlice';
import productListSlice from './productListSlice';
import partyGroupSlice from './partyGroupSlice';
import partySlice from './partySlice';
import partyListSlice from './partyListSlice';
import bankSlice from './bankSlice';
import bankAccountSlice from './bankAccountSlice';
import locationSlice from './locationSlice';
import stockSlice from './stockSlice';
import cashSlice from './cashSlice';



const reducer = combineReducers({
    productGroupListSlice,
    unitsSlice,
    product,
    productListSlice,
    partyGroupSlice,
    partySlice,
    partyListSlice,
    bankSlice,
    bankAccountSlice,
    locationSlice,
    stockSlice,
    cashSlice,
})

export default reducer;

