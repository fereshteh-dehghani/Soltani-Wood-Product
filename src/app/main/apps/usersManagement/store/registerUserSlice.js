import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import JwtService from 'app/services/jwtService';
import axios from 'axios';
import { apiUrlRegisterUser } from 'app/services/jwtService/defaultValues';
import { showMessage } from 'app/store/fuse/messageSlice';



const initialState = {
    loading: false,
    success: false,
    errors: [],
}



export const registerUser = createAsyncThunk('userManagement/registerUser', async (data, dispatch) => {
    await axios
        .post(apiUrlRegisterUser, {
            ...data
        })
        .then((resp) => {
            if (resp !== null && resp.status === 200) {
                dispatch(showMessage({
                    message: 'ثبت نام شما با موفقیت انجام شد', // text or html
                    autoHideDuration: 6000, // ms
                    anchorOrigin: {
                        vertical: 'top', //   top bottom
                        horizontal: 'right' //  left center right
                    },
                    variant: 'success' //   success error info warning null
                }))
            } else {
                dispatch(showMessage({
                    message: 'خطایی در فرایند ثبت نام رخ داده است', // text or html
                    autoHideDuration: 6000, // ms
                    anchorOrigin: {
                        vertical: 'top', //   top bottom
                        horizontal: 'right' //  left center right
                    },
                    variant: 'error' //   success error info warning null
                }))
            }
        })
    // return response.data
})







const registerUserSlice = createSlice({
    name: 'registerSlice',
    initialState,
    reducers: {
        registerSuccess: (state, action) => {
            state.success = true;
            state.errors = [];
        },
        registerError: (state, action) => {
            state.success = false;
            state.errors = action.payload;
        },
    },

    extraReducer: (builder) => {
        builder.addCase(registerUser, (state, action) => {
            state.loading = true;
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default registerUserSlice.reducer;