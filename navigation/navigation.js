import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Forgotpassword from "../screens/Forgotpassword";
import Homepage from "../screens/homepage";
import { Ionicons } from "@expo/vector-icons";
import TrendingEvent from "../screens/TrendingEvent";
import EventDetails from "../screens/EventDetails";
import CreateEvent from "../screens/CreateEvent";
import { TabNavigation } from "./Tabnavigation";


const Stack= createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const Navigation= ()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" 
            component={Login}
            options={{ title: 'Signin',  headerShown: false }}
            />
            
            <Stack.Screen name="SignUp" 
    component={Signup}
    options={{ title: 'SignUp',  headerShown: false }}
    />
    <Stack.Screen name="Forgotpassword" 
            component={Forgotpassword}
            options={{ title: 'ForgotPassword',  headerShown: false }}
            />

<Stack.Screen
      name="Dashboard"
      component={TabNavigation}
      options={{ title: 'Signin',  headerShown: false }}
    />
    <Stack.Screen
      name="TrendingEvent"
      component={TrendingEvent}
      options={{ title: 'Trending Event',  headerShown: false }}
    />
    <Stack.Screen
      name="EventDetails"
      component={EventDetails}
      options={{ title: 'Trending Event',  headerShown: false }}
    />
    {/* 
            
            
            
    
    <Stack.Screen
      name="Ticket"
      component={Ticket}
      options={{ title: 'Trending Event',  headerShown: false }}
    /> */}
        </Stack.Navigator>
    </NavigationContainer>  
         );
}

export default Navigation;