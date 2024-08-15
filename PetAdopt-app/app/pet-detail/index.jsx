import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import PetAbout from '../../components/PetDetails/PetAbout';
import PetOwner from '../../components/PetDetails/PetOwner';
import Colors from '../../constants/Colors';

const PetDetails = () => {
  const pet = useLocalSearchParams() // coming from pet listiem router 
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: ''
    })
  }, [])

  return (
    <View>
      {/* pet Info */}
      <ScrollView>
        <PetInfo pet={pet} />
        {/* Pet Properties */}
        <PetSubInfo pet={pet} />

        {/* About  */}
        <PetAbout pet={pet} />

        {/* Pet Owner */}
        <PetOwner pet={pet} />

        <View style={{ height: hp('8%') }}></View>

      </ScrollView>

      {/* Adopt me button */}
      <View style={styles.buttomcontainer}>
        <TouchableOpacity style={styles.adoptButton}>
          <Text style={styles.adopttext}>Adopt Me</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default PetDetails

const styles = StyleSheet.create({
  adoptButton: {
    padding: hp('2%'),
    backgroundColor: Colors.PRIMARY
  },
  buttomcontainer: {
    position:"absolute",
    width:'100%',
    bottom:hp('0%')

  },
  adopttext: {
    textAlign: "center",
    fontFamily: "outfit-medium",
    fontSize: hp("2%")
  }
})