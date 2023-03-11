import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalOpenCashPayment: false,
    handleCreditModal: false,
    handleCardBank: false,
    handleMethodCheck: false,
    handleMethodDiscount: false,
    handleDepositToTheAccount: false,
    handleTransferMethod: false,
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
                case 'cardBank':
                    state.handleCardBank = action.payload.isOpen;
                    break;
                case 'check':
                    state.handleMethodCheck = action.payload.isOpen;
                    break;
                case 'deposite':
                    state.handleDepositToTheAccount = action.payload.isOpen;
                    break;
                case 'cash':
                    state.modalOpenCashPayment = action.payload.isOpen;
                    break;
                case 'transfer':
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