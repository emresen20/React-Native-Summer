import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';

const AddBusinesss = () => {

    const navigation = useNavigation();


    

    const [imageUri, setImageUri] = useState(null);
    const [categoryList,setCategoryList]=useState([])
    const [name,setName]=useState();
    const [adress,setAdress]=useState();
    const [contact,setContact]=useState();
    const [website,setWebsite]=useState();
    const [about,setAbout]=useState();
    const [category,setCategory]=useState()


    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Add New Business",
            headerShown: true
        })
        GetCategoryList();
    },[])

    const GetCategoryList=async()=>{
        setCategoryList([])
        const q=query(collection(db,"Category"));
        const snapShot=await getDocs(q);

        snapShot.forEach((doc)=>{
            console.log("categoriler",doc.data());
            setCategoryList(prev=>[...prev,{
                label:(doc.data()).name,
                value:(doc.data()).name
            }])
        })
    }

    const onImagePick = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            //aspect: [4, 3],
            quality: 1,
        });
        setImageUri(result?.assets[0].uri)
        console.log("result", result)
    }

    const onAddNewBusiness=()=>{
        con
    }



   
    return (
        <View style={styles.container}>
            <Text style={styles.textbusiness}>Add New Businesss</Text>
            <Text style={styles.textfill}>Fill all details in order to add new business</Text>
            <TouchableOpacity
                style={{ marginTop: 20 }}
                onPress={() => onImagePick()}

            >
                {!imageUri ?
                    <Image
                        source={require("../../assets/images/placeholder.png")}
                        style={styles.imagecamera}
                    /> :
                    <Image
                        source={{ uri: imageUri }}
                        style={styles.imagecamera2}
                    />
                }

            </TouchableOpacity>

            <View>
                <TextInput
                    placeholder='Name'
                    onChangeText={(v)=>setName(v)}
                    placeholderTextColor={Colors.ICON_BG}
                    style={{
                        padding: 8,
                        borderWidth: 1,
                        borderRadius: 5,
                        fontSize: 17,
                        backgroundColor: "white",
                        marginTop: 10,
                        borderColor: Colors.PRIMARY,
                        fontFamily: "outfit-bold",
                        color: "red"

                    }}
                />
                <TextInput
                    placeholder='Adress'
                    onChangeText={(v)=>setAdress(v)}
                    placeholderTextColor={Colors.ICON_BG}
                    style={{
                        padding: 8,
                        borderWidth: 1,
                        borderRadius: 5,
                        fontSize: 17,
                        backgroundColor: "white",
                        marginTop: 10,
                        borderColor: Colors.PRIMARY,
                        fontFamily: "outfit-bold",
                        color: "red"

                    }}
                />
                <TextInput
                    placeholder='Contact'
                    onChangeText={(v)=>setContact(v)}
                    placeholderTextColor={Colors.ICON_BG}
                    style={{
                        padding: 8,
                        borderWidth: 1,
                        borderRadius: 5,
                        fontSize: 17,
                        backgroundColor: "white",
                        marginTop: 10,
                        borderColor: Colors.PRIMARY,
                        fontFamily: "outfit-bold",
                        color: "red"

                    }}
                />
                <TextInput
                    placeholder='Website'
                    onChangeText={(v)=>setWebsite(v)}
                    placeholderTextColor={Colors.ICON_BG}
                    style={{
                        padding: 8,
                        borderWidth: 1,
                        borderRadius: 5,
                        fontSize: 17,
                        backgroundColor: "white",
                        marginTop: 10,
                        borderColor: Colors.PRIMARY,
                        fontFamily: "outfit-bold",
                        color: "red"

                    }}
                />
                <TextInput
                    placeholder='About'
                    onChangeText={(v)=>setAbout(v)}
                    multiline
                    numberOfLines={5}
                    placeholderTextColor={Colors.ICON_BG}
                    style={{
                        padding: 8,
                        borderWidth: 1,
                        borderRadius: 5,
                        fontSize: 17,
                        backgroundColor: "white",
                        marginTop: 10,
                        borderColor: Colors.PRIMARY,
                        fontFamily: "outfit-bold",
                        color: "red",
                        height: 100

                    }}
                />
            </View>

            <View style={styles.imagePickerView}>
                <RNPickerSelect
                    style={styles.rnpickerstyle}
                    onValueChange={(value) => setCategory(value)}
                    items={categoryList}
                />
            </View>
            <TouchableOpacity style={styles.buttonstyle}>
                <Text style={{
                    textAlign:"center",
                    fontFamily:"outfit-medium",
                    color:"white"
                }}>
                    Add New Business
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddBusinesss

const styles = StyleSheet.create({
    textbusiness: {
        fontFamily: "outfit-bold",
        fontSize: 25,
        color: Colors.PRIMARY
    },
    container: {
        padding: 20
    },
    textfill: {
        fontFamily: "outfit",
        color: Colors.ICON_BG
    },
    imagecamera: {
        width: 100,
        height: 100
    },
    imagecamera2: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    imagePickerView:{
        marginTop:10,
        borderWidth:1,
        backgroundColor:"white",
        borderColor:Colors.PRIMARY
    },
    rnpickerstyle:{
        fontFamily:"outfit-bold",
        inputAndroid:{
            color:Colors.ICON_BG,
            fontFamily:"outfit-bold"
            
        },
        inputIOS:{
            color:Colors.ICON_BG,
            fontFamily: 'outfit-bold'
        }
    },
    buttonstyle:{
        padding:13,
        backgroundColor:Colors.PRIMARY,
        borderRadius:5,
        marginTop:20


    }
})