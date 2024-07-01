import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './Store';
import { Counter } from './Counter';
import Foo from './Foo';
import Bar from './Bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { useState } from 'react';
import { GeneralScreen } from './GeneralScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    //Provideri redux u kullanabilmek için sarmış olduk
    // <Provider store={Store} >
    //   <View style={styles.container}>
    //     <Bar/>
    //     <Foo />
    //     <Counter />
    //     <StatusBar style="auto" />
    //   </View>
    // </Provider>

    
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="GeneralScreen" component={GeneralScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
