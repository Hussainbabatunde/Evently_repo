import React from "react";
import CreateEvent from "../screens/CreateEvent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GetCreateEvent from "../screens/Host/GetCreateEvent";
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";
import { DrawerActions } from "@react-navigation/native";


const Drawer = createDrawerNavigator();

export  function Sidebar({navigation}) {
    return (
        <Drawer.Navigator initialRouteName="Dashboard"  screenOptions={{
          headerShown: true,
          headerTransparent:true
        }} >
          <Drawer.Screen name="Dashboard" options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'black',
          headerLeft:false,headerTitle:"",
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Entypo name="menu" size={30} color="black" />
            </TouchableOpacity>
          ),
        }} component={CreateEvent}/>
          <Drawer.Screen name="Events" options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'black',
          headerLeft:false,headerTitle:"",
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Entypo name="menu" size={30} color="black" />
            </TouchableOpacity>
          ),
        }} component={GetCreateEvent}/>
        </Drawer.Navigator>
    );
  }