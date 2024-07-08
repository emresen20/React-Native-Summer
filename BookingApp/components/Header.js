import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={{
            backgroundColor: "#003580",
            height: 55, 
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <Pressable style={{
                flexDirection: "row",
                alignItems: "center",
                borderColor: "white", 
                borderWidth: 1,
                borderRadius: 20,
                padding: 5,
                height: 35
            }}>
                <MaterialCommunityIcons name="bed-queen-outline" size={25} color="white" />
                <Text
                    style={{
                        marginLeft: 7,
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 15
                    }}>Stays
                </Text>

            </Pressable>

            <Pressable style={{
                flexDirection: "row",
                alignItems: "center",
                height: 35
            }}>
                <Ionicons name="airplane-outline" size={24} color="white" />
                <Text
                    style={{
                        marginLeft: 7,
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 15
                    }}>
                        Flights
                </Text>

            </Pressable>

            <Pressable style={{
                flexDirection: "row",
                alignItems: "center",
                height: 35
            }}>
                <Ionicons name="car-outline" size={24} color="white" />
                <Text
                    style={{
                        marginLeft: 7,
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 15
                    }}>Car Rental
                </Text>

            </Pressable>

            <Pressable style={{
                flexDirection: "row",
                alignItems: "center",
                height:35
            }}>
                <FontAwesome5 name="uber" size={24} color="white" />
                <Text
                    style={{
                        marginLeft: 7,
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 15
                    }}>Taxi
                </Text>

            </Pressable>

          

        </View>
    )
}

export default Header

const styles = StyleSheet.create({})