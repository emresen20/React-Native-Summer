import React from 'react'
import products from '../products';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const ProductsScreen = () => {
  return (
    <FlatList
        data={products}
        renderItem={({ item }) =>
          <View style={styles.itemcontainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
          </View>


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
