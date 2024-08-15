import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import PetSubInfoCard from './PetSubInfoCard';

const PetSubInfo = ({ pet }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row"}}>
                <PetSubInfoCard 
                pet={pet} 
                icon={require("../../assets/images/calendar.png")}
                title={"Age"}
                value={pet.age+" Years"}
                
                />
                <PetSubInfoCard 
                pet={pet} 
                icon={require("../../assets/images/bone.png")}
                title={"Breed"}
                value={pet.breed}
                />
                
            </View>
            <View style={{flexDirection:"row"}}>
                <PetSubInfoCard 
                pet={pet} 
                icon={require("../../assets/images/sex.png")}
                title={"Sex"}
                value={pet.sex}
                
                />
                <PetSubInfoCard 
                pet={pet} 
                icon={require("../../assets/images/weight.png")}
                title={"Weight"}
                value={pet?.weight+" Kg"}
                />
                
            </View>

        </View>
    )
}

export default PetSubInfo

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: hp("1.5%")
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
        gap: hp("2%")
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