import { 
  createSlice,
   createAsyncThunk,
  //  createEntityAdapter,
 } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   apiUrlBase,
//   apiUrlChangeUserLockoutMode,
//   apiUrlChangeTwoFactorAuthentication,
//   apiUrlChangeActiveUser,
// } from "j";

export const getUsersList = createAsyncThunk('usersListSlice/getUsersList', async () => {
    const response = await axios.get(`/api/UsersManager/GetPagedUsersList?page=1&field=1`);
    const data = await response.data; 
    return data=== undefined ? null : data;
  });

// const useraListAdapter = createEntityAdapter({});

// export const { selectAll: selectUsersList, selectById: selectProductById } =
//   productsAdapter.getSelectors((state) => state.eCommerceApp.products);
// const usersListAdapter = createEntityAdapter({});

// export const { selectAll: selectUsersList, selectById: selectUsersListById } =
//   usersListAdapter.getSelectors((state) =>console.log(state));

const initialState ={
  stutus:null,
  // initialState: usersListAdapter.getInitialState({
  //   usersListId:'',
  // }),
  data:[],
}



 const usersListSlice=createSlice({
  name:'usersListSlice',
  initialState:null,
  reducers:{
    resetUserslist:()=> null,
  },
  

  exteraReducers:{
    [getUsersList.fulfilled]:(state, action) => action.payload,
    // [saveusers.fulfilled] : (state,action) => action.payload,
    }
 }) 


export const {resetUserslist} = usersListSlice.actions;
 export default usersListSlice.reducer