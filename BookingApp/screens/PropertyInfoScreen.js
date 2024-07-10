import { Pressable, ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { pixelNormalize } from '../components/Normalize'

const PropertyInfoScreen = () => {
    const route = useRoute()
    const navigation=useNavigation();
  

    useLayoutEffect(() => {
        navigation.setOptions({
            headershown: true,
            title: `${route.params.name}`,
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
    });
  return (
    <View >
        <ScrollView >
            <Pressable style={{flexDirection:"row",margin:8,flexWrap:"wrap",marginBottom:50,}}>
            {route.params.photos.slice(0, 5).map((photo) => (
              <View style={{ margin:5}}>
                <Image
                  style={{
                    width: 110,
                    height: pixelNormalize(70),
                    borderRadius: pixelNormalize(3),
                  }}
                  source={{ uri: photo.image }}
                />
              </View>
            ))}
            <Pressable style={{justifyContent:"center",alignItems:"center"}}>
                <Text style={{alignSelf:"center",marginLeft:20}}>Show More</Text>
            </Pressable>
            </Pressable>
            <View style={{marginHorizontal:12}}> 
                <View>
                    <Text>
                        {route.params.name}
                    </Text>
                </View>
            </View>
        </ScrollView>
      
    </View>
  )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})