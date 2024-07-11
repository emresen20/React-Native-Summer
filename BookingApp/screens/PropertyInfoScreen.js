import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { pixelNormalize } from '../components/Normalize'
import { MaterialIcons } from '@expo/vector-icons';
import Amenities from '../components/Amenities'

const PropertyInfoScreen = () => {
    const route = useRoute()
    const navigation = useNavigation();


    useLayoutEffect(() => {
        navigation.setOptions({
            headershown: true,
            title: `${route.params.name}`,
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

    const difference = route.params.oldPrice - route.params.newPrice;
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100

    return (
        <View >
            <ScrollView >
                <Pressable style={{ flexDirection: "row", margin: 8, flexWrap: "wrap" }}>
                    {route.params.photos.slice(0, 5).map((photo) => (
                        <View style={{ margin: 5 }}>
                            <Image
                                style={{
                                    width: 110,
                                    height: pixelNormalize(70),
                                    borderRadius: pixelNormalize(3),
                                }}
                                source={{ uri: photo.image }}
                            />
                        </View>
                    ))}
                    <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ alignSelf: "center", marginLeft: 20 }}>Show More</Text>
                    </Pressable>
                </Pressable>
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
                <Text style={{ borderColor: "lightgray", borderWidth: 3, marginTop: 10, height: 1 }} />
                <Text
                    style={{
                        marginTop: 3,
                        fontSize: 14,
                        fontWeight: "500",
                        marginHorizontal: 12,
                        marginTop: 13

                    }}>
                    Price for 1 Night and {route.params.adults} adults
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                        marginHorizontal: 12,
                        marginVertical: 10,
                        marginTop: 2
                    }}>
                    <Text style={{ color: "red", fontSize: 17, textDecorationLine: "line-through" }}>{route.params.oldPrice * route.params.adults}</Text>
                    <Text style={{ fontSize: 17 }}>{route.params.newPrice * route.params.adults}</Text>
                </View>
                <View style={{
                    marginHorizontal: 12,
                    marginTop: 4,
                    backgroundColor: "green",
                    paddingHorizontal: 4,
                    paddingVertical: 4,
                    width: 75,
                    borderRadius: 4
                }}>
                    <Text
                        style={{
                            textAlign: "center",
                            color: "white"
                        }}>
                        {offerPrice.toFixed(0)} % OFF
                    </Text>
                </View>
                <Text style={{ borderColor: "lightgray", borderWidth: 3, marginTop: 10, height: 1 }} />
                <View
                    style={{
                        margin: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 60
                    }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "600",
                                marginBottom: 2
                            }}>
                            Check In
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#007FFF"
                        }}>{route.params.selectedDates.startDate}</Text>
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "600",
                            marginBottom: 2
                        }}>Check Out</Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: "bold",
                                color: "#007FFF"
                            }}>{route.params.selectedDates.endDate}</Text>
                    </View>
                </View>
                <View style={{
                    margin: 10,

                }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "600",
                        marginBottom: 2
                    }}>Rooms and Guest</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#007FFF"
                    }}>
                        {route.params.rooms} rooms {route.params.adults} adults {route.params.children} children
                    </Text>
                </View>
                <Text style={{ borderColor: "lightgray", borderWidth: 3, marginTop: 10, height: 1 }} />
                <Amenities/>
                <Text style={{ borderColor: "lightgray", borderWidth: 3, marginTop: 10, height: 1 }} /> 
            </ScrollView>
            <Pressable>
                <Text>Select Availabilty</Text>
            </Pressable>
        </View>
    )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})