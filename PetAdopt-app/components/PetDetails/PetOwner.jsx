import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const PetOwner = ({ pet }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imagetotalcontainer}>
                <Image
                    style={styles.userimage}
                    source={{ uri: pet?.userImage }} />
                <View>
                    <Text style={styles.usernameText}>{pet?.username}</Text>
                    <Text style={styles.petownerText}>Pet Owner</Text>
                </View>
            </View>
            <Ionicons name="send" size={24} color={Colors.PRIMARY} />



        </View>
    )
}

export default PetOwner

const styles = StyleSheet.create({
    userimage: {
        width: hp("7%"),
        height: hp('7%'),
        borderRadius: 999
    },
    container: {
        paddingHorizontal: hp('2.7%'),
        flexDirection: "row",
        alignItems: "center",
        gap: hp('1.8%'),
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal: hp('2%'),
        padding: hp('1.1%'),
        backgroundColor: "white",
        justifyContent:"space-between",
        borderColor:Colors.PRIMARY
    },
    usernameText: {
        fontFamily: "outfit-medium",
        fontSize: hp('2%')

    },
    petownerText: {
        fontFamily: "outfit",
        color: Colors.GRAY
    },
    imagetotalcontainer:{
        flexDirection:"row",
        alignItems:"center",
        gap:hp('2%')
    }
})