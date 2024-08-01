import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'

const Reviews = ({business}) => {

    const [rating,setRating]=useState(4)
    return (
        <View style={styles.container}>
            <Text style={styles.reviewstext}>
                Reviews
            </Text>
            <View>
                <Rating
                    showRating={false}
                    onFinishRating={(rating)=>setRating(rating)}
                    style={{ paddingVertical: 10 }}
                />
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
    reviewstext:{
        fontFamily:"outfit-bold",
        fontSize:18
    }
})