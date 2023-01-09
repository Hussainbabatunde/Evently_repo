import React, { useEffect } from "react"
import { Button, FlatList, SafeAreaView, Text } from "react-native"
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import boxed from "../../assets/boxed.jpg"
import sponsimg from "../../assets/loginlogo.png";
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { GetTrending } from "../../state/getTrending";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { UpdateEventReq } from "../../state/CreateE/createEvent";

const GetCreateEvent= ({navigation})=>{

    const dispatch= useDispatch()

    useEffect(() => {
         dispatch(GetTrending())
    }, [])


    const gottenvalue = useSelector((state)=> state.GetTrending?.data?.data)
    // console.log("seeing state ", gottenvalue)

    // const UpdateEvent=(page)=>{
    //     navigation.navigate("UpdateEvent", {page})
    // }

    const showTrending = ()=>{
        navigation.navigate("Dashboard", {screen : "Eventhome"})
    }
    const handleEventDetails= ()=>{
        console.warn("it works")
        navigation.navigate("EventDetails")
    }
    return(
        <SafeAreaView styles={styles.wholeTrend}>
            <View style={styles.headertrend}>
            {/* <Ionicons name="arrow-back-outline" size={35} color="black" onPress={showTrending} /> */}
            <Text style={styles.trendText}> Events</Text>
            </View>
            <FlatList
            data={gottenvalue}
            keyExtractor={item=> item.id}
            renderItem={({item})=>{
            return <View style={styles.wholecomp} >
                <Image source={boxed} style={styles.imgTrend}/>
                <Text style={styles.name_ofevent}>{item?.title}</Text>
                <View style={styles.location_events}>
                        <Ionicons name="location-sharp" size={24} color="rgb(114,110,142)" />
                        <Text style={styles.loc_particular}> {item?.address}</Text>
                </View>
                <Text style={styles.loc_particular}> Description: {item?.description}</Text>
                <View>
                <View style={styles.going_indv}>
                    <Image source={sponsimg} style={styles.sponsimgper}/>
                    <Image source={sponsimg} style={styles.sponsimgperupcomin}/>
                    <Image source={sponsimg} style={styles.sponsimgperupcomin2}/>
                    <Text style={styles.going_nummber}>65 + going</Text>
                </View>
                <View style={styles.redheart}>
                <Entypo name="edit" size={24} color="blue" style={{marginRight: 20}} onPress={async ()=>{
        // navigation.navigate("UpdateEvent", item?.id)
        await dispatch(UpdateEventReq(item?.id))
        navigation.navigate("UpdateEvent")
    }} />
                    <MaterialIcons name="delete" size={24} color="red"  />
                    </View>
                </View>
                <TouchableOpacity onPress={handleEventDetails} style={styles.view_button}>
                <Text style={styles.view_event} onPress={handleEventDetails} >Create Ticket</Text>
                </TouchableOpacity>
            </View>
           }} />
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    wholeTrend:{
        flex: 1
    },
    headertrend:{
        flexDirection:"row",
        marginLeft:60,
        width:"95%"
    },
    trendText:{
        fontSize: 25,
        marginTop: 5,
    },
    imgTrend:{
        width: "100%",
        height: 200,
        borderRadius: 10
    },
    wholecomp:{
        width:"95%",
        marginLeft:"2.5%",
        padding: 10,
        marginTop: 20,
        shadowOffset:{
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        shadowColor:"gray",
        elevation: 3,
        backgroundColor:"white",
        borderRadius: 10
    },
    name_ofevent:{
        fontSize: 18,
        marginTop: 10,
        maxWidth: "100%"
    },
    location_events:{
        flexDirection:"row",
        alignItems:"center",
        maxWidth: "95%",
        marginTop: 10
    },
    loc_particular:{
        color:"rgb(179,179,179)",
        maxWidth: "100%",
        fontSize: 16
    },
    going_indv:{
        flexDirection:"row",
        alignItems:"center",
        position:"relative",
        top: 10,
        marginBottom: 10
    },
    sponsimgper:{
        width: 50,
        height: 50
    },
    sponsimgperupcomin:{
        width: 50,
        height: 50,
        position: "absolute",
        left: 30
    },
    sponsimgperupcomin2:{
        width: 50,
        height: 50,
        position: "absolute",
        left: 60
    },
    going_nummber:{
        color:"rgb(107,100,233)",
        position:"absolute",
        left:110
    },
    redheart:{
        position:"absolute",
        right: 0,
        flexDirection:"row",
        padding: 8,
        borderRadius: 50,
        top: 10
    },
    view_event:{
        color: "white",
        fontSize: 20
    },
    view_button:{
        backgroundColor:"rgb(85,105,254)",
        padding: 10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10
    }
})

export default GetCreateEvent;