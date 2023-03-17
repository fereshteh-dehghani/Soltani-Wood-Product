import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalOpenCashPayment: false,
    handleCreditModal: false,
    handlePaymentBank: false,
    handleReceiptBank: false,
    handleMethodDiscount: false,
    handleDepositToTheAccount: false,
    handleTransferMethod: false,
    handleReceiptCheque: false,
    handlePaymentCheque: false,
}

const handleModalsSlice = createSlice({
    name: 'buyAndSell/handleModalsSlice',
    initialState,
    reducers: {
        handleModals: (state, action) => {
            switch (action.payload.type) {
                case 'credit':
                    state.handleCreditModal = action.payload.isOpen;
                    break;
                case 'discount':
                    state.handleMethodDiscount = action.payload.isOpen;
                    break;
                case 'paymentBank':
                    state.handlePaymentBank = action.payload.isOpen;
                    break;
                case 'receiptBank':
                    state.handleReceiptBank = action.payload.isOpen;
                    break;
                case 'recieptCheque':
                    state.handleReceiptCheque = action.payload.isOpen;
                    break;
                case 'paymentCheque':
                    state.handlePaymentCheque = action.payload.isOpen;
                    break;
                case 'deposite':
                    state.handleDepositToTheAccount = action.payload.isOpen;
                    break;
                case 'settlementCashItems':
                    state.modalOpenCashPayment = action.payload.isOpen;
                    break;
                case 'offSetting':
                    state.handleTransferMethod = action.payload.isOpen;
                    break;
                default:
                    break;
            }
        }
    }
})

export const { handleModals } = handleModalsSlice.actions;
export default handleModalsSlice.reducer;