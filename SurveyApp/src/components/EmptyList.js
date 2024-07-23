import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
const EmptyList = ({ message }) => {
    return (
        <SafeAreaView style={{ justifyContent: "center", alignItems: "center", marginTop: 60 }}>
            <LottieView
                autoPlay
                style={{
                    width: 400,
                    height: 400,
                    alignSelf: "center"
                }}

                source={require("../animations/empty.json")}
            />
            <Text 
                style={{
                    fontSize:20,
                    marginTop:10,
                    fontWeight:"400"
                }}>
                {message}
            </Text>

        </SafeAreaView>
    )
}

export default EmptyList

const styles = StyleSheet.create({})