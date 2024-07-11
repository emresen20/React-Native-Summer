import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

const ConfirmationScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headershown: true,
            title: "Confirmation",
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white"

            },
            headerStyle: {
                backgroundColor: "#003580",
                height: 110,

            },

        })
    }, []);

    return (
        <View>
            <Pressable style={{backgroundColor:"white"}}>
                <View
                    style={{
                        marginHorizontal: 10,
                        marginTop: 8,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                            {route.params.name}
                        </Text>
                        <View  //rating and genius level view
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 6,
                                marginTop: 5,

                            }}>
                            <MaterialIcons name="stars" size={24} color="green" />
                            <Text>{route.params.rating}</Text>

                            <View style={{
                                backgroundColor: "#003580",
                                borderRadius: 5,
                                width: 100,
                                paddingVertical: 2

                            }}>
                                <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>Genius level</Text>
                            </View>
                        </View>

                    </View>
                    <View
                        style={{
                            backgroundColor: "#17B169",
                            paddingHorizontal: 3,
                            paddingVertical: 4,
                            borderRadius: 4,

                        }}>
                        <Text
                            style={{ color: "white", fontSize: 13 }}>
                            Travel Sustainable
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})