import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Loading = () => {
    return (
        <View 
            style={{
                alignItems:"center",
                justifyContent:"center",
                height:"100%"
            }}>
            
            <LottieView
                autoPlay
                style={{
                    width: 300,
                    height: 300,
                }}
                
                source={require("../animations/loadinganimation.json")}
            />
            
        </View>
    )
}

export default Loading