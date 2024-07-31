import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({business}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{fontFamily:"outfit-bold",fontSize:20}}>About</Text>
      <Text style={{fontFamily:"outfit",lineHeight:20}}>{business.about}</Text>
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:"white",
        height:'100%'
    }
})