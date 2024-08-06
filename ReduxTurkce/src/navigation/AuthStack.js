import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screnns/LoginScreen'
import SignUpScreen from '../screnns/SignUpScreen'

const AuthStack = () => {
    const Stack=createNativeStackNavigator()

  return (
    <Stack.Navigator
    initialRouteName='LoginScreen'
      screenOptions={{headerShown:false}}
    >
        <Stack.Screen  name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})