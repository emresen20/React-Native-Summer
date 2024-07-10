import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PropertyCard = ({ rooms, children, property, adults, selectedDates, aviableRooms }) => {
  const { width, height } = Dimensions.get("window") //ekranı kendi genişlik ve yüksekliği
  const navigation = useNavigation()
  return (
    <View>
      <Pressable  // right view
        onPress={()=> navigation.navigate("PropertyInfoScreen",{
          name:property.name,
          rating:property.rating,
          oldPrice:property.oldPrice,
          newPrice:property.newPrice,
          photos:property.photos,
          rooms:property.rooms,
          adults:adults,
          children:children,
          rooms:rooms,
          selectedDates:selectedDates

        })}
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white", }}>
        <View>
          <Image
            style={{
              height: height / 3.5,
              width: width - 260
            }}
            source={{ uri: property.image }} />
        </View>
        <View //right view
          style={{ padding: 10 }}>
          <View //Hotel name view
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",


            }}>
            <Text style={{ width: 190 }}>
              {property.name}
            </Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>
          <View  //rating and genius level view
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 5,

            }}>
            <MaterialIcons name="stars" size={24} color="black" />
            <Text>{property.rating}</Text>

            <View style={{
              backgroundColor: "#6CB4EE",
              borderRadius: 5,
              width: 100,
              paddingVertical: 2

            }}>
              <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>Genius level</Text>
            </View>
          </View>

          <Text
            style={{
              width: 210,
              marginTop: 5,
              color: "gray",
              fontWeight: "bold"

            }}>
            {property.address.length > 50 ? property.address.substr(0, 50) : property.address}
          </Text>
          <Text
            style={{
              marginTop: 3,
              fontSize: 14,
              fontWeight: "500",

            }}>
            Price for 1 Night and {adults} adults
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 4
            }}>
            <Text style={{ color: "red", fontSize: 17, textDecorationLine: "line-through" }}>{property.oldPrice * adults}</Text>
            <Text style={{ fontSize: 17 }}>{property.newPrice * adults}</Text>
          </View>
          <View>
            <Text style={{ color: "gray" }}>Deluxe Room</Text>
            <Text style={{ color: "gray" }}>Hotel Room: 1 bed</Text>
          </View>

          <View style={{
            backgroundColor: "#6082B6",
            borderRadius: 5,
            width: 150,
            paddingVertical: 2,
            marginTop:4
          }}>
            <Text style={{textAlign:"center",color:"white"}}>
              Limited Time Deal
            </Text>
          </View>


        </View>
      </Pressable>
    </View>
  )
}

export default PropertyCard

const styles = StyleSheet.create({})