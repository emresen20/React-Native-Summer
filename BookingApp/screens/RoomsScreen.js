import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import Amenities from '../components/Amenities';


const RoomsScreen = () => {
    const route = useRoute();
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headershown: true,
            title: "Avaiable Rooms",
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
    const [selected, setSelected] = useState([]);

    return (
        <>

            <ScrollView>
                {route.params.rooms.map((item, index) => (
                    <Pressable
                        style={{
                            margin: 10,
                            backgroundColor: "white",
                            padding: 10
                        }}
                        key={index}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",

                            }}>
                            <Text
                                style={{
                                    color: "#007FFF",
                                    fontWeight: "500",
                                    fontSize: 17

                                }}>
                                {item.name}
                            </Text>
                            <AntDesign name="infocirlceo" size={24} color="#007FFF" />
                        </View>
                        <Text style={{ marginTop: 3 }}>Pay at the property</Text>
                        <Text style={{ marginTop: 3, color: "green", fontSize: 15 }}>Free Cancelation Available</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 4,
                                alignItems: "center",
                                gap: 10
                            }}>
                            <Text style={{
                                fontSize: 16,
                                color: "red",
                                textDecorationLine: "line-through"
                            }}>
                                {route.params.oldPrice}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,

                                }}>
                                Rs{route.params.newPrice}
                            </Text>
                        </View>
                        <Amenities />

                        {selected.includes(item.name) ? (
                            <Pressable
                                onPress={() => setSelected(item.name)}
                                style={{
                                    borderColor: "#007FFF",
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    padding: 8,
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}>
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontWeight: "700",
                                        fontSize: 16,
                                        color: "#007FFF",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    }}>Selected</Text>
                                <AntDesign onPress={() => setSelected([])} name="closecircle" size={24} color="red" />
                            </Pressable>

                        ) : (
                            <Pressable
                                onPress={() => setSelected(item.name)}
                                style={{
                                    borderColor: "#007FFF",
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    padding: 8
                                }}>
                                <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 16, color: "#007FFF" }}>Select</Text>
                            </Pressable>
                        )
                        }

                    </Pressable>
                ))}
            </ScrollView>
            {selected.length >0 ?(
                <Pressable 
                    style={{
                        backgroundColor:"#007FFF",
                        padding:8,
                        marginBottom:30,
                        borderRadius:6,
                        marginHorizontal:10
                    }}>
                    <Text 
                        style={{
                            textAlign:"center",
                            color:"white",
                            fontWeight:"bold"
                        }}>Reserve</Text>
                </Pressable>
            ):null
            }
        </>

    )
}

export default RoomsScreen

const styles = StyleSheet.create({})