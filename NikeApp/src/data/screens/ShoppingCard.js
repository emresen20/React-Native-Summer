import React from 'react'
import { View,Text, SafeAreaView,FlatList } from 'react-native'
import card from '../card'
import CartListItem from '../components/CartListItem'

const ShoppingCard = () => {
  return (
    <FlatList data={card}  renderItem={({item}) => <CartListItem cartItem={item}/>}/>
  )
}

export default ShoppingCard
