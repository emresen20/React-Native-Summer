import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const UserScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headershown: true,
            title: "User Details",
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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    return (
        <>

            <View
                style={{
                    padding: 20
                }}>
                <View
                    style={{
                        flexDirection: "column",
                        gap: 10,
                        marginTop: 10
                    }}>
                    <Text>First Name</Text>
                    <TextInput value={firstName} onChangeText={(text) => setFirstName(text)} style={{ padding: 5, borderColor: "gray", borderWidth: 1 }} />
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        gap: 10,
                        marginTop: 10
                    }}>
                    <Text>Last Name</Text>
                    <TextInput value={email} onChangeText={(text) => setLastName(text)} style={{ padding: 6, borderColor: "gray", borderWidth: 1 }} />
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        gap: 10,
                        marginTop: 10
                    }}>
                    <Text>Phone Number</Text>
                    <TextInput value={phoneNo} onChangeText={(text) => setPhoneNo(text)} style={{ padding: 6, borderColor: "gray", borderWidth: 1 }} />
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        gap: 10,
                        marginTop: 10
                    }}>
                    <Text>Email</Text>
                    <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ padding: 6, borderColor: "gray", borderWidth: 1 }} />


                </View>

            </View>
            <Pressable
                style={{
                    backgroundColor: "white",
                    alignItems: "center",
                    marginTop: "auto",
                    flexDirection: "row",
                    marginBottom:40,
                    padding:10,
                    justifyContent:"space-between"
                    
                }}>
                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                            marginTop: 2
                        }}>
                        <Text style={{ color: "red", fontSize: 17, textDecorationLine: "line-through" }}>{route.params.oldPrice * route.params.adults}</Text>
                        <Text style={{ fontSize: 17 }}>{route.params.newPrice * route.params.adults}</Text>
                    </View>
                    <Text>
                        You Saved {route.params.oldPrice - route.params.newPrice} tl
                    </Text>
                </View>
                <Pressable onPress={()=> navigation.navigate("ConfirmationScreen",{
                      oldPrice: route.params.oldPrice,
                      newPrice: route.params.newPrice,
                      name: route.params.name,
                      children: route.params.children,
                      adults: route.params.adults,
                      rating: route.params.rating,
                      startDate: route.params.startDate,
                      endDate: route.params.endDate
                })} style={{backgroundColor:"#007FFF",padding:9,borderRadius:5}}>
                    <Text style={{textAlign:"center",color:"white"}}>Final Step</Text>
                </Pressable>
            </Pressable>
        </>
    )
}

export default UserScreen

const styles = StyleSheet.create({})