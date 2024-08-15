import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import PetAbout from '../../components/PetDetails/PetAbout';
import PetOwner from '../../components/PetDetails/PetOwner';

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
        <PetOwner pet={pet}/>
        <View style={{height:hp('8%')}}></View>

      </ScrollView>
      {/* Adopt me */}

    </View>
  )
}

export default PetDetails

const styles = StyleSheet.create({})