import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { Feather } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';

const HomeScreen = () => {
    const navigation = useNavigation();

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
    })
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
                        <TextInput placeholder='Enter Your Destination' />
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
                            style={{ width: 350, height: 45 }}
                            customStyles={{
                                placeholderText: { fontSize: 20 } // placeHolder style

                            }} // optional 
                            centerAlign // optional text will align center or not
                            allowFontScaling={false} // optional
                            placeholder={'Apr 27, 2018 → Jul 10, 2018'}
                            mode={'range'}
                        />

                    </Pressable>

                    {/* Rooms and Guest */}
                    <Pressable>

                    </Pressable>

                    {/* Search Button */}
                    <Pressable>

                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})