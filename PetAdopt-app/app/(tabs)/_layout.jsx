import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constants/Colors';

const TabLoyout = () => {

  return (
    <Tabs  screenOptions={{
      tabBarActiveTintColor:Colors.PRIMARY, // Seçili olan sekmenin simge rengi
      tabBarInactiveTintColor: 'gray', // Seçili olmayan sekmelerin simge rengi
    }}>
      <Tabs.Screen name='home'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) =>
            <Ionicons name="home" size={24} color={color} />

        }}
      />
      <Tabs.Screen
        name='favorite'
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ color }) =>
            <Ionicons name="heart" size={24} color={color} />

        }}

      />
      <Tabs.Screen name='inbox'
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ color }) =>
            <Ionicons name="chatbox" size={24} color={color}/>

        }} />
      <Tabs.Screen
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ color }) =>
            <Ionicons name="person" size={24} color={color} />

        }}
        name='profile' />
    </Tabs>
  )
}

export default TabLoyout

const styles = StyleSheet.create({})