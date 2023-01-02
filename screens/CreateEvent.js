import React, {useEffect, useState} from "react";
import Icon  from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../assets/google.png";
import { Entypo, Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SignupAuth } from "../state/auth";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-native-date-picker";

const CreateEvent=({navigation})=>{

    const [secure, setSecure] = useState(true);
    const [secure2, setSecure2] = useState(true);
    const[password, setPassword] =useState('')
    const[password_confirmation, setPasswordconf] =useState('')
    const [agree, setAgree] = useState(false)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    const dispatch= useDispatch()


    const handleSignup= async()=>{
        const details={
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            firstname: firstname,
            lastname: lastname
        }

        // console.warn(details)
        setLoading(true)
        await dispatch(SignupAuth(details))
        setLoading(false)
        // navigation.navigate("Dashboard", {screen : "Eventhome"})
    }

    const {registersuccess}= useSelector((state)=> state.authReducer)

    useEffect(() => {
        if(registersuccess== true){
            navigation.navigate("Login")
        }
    }, [navigation, registersuccess])


    const changeIcon= () => {
        setOpen(true)
    }
    const changeIcon2= () => {
        setSecure2(!secure2)
    }
    const backLogin=()=>{
        navigation.navigate("Login")
    }
    const handleAgree= ()=>{
        setAgree(!agree)
    }

    return(
        <KeyboardAvoidingView  behavior={Platform.OS === "ios"? "padding" :""} style={styles.Wholeview}>
            <ScrollView showsVerticalScrollIndicator={false} style={{width: "90%"}}>
            <Text style={styles.signin}>Create Event</Text>
            <TextInput placeholder="Title" style={styles.emailinput} />
            <TextInput placeholder="Description" style={styles.emailinput} />
            <TextInput placeholder="Location" style={styles.emailinput} />
            <TextInput placeholder="Address" style={styles.emailinput} />
            <View style={styles.emailinputhold}>
                    <TextInput secureTextEntry={secure} value={password} onChangeText={setPassword} placeholder="Password" style={styles.passwordinput}/>
                    <Entypo style={{ paddingRight: 15, color: "black", height:30, width:25, paddingTop: 5 }}
                        name="calendar" size={20} color='gray' onPress={changeIcon}/>
                <DatePicker
                display="inline"
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
                    </View>
            <TextInput placeholder="Free" style={styles.emailinput} />
            <TextInput placeholder="Privacy" style={styles.emailinput} />
            <TextInput placeholder="Status" style={styles.emailinput} />
            <TextInput placeholder="Event Type" style={styles.emailinput} />
            <TextInput placeholder="Event Category" style={styles.emailinput} />
            <TouchableOpacity style={styles.siginbigbut} onPress={handleSignup}>
                    {loading? <ActivityIndicator animating={true} color="white"/>
                    :
                        <Text style={styles.signinword} onPress={handleSignup}>Create Event</Text>}
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
        marginTop: 30
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
        width:"95%",
        fontSize: 18
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

export default CreateEvent;