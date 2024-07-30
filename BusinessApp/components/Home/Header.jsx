import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import {Colors} from "./../../constants/Colors"
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
    const { user } = useUser();
    return (
        <View style={styles.containertop}>
            <View style={styles.userContainer}>
                <Image
                    style={styles.userimage}
                    source={{ uri: user?.imageUrl }} />

                <View>
                    <Text style={{color:"white"}}>Welcome,</Text>
                    <Text style={styles.fullnametext}>{user?.fullName}</Text>
                </View>
            </View>
            {/* {serachbar} */}
            <View style={styles.searchbarview}>
            <AntDesign name="search1" size={24} color={Colors.PRIMARY}/>
            <TextInput placeholder='Search...'  style={{fontFamily:"outfit",fontSize:16}}/>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    userimage: {
        width: 45,
        height: 45,
        borderRadius: 999
    },
    containertop: {
        padding: 20,
        paddingTop: 40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    userContainer: {
        flexDirection: "row",
        display: "flex",
        alignItems:"center",
        gap:10
    },
    fullnametext:{
        fontSize:18,
        fontFamily:"outfit-medium",
        color:"white"
    },
    searchbarview:{
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        backgroundColor:"white",
        padding:10,
        marginVertical:10,
        marginTop:16,
        borderRadius:8
    }
})