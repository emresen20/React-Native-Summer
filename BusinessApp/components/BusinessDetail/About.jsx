import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Reviews from './Reviews'

const About = ({business}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily:"outfit-bold",fontSize:20}}>About</Text>
      <Text style={{fontFamily:"outfit",lineHeight:20}}>{business.about}</Text>
     
    </View>
    
  )
}

export default About

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:"white",
        
    }
})