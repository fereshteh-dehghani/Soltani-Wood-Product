import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import {
    apiUrlAddBank,
    apiUrlDeleteBank,
    apiUrlGetBankList,
    apiUrlGetBank,
    apiUrlUpdateBank,
} from 'app/services/jwtService/defaultValues';
import axios from 'axios';

const initialState = {
    stutus: null,
    data: [],
    loading: false,
    response: {},
}

export const fetchBankList = createAsyncThunk('baseInformation/fetchBankList', async () => {
    const response = await axios
        .get(apiUrlGetBankList) 
    return response.data.result
})

export const fetchBank = createAsyncThunk('baseInformation/fetchBank', async (bankId) => {
    const response = await axios
        .get(apiUrlGetBank)
    return response.data.result
})

export const updateBank = createAsyncThunk('baseInformation/updateBank', async (newBank) => {
    const response = await axios
        .post(apiUrlUpdateBank, { ...newBank });
    return response.data;
})

export const addNewBank = createAsyncThunk('baseInformation/addNewBank', async (newBank) => {
    const response = await axios
        .post(apiUrlAddBank, { ...newBank });
    return response.data;
})

export const deleteBank = createAsyncThunk('baseInformation/deleteBank', async (id) => {
    const response = await axios
        .post(apiUrlDeleteBank, { id });
    return response.data;
})






const bankSlice = createSlice({
    name: 'bankSlice',
    initialState,
    reducers: {
        resetBank: () => null,
    },

    extraReducers: (builder) => {
        builder.addCase(fetchBankList.pending, (state, action) => {
            state.loading = true;
            state.response = action.payload;
        })
        builder.addCase(fetchBankList.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchBankList.rejected, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(addNewBank.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(addNewBank.rejected, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(updateBank.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(updateBank.rejected, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(deleteBank.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
        builder.addCase(deleteBank.rejected, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        })
    }

})


export const { resetBank } = bankSlice.actions;
export default bankSlice.reducer