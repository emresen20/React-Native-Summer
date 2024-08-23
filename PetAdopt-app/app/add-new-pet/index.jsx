import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Pressable, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import { collection, doc, getDocs, setDoc, } from 'firebase/firestore';
import { db, storage } from '../../config/FirebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useUser } from '@clerk/clerk-expo';


const AddNewPet = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    category: "Dogs",
    sex: "Male"
  });


  const [gender, setGender] = useState()
  const [selectedCategory, setSelectedCategory] = useState()
  const [categoryList, setCategoryList] = useState([])
  const [image, setImage] = useState()
  const { user } = useUser();
  const [loader, setLoader] = useState(false)
  const router=useRouter();

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

  const onSumbit = () => {
    // object keys arrayin ana başlıklarını döndürür length ile kaç tane olduğunu döndürür.
    if (Object.keys(formData).length != 8) {
      ToastAndroid.show("Please Enter All Details", ToastAndroid.BOTTOM)
      return null;
    }
    setLoader(true)
    UploadImage();

  }

  // used to image picker from gallery

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // use to upload pet ımage to firebase storage (to server)
  const UploadImage = async () => {
    const resp = await fetch(image);
    const blobImage = await resp.blob();
    const storageRef = ref(storage, '/PetAdopt/' + Date.now() + '.jpg')

    uploadBytes(storageRef, blobImage).then((snapShot) => {
      console.log("file Uploaded")
    }).then(resp => {
      getDownloadURL(storageRef).then(async (downloadUrl) => {
        console.log(downloadUrl)
        SaveFormData(downloadUrl)
      })
    })
  }

  const SaveFormData = async (imageUrl) => {
    const docId = Date.now().toString();
    await setDoc(doc(db, 'Pets', docId), {
      ...formData,
      imageUrl: imageUrl,
      username: user?.fullName,
      email: user?.primaryEmailAddress.emailAddress,
      id: docId,
      userImage: user?.imageUrl
    })
    setLoader(false)
    router.replace('/(tabs)/home')

  }



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.addnewText}>Add New Pet For Adption</Text>
      <Pressable
        onPress={pickImage}
      >

        {!image ?
          <Image
            source={require("../../assets/images/paws.png")}
            style={styles.pawimage}
          /> :
          <Image
            source={{ uri: image }}
            style={styles.pawimage}
          />
        }

      </Pressable>

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
          onValueChange={(itemValue, itemIndex) => {
            setSelectedCategory(itemValue),
              handleInputChange('category', itemValue)

          }
          }>
          {
            categoryList.map((category, index) => (
              <Picker.Item label={category.name} value={category.name} key={index} />
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
        <TextInput style={styles.input}
          keyboardType='numeric'
          onChangeText={
            (value) => handleInputChange('age', value)
          }
        />
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Gender *</Text>
        <Picker
          selectedValue={gender}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => {
            setGender(itemValue),
              handleInputChange('sex', itemValue)

          }
          }>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>


      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Weight *</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input} onChangeText={
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
        disabled={loader}
        onPress={onSumbit}
        style={styles.button}>
        {loader ?
          <ActivityIndicator size={"large"} /> :
          <Text style={styles.sumbitText}>
            Sumbit
          </Text>
        }

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
    color: Colors.PRIMARY
  },
  pawimage: {
    width: hp('10%'),
    height: hp('10%'),
    borderRadius: 15,
    borderWidth: 1,
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
    color: Colors.PRIMARY

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