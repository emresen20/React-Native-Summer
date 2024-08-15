import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Slider from '../../components/Home/Slider';
import PetListByCategory from '../../components/Home/PetListByCategory';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
        <Header/>
      {/* Slider */}
        <Slider/>

      {/* Last Of Pets +Category */}
      <PetListByCategory/>

      {/* Add New Pet Option */}
      <TouchableOpacity 
      
      style={styles.addbutton}>
        <Text style={styles.addText}>Add New Pet</Text>
        <MaterialIcons name="pets" size={24} color={Colors.PRIMARY} />
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    padding:hp("3%"),
    marginTop:hp("2.9%")
  },
  addbutton:{
    flexDirection:"row",
    gap:hp("3%"),
    alignItems:"center",
    padding:hp("2%"),
    marginTop:hp("1%"),
    backgroundColor:Colors.Second,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:15,
    borderStyle:"dashed",
    justifyContent:"center"
  },
  addText:{
    fontFamily:"outfit-medium",
    color:Colors.PRIMARY,
    fontSize:hp("2%")
  }
})