import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import fitness from '../data/fitness'

const FitnessCards = () => {
    const FitnessData=fitness;
  return (
    <View>
      {FitnessData.map((item,key)=>(
        <Pressable 
            style={{
                alignItems:"center",
                justifyContent:"center",
                margin:10
            }} 
            key={key}>
            <Image  style={{width:"90%",height:140,borderRadius:7}} source={{uri:item.image}}/>
        </Pressable>
      ))}
    </View>
  )
}

export default FitnessCards

const styles = StyleSheet.create({})