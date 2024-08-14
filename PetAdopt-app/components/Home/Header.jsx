import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useUser } from '@clerk/clerk-expo';

const Header = () => {
    const {user}=useUser()
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcometext}>Welcome,</Text>
        <Text style={styles.usernametext}>{user?.fullName}</Text>
      </View>
      <Image source={{uri:user?.imageUrl}} style={styles.imageprofile}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    imageprofile:{
        width:hp("6%"),
        height:hp("6%"),
        borderRadius:999999
    },
    welcometext:{
        fontFamily:"outfit",
        fontSize:hp("1.8%")
    },
    usernametext:{
        fontFamily:"outfit-medium",
        fontSize:hp("2.5%")
    }
})