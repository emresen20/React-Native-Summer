import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const WorkOutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <>

      <ScrollView style={{ backgroundColor: "white" }} showsVerticalScrollIndicator={false}>
        <Image style={{ width: "100%", height: 170 }} source={{ uri: route.params.image }} />
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 45, left: 15 }}
          name="arrow-back"
          size={24}
          color="white" />
        {route.params.excersises.map((item, index) => (
          <Pressable
            style={{
              margin: 10,
              flexDirection: "row",
              alignItems: "center"
            }}
            key={index}>
            <Image style={{ width: 120, height: 90 }} source={{ uri: item.image }} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 3, fontSize: 14, color: "gray" }}>
                X{item.sets}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <Pressable 
        style={{
          backgroundColor:"blue",
          padding:15,
          marginLeft:"auto",
          marginRight:"auto",
          marginVertical:20,
          borderRadius:5,
          width:100
        }}>   
        <Text 
          style={{
            textAlign:"center",
            color:"white",
            fontSize:15,
            fontWeight:"bold"
            }}>
          START
          </Text>

      </Pressable>
    </>
  )
}

export default WorkOutScreen

const styles = StyleSheet.create({})