import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddButton from './components/AddButton';
import Detail from './screens/Detail';
import LoginScreen from './screens/LoginScreen';
import Profile from './screens/Profile';




const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen'>
                <Stack.Screen name="HomeScreen"component={HomeScreen} options={{title:"Questions",headerTitleAlign:"center"}} />
                <Stack.Screen name='Detail' component={Detail} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name='ProfileScreen' component={Profile}/>
            </Stack.Navigator> 
        </NavigationContainer>
    );
}

export default Router;