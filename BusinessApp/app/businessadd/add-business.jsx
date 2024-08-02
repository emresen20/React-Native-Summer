import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';

const AddBusinesss = () => {
    const navigation = useNavigation();

    const [imageUri,setImageUri]=useState(null);
    console.log("imageurl",imageUri)

    const onImagePick=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            //aspect: [4, 3],
            quality: 1,
          });
          setImageUri(result?.assets[0].uri)
          console.log("result",result)
    }


    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Add New Business",
            headerShown: true
        })
    })
    return (
        <View style={styles.container}>
            <Text style={styles.textbusiness}>Add New Businesss</Text>
            <Text style={styles.textfill}>Fill all details in order to add new business</Text>
            <TouchableOpacity 
                style={{marginTop:20}}
                onPress={()=>onImagePick()}
                
                >
                    {!imageUri?
                      <Image
                      source={require("../../assets/images/placeholder.png")}
                      style={styles.imagecamera}
                  />:
                  <Image
                  source={{uri:imageUri}}
                  style={styles.imagecamera2}
              />
                }
              
            </TouchableOpacity>

        </View>
    )
}

export default AddBusinesss

const styles = StyleSheet.create({
    textbusiness: {
        fontFamily: "outfit-bold",
        fontSize: 25
    },
    container: {
        padding: 20
    },
    textfill: {
        fontFamily: "outfit",
        color: Colors.GRAY
    },
    imagecamera: {
        width: 100,
        height: 100
    },
    imagecamera2:{
        width: 100,
        height: 100,
        borderRadius:15
    }
})