import { 
    createSlice,
     createAsyncThunk,
   } from '@reduxjs/toolkit';
  import axios from 'axios';
  import {
    apiUrlGetRoleItems
} from 'app/services/jwtService/defaultValues';

  export const getRoles = createAsyncThunk('rolesManagement/getRoles', async () => {
      const response = await axios.get();
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
  
  
  
   const rolesManagementSlice=createSlice({
    name:'rolesManagementSlice',
    initialState:null,
    reducers:{
      resetRolesList:()=> null,
    },
    
  
    exteraReducers:{
      [getRoles.fulfilled]:(state, action) => action.payload,
      // [saveusers.fulfilled] : (state,action) => action.payload,
      }
   }) 
  
  
  export const {resetRolesList} =  rolesManagementSlice.actions;
   export default  rolesManagementSlice.reducer