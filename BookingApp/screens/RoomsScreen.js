import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const RoomsScreen = () => {
    const route = useRoute();
    console.log(route.params)
  return (
    <View>
      <Text>RoomsScreen</Text>
    </View>
  )
}

export default RoomsScreen

const styles = StyleSheet.create({})