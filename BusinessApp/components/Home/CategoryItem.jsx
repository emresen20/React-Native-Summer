import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Colors"
const CategoryItem = ({ category }) => {
  return (
    <View >
      <View style={styles.categoryView}> 
        <Image
          style={styles.imageStyle}
          source={{ uri: category.icon }} />
      </View>
      <Text 
        style={{
          textAlign:"center",
          fontSize:15,
          fontFamily:"outfit-medium",
          marginRight:15
        }}>
        {category.name}
        </Text>

    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40
  },
  categoryView:{
    padding:14,
    backgroundColor:Colors.ICON_BG,
    borderRadius:99,
    marginRight:15
  }
})