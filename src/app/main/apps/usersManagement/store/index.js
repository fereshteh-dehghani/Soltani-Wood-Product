import { combineReducers } from '@reduxjs/toolkit';
import usersListSlice from './usersListSlice';
import rolesManagementSlice from './rolesManagementSlice'
import registerUserSlice from './registerUserSlice'

const reducer = combineReducers({

    usersListSlice,
    rolesManagementSlice,
    registerUserSlice

})

export default reducer;

