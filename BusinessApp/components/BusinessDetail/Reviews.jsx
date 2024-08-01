import { FlatList, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'
import { Colors } from "../../constants/Colors"
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import { useUser } from '@clerk/clerk-expo'

const Reviews = ({ business }) => {

    const [rating, setRating] = useState(4)
    const [userInput, setUserInput] = useState();

    const { user } = useUser();

    const onSumbit = async () => {
        const docRef = doc(db, 'BusinessList', business.id)
        await updateDoc(docRef, {
            reviews: arrayUnion({
                rating: rating,
                comment: userInput,
                userName: user?.fullName,
                userImage: user?.imageUrl,
                userEmail: user?.primaryEmailAddress?.emailAddress
            })
        })
        ToastAndroid.show("Comment Added Succesfully !", ToastAndroid.BOTTOM)
    }

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
                    onChangeText={(val) => setUserInput(val)}
                    value={userInput}
                    style={styles.textinput}
                />
                <TouchableOpacity
                    onPress={() => onSumbit()}
                    disabled={!userInput}
                    style={styles.sumbitbutton}>
                    <Text
                        style={styles.sumbittext}
                    >
                        Sumbit
                    </Text>
                </TouchableOpacity>
            </View>
            {/* Display Previus Reviews */}

            <View>
                {business?.reviews?.map((item, index) => (
                    
                    <View style={styles.reviewContainer}>
                        <Image
                            source={{ uri: item.userImage }}
                            style={styles.userimageStyle}
                        />

                        <View  style={{gap:3}}>
                            <Text style={styles.usernametext}>{item.userName}</Text>
                            <Rating
                                imageSize={20}
                                startingValue={item.rating}
                                readonly={true}
                                style={{alignItems:"flex-start"}}
                            />
                            <Text>{item.comment}</Text>
                        </View>

                    </View>
                ))}
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
        marginTop: 10,
    },
    sumbittext: {
        fontFamily: "outfit-bold",
        color: "white",
        textAlign: "center",
        fontSize: 15
    },
    userimageStyle: {
        width: 50,
        height: 50,
        borderRadius: 9999
    },
    reviewContainer:{
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        padding:10,
        borderWidth:1,
        borderColor:Colors.GRAY,
        borderRadius:15,
        marginTop:10
    },
    usernametext:{
        fontFamily:"outfit-medium",

    }
})