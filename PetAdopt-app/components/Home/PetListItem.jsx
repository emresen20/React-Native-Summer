import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import { useRouter } from 'expo-router';
import MarkFavorite from '../PetDetails/MarkFavorite';

const PetListItem = ({ pet }) => {
  const router = useRouter();
  console.log(pet)
  return (
    <TouchableOpacity
      onPress={() => router.push({
        pathname: "/pet-detail",
        params: pet
      })}
      style={styles.contanier}>
      {/* <View style={{
        position:"absolute",
        zIndex:10,
        right:10,
        top:10
      }}>
        <MarkFavorite pet={pet}   color={"white"}/>
      </View> */}

      <Image
        source={{ uri: pet.imageUrl }}
        style={styles.imagestyle}

      />
      <Text style={styles.nametext}>{pet.name}</Text>
      <View style={styles.breedcontainer}>
        <Text style={styles.breedtext}>{pet.breed}</Text>
        <Text style={styles.agetext}>{pet.age} YRS</Text>
        <MarkFavorite pet={pet} color={Colors.PRIMARY} />
      </View>
    </TouchableOpacity>
  )
}

export default PetListItem

const styles = StyleSheet.create({
  contanier: {
    padding: hp("1%"),
    marginRight: hp("1%"),
    backgroundColor: "white",
    borderRadius: 10
  },
  imagestyle: {
    width: hp("23%"),
    height: hp("20%"),
    objectFit: "cover",
    borderRadius: 10
  },
  nametext: {
    fontFamily: "outfit-medium",
    fontSize: hp("2%")
  },
  breedtext: {
    color: Colors.GRAY,
    fontFamily: "outfit"
  },
  agetext: {
    fontFamily: "outfit",
    color: Colors.PRIMARY,
    backgroundColor: Colors.Second,
    paddingHorizontal: 7,
    borderRadius: 10,
    fontSize: hp("1.6%")
  },
  breedcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})