import React, {useEffect, useState} from "react";
import Icon  from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator, Button, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import  DateTimePicker from "@react-native-community/datetimepicker";
import { CreateEventReq, UpdateEventReq } from "../../state/CreateE/createEvent";
import { SelectList } from "react-native-dropdown-select-list";
import moment from "moment";
import { Ionicons } from '@expo/vector-icons'; 



const UpdateEvent=({navigation, route})=>{
    // const [id] = useState(route.params);
    // console.warn("the id passed ", id)
    const dispatch= useDispatch()

    const gottenData = useSelector((state)=> state.createEventReducer?.getdata?.data);
    console.log("data shown ", gottenData)

    useEffect(()=>{
        setAddress(gottenData.address)
        setDescription(gottenData.description)
        setEventCategory(gottenData.event_category)
        setEventtype(gottenData.event_type)
        setStartdate(gottenData.start_date)
        if(gottenData.free==="1"){
            setFree(true)
        }else{
            setFree(false)
        }
        setLocation(gottenData.location)
        setPrivacy(gottenData.privacy)
        setStatus(gottenData.status)
        setTitle(gottenData.title)
    },[gottenData.address, gottenData.description, gottenData.event_category, gottenData.event_type,
    gottenData.free, gottenData.location, gottenData.privacy, gottenData.status, gottenData.title,
    gottenData.start_date])


    const [secure2, setSecure2] = useState(true);
    const [agree, setAgree] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [address, setAddress] = useState("")
    const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const [free, setFree] = useState(null);
  const [privacy, setPrivacy] = useState("");
  const [event_type, setEventtype] = useState("");
  const [status, setStatus] = useState("");
  const [event_category, setEventCategory] = useState("");
  const [mode, setMode] = useState('date');
  const [modeEnd, setModeEnd] = useState('date');
  const [show, setShow] = useState(false);
  const [showend, setShowEnd] = useState(false);
  const [loading, setLoading] = useState(false);



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate ;
    setShow(Platform.OS === 'ios');
    setStartdate(currentDate);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate ;
    setShowEnd(Platform.OS === 'ios');
    setEnddate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showModeEnd = currentMode => {
    setShowEnd(true);
    setModeEnd(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const showDatepickerEnd = () => {
    showModeEnd('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const showTrending = ()=>{
    navigation.navigate("DrawerNavigation", {screen : "Events"})
}
    
  
  

    const handleSignup= async()=>{
        const start_date= moment(startdate).utc().format('YYYY-MM-DD')
        const end_date= moment(enddate).utc().format('YYYY-MM-DD')
        const details={
            title: title,
            description: description,
            location: location,
            address: address,
            start_date: start_date,
            end_date: end_date,
            free:free,
            privacy: privacy,
            event_type: event_type,
            status: status,
            event_category: event_category
        }

        console.warn(details)
        // setLoading(true)
        // await dispatch(CreateEventReq(details))
        // setLoading(false)
        // navigation.navigate("Dashboard", {screen : "Eventhome"})
    }

    const data3 = [
        {key:'1', value:'music'},
        {key:'2', value:'fashion'},
        {key:'3', value: 'others'},
    ]

    const freetype = [
        {key:'1', value: "true"},
        {key:'2', value:"false"}
    ]

    const data2 = [
        {key:'1', value:'online'},
        {key:'2', value:'venue'}
    ]

    const data = [
        {key:'1', value:'public'},
        {key:'2', value:'private'}
    ]

    const data4 = [
        {key:'1', value:'draft'},
        {key:'2', value:'published'}
    ]

    const data5 = [
        {key:'1', value:'conference'},
        {key:'2', value:'seminar'},,
        {key:'2', value:'festival'},
        {key:'3', value: 'others'},
    ]

    

    return(
        <KeyboardAvoidingView  behavior={Platform.OS === "ios"? "padding" :""} style={styles.Wholeview}>
            <ScrollView showsVerticalScrollIndicator={false} style={{width: "90%"}}>
            <SafeAreaView style={styles.headertrend}>
            <Ionicons name="arrow-back-outline" size={35} color="black" onPress={showTrending} />
            <Text style={styles.trendText}>Update Events</Text>
            </SafeAreaView>
            <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.emailinput} />
            <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.emailinput} />
            {/* <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={styles.emailinput} />
             */}
             <SelectList 
                    setSelected={(val) => setLocation(val)} 
                    data={data2}
                    save="value"
                    boxStyles={{backgroundColor: "none", borderWidth: 1, borderColor:"rgb(213,213,213)", marginTop:20}}
                    placeholder="Select Location"
                    defaultOption={{  key:'1', value:gottenData.location }}
                        />
            <TextInput placeholder="Address" value={address} onChangeText={setAddress} style={styles.emailinput} />
            <View style={styles.emailinputhold}>
                    {/* <TextInput  value={date}  placeholder="Password" style={styles.passwordinput}/> */}
                    {/* <Entypo style={{ paddingRight: 15, color: "black", height:30, width:25, paddingTop: 5 }}
                        name="calendar" size={25} color='gray' onPress={showDatepicker} /> */}
                        <Button onPress={showDatepicker} title="Select start date" />
                        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startdate}
          mode={mode}
          display="default"
          is24Hour={true}
          onChange={onChange}
        />
      )}
                    </View>
                    <View style={styles.emailinputhold}>
                    {/* <TextInput  value={date}  placeholder="Password" style={styles.passwordinput}/> */}
                    {/* <Entypo style={{ paddingRight: 15, color: "black", height:30, width:25, paddingTop: 5 }}
                        name="calendar" size={25} color='gray' onPress={showDatepicker} /> */}
                        <Button onPress={showDatepickerEnd} title="Select end date" />
                        {showend && (
        <DateTimePicker 
          testID="dateTimePicker"
          value={enddate}
          mode={modeEnd}
          display="default"
          is24Hour={true}
          onChange={onChangeEnd}
        />
      )}
                    </View>
            {/* <TextInput placeholder="Free"  style={styles.emailinput} /> */}
            <View  style={{
        width:"100%",
        borderWidth: 1,
        borderColor:"rgb(213,213,213)",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        fontSize: 18,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }}>
                <Text style={{fontSize: 17, color:"rgb(213,213,213)"}}>Free entry:</Text>
                <TouchableOpacity style={{backgroundColor: free? "blue":"transparent", borderRadius: 5}}>
                    <Button title="True" color={ free? "white":"black"} onPress={()=>{setFree(true)}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: free? "transparent":"red", borderRadius: 5}}>
                    <Button title="False" color={ free? "black":"red"} onPress={()=>{setFree(false)}}/>
                </TouchableOpacity>
            </View>
            
            {/* <TextInput placeholder="Privacy" value={privacy} onChangeText={setPrivacy} style={styles.emailinput} /> */}
            <SelectList 
                    setSelected={(val) => setPrivacy(val)} 
                    data={data}
                    save="value"
                    boxStyles={{backgroundColor: "none", borderWidth: 1, borderColor:"rgb(213,213,213)", marginTop:20}}
                    placeholder="Select Privacy"
                    defaultOption={{  key:'1', value:gottenData.privacy }}
                        />
            {/* <TextInput placeholder="Status" value={status} onChangeText={setStatus} style={styles.emailinput} /> */}
            <SelectList 
                    setSelected={(val) => setStatus(val)} 
                    data={data4}
                    save="value"
                    boxStyles={{backgroundColor: "none", borderWidth: 1, borderColor:"rgb(213,213,213)", marginTop:20}}
                    placeholder="Select Status"
                    defaultOption={{  key:'1', value:gottenData.status }}
                        />
            {/* <TextInput placeholder="Event Type" value={event_type} onChangeText={setEventtype} style={styles.emailinput} /> */}
            <SelectList 
                    setSelected={(val) => setEventtype(val)} 
                    data={data5}
                    save="value"
                    boxStyles={{backgroundColor: "none", borderWidth: 1, borderColor:"rgb(213,213,213)", marginTop:20}}
                    placeholder="Select Event Type"
                    defaultOption={{  key:'1', value:gottenData.event_type }}
                        />
            {/* <TextInput placeholder="Event Category" value={event_category} onChangeText={setEventCategory} style={styles.emailinput} /> */}
            <SelectList 
                    setSelected={(val) => setEventCategory(val)} 
                    data={data3}
                    save="value"
                    boxStyles={{backgroundColor: "none", borderWidth: 1, borderColor:"rgb(213,213,213)", marginTop:20}}
                    placeholder="Select Category Type"
                    defaultOption={{  key:'1', value:gottenData.event_category }}
                        />
            <TouchableOpacity style={styles.siginbigbut} onPress={handleSignup}>
                    {loading? <ActivityIndicator animating={true} color="white"/>
                    :
                        <Text style={styles.signinword} onPress={handleSignup}>Update Event</Text>}
                    </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles= StyleSheet.create({
    Wholeview:{
        flex: 1,
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"column",
        marginTop: Platform.OS=== "ios"? 10: 20
    },
    forogttext:{
        marginTop: 20,
        width:"80%"
    },
    trendText:{
        fontSize: 25,
        marginTop: 5,
    },
    logocomp:{
        width: 50,
        height: 50
    },
    compname:{
        fontSize:30,
        fontWeight:"bold",
        marginTop: 20
    },
    signin:{
        fontSize: 25,
        marginTop: 50,
        marginLeft:60
    },
    overview:{
        width:  "90%",
    },
    allforgot:{
        width: "95%",
        marginTop: 30
    },
    emailinput:{
        width:"100%",
        borderWidth: 1,
        borderColor:"rgb(213,213,213)",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        fontSize: 18
    },
    headertrend:{
        flexDirection:"row",
        marginLeft: "2.5%",
        width:"95%"
    },
    emailinputhold:{
        width:"100%",
        borderWidth: 1,
        borderColor:"rgb(213,213,213)",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: "row"
    },
    passwordinput:{
        // width:"95%",
        fontSize: 18,
        flex: 1
    },
    forgotpassword:{
        marginTop: 20,
        alignItems:"flex-end",
        justifyContent:"flex-end"
    },
    forgotten:{
        width:"100%",
        justifyContent:"flex-end",
        alignItems:"flex-end",
    },
    siginbigbut:{
        width: "90%",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:"5%",
        backgroundColor:"rgb(85,105,254)",
        padding: 10,
        marginTop:70,
        borderRadius: 10
    },
    signinword:{
        fontSize: 18,
        color:"white"
    },
    signupside:{
        
        marginTop: 100
    },
    signupwhole:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
    },
    signupword:{
        color:"rgb(85,105,254)",
    },
    termsandcond:{
        flexDirection:"row",
        marginTop: 20
    },
    conditions:{
        marginLeft: 10,
        maxWidth: "80%"
    },
    backlogin:{
        justifyContent:"center",
        alignItems:"center",
        marginTop: 20
    },
    signinuser:{
        color:"rgb(85,105,254)",
    }
})

export default UpdateEvent;