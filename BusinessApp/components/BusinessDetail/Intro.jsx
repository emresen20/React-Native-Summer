import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

const Intro = ({ business }) => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View style={styles.iconview}>
                <TouchableOpacity onPress={()=>router.back()}>
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
                    resizeMode:"contain"
                }}

            />
            <View style={{padding:20,marginTop:-20,backgroundColor:"white",borderTopLeftRadius:25,borderTopRightRadius:25}}>
                <Text style={styles.businessnameText}>{business.name}</Text>
                <Text style={styles.businessadressText}>{business.adres}</Text>
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
    businessnameText:{
        fontFamily:"outfit-bold",
        fontSize:24
    },
    businessadressText:{
        fontFamily:"outfit",
        fontSize:16,
        color:Colors.GRAY
    }
})