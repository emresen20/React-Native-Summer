import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors';

const UserInfo = () => {
    const {user}=useUser();

  return (
    <View style={styles.container}>
      <Image 
      source={{uri:user?.imageUrl}}
      style={styles.profileimage}
      />
      <Text style={styles.nametext}>{user?.fullName}</Text>
      <Text style={styles.emailtext}>{user?.primaryEmailAddress?.emailAddress}</Text>
    </View>
  )
}

export default UserInfo

const styles = StyleSheet.create({
    profileimage:{
        width:100,
        height:100,
        borderRadius:9999
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:25

    },
    nametext:{
        fontFamily:"outfit-bold",
        fontSize:20,
        color:Colors.PRIMARY
    },
    emailtext:{
        fontFamily:"outfit",
        fontSize:15,
        color:Colors.ICON_BG
    }
})