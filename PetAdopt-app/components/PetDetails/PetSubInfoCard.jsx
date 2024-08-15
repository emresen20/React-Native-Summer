import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';

const PetSubInfoCard = ({value,icon,title}) => {
    return (
        <View style={styles.infocontainer}>
            <Image
                style={styles.imageCale}
                source={icon} />
            <View  style={{flex:1}}>
                <Text style={styles.agetext}>{title}</Text>
                <Text style={styles.agenumbertext}>{value}</Text>
            </View>
        </View>
    )
}

export default PetSubInfoCard

const styles = StyleSheet.create({
    container: {
        padding: hp("1.5%")
    },
    imageCale: {
        width: wp("6%"),
        height: hp("4%")
    },
    agecontainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    infocontainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: hp("1.1%"),
        margin: 5,
        borderRadius: 8,
        gap: hp("2%"),
        flex:1
    },
    agetext: {
        fontFamily: "outfit",
        fontSize: hp("1.800%"),
        color: Colors.GRAY

    },
    agenumbertext: {
        fontFamily: "outfit-medium",
        fontSize: hp("1.95%")
    }
})