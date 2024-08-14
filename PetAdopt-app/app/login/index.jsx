import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../constants/Colors"
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'


export const useWarmUpBrowser = () => {
    React.useEffect(() => {
        // Warm up the android browser to improve UX
        // https://docs.expo.dev/guides/authentication/#improving-user-experience
        void WebBrowser.warmUpAsync()
        return () => {
            void WebBrowser.coolDownAsync()
        }
    }, [])
}

WebBrowser.maybeCompleteAuthSession()


const LoginScreen = () => {
    useWarmUpBrowser()
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

    const onPress = useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
            redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
          })
    
          if (createdSessionId) {
            
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error('OAuth error', err)
        }
      }, [])


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
                <Pressable 
                    onPress={onPress}
                    style={styles.buttonstarted}>
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
        padding: hp("2%"),
        marginTop: hp("10%"),
        backgroundColor: Colors.PRIMARY,
        width: "100%",
        borderRadius: hp("3%")

    },
    getStartedtext: {
        textAlign: "center",
        fontFamily: "outfit-medium",
        fontSize: hp("2%")
    },
    container: {
        backgroundColor: "white",
        height: "100%"
    }
})