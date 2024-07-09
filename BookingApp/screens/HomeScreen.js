import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { Feather } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [selectedDates, setSelectedDates] = useState()
    console.log("selectedDates" + selectedDates)
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    useLayoutEffect(() => {
        navigation.setOptions({
            headershown: true,
            title: "Booking.com",
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
            headerRight: () => (
                <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 12 }} />
            )
        })
    });
    const customButton = (onConfirm) => {
        return (
            <TouchableOpacity onPress={onConfirm}>
                <Text style={{ color: "#003580" }}>Sumbit</Text>
            </TouchableOpacity>
            // <Button 
            // onPress={onConfirm}
            // style={{
            //     container:{width:'80%',marginHorizontal:'3%'},
            //     text:{fontSize:20},
            // }}
            // primary
            // title='Sumbit'

            // />
        )
    }
    return (
        <View>
            <Header />
            <ScrollView>
                <View
                    style={{
                        margin: 20,
                        borderColor: "orange",
                        borderWidth: 3,
                        borderRadius: 6
                    }}>
                    {/* Destination */}
                    <Pressable style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        paddingHorizontal: 10,
                        borderColor: "orange",
                        paddingVertical: 13,
                        borderWidth: 1
                    }}>
                        <Feather name="search" size={24} color="black" />
                        <TextInput placeholder='Enter Your Destination' placeholderTextColor={"black"} />
                    </Pressable>

                    {/* Selected Dates */}
                    <Pressable style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        paddingHorizontal: 10,
                        borderColor: "orange",
                        paddingVertical: 13,
                        borderWidth: 1
                    }} >
                        <Feather name="calendar" size={24} color="black" />
                        <DatePicker
                            style={{
                                width: 350,
                                height: 30,
                                borderRadius: 0,
                                borderWidth: 0,
                                borderColor: "transparent"
                            }}
                            customStyles={{
                                placeholderText: {
                                    fontSize: 15,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginRight: "auto"
                                },
                                headerStyle: {
                                    backgroundColor: "#003580",

                                },
                                contentText:
                                {
                                    fontSize: 15,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginRight: "auto"
                                },


                            }}

                            selectedBgColor="orange"
                            customButton={(onConfirm) => customButton(onConfirm)}
                            onConfirm={(starDate, endDate) => setSelectedDates(starDate, endDate)}
                            allowFontScaling={false} // optional
                            placeholder={'Apr 27, 2018 → Jul 10, 2018'}
                            mode={'range'}
                        />

                    </Pressable >

                    {/* Rooms and Guest */}
                    <Pressable style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        paddingHorizontal: 10,
                        borderColor: "orange",
                        paddingVertical: 13,
                        borderWidth: 1
                    }}>
                        <Ionicons name="person-outline" size={24} color="black" />
                        <TextInput placeholder='1 room 2 adults 0 children' placeholderTextColor={"red"} />

                    </Pressable>

                    {/* Search Button */}
                    <Pressable style={{
                        paddingHorizontal: 10,
                        borderColor: "orange",
                        paddingVertical: 13,
                        borderWidth: 1,
                        backgroundColor: "#003580"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 15,
                            fontWeight: "500",
                            color: "white"
                        }}>Search</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})