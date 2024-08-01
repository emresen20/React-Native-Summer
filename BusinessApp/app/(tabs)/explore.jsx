import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import Category from "../../components/Home/Category"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import ExploreBusinessList from '../../components/explore/ExploreBusinessList';


const explore = () => {

  const [businessList,setBusinessList]=useState([])

  const GetBusinessListByCategory=async (category)=>{
    setBusinessList([])
    const q=query(collection(db,"BusinessList"),where("category","==",category));
    const querySnapshot=await getDocs(q)
    querySnapshot.forEach((doc)=>{
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
  }


  return (
    <View style={styles.container}>
    <Text style={styles.exploreText}>
      Explore More
      </Text>
    {/* SearchBar */}
    <View style={styles.searchbarview}>
            <AntDesign name="search1" size={24} color={Colors.PRIMARY}/>
            <TextInput placeholder='Search...'  style={{fontFamily:"outfit",fontSize:16}}/>
            </View>

    {/* Category */}
      <Category
      explore={true}
      onCategorySelect={(val)=>GetBusinessListByCategory(val)}
      
      />
    {/* BusinessList */}
    <ExploreBusinessList businessList={businessList}/>
  </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  exploreText:{
    fontFamily:"outfit-bold",
    fontSize:25,
    marginTop:10
  },
  searchbarview:{
    flexDirection:"row",
    gap:10,
    alignItems:"center",
    backgroundColor:"white",
    padding:10,
    marginVertical:10,
    marginTop:16,
    borderRadius:8,
    borderWidth:1,
    borderColor:Colors.PRIMARY
}
})