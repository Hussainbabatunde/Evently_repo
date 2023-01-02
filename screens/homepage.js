import React from "react";
import { Image, ScrollView, TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import google from "../assets/google.png";
import boxed from "../assets/boxed.jpg";
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import sponsimg from "../assets/loginlogo.png";
import { ImageBackground } from "react-native";
import { Button } from "react-native";
import Nearbyyou_comp from "../components/nearbyyou";


const Homepage = ({navigation}) =>{

    const showTrending = ()=>{
        navigation.navigate("TrendingEvent")
    }
    return(
        <View style={styles.homepage_whole}>
            <View style={styles.notify_holder}>
                <View style={styles.notify_logo}>
                <Image source={sponsimg} style={styles.logocomp}/>
                <View style={styles.current_loc}>
                    <Text style={styles.loc}>Current Location</Text>
                    <Text style={styles.loc}>Los Angeles, California</Text>
                </View>
                <View style={styles.botbell}>
                <FontAwesome name="bell-o" size={24} color="white" />
                <Entypo name="dot-single" size={37} color="rgb(16,222,253)" style={styles.bot} />
                </View>
                </View>
                <View style={styles.search_holder}>
                <Feather name="search" size={27} color="white" />
                <View style={styles.vertical}></View>
                <TextInput placeholder="Search..." style={styles.horline}/>
                </View>
            </View>
            <ScrollView>
            <ScrollView showsHorizontalScrollIndicator={false}  horizontal style={styles.horicons_view}>
                <View style={styles.icon_wordlog}>
                <View style={styles.musicicon}>
                <Ionicons name="musical-note-outline" size={24} color="black" />
                </View>
                <Text>Music</Text>
                </View>
                <View style={styles.icon_wordlog}>
                <View style={styles.musicicon2}>
                <Feather name="star" size={24} color="black" />
                </View>
                <Text>Art & Craft</Text>
                </View>
                <View style={styles.icon_wordlog}>
                <View style={styles.musicicon3}>
                <Feather name="video" size={24} color="black" />
                </View>
                <Text>Comedy Show</Text>
                </View>
            </ScrollView>
            <View style={styles.trendingshow}>
            <Text style={styles.trendevents}>Trending Events</Text>
            <TouchableOpacity >
                <Text style={styles.seeall} onPress={showTrending}>See All></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendeventsshow}>
                <View style={styles.trendeventstog}>
                    <Image source={boxed} style={styles.trendbox}/>
                    <View style={styles.redheart}>
                    <FontAwesome name="heart" size={24} color="red"  />
                    </View>
                    <View style={styles.eventdetails}>
                        <Text style={styles.name_event}>Singapore FinTech ...</Text>
                        <View style={styles.location_events}>
                        <Ionicons name="location-sharp" size={24} color="rgb(114,110,142)" />
                        <Text style={styles.loc_particular}> Singapore Expo, ...</Text>
                        </View>
                        <View style={styles.join_spons}>
                            <View style={styles.sponsor_imgtog}>
                            <Image source={sponsimg} style={styles.sponsimgper}/>
                            <Text style={styles.loc_particular}>Sponsor</Text>
                            </View>
                            <TouchableOpacity style={styles.button_join}><Text style={styles.join_text}>Join</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.trendeventstog}>
                    <Image source={boxed} style={styles.trendbox}/>
                    <View style={styles.redheart}>
                    <FontAwesome name="heart" size={24} color="red"  />
                    </View>
                    <View style={styles.eventdetails}>
                        <Text style={styles.name_event}>Singapore FinTech ...</Text>
                        <View style={styles.location_events}>
                        <Ionicons name="location-sharp" size={24} color="rgb(114,110,142)" />
                        <Text style={styles.loc_particular}> Singapore Expo, ...</Text>
                        </View>
                        <View style={styles.join_spons}>
                            <View style={styles.sponsor_imgtog}>
                            <Image source={sponsimg} style={styles.sponsimgper}/>
                            <Text style={styles.loc_particular}>Sponsor</Text>
                            </View>
                            <TouchableOpacity style={styles.button_join}><Text style={styles.join_text}>Join</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.trendingshowup}>
            <Text style={styles.trendevents}>Upcoming Events</Text>
            <TouchableOpacity >
                <Text style={styles.seeall}>See All></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendeventsshow2}>
                <View style={styles.trendeventstog}>
                    <Image source={boxed} style={styles.trendbox}/>
                    <View style={styles.redheart2}>
                    <FontAwesome name="heart" size={24} color="red"  />
                    </View>
                    <View style={styles.upcomingeventdetails}>
                        <Text style={styles.date_event}>20 February</Text>
                        
                    </View>
                    <Text style={styles.name_ofevent}>Miami Carnival 2022 | Viva London</Text>
                    <View style={styles.going_indv}>
                    <Image source={sponsimg} style={styles.sponsimgper}/>
                    <Image source={sponsimg} style={styles.sponsimgperupcomin}/>
                    <Image source={sponsimg} style={styles.sponsimgperupcomin2}/>
                    <Text style={styles.going_nummber}>65 + going</Text>
                    </View>
                        <View style={styles.location_events}>
                        <Ionicons name="location-sharp" size={24} color="rgb(114,110,142)" />
                        <Text style={styles.loc_particular}> Singapore Expo, ...</Text>
                        </View>
                </View>
                <View style={styles.trendeventstog}>
                    <Image source={boxed} style={styles.trendbox}/>
                    <View style={styles.redheart2}>
                    <FontAwesome name="heart" size={24} color="red"  />
                    </View>
                    <View style={styles.upcomingeventdetails}>
                        <Text style={styles.date_event}>20 February</Text>
                        
                    </View>
                    <Text style={styles.name_ofevent}>Miami Carnival 2022 | Viva London</Text>
                    <View style={styles.going_indv}>
                    <Image source={sponsimg} style={styles.sponsimgper}/>
                    <Image source={sponsimg} style={styles.sponsimgperupcomin}/>
                    <Image source={sponsimg} style={styles.sponsimgperupcomin2}/>
                    <Text style={styles.going_nummber}>65 + going</Text>
                    </View>
                        <View style={styles.location_events}>
                        <Ionicons name="location-sharp" size={24} color="rgb(114,110,142)" />
                        <Text style={styles.loc_particular}> Singapore Expo, ...</Text>
                        </View>
                </View>
            </ScrollView>
            <ImageBackground source={boxed} resizeMode="cover" style={styles.child}>
                <View style={styles.advertinvite}>
                    <Text style={styles.invite_your}>Invite your Friends</Text>
                    <Text style={styles.loc_particular}>Get $20 for ticket</Text>
                    <TouchableOpacity style={styles.invite_text}><Text style={styles.join_text}>INVITE</Text></TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.trendingshow}>
            <Text style={styles.trendevents}>Nearby You</Text>
            <TouchableOpacity >
                <Text style={styles.seeall}>See All></Text>
                </TouchableOpacity>
            </View>

                    <Nearbyyou_comp/>
                    
            </ScrollView>
            </View>
    )
}

const styles= StyleSheet.create({
    homepage_whole:{
        flex: 1,
        backgroundColor: "white"
    },
    logocomp:{
        width: 50,
        height: 50
    },
    notify_holder:{
        backgroundColor: "rgb(116,131,237)",
        padding: 20,
        paddingTop: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    notify_logo:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    current_loc:{
        justifyContent:"center",
        alignItems:"center"
    },
    loc:{
        color:"white"
    },
    botbell:{
        backgroundColor: "rgb(103,119,254)",
        padding: 10,
        borderRadius: 50,
        position:"relative"
    },
    bot:{
        position:"absolute",
        right: 10,
        top: -5

    },
    search_holder:{
        flexDirection: "row",
        marginTop: 10
    },
    vertical:{
        height: 20,
        width: 2,
        backgroundColor:"white",
        marginTop: 3,
        marginHorizontal: 10
    },
    horline:{
        width: "80%",
        fontSize: 18
    },
    musicicon:{
        backgroundColor: "rgb(254,180,67)",
        padding: 5,
        borderRadius: 50,
        marginRight: 10
    },
    musicicon2:{
        backgroundColor: "rgb(250,108,161)",
        padding: 5,
        borderRadius: 50,
        marginRight: 10
    },
    musicicon3:{
        backgroundColor: "rgb(246,149,99)",
        padding: 5,
        borderRadius: 50,
        marginRight: 10
    },
    horicons_view:{
        flexDirection:"row",
        width:"100%",
        padding: 30,
        maxHeight: 110
    },
    icon_wordlog:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        borderWidth: 1,
        borderColor:"gray",
        padding: 5,
        marginRight: 15,
        borderRadius: 30
    },
    trendingshow:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal: 20
    },
    trendingshowup:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal: 20,
        backgroundColor:"transparent",
        zIndex: -10
    },
    trendevents:{
        fontWeight : "bold",
        fontSize: 18
    },
    seeall:{
        color:"gray"
    },
    trendbox:{
        height: 210,
        borderRadius: 20,
        width: 280
    },
    trendeventsshow:{
        marginTop: 20,
        marginLeft: 20,
        width:"100%",
        maxHeight: 300
    },
    trendeventsshow2:{
        marginTop: 20,
        marginLeft: 20,
        width:"100%",
        maxHeight: 350
    },
    trendeventstog:{
        position:"relative",
        width: 290,
        marginRight: 20,
        height: 400
    },
    redheart:{
        position:"absolute",
        right: 30,
        backgroundColor: "rgb(162,157,156)",
        padding: 8,
        borderRadius: 50,
        top: 5
    },
    redheart2:{
        position:"absolute",
        right: 30,
        backgroundColor: "rgb(227,234,252)",
        padding: 8,
        borderRadius: 50,
        top: 5
    },
    eventdetails:{
        backgroundColor: "white",
        position:"absolute",
        top: 180,
        width: "90%",
        marginLeft:"2%",
        padding: 5,
        borderRadius: 20,
        zIndex: 1000
    },
    upcomingeventdetails:{
        backgroundColor: "white",
        position:"absolute",
        top: 190,
        minWidth: "40%",
        right:25,
        marginLeft:"2%",
        padding: 5,
        borderRadius: 20,
        zIndex: 1000
    },
    name_event:{
        fontSize: 17,
        maxWidth: "95%"
    },
    location_events:{
        flexDirection:"row",
        alignItems:"center",
        maxWidth: "95%"
    },
    loc_particular:{
        color:"rgb(179,179,179)"
    },
    invite_your:{
        fontSize: 20,
        marginBottom:10
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
    sponsor_imgtog:{
        flexDirection:"row",
        alignItems:"center"
    },
    join_spons:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding: 5
    },
    button_join:{
        backgroundColor:"rgb(154,165,255)",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    join_text:{
        color:"white"
    },
    invite_text:{
        width: 90,
        backgroundColor:"rgb(0,249,255)",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 15
    },
    date_event:{
        color: "red"
    },
    name_ofevent:{
        fontSize: 17,
        marginTop: 10
    },
    going_indv:{
        flexDirection:"row",
        alignItems:"center",
        position:"relative"
    },
    going_nummber:{
        color:"rgb(107,100,233)",
        position:"absolute",
        left:110
    },
    child:{
        width: "95%",
        marginLeft: "5%",
        height: 200,
        borderRadius: 10,
        marginBottom: 20
    },
    advertinvite:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: "95%",
        height: "100%",
        justifyContent: "center",
        paddingLeft: 10
    }
})

export default Homepage;