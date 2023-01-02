import React, {useEffect, useState} from "react";
import Icon  from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../assets/favicon.png"
import { useDispatch, useSelector } from "react-redux";
import { LoginAuth } from "../state/auth";

const Login=({navigation})=>{

    const [secure, setSecure] = useState(true);
    const[password, setPassword] =useState('')
    const [device, setDevice]= useState("")
    const [email, setEmail] = useState("");
    const [loading, setLoading]= useState(false)
    const changeIcon= () => {
        setSecure(!secure)
    }
    const Forgotpage=()=>{
        navigation.navigate("Forgotpassword")
    }
    const handleSignup=()=>{
        navigation.navigate("SignUp")
    }
    const dispatch= useDispatch()
    const handleLogin= async()=>{
        const details={
            email: email,
            password: password,
            device_name: device
        }

        // console.warn(details)
        setLoading(true)
        await dispatch(LoginAuth(details))
        setLoading(false)
        // navigation.navigate("Dashboard", {screen : "Eventhome"})
    }
    const {success} = useSelector((state)=> state.authReducer)
    useEffect(() => {
        if(success== true){
            navigation.navigate("Dashboard", {screen : "Eventhome"})
        }
    }, [navigation,success])


    return(
        <KeyboardAvoidingView  behavior={Platform.OS === "ios"? "padding" :""} style={styles.Wholeview}>
            <Image source={logo} style={styles.logocomp}/>
            <Text style={styles.compname}>GoEvent</Text>
            <View  style={styles.overview}>
                <Text style={styles.signin}>Sign in</Text>
                <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.emailinput} />
                
                <TextInput  style={styles.emailinput} value={device} onChangeText={setDevice} placeholder="Device name" />
                    
                
                    <View style={styles.emailinputhold}>
                    <TextInput secureTextEntry={secure} value={password} onChangeText={setPassword} placeholder="Password" style={styles.passwordinput}/>
                    <Icon style={{ paddingRight: 15, color: "black", height:30, width:25, paddingTop: 5 }}
name={secure ? "eye" : 'eye-slash'}
size={20} color='gray' onPress={changeIcon}/>
                    </View>
                    <View style={styles.forgotten}>
                        <Text style={styles.forgotpassword} onPress={Forgotpage}>Forgot Password?</Text>
                    </View>
                    <TouchableOpacity style={styles.siginbigbut} onPress={handleLogin}>
                    {loading? <ActivityIndicator animating={true} color="white"/>
                    :
                    <Text style={styles.signinword} onPress={handleLogin} >SIGN IN</Text>}
                    </TouchableOpacity>
                    <View style={styles.signupwhole}>
                    <Text style={styles.signupside}>Dont have an account? <Text style={styles.signupword} onPress={handleSignup}>Sign up</Text></Text>
                    </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles= StyleSheet.create({
    Wholeview:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        borderWidth: 5,
        borderColor:"rgb(85,105,254)"
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

export default Login;