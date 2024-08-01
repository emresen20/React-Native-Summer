import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'
import { Colors } from "../../constants/Colors"

const Reviews = ({ business }) => {

    const [rating, setRating] = useState(4)
    const [userInput,setUserInput]=useState();
    
    return (
        <View style={styles.container}>
            <Text style={styles.reviewstext}>
                Reviews
            </Text>
            <View>
                <Rating
                    imageSize={25}
                    showRating={false}
                    onFinishRating={(rating) => setRating(rating)}
                    style={{ paddingVertical: 10 }}
                />
                <TextInput
                    numberOfLines={4} //alanının başlangıçta 4 satır yüksekliğinde olmasını sağlar.
                    placeholder='Write Your Comment'
                    onChangeText={(val)=>setUserInput(val)}
                    value={userInput}
                    style={styles.textinput}
                />
                <TouchableOpacity 
                onPress={()=>console.log(userInput,rating)}
                disabled={!userInput}
                style={styles.sumbitbutton}>
                    <Text
                        style={styles.sumbittext}
                    >
                        Sumbit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Reviews

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white"
    },
    reviewstext: {
        fontFamily: "outfit-bold",
        fontSize: 18
    },
    textinput: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: Colors.PRIMARY,

    },
    sumbitbutton: {
        padding: 10,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 6,
        marginTop:10,
    },
    sumbittext:{
        fontFamily:"outfit-bold",
        color:"white",
        textAlign:"center",
        fontSize:15
    }
})