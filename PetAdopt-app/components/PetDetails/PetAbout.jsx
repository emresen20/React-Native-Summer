import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';

const PetAbout = ({ pet }) => {
    const [readMore, setReadMore] = useState(true)
    return (
        <View style={styles.container}>
            <Text style={styles.aboutnametext}>About {pet.name}</Text>
            <Text
                numberOfLines={readMore ? 3 : undefined}
                style={styles.abouttext}>{pet.about}</Text>

            <TouchableOpacity onPress={() => setReadMore(!readMore)}>
                <Text style={styles.readmore}>
                    {readMore ? 'Read More' : 'Show Less'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default PetAbout

const styles = StyleSheet.create({
    container: {
        padding: hp('2%')
    },
    aboutnametext: {
        fontFamily: "outfit-medium",
        fontSize: hp("2.3%")
    },
    abouttext: {
        fontFamily: "outfit",
        fontSize: hp('1.7%'),
    },
    readmore: {
        fontFamily: "outfit",
        fontSize: hp('1.7%'),
        color: Colors.SecondLight
    }
})