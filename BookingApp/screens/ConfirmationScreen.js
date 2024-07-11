import { Pressable, StyleSheet, Text, View,Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { savedPlaces } from '../SavedReducer';

const ConfirmationScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch=useDispatch();

    const confirmBooking=()=>{
        dispatch(savedPlaces(route.params));
        Alert.alert('Booked', 'Thanks for booked', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        navigation.navigate("HomeScreen")
    }

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
            <Pressable style={{ backgroundColor: "white", margin: 10 }}>
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
                        }}>{route.params.startDate}</Text>
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
                            }}>{route.params.endDate}</Text>
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

                <Pressable 
                    onPress={confirmBooking}
                    style={{
                        backgroundColor:"#003580",
                        width:120,
                        padding:5,
                        marginHorizontal:12,
                        marginBottom:20,
                        borderRadius:4
                    }}>
                    <Text 
                    style={{
                        alignSelf:"center",
                        color:"white",
                        fontWeight:"500",
                        fontSize:14
                    }}>
                        Book Now
                        </Text>
                </Pressable>
            </Pressable>
        </View>
    )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})