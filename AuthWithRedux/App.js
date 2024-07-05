import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import { Provider, useSelector } from 'react-redux';
import Slice from './src/Stores/Slice';
import { Store } from './src/Stores/Store';


const Stack = createNativeStackNavigator();

const MyStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
)

const RootNavigation = () => {
  const token= useSelector((state)=>state.auth.authtoken)
  console.warn(token)
  return(
    <NavigationContainer>
      {
        token === null ? 
          <AuthStack/>:
          <MyStack />
      }
    
  </NavigationContainer>
  )
 
}

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
)

function App() {
  return (

    <Provider store={Store}>
      <RootNavigation />
    </Provider>



  );
}

export default App;
