import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
        <Header/>
      {/* Slider */}


      {/* Category */}

      {/* Last Of Pets */}

      {/* Add New Pet Option */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    padding:hp("3%"),
    marginTop:hp("2.9%")
  }
})