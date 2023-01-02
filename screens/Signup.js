import React, {useEffect, useState} from "react";
import Icon  from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../assets/google.png";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SignupAuth } from "../state/auth";
import { useDispatch, useSelector } from "react-redux";

const Signup=({navigation})=>{

    const [secure, setSecure] = useState(true);
    const [secure2, setSecure2] = useState(true);
    const[password, setPassword] =useState('')
    const[password_confirmation, setPasswordconf] =useState('')
    const [agree, setAgree] = useState(false)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
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
        setSecure(!secure)
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
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.allforgot}>
            <Ionicons name="arrow-back" size={30} color="black" onPress={backLogin} />
            
                <Text style={styles.signin}>Sign up</Text>
                <TextInput placeholder="First name" value={firstname} onChangeText={setFirstname} style={styles.emailinput} />
                <TextInput placeholder="Last name" value={lastname} onChangeText={setLastname} style={styles.emailinput} />
                <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.emailinput} />
                {/* <TextInput placeholder="Phone number" style={styles.emailinput} /> */}

                <View style={styles.emailinputhold}>
                    <TextInput secureTextEntry={secure} value={password} onChangeText={setPassword} placeholder="Password" style={styles.passwordinput}/>
                    <Icon style={{ paddingRight: 15, color: "black", height:30, width:25, paddingTop: 5 }}
name={secure ? "eye" : 'eye-slash'}
size={20} color='gray' onPress={changeIcon}/>
                    </View>
                
                    <View style={styles.emailinputhold}>
                    <TextInput secureTextEntry={secure2} value={password_confirmation} onChangeText={setPasswordconf} placeholder="Confirm Password" style={styles.passwordinput}/>
                    <Icon style={{ paddingRight: 15, color: "black", height:30, width:25, paddingTop: 5 }}
name={secure2 ? "eye" : 'eye-slash'}
size={20} color='gray' onPress={changeIcon2}/>
                    </View>
                    <TextInput placeholder="Referral code" style={styles.emailinput} />

                    {/* <View style={styles.termsandcond}>
                    {agree?<MaterialCommunityIcons name="toggle-switch" size={39} color="rgb(85,105,254)" onPress={handleAgree} />
                    :
                    <MaterialCommunityIcons name="toggle-switch-off-outline" size={39} color="black" onPress={handleAgree} />}
                    <Text style={styles.conditions}>By continuing, You agree to Events Terms of Use and Privacy Policy.</Text>
                    </View> */}
                
                
                    <TouchableOpacity style={styles.siginbigbut} onPress={handleSignup}>
                    {loading? <ActivityIndicator animating={true} color="white"/>
                    :
                        <Text style={styles.signinword} onPress={handleSignup}>SIGN UP</Text>}
                    </TouchableOpacity>
                    <View style={styles.backlogin}>
                    <Text>Already have an account? <Text style={styles.signinuser} onPress={backLogin}>Sign in</Text></Text>
                    </View>
                    </View>
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
        borderWidth: 5,
        borderColor:"rgb(85,105,254)"
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

export default Signup;