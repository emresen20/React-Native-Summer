import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserInfo from '../../components/Profile/UserInfo'
import { Colors } from '../../constants/Colors'
import MenuList from '../../components/Profile/MenuList'

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profiletext}>
        Profile
        </Text>

        {/* UserInfo */}
        <UserInfo/>

        {/* MenuList */}
        
        <MenuList/>


    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container:{
    padding:20,
    marginTop:4
  },
  profiletext:{
    fontFamily:"outfit-bold",
    fontSize:30,
    color:Colors.PRIMARY
  }
})