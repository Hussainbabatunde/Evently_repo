import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import boxed from "../assets/boxed.jpg";
import sponsimg from "../assets/loginlogo.png";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import sponsimgshown from "../assets/loginlogo.png";
import Navigation from "../navigation/navigation";

const EventDetails = ({navigation}) =>{

    const handleTicket=()=>{
        navigation.navigate("Ticket")
    }
    const showTrending = ()=>{
        navigation.navigate("TrendingEvent")
    }
    return(
        <ScrollView styles={styles.eventDetailswhole} >
            
            <ImageBackground source={boxed} style={styles.event_img}/>
            <View style={styles.event_whole}>
            <View style={styles.invite_peoplegoing}>
                <View style={styles.going_indv}>
                    <Image source={sponsimg} style={styles.sponsimgper}/>
                    <Image source={sponsimg} style={styles.sponsimgperupcomin}/>
                    <Image source={sponsimg} style={styles.sponsimgperupcomin2}/>
                    <Text style={styles.going_nummber}>65 + going</Text>
                </View>
                <TouchableOpacity style={styles.redheart}>
                    <Text style={styles.invite_Button}>Invite</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.event_name}> <Ionicons name="arrow-back-outline" size={35} color="black" onPress={showTrending} /> Miami Carnival 2022 | Viva La Carnival | Year VI</Text>

                <View style={styles.event_date}>
                    <View style={styles.calendar}>
                <FontAwesome5 name="calendar-week" size={30} color="rgb(86,105,249)" />
                </View>
                <View>
                    <Text style={{fontSize:20, marginTop: 5}}>20 February, 2023</Text>
                    <Text style={{color:"rgb(195,195,195)"}}>Monday, 10:00AM to 12:00pm</Text>
                </View>
                </View>

                <View style={styles.event_date}>
                    <View style={styles.calendar}>
                <Ionicons name="ios-location-sharp" size={30} color="rgb(86,105,249)" />
                </View>
                <View>
                    <Text style={{fontSize:20, marginTop: 5}}>United States</Text>
                    <Text style={{color:"rgb(195,195,195)"}}>Viva Village Secret Miami</Text>
                </View>
                </View>

                <View style={styles.event_date}>
                <Image source={sponsimgshown} style={styles.logocomp}/>
                <View>
                    <Text style={{fontSize:20, marginTop: 5}}>Taste USA Food and Drink Festivals</Text>
                    <Text style={{color:"rgb(195,195,195)"}}>Organizer</Text>
                </View>
                </View>

                <Text style={styles.abt_event}>About Event</Text>
                <Text style={{marginTop: 20, paddingHorizontal: 10, marginBottom: 20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries.
                     
                     Contrary to popular belief, Lorem Ipsum is not simply random text. 
                     It has roots in a piece of classical Latin literature from 45 BC,
                      making it over 2000 years old. Richard McClintock,
                      It is a long established fact that a reader will be distracted by the readable
                       content of a page when looking at its layout. The point of using Lorem Ipsum is 
                       that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing packages and web
                         page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                         will uncover many web sites still in their infancy. Various versions have evolved over the years,
                          sometimes by accident,
                       sometimes on purpose (injected humour and the like).</Text>

                       <TouchableOpacity style={styles.buyheart} onPress={handleTicket}>
                    <Text style={styles.buy_Button} onPress={handleTicket}>BUY TICKET $100</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    eventDetailswhole:{
        flex: 1
    },
    event_img:{
        height: 200,
        width:"100%"
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
    redheart:{
        backgroundColor: "rgb(85,105,254)",
        width: 70,
        justifyContent: "center",
        alignItems:"center",
        padding: 10,
        borderRadius: 10
    },
    buyheart:{
        backgroundColor: "rgb(85,105,254)",
        width: "80%",
        justifyContent: "center",
        alignItems:"center",
        padding: 10,
        borderRadius: 10,
        marginLeft:"10%",
        marginBottom: 20
    },
    invite_Button:{
        color: "white"
    },
    buy_Button:{
        color: "white",
        fontSize: 25,
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
    invite_peoplegoing:{
        flexDirection: "row",
        width: "90%",
        justifyContent:"space-between",
        position:"absolute",
        top: -30,
        alignItems:"center",
        backgroundColor:"white",
        paddingHorizontal: 10,
        borderRadius: 30,
        marginLeft: "7%",
        shadowOffset:{
            width: 0,
            height: 1
        },
        shadowOpacity: 0.42,
        shadowRadius: 2.22,
        shadowColor:"gray",
        elevation: 3
    },
    event_name:{
        marginTop: 30,
        fontSize: 30
    },
    event_whole:{
        padding: 15,
    },
    event_date:{
        flexDirection:"row",
        marginTop: 20
    },
    calendar:{
        backgroundColor:"rgb(185,193,248)",
        padding: 10,
        borderRadius: 10,
        marginRight: 10
    },
    logocomp:{
        width: 50,
        height: 50,
        marginRight: 10
    },
    abt_event:{
        fontWeight: "bold",
        marginTop: 20,
        fontSize: 25
    }
})

export default EventDetails;