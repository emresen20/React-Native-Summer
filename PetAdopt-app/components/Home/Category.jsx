import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import Colors from "../../constants/Colors"

const Category = ({category}) => {

  const [categoryList, setCategoryList] = useState([])
  const [selectedCategory,setSelectedCategory]=useState("Birds")


  // take categoryList from db (firebase)

  useEffect(() => {
    GetCategories();
  }, [])

  const GetCategories = async () => {
    try {
      setCategoryList([]); 
      const snapShot = await getDocs(collection(db, "Category"));
      const categories = [];
      snapShot.forEach((doc) => {
        categories.push(doc.data()); 
      });
      setCategoryList(categories); 
    } catch (error) {
      console.error("Error fetching categories: ", error); 
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.categorytext}>Category</Text>
      <FlatList
      numColumns={4}
      data={categoryList}
      renderItem={({item,index})=>(
        <TouchableOpacity 
          onPress={()=>{setSelectedCategory(item.name);
            category(item.name)
          }}
          style={{flex:1}}>
            <View style={[styles.imageview,
              selectedCategory==item.name&&styles.selectedCategorycont
            ]}>
              <Image
              source={{uri:item?.imageUrl}}
              style={styles.categoryimages}
              />
            </View>
            <Text style={styles.categorynametext}>{item?.name}</Text>
        </TouchableOpacity>
      )}
      
      />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    marginTop: hp("2.7%")

  },
  categorytext: {
    fontFamily: "outfit-medium",
    fontSize: hp("2.2%")
  },
  categoryimages:{
    width:hp('6%'),
    height:hp('6%'),
    borderRadius:5
    
  },
  imageview:{
    backgroundColor:Colors.Second,
    padding:hp("1%"),
    alignItems:"center",
    borderWidth:1,
    borderRadius:15,
    margin:hp("1%"),
    borderColor:Colors.PRIMARY
  },
  categorynametext:{
    textAlign:"center",
    fontFamily:"outfit-bold"
  },
  selectedCategorycont:{
    backgroundColor:Colors.SecondLight,
    borderColor:Colors.SecondLight,
  }
})