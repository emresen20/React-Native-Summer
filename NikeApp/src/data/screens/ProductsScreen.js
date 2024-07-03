import React from 'react'
import products from '../products';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';

const ProductsScreen = ({navigation}) => {
  return (
    <FlatList
        data={products}
        renderItem={({ item }) =>
          <Pressable style={styles.itemcontainer} onPress={()=> navigation.navigate("Products Details")}>
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
