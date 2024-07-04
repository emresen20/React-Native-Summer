import React from 'react'
import { Pressable, View ,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ProductsScreen from './data/screens/ProductsScreen'
import ProductsDetailScreen from './data/screens/ProductsDetailScreen'
import ShoppingCard from './data/screens/ShoppingCard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { selectNumberOfItems } from './store/cardSlices'

const Stack = createNativeStackNavigator();



const Navigation = ({navigation}) => {
    const NumberOfItems=useSelector(selectNumberOfItems);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
                <Stack.Screen
                    name='Products'
                    component={ProductsScreen}
                    options={({navigation}) =>({
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate("Card")} style={{flexDirection:"row"}}>
                                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                                <Text style={{marginLeft:5,fontWeight:'500'}}>{NumberOfItems}</Text>
                            </Pressable>
                        )
                    })}
                />
                <Stack.Screen name='Products Details' component={ProductsDetailScreen} options={{ presentation: 'modal' }}  //sadece iosta var 
                />
                <Stack.Screen name='Card' component={ShoppingCard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
