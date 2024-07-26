import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'


const LoginScreen = () => {
    return (
        <View>

            <View
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 90
                }}>
                <Image
                    style={{
                        width: 220,
                        height: 450,
                        borderRadius: 20,
                        borderWidth: 3,
                        borderColor: "black"
                    }}
                    source={require("./../assets/images/login.png")} />
            </View>
            <View style={{
                backgroundColor: "#fff",
                padding:20,
                marginTop:-18
            }}>
                <Text style={{
                    fontSize:25,
                    fontFamily:'outfit-bold',
                    textAlign:"center"
                }}>Your Ultimate <Text style={{color:"purple"}}>
                    Community Business Directory</Text> App</Text>
                    <Text style={{
                        fontSize:15,
                        fontFamily:"outfit",
                        textAlign:"center",
                        marginVertical:13,
                        color:Colors.GRAY
                    }}>
                        Find your favorite business near your and post your own business to your community
                    </Text>
                    <TouchableOpacity>
                        <Text>
                            Let's Get Started
                        </Text>
                    </TouchableOpacity>
            </View>


        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

})