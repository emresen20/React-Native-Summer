import React from 'react'

import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';

import { useSelector,useDispatch } from 'react-redux';

import { prodcutsSlice } from '../../store/productsSlice';

const ProductsScreen = ({navigation}) => {

  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products) // çağırmaya yarayan
  return (
    <FlatList
        data={products}
        renderItem={({ item }) =>
          <Pressable style={styles.itemcontainer} onPress={() =>{
            dispatch(prodcutsSlice.actions.setSelectedProduct(item.id));  //hangi ürüne tıklandığının id sini atatık
            navigation.navigate("Products Details")

          }}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
          </Pressable>


        }
        numColumns={2}
      />
  )
}

const styles = StyleSheet.create({
    image: {
      width: "100%",
      aspectRatio: 1
  
    },
    itemcontainer:{
      width:'50%',
      padding:1
    }
  });

export default ProductsScreen
