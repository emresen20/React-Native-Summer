import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import * as WebBrowser from "expo-web-browser"
import {useWarmUpBrowser} from "../hooks/useWarmUpBrowser"
import { useOAuth } from '@clerk/clerk-expo'

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    useWarmUpBrowser();

    const {startOAuthFlow} = useOAuth({strategy:"oauth_google"});

    const onPress = React.useCallback(async()=>{
        try{
            const {createdSessionId, signIn,signUp,setActive}=
            await startOAuthFlow();

            if(createdSessionId){
                setActive({session: createdSessionId});
            }else{
                //use signin or signuğ
            }
        }catch (err){
            console.error("OAuth error",err)
        }
    },[])

    return (
        <View>

            <View
                style={styles.imageview}>
                <Image
                    style={styles.imagephoto}
                    source={require("./../assets/images/login.png")} />
            </View>
            <View style={styles.underview}>
                <Text style={styles.bigtext}>Your Ultimate <Text style={{color:Colors.PRIMARY}}>
                    Community Business Directory</Text> App</Text>
                    <Text style={styles.graytext}>
                        Find your favorite business near your and post your own business to your community
                    </Text>
                    <TouchableOpacity 
                        onPress={onPress}
                        style={styles.buttonstarted}>
                        <Text style={styles.buttontext}>
                            Let's Get Started
                        </Text>
                    </TouchableOpacity>
            </View>


        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    imageview:{
        display: "flex",
        alignItems: "center",
        marginTop: 90,
    },
    imagephoto:{
        width: 220,
        height: 450,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "black"
    },
    underview:{
        backgroundColor: "#fff",
        padding:20,
        marginTop:-18
    },
    bigtext:{
        fontSize:25,
        fontFamily:'outfit-bold',
        textAlign:"center"
    },
    graytext:{
        fontSize:15,
        fontFamily:"outfit",
        textAlign:"center",
        marginVertical:13,
        color:Colors.GRAY
    },
    buttonstarted:{
        alignItems:"center",
        backgroundColor:Colors.PRIMARY,
        padding:10,
        borderRadius:99,
        marginTop:20
    },
    buttontext:{
        textAlign:"center",
        color:"#fff",
        fontFamily:'outfit'
    }

})