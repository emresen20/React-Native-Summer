import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const PetDetails = () => {
   const pet=useLocalSearchParams() // coming from pet listiem router 
   
  
  return (
    <View>
      <Text>{pet.name}</Text>
    </View>
  )
}

export default PetDetails

const styles = StyleSheet.create({})