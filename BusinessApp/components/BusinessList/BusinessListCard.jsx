import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const BusinessListCard = ({ business }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: business.imageUrl }}
                style={{
                    width: 120,
                    height: 120,
                    resizeMode: "contain",
                    borderRadius: 15
                }}
            />
            
            <View style={{flex:1,gap:4}}>  
                <Text style={styles.nameText} >{business.name}</Text>
                <Text style={styles.adresText}>{business.adres}</Text>
                <View style={styles.starView}>
                    <Image
                        style={{
                            width: 15,
                            height: 15
                        }}
                        source={require("../../assets/images/star.png")} />
                    <Text>{business.rating}</Text>
                </View>
            </View>
        </View>
    )
}

export default BusinessListCard

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "white",
        flexDirection:"row",
        gap:12,
        

    },
    starView: {
        flexDirection: "row",
        gap: 5
    },
    nameText:{
        fontFamily:"outfit-bold",
        fontSize:18
    },
    adresText:{
        fontFamily:"outfit",
        color:Colors.GRAY
    }
})