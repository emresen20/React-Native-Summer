import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ProductsScreen from './data/screens/ProductsScreen'
import ProductsDetailScreen from './data/screens/ProductsDetailScreen'
import ShoppingCard from './data/screens/ShoppingCard'

const Navigation = () => {
  return (
    <NavigationContainer>
        <ProductsScreen/>
    </NavigationContainer>
  )
}

export default Navigation
