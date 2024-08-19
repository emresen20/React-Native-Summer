import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';

const AddNewPet = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add New Pet"
    })
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.addnewText}>Add New Pet for adption</Text>
      <View style={styles.imageview}>
        <Image
          source={require("../../assets/images/paws.png")}
          style={styles.pawimage}
        />
      </View>
      <View>
        <Text>Pet Name*</Text>
        <TextInput/>
      </View>

    </View>
  )
}

export default AddNewPet

const styles = StyleSheet.create({
  container: {
    padding: hp('2.5%')
  },
  addnewText: {
    fontFamily: "outfit-medium",
    fontSize: hp('2.3%')
  },
  pawimage: {
    width: hp('8%'),
    height: hp('8s%'),
    borderRadius: 15,


  },
  imageview: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: hp('12%'),
    borderRadius: 15,
    height: hp('12%'),
    borderColor: Colors.GRAY
  }
})