import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const FitScreen = () => {
    const route = useRoute();
    const [index, setIndex] = useState(0);
    const excersise = route.params.excersises
    const current = excersise[index];

    console.log(current, "ilk")
    return (
        <SafeAreaView>
            <Image style={{ width: "100%", height: 360 }} source={{ uri: current.image }} />
            <Text
                style={{
                    textAlign: "center",
                    marginTop: 25,
                    fontSize: 30,
                    fontWeight: "bold"

                }}>
                {current.name}
            </Text>
            <Text style={{
                textAlign: "center",
                marginTop: 20,
                fontSize: 38,
                fontWeight: "bold"

            }}>
                X{current.sets}
            </Text>

            <Pressable 
                style={{
                    backgroundColor:"blue",
                    marginLeft:"auto",
                    marginRight:"auto",
                    marginTop:20,
                    borderRadius:20,
                    padding:10
                }}>
                <Text style={{
                    textAlign:"center",
                    fontWeight:"bold",
                    color:"white",
                    width:150,
                    fontSize:20
                    
                }}>
                    DONE
                    </Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default FitScreen

const styles = StyleSheet.create({})