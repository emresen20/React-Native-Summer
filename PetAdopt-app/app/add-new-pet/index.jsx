import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import {Picker} from '@react-native-picker/picker';

const AddNewPet = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState();
  const [gender,setGender]=useState()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add New Pet"
    })
  }, [])

  const handleInputChange = (fieldName, fieldValue) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.addnewText}>Add New Pet For Adption</Text>
      <View style={styles.imageview}>
        <Image
          source={require("../../assets/images/paws.png")}
          style={styles.pawimage}
        />
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Pet Name*</Text>
        <TextInput style={styles.input} onChangeText={
          (value) => handleInputChange('name', value)
        } />
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Breed *</Text>
        <TextInput style={styles.input} onChangeText={
          (value) => handleInputChange('breed', value)
        } />
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Age *</Text>
        <TextInput style={styles.input} onChangeText={
          (value) => handleInputChange('age', value)
        } />
      </View>

      <Picker
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) =>
          setGender(itemValue)
        }>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>

      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Weight *</Text>
        <TextInput style={styles.input} onChangeText={
          (value) => handleInputChange('weight', value)
        } />
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Address *</Text>
        <TextInput style={styles.input} onChangeText={
          (value) => handleInputChange('adress', value)
        } />
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.label}>About *</Text>
        <TextInput
          style={styles.input}
          numberOfLines={5}
          multiline={true}
          onChangeText={
            (value) => handleInputChange('about', value)
          } />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.sumbitText}>
          Sumbit
        </Text>
      </TouchableOpacity>
      <View style={{ padding: 20 }}></View>

    </ScrollView>
  )
}

export default AddNewPet

const styles = StyleSheet.create({
  container: {
    padding: hp('2.5%'),
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
  },
  inputcontainer: {
    marginVertical: hp('1.5%')
  },
  input: {
    padding: hp('1.4%'),
    backgroundColor: "white",
    borderRadius: 15,
    fontFamily: "outfit"
  },
  label: {
    marginVertical: hp('0.7%'),
    fontFamily: "outfit",

  },
  button: {
    padding: hp('2%'),
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    marginVertical: hp('1%')
  },
  sumbitText: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    fontSize: hp('2%'),
    color: "white"
  }
})