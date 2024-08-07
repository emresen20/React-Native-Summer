import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';

const HomeScreen = () => {
  const {isLoading,user}= useSelector((state)=>state.user)
  console.log(user)
  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center",
      backgroundColor:"red"
    }}>
      <Text>HomeScreenss</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})