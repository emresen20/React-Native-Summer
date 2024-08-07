import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db, storage } from '../../config/FirebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useUser } from '@clerk/clerk-expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const AddBusinesss = () => {

    const navigation = useNavigation();



    const { user } = useUser();
    const [imageUri, setImageUri] = useState(null);
    const [categoryList, setCategoryList] = useState([])
    const [name, setName] = useState();
    const [adress, setAdress] = useState();
    const [contact, setContact] = useState();
    const [website, setWebsite] = useState();
    const [about, setAbout] = useState();
    const [category, setCategory] = useState()
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Add New Business",
            headerShown: true
        })
        GetCategoryList();
    }, [])

    const GetCategoryList = async () => {
        setCategoryList([])
        const q = query(collection(db, "Category"));
        const snapShot = await getDocs(q);

        snapShot.forEach((doc) => {
            console.log("categoriler", doc.data());
            setCategoryList(prev => [...prev, {
                label: (doc.data()).name,
                value: (doc.data()).name
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

    const onAddNewBusiness = async () => {
        setLoading(true);

        try {
            const fileName = Date.now().toString() + ".jpg";
            const resp = await fetch(imageUri);
            const blob = await resp.blob();

            const imageRef = ref(storage, "business/" + fileName);

            await uploadBytes(imageRef, blob);
            console.log("File Uploaded...");

            const downloadUrl = await getDownloadURL(imageRef);
            console.log(downloadUrl);
            await saveBusinessDetail(downloadUrl);

            ToastAndroid.show("New Business Added", ToastAndroid.LONG);
        } catch (error) {
            console.log("Error uploading file or saving business details:", error);
            ToastAndroid.show("Failed to add business", ToastAndroid.LONG);
        } finally {
            setLoading(false);
        }
    }


    const saveBusinessDetail = async (imageurl) => {
        await setDoc(doc(db, "BusinessList", Date.now().toString()), {
            name: name,
            adress: adress,
            contact: contact,
            website: website,
            category: category,
            about: about,
            username: user?.fullName,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            userImage: user?.imageUrl,
            imageUrl: imageurl
        })
        setLoading(false)
        ToastAndroid.show("new Business", ToastAndroid.LONG)

    }



    return (
        <KeyboardAwareScrollView>
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
                        onChangeText={(v) => setName(v)}
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
                            color:Colors.PRIMARY

                        }}
                    />
                    <TextInput
                        placeholder='Adress'
                        onChangeText={(v) => setAdress(v)}
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
                            color:Colors.PRIMARY

                        }}
                    />
                    <TextInput
                        placeholder='Contact'
                        onChangeText={(v) => setContact(v)}
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
                            color:Colors.PRIMARY

                        }}
                    />
                    <TextInput
                        placeholder='Website'
                        onChangeText={(v) => setWebsite(v)}
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
                            color:Colors.PRIMARY

                        }}
                    />
                    <TextInput
                        placeholder='About'
                        onChangeText={(v) => setAbout(v)}
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
                            color:Colors.PRIMARY,
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
                <TouchableOpacity

                    onPress={() => onAddNewBusiness()}
                    disabled={loading}
                    style={styles.buttonstyle}>

                    {loading ?
                        <ActivityIndicator size={'large'} color={"white"} /> :
                        <Text style={{
                            textAlign: "center",
                            fontFamily: "outfit-medium",
                            color: "white"
                        }}>
                            Add New Business
                        </Text>
                    }

                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
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
    imagePickerView: {
        marginTop: 10,
        borderWidth: 1,
        backgroundColor: "white",
        borderColor: Colors.PRIMARY
    },
    rnpickerstyle: {
        fontFamily: "outfit-bold",
        inputAndroid: {
            color: Colors.ICON_BG,
            fontFamily: "outfit-bold"

        },
        inputIOS: {
            color: Colors.ICON_BG,
            fontFamily: 'outfit-bold'
        }
    },
    buttonstyle: {
        padding: 13,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 5,
        marginTop: 20


    }
})