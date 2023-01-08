import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI } from "./getFunc";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";



  
export const GetTrending= createAsyncThunk(
    "trending/getTrend", async(_, {rejectWithValue})=>{
      const tokengot = await  AsyncStorage.getItem("token")
        const infoneeded= `Bearer ${tokengot}`
        // console.log("yourKey Value:  " + trial)
        const instance = axios.create({
            baseURL: "http://evently.raddotech.com/api/",
            timeout: 20000,
      
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": infoneeded
            },
          });
          return await instance
            .get("events")
            .then( async (response) => {
              
              
              return response.data;
            })
      .catch((err) => {
        let errdata= err.response.data;
        // console.log(errdata.message);
        return rejectWithValue(errdata)
      })
        
    }
)

const initialState = {
  user: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  data: null
};

export const GetTrendingSlice = createSlice({
  name: "getTrendingReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetTrending.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetTrending.fulfilled, (state, action) => {
        
        state.isLoading = false;
        state.isSuccess = true;
        state.user = true;
        state.data= action.payload;
        // console.warn("data stored ",action.payload);
      })
      .addCase(GetTrending.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = false;
      });
  },
});

export default GetTrendingSlice.reducer;