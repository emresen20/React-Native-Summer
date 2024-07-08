
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { Entypo } from '@expo/vector-icons';
import SavedScreen from './screens/SavedScreen';
import { AntDesign } from '@expo/vector-icons';
import BookingScreen from './screens/BookingScreen';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen';

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name='HomeScreen' component={HomeScreen}
                    options={{
                        tabBarLabel: "Home",
                        headerShadowVisible: false,
                        tabBarIcon: ({ focused }) => focused ?
                            (<Entypo name="home" size={24} color="#003580" />)
                            : (<AntDesign name="home" size={24} color="black" />)
                    }} />

                <Tab.Screen name='SavedScreen' component={SavedScreen}
                    options={{
                        tabBarLabel: "Saved",
                        headerShadowVisible: false,
                        tabBarIcon: ({ focused }) => focused ?
                            (<AntDesign name="heart" size={24} color="#003580" />)
                            : (<AntDesign name="hearto" size={24} color="black" />)
                    }} />

                <Tab.Screen name='BookingScreen' component={BookingScreen}
                    options={{
                        tabBarLabel: "Bookings",
                        headerShadowVisible: false,
                        tabBarIcon: ({ focused }) => focused ?
                            (<Ionicons name="notifications" size={24} color="#003580" />)
                            : (<Ionicons name="notifications-outline" size={24} color="black" />)
                    }} />

                <Tab.Screen name='ProfileScreen' component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile",
                        headerShadowVisible: false,
                        tabBarIcon: ({ focused }) => focused ?
                            (<Ionicons name="person" size={24} color="#003580" />)
                            : (<Ionicons name="person-outline" size={24} color="black" />)
                    }} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="BottomTabs" component={BottomTabs}  options={{ headerShadowVisible: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

