import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const PopularBusinessItem = ({ business }) => {

  const router=useRouter();

  return (
    <TouchableOpacity 
      onPress={()=> router.push("/businessdetail/"+business.id)}
      style={styles.container}>
      <Image
        source={{ uri: business?.imageUrl }}
        style={styles.imagebusiness}
      />
      <View style={{ marginTop: 5 }}>
        <Text style={styles.businessText}>
          {business.name}
        </Text>
        <Text style={{ fontFamily: "outfit", color: Colors.GRAY, width: 150 }}>
          {business.adres}
        </Text>
      </View>

      <View style={styles.starContainerView}>
        <View style={styles.starView}>
          <Image
            style={{
              width: 15,
              height: 15
            }}
            source={require("../../assets/images/star.png")} />
          <Text>4.5</Text>
        </View>
        <Text style={styles.businescategoryTest}>
          {business.category}
          </Text>
      </View>


    </TouchableOpacity>
  )
}

export default PopularBusinessItem

const styles = StyleSheet.create({
  imagebusiness: {
    width: 190,
    height: 120,
    resizeMode: "contain",
    borderRadius: 15
  },
  container: {
    marginLeft: 15,
    padding: 7,
    backgroundColor: "#fff",
    borderRadius: 15

  },
  businessText: {
    fontFamily: "outfit-bold",
    fontSize: 16,
  },
  starView: {
    flexDirection: "row",

    gap: 5
  },
  starContainerView: {
    flexDirection: "row",
     gap: 5, 
     marginTop: 3,
     justifyContent:"space-between"
  },
  businescategoryTest:{
    fontSize:11,
    fontFamily:"outfit",
    backgroundColor:Colors.PRIMARY,
    padding:5,
    borderRadius:15,
    color:"white"
  }
})