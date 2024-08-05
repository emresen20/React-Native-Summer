import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import { useUser } from '@clerk/clerk-expo';

const Intro = ({ business }) => {
    const router = useRouter();
    const { user } = useUser();
    console.log("businmess",business)

    const onDelete = () => {
        Alert.alert("Do you want to delete", "Do you really want to Delete this businesss?", [
            {
                text: "Cancel",
                style: 'cancel'
            },
            {
                text: 'Delete',
                style: "destructive",
                onPress: () => deleteBusiness()
            }
        ])
    }

    const deleteBusiness = async () => {
        console.log("Deleted")
        await deleteDoc(doc(db, 'BusinessList', business?.id));
        router.push("home");
        ToastAndroid.show("Business Deleted", ToastAndroid.BOTTOM)
    }

    return (
        <SafeAreaView>
            <View style={styles.iconview}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={40} color={Colors.PRIMARY} />

                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="heart-outline" size={40} color={Colors.PRIMARY} />
                </TouchableOpacity>


            </View>
            <Image
                source={{ uri: business?.imageUrl }}
                style={{
                    width: '100%',
                    height: 350,
                    resizeMode: "contain"
                }}

            />
            <View style={styles.nameandtrashview}>
                <View>
                    <Text style={styles.businessnameText}>{business.name}</Text>
                    <Text style={styles.businessadressText}>{business.adres}</Text>
                </View>
                {user?.primaryEmailAddress.emailAddress === business?.userEmail &&
                    <TouchableOpacity
                        onPress={() => onDelete()}
                        style={{ justifyContent: "center" }}>
                        <MaterialIcons name="delete" size={30} color={Colors.PRIMARY} />
                    </TouchableOpacity>

                }


            </View>
        </SafeAreaView>
    )
}

export default Intro

const styles = StyleSheet.create({
    iconview: {
        position: "absolute",
        zIndex: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        display: "flex",
        width: '100%',
        padding: 19
    },
    businessnameText: {
        fontFamily: "outfit-bold",
        fontSize: 24
    },
    businessadressText: {
        fontFamily: "outfit",
        fontSize: 16,
        color: Colors.GRAY
    },
    nameandtrashview: {
        padding: 20,
        marginTop: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white"
    }
})