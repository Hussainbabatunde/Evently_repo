import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "react-native";


export const CreateEventReq= createAsyncThunk(
    "createevent/eventcreated", async(details, {rejectWithValue})=>{
        console.log(details)
        const tokengot = await  AsyncStorage.getItem("token")
        const infoneeded= `Bearer ${tokengot}`
        const instance= axios.create({
            baseURL: "http://evently.raddotech.com/api/",
            timeout: 20000,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": infoneeded
            }
        })

        return await instance.post("events", details)
        .then(async(response)=>{
            // console.log("created events ",response.data) 
            Alert.alert("Event successfully created")
            return response.data;
        })
        .catch((err) =>{ 
        let errdata = err.response.data
        // console.log(errdata.message)
        return rejectWithValue(errdata)
        })
    }
)


export const UpdateEventReq= createAsyncThunk(
  "updateevent/eventupdated", async(id, {rejectWithValue})=>{
      // console.log(details)
      const tokengot = await  AsyncStorage.getItem("token")
      const infoneeded= `Bearer ${tokengot}`
      const instance= axios.create({
          baseURL: "http://evently.raddotech.com/api/",
          timeout: 20000,
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": infoneeded
          }
      })

      return await instance.get(`events/${id}`)
      .then(async(response)=>{
          // console.log("updated events ",response.data) 
          // Alert.alert("Event successfully created")
          return response.data;
      })
      .catch((err) =>{ 
      let errdata = err.response.data
      // console.log(errdata.message)
      return rejectWithValue(errdata)
      })
  }
)

const initialState = {
    user: false,
    isError: false,
    isSuccess: false,
    isLoading: false,
    getError: false,
    getSuccess: false,
    getLoading: false,
    message: "",
    data: null,
    getdata: null
  };

export const CreateEventSlice = createSlice({
    name: "createEventReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(CreateEventReq.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(CreateEventReq.fulfilled, (state, action) => {
          
          state.isLoading = false;
          state.isSuccess = true;
          state.user = true;
          state.data= action.payload;
          // console.warn("data stored ",action.payload);
        })
        .addCase(CreateEventReq.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.user = false;
        })
        .addCase(UpdateEventReq.pending, (state) => {
          state.getLoading = true;
        })
        .addCase(UpdateEventReq.fulfilled, (state, action) => {
          
          state.getLoading = false;
          state.getSuccess = true;
          state.user = true;
          state.getdata= action.payload;
          // console.warn(" get data stored ",action.payload);
        })
        .addCase(UpdateEventReq.rejected, (state, action) => {
          state.getLoading = false;
          state.getError = true;
          state.message = action.payload;
          state.user = false;
        });
    },
  });

  export default CreateEventSlice.reducer;