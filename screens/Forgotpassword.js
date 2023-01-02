import React, {useState} from "react";
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../assets/google.png";
import { Ionicons } from '@expo/vector-icons'; 

const Forgotpassword=({navigation})=>{

    const [secure, setSecure] = useState(true);
    const[password, setPassword] =useState('')
    const changeIcon= () => {
        setSecure(!secure)
    }
    const backLogin=()=>{
        navigation.navigate("Login")
    }

    return(
        <SafeAreaView  behavior={Platform.OS === "ios"? "padding" :""} style={styles.Wholeview}>
            <View style={styles.allforgot}>
            <Ionicons name="arrow-back" size={30} color="black" onPress={backLogin} />
            
                <Text style={styles.signin}>Reset Password</Text>
                <Text style={styles.forogttext}>Please enter your Mobile Number to request a password reset</Text>
                <TextInput placeholder="Email" style={styles.emailinput} />
                
                
                    <TouchableOpacity style={styles.siginbigbut}>
                        <Text style={styles.signinword}>SEND</Text>
                    </TouchableOpacity>
                    </View>
        </SafeAreaView>
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
        marginTop:20,
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
    }
})

export default Forgotpassword;