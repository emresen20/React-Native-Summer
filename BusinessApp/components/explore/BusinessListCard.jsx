import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const BusinessListCard = ({business}) => {
    const router = useRouter();
  return (
    <TouchableOpacity 
    onPress={()=> router.push("/businessdetail/"+business.id)}
    style={styles.container}>
      <Image 
      source={{uri:business?.imageUrl}}
      style={styles.imagestyle}
      />
      <View style={styles.infotexts}>
        <Text style={styles.nametext}>{business?.name}</Text>
        <Text style={styles.adrestext}>{business?.adres}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BusinessListCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        marginTop:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        
    },
    imagestyle:{
        width:'100%',
        height:100,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        resizeMode:"stretch"
    },
    infotexts:{
        padding:10
    },
    nametext:{
        fontFamily:"outfit-bold",
        fontSize:20,

    },
    adrestext:{
        fontFamily:"outfit",
        color:Colors.GRAY
    }
})