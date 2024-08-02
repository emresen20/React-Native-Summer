import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserInfo from '../../components/Profile/UserInfo'

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profiletext}>
        Profile
        </Text>
        <UserInfo/>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container:{
    padding:20,
  },
  profiletext:{
    fontFamily:"outfit-bold",
    fontSize:35
  }
})