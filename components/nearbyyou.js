import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import boxed from "../assets/boxed.jpg";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 


const Nearbyyou_comp= () =>{
    return (
        <View style={styles.nearbycomp_whole}>
            <Image source={boxed} style={styles.imgnearby}/>
            <View style={styles.details}>
                <Text>01ST OCT - WED - 10:00 AM</Text>
                <Text style={styles.name_ofevent}>Miami Carnival 2022 | Viva Londvdfdfdon</Text>
                <View style={styles.location_events}>
                        <Feather name="star" size={24} color="black" />
                        <Text style={styles.loc_particular}> Singapore Exvsdvvfdvfvdpo, ...</Text>
                        </View>
            </View>
            <View style={styles.redheart}>
                    <FontAwesome name="heart" size={24} color="red"  />
                    </View>
        </View>
    )
}

const styles= StyleSheet.create({
    nearbycomp_whole:{
        marginTop: 20,
        width: "90%",
        marginLeft: "5%",
        flexDirection: "row",
        marginBottom: 20,
        padding: 10,
        // shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        // shadowOpacity: 0.2,  
        // shadowRadius: 3,  
        elevation: 20,
    },
    imgnearby:{
        width: 100,
        height: 110,
        borderRadius: 10
    },
    name_ofevent:{
        fontSize: 17,
        marginTop: 10,
        maxWidth: "90%"
    },
    location_events:{
        flexDirection:"row",
        alignItems:"center",
        maxWidth: "95%"
    },
    loc_particular:{
        color:"rgb(179,179,179)",
        maxWidth: "90%"
    },
    redheart:{
        position:"absolute",
        right: 0,
        backgroundColor: "rgb(238,238,238)",
        padding: 8,
        borderRadius: 50,
        top: 10
    },
    details:{
        marginTop: 10,
        marginLeft: 10
    },
})

export default Nearbyyou_comp;