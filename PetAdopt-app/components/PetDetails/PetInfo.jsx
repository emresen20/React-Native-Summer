import { StyleSheet, Text, View, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import Colors from '../../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import MarkFavorite from './MarkFavorite';

const PetInfo = ({ pet }) => {
    console.log("pet",pet.imageUrl)
    return (
        <View>
            <Image source={{ uri: pet.imageUrl }}
                style={styles.imageStyle}
            />
            <View style={styles.infocontainer}>
                <View>
                    <Text style={styles.nameStyle}>{pet.name}</Text>
                    <Text style={styles.adresText}>{pet?.adress}</Text>
                </View>
                <MarkFavorite pet={pet} />
            </View>
            
        </View>
       
    )
}

export default PetInfo

const styles = StyleSheet.create({
    imageStyle: {
        width: ("100%"),
        height: hp("38%"),
        objectFit: "cover"
    },
    nameStyle: {
        fontFamily: "outfit-bold",
        fontSize: hp("3%")
    },
    adresText: {
        fontFamily: "outfit",
        fontSize: hp("1.7%"),
        color: Colors.GRAY
    },
    infocontainer: {
        padding: hp("1.5%"),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }

})