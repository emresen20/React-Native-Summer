import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const Intro = ({ business }) => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View style={styles.iconview}>
                <TouchableOpacity onPress={()=>router.back()}>
                    <Ionicons name="arrow-back" size={40} color="black" />

                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="heart-outline" size={40} color="black" />
                </TouchableOpacity>


            </View>
            <Image
                source={{ uri: business?.imageUrl }}
                style={{
                    width: '100%',
                    height: 400,
                    resizeMode:"contain"
                }}

            />
            <View>
                <Text>{business.name}</Text>
                <Text>{business.adres}</Text>
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
        padding: 18
    }
})