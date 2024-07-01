import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { Buttons } from './Buttons';
import { decrease, increase, refresh } from './Slice';


 export function HomeScreen({navigation}) {
    const counter = useSelector((state)=>state.counter)
    const dispatch= useDispatch();
 
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{counter.count}</Text>
        <Buttons text={"Decrase"} onPress={()=>dispatch(decrease())}/>
        <Buttons text={"Increase"} onPress={()=>dispatch(increase())}/>
        <Buttons text={"Refresh"} onPress={()=>dispatch(refresh())}/>
        <Button
        title="Go to General"
        onPress={() => navigation.navigate('GeneralScreen')}
      />
      </View>
    );
  }