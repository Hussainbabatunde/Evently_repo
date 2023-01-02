import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState= { 
    isLoadingUsers: false,
     authtoken: "", 
     success: false, 
     error: false , 
     message: null,
     register: null,
     registersuccess: false,
     registererror: false
    };


    const getData = async (key) => {
      // get Data from Storage
      try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
          console.log(data);
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    };



export const LoginAuth = createAsyncThunk(
    "authlogin/login",
    async (details, { rejectWithValue }) => {
      console.warn(details)
      const instance = axios.create({
        baseURL: "http://evently.raddotech.com/api/",
        timeout: 20000,
  
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
      return await instance
        .post("login", details)
        .then( async (response) => {
          console.warn("register", response.data.token);
          await AsyncStorage.setItem("token", response.data.token)
         
          return response.data;
        })
        // .catch((error) => {
        //   if (error.message === "Network Error") {
        //     return rejectWithValue(error.response);
        //   } else {
        //     return rejectWithValue(error.response);
        //   }
        // });
    }
  );


  export const SignupAuth = createAsyncThunk(
    "authRegister/register",
    async (details, { rejectWithValue }) => {
      console.warn(details)
      const instance = axios.create({
        baseURL: "http://evently.raddotech.com/api/",
        timeout: 20000,
  
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
      return await instance
        .post("signup", details)
        .then((response) => {
          console.warn("register", response.data);
          return response.data;
        })
        // .catch((error) => {
        //   if (error.message === "Network Error") {
        //     return rejectWithValue(error.response);
        //   } else {
        //     return rejectWithValue(error.response);
        //   }
        // });
    }
  );


  export const ProductsDetaiis = createAsyncThunk(
    "productdetails",
    async (_, { rejectWithValue }) => {
      const instance = axios.create({
        baseURL: "https://exportsandsell.bcodestech.com/api/",
        timeout: 20000,
  
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
      return await instance
        .get("products")
        .then((response) => {
          console.log("products gotten ", response.data);
          return response.data;
        })
        // .catch((error) => {
        //   if (error.message === "Request failed with status code 422") {
        //     console.warn("Request failed with status code 422")
        //   }
        // });
    }
  );


const authSlice = createSlice({
  name:"authtokenreducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder
    .addCase(LoginAuth.pending, (state)=>{
        state.isLoadingUsers = true;
    })
    .addCase(LoginAuth.fulfilled, (state, action)=>{
        console.warn("login response ", action)
        state.isLoadingUsers= false;
        state.authtoken= action.payload.token;
        state.success = true;
        state.error= false;
        console.warn(state)

    })
    .addCase(LoginAuth.rejected, (state, action)=>{
        state.error= true;
        state.isLoadingUsers= false;
        state.message= action.payload;
        console.log("response",action)
        if (action.error.message === "Request failed with status code 422") {
          Alert.alert("Incorrect details")}
    })
    .addCase(SignupAuth.pending, (state)=>{
        state.isLoadingUsers = true;
    })
    .addCase(SignupAuth.fulfilled, (state, action)=>{
        console.warn("register response ", action.payload)
        state.isLoadingUsers= false;
        state.register= action.payload;
        state.registersuccess = true;
        state.error= false;
        if (action.payload.message === "User Registration Successful") {
          Alert.alert("Registration Successful")}

    })
    .addCase(SignupAuth.rejected, (state, action)=>{
        state.registererror= true;
        state.isLoadingUsers= false;
        state.message= action.payload;
        console.log("response",action)
        // if (action.error.message === "Request failed with status code 422") {
        //   Alert.alert("Incorrect details")}
    })
    .addCase(ProductsDetaiis.pending, (state)=>{
      state.isLoadingUsers = true;
    })
    .addCase(ProductsDetaiis.fulfilled, (state, action)=>{
      console.warn("product response ", action.payload)
      state.isLoadingUsers= true;
      state.products= action.payload;

    })
    .addCase(ProductsDetaiis.rejected, (state, action)=>{
      state.error= true;
      state.isLoadingUsers= false;
      state.message= action.payload;
    })
    
}
})

export const authtoken = (state) => state.authtoken;

export default authSlice.reducer;
  