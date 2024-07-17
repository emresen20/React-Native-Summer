import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const FitScreen = () => {
    const route = useRoute();
    const [index, setIndex] = useState(0);
    const excersise = route.params.excersises
    const current = excersise[index];
    const navigation = useNavigation();

    console.log(current, "ilk")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
            {index + 1 >= excersise.length ? (
                <Pressable
                    onPress={() => {
                        navigation.navigate("HomeScreen")
                    }}
                    style={{
                        backgroundColor: "blue",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 20,
                        borderRadius: 20,
                        padding: 10
                    }}>
                    <Text style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                        width: 150,
                        fontSize: 20

                    }}>
                        DONE
                    </Text>
                </Pressable>
            ) : (
                <Pressable
                    onPress={() => {
                        navigation.navigate("RestScreen")

                        setTimeout(() => {

                            setIndex(index + 1)
                        }, 2000)
                    }}
                    style={{
                        backgroundColor: "blue",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 20,
                        borderRadius: 20,
                        padding: 10
                    }}>
                    <Text style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                        width: 150,
                        fontSize: 20

                    }}>
                        DONE
                    </Text>
                </Pressable>

            )}

            <Pressable style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 45
            }}>
                <Pressable
                    style={{
                        backgroundColor: "green",
                        padding: 10,
                        borderRadius: 20,
                        marginHorizontal: 20,
                        width: 80

                    }}>
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}>
                        PREV
                    </Text>
                </Pressable>

                {index + 1 >= excersise.length ? (

                    <Pressable

                        onPress={()=> navigation.navigate("HomeScreen")}

                        style={{
                            backgroundColor: "green",
                            padding: 10,
                            borderRadius: 20,
                            marginHorizontal: 20,
                            width: 80

                        }}>
                        <Text style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}>
                            SKIP
                        </Text>
                    </Pressable>

                ) : (
                    <Pressable
                        onPress={() => {
                            navigation.navigate("RestScreen")

                            setTimeout(() => {

                                setIndex(index + 1)
                            }, 2000)
                        }}
                        style={{
                            backgroundColor: "green",
                            padding: 10,
                            borderRadius: 20,
                            marginHorizontal: 20,
                            width: 80

                        }}>
                        <Text style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}>
                            SKIP
                        </Text>
                    </Pressable>
                )}


            </Pressable>
        </SafeAreaView>
    )
}

export default FitScreen

const styles = StyleSheet.create({})