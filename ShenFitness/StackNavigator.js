import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WorkOutScreen from './screens/WorkOutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
                <Stack.Screen name="WorkOutScreen" component={WorkOutScreen} options={{headerShown:false}} />
                <Stack.Screen name="FitScreen" component={FitScreen} options={{headerShown:false}} />
                <Stack.Screen name="RestScreen" component={RestScreen} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})