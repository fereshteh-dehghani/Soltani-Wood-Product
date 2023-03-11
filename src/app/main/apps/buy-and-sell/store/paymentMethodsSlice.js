import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    paymentMethodsItems: [],
    paymentMethodData: {},
}

const paymentMethodsSlice = createSlice({
    name: 'buyAndSell/paymentMethodsSlice',
    initialState,
    reducers: {
        resetPaymentMethodsItems: (state, action) => {
            state.paymentMethodsItems = []
        },
        addToPaymentMethodsItems: (state, action) => {
            state.paymentMethodsItems.push(action.payload);
        },
        deletePaymentMethodsItem: (state, action) => {
            const newList = state.paymentMethodsItems.filter((item) => item.id !== action.payload);
            state.paymentMethodsItems = [...newList];
        },
        updatePaymentMethodsItems: (state, action) => {
            const findPaymentMethod = state.paymentMethodsItems.map((item) => {
                if (item.id === action.payload.id) {
                    item = action.payload;
                }
                return item;
            })
            state.paymentMethodsItems = [...findPaymentMethod];
        },
        findPaymentMethodData: (state, action) => {
            state.paymentMethodData = action.payload;
        },
    }
})

export const {
    resetPaymentMethodsItems,
    addToPaymentMethodsItems,
    deletePaymentMethodsItem,
    updatePaymentMethodsItems,
    findPaymentMethodData,
} = paymentMethodsSlice.actions;

export default paymentMethodsSlice.reducer;