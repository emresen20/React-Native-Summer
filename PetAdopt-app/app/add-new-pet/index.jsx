import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';

const AddNewPet = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState();
  const [gender, setGender] = useState()
  const [selectedCategory,setSelectedCategory]=useState()
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add New Pet"
    })
    GetCategories()
  }, [])

  //take categories from db
  
  const GetCategories = async () => {
    try {
      setCategoryList([]); 
      const snapShot = await getDocs(collection(db, "Category"));
      const categories = [];
      snapShot.forEach((doc) => {
        categories.push(doc.data()); 
      });
      setCategoryList(categories); 
    } catch (error) {
      console.error("Error fetching categories: ", error); 
    }
  }

  const handleInputChange = (fieldName, fieldValue) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  const onSumbit=()=>{
    console.log(formData)
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
        <Text style={styles.label}> Pet Category *</Text>
        <Picker
          selectedValue={selectedCategory}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>{
            setSelectedCategory(itemValue),
            handleInputChange('category',itemValue)
          
          }
          }>
            {
              categoryList.map((category,index)=>(
                <Picker.Item label={category.name} value={category.name} key={index}/>
              ))
            }
            
         
        </Picker>
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

      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Gender *</Text>
        <Picker
          selectedValue={gender}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>{
            setGender(itemValue),
            handleInputChange('sex',itemValue)
          
          }
          }>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>


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
      <TouchableOpacity 
        onPress={onSumbit}
        style={styles.button}>
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
    fontSize: hp('2.3%'),
    color:Colors.PRIMARY
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
    borderColor: Colors.PRIMARY
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
    color:Colors.PRIMARY

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