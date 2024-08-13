import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../constants/Colors"
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.loginImage}
                source={require("../../assets/images/login.png")} />
            <View style={styles.viewfriend}>
                <Text style={styles.textstyle}>
                    Ready to make a new friend ?
                </Text>
                <Text style={styles.infotext}>
                    Let's adopt the pet which you like and make there life happy again
                </Text>
                <Pressable style={styles.buttonstarted}>
                    <Text style={styles.getStartedtext}>Get Started</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginImage: {
        width: "100%",
        height: hp('60%')
    },
    textstyle: {
        fontFamily: "outfit-bold",
        fontSize: hp("3.5%"),
        textAlign: "center"
    },
    viewfriend: {
        padding: hp('3%'),
        alignItems: "center"
    },
    infotext: {
        fontFamily: "outfit",
        fontSize: hp("2.1%"),
        textAlign: "center",
        color: Colors.GRAY
    },
    buttonstarted: {
        padding:hp("2%"),
        marginTop:hp("10%"),
        backgroundColor:Colors.PRIMARY,
        width:"100%",
        borderRadius:hp("3%")
        
    },
    getStartedtext:{
        textAlign:"center",
        fontFamily:"outfit-medium",
        fontSize:hp("2%")
    },
    container:{
        backgroundColor:"white",
        height:"100%"
    }
})