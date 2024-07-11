import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const UserScreen = () => {
    const route = useRoute()
    console.log(route.params)
    const navigation=useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headershown: true,
            title: "Avaiable Rooms",
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white"

            },
            headerStyle: {
                backgroundColor: "#003580",
                height: 110,

            },

        })
    }, []);
  return (
    <View>
      <Text>UserScreen</Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({})