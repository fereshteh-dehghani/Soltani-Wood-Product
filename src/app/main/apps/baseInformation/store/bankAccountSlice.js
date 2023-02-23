import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import {
    apiUrlAddBankAccount,
    apiUrlDeleteBankAccount,
    apiUrlGetBankAccountList,
    apiUrlGetBankAccount,
    apiUrlUpdateBankAccount,
} from 'app/services/jwtService/defaultValues';
import axios from 'axios';

const initialState = {
    stutus: null,
    data: [],
    loading: false,
    response: {},
}

export const fetchBankAccountList = createAsyncThunk(
    'baseInformation/fetchBankAccountList',
    async () => {
        const response = await axios
            .get(apiUrlGetBankAccountList)
        return response.data.result
    })

export const fetchBankAccount = createAsyncThunk(
    'baseInformation/fetchBankAccount',
    async (bankAccountId) => {
        const response = await axios
            .get(`${apiUrlGetBankAccount}?bankAccountId=${bankAccountId}`)
        return response.data.result
    })

export const updateBankAccount = createAsyncThunk(
    'baseInformation/updateBankAccount',
    async (newBankAccount) => {
        const response = await axios
            .post(apiUrlUpdateBankAccount, { ...newBankAccount });
        return response.data;
    })

export const addNewBankAccount = createAsyncThunk('baseInformation/addNewBankAccount', async (newBankAccount) => {
    const response = await axios
        .post(apiUrlAddBankAccount, { ...newBankAccount });
    return response.data;
})

export const deleteBankAccount = createAsyncThunk('baseInformation/deleteBankAccount', async (id) => {
    const response = await axios
        .post(apiUrlDeleteBankAccount, { id });
    return response.data;
})






const bankAccountSlice = createSlice({
    name: 'bankAccountSlice',
    initialState,
    reducers: {
        resetBankAccount: () => null,
    },

    extraReducers: (builder) => {
        builder.addCase(fetchBankAccountList.pending, (state, action) => {
            state.loading = true;
            state.response = action.payload;
        })
        builder.addCase(fetchBankAccountList.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchBankAccountList.rejected, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(addNewBankAccount.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(addNewBankAccount.rejected, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(updateBankAccount.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(updateBankAccount.rejected, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(deleteBankAccount.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(deleteBankAccount.rejected, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
    }

})


export const { resetBankAccount } = bankAccountSlice.actions;
export default bankAccountSlice.reducer