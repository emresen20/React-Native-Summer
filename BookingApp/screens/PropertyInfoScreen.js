import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'

const PropertyInfoScreen = () => {
    const route = useRoute()
    console.log(route.params)
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})