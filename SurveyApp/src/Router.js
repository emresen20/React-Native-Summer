import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddButton from './components/AddButton';
import Detail from './screens/Detail';




const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen"component={HomeScreen} options={{title:"Questions"}} />
                <Stack.Screen name='Detail' component={Detail} />
            </Stack.Navigator> 
        </NavigationContainer>
    );
}

export default Router;