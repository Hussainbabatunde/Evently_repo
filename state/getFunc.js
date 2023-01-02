import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';


export const getToken= async()=>{
    try{
        const value = await AsyncStorage.getItem("token")
        console.log(value)
        if (value!== null) return value
    }catch(err){
        console.log(err)
    }
}

const getConfig={
    baseUrl: "http://evently.raddotech.com/api",
    timeout: 20000,
    header:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization": `Bearer ${getToken()}`
      },
      method:"get"
}

export const getAPI= async (url, data)=>{
  
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}/${url}/${data}`
    }).then((response)=>{
        console.log(response)
        return{
            status: response.status,
            data: response.data
        }
    }).catch((error)=>{
        console.log(error)
        return{
            status: response.status,
            data: response.data
        }
    })
}