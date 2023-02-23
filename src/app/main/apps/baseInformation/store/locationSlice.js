import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import {
    apiUrlGetCityList,
    apiUrlGetProvinceList,
    apiUrlGetCity,
} from 'app/services/jwtService/defaultValues';
import axios from 'axios';


const initialState ={
    loadingCity:false,
    cityList:[],
    provinseList:[],
    errorFetchProvinceList:'',
    errorFetchCityList:'',
    city:{},
}

export const fetchCityList = createAsyncThunk(
    'baseInformation/location/getCityList',
    async () => {
        const response = await axios.get(apiUrlGetCityList)
        const data = await response.data.result;
        const arraynodes = [];
        data.forEach(function (element) {
          arraynodes.push({ value: element.locationId, label: element.title });
        });
        return arraynodes;
    }
)

export const fetchProvinceList = createAsyncThunk(
    'baseInformation/location/getProvinceList',
    async () => {
        const response = await axios.get(apiUrlGetProvinceList)
        const data = await response.data.result;
        const arraynodes = [];
        data.forEach(function (element) {
          arraynodes.push({ value: element.locationId, label: element.title });
        });
        return arraynodes;
    }
)

export const fetchCity = createAsyncThunk(
    'baseInformation/location/getCity',
    async (cityId) => {
        const response = await axios.get(`${apiUrlGetCity}?cityId=${cityId}`)
        const data = await response.data.result;
        return data === undefined ? null : data;
    }
)

const locationSlice = createSlice({
    name:'baseInformation/location',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(fetchCityList.pending,(state,action)=>{
            state.loadingCity = true;
        });
        builder.addCase(fetchCityList.fulfilled,(state,action)=>{
            state.loadingCity = false;
            state.cityList=action.payload;
        });
        builder.addCase(fetchCityList.rejected,(state,action)=>{
            state.loadingCity = false;
            state.errorFetchCityList=action.payload;
        });
        builder.addCase(fetchProvinceList.pending,(state,action)=>{
            state.loadingProvince = true;
        });
        builder.addCase(fetchProvinceList.fulfilled,(state,action)=>{
            state.loadingProvince = false;
            state.provinceList=action.payload;
        });
        builder.addCase(fetchProvinceList.rejected,(state,action)=>{
            state.loadingProvince = false;
            state.errorFetchProvinceList=action.payload;
        });
        builder.addCase(fetchCity.fulfilled,(state,action)=>{
            state.city=action.payload;
        });
    }
})

export default locationSlice.reducer;