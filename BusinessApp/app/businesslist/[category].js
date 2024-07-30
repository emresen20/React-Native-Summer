import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'

const BusinesssListByCategory = () => {

    const navigation=useNavigation();

    const {category}=useLocalSearchParams() // [category] ile aynı adda olma

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:category
        })
    },[])
  return (
    <View>
      <Text>
        {category}
        </Text>
    </View>
  )
}

export default BusinesssListByCategory

const styles = StyleSheet.create({})