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
import { DrawerNavigation, Sidebar } from "./DrawerNavigation";


const Stack= createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
      <Tab.Navigator initialRouteName="Eventhome"
      screenOptions={{
        tabBarActiveTintColor: 'rgba(72, 130, 101, 0.5)',
        tabBarShowLabel: false,
      }} >
        
          <Tab.Screen
            name="Eventhome"
            component={Homepage}
            options={{ title: 'Eventhome', tabBarActiveTintColor: 'rgba(72, 130, 101, 0.5)',  headerShown: false, tabBarIcon: ({focused}) => {
              return <Ionicons name="ios-home" size={30} color={focused ? "rgb(116,131,237)" : "black"} />
              },
           }}
          />
          <Tab.Screen
            name="DrawerNavigation"
            component={Sidebar}
            options={{ title: 'DrawerNavigation', tabBarActiveTintColor: 'rgba(72, 130, 101, 0.5)',  headerShown: false, tabBarIcon: ({focused}) => {
              return <Ionicons name="ios-create" size={30} color={focused ? "rgb(116,131,237)" : "black"} />
              },
           }}
          />
          
        </Tab.Navigator>
    );
  }