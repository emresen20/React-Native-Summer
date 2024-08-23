import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import PetListItem from './PetListItem'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const PetListByCategory = () => {

  const [petList,setPetList]=useState([])
  const [loading,setLoading]=useState(false)
  
  useEffect(()=>{
    GetPetList("Birds")
  },[])





  
  const GetPetList=async(category)=>{
    setLoading(true)
    setPetList([])
    const q=query(collection(db,'Pets'),where("category",'==',category))
    const querySnapshot=await getDocs(q)

    querySnapshot.forEach(doc=>{
      setPetList(petList=>[...petList,doc.data()])
    })
    setLoading(false)

  }

  return (
    <View>
      <Category category={(category)=>GetPetList(category)}/>
      <FlatList
      style={{marginTop:hp("1%")}}
      horizontal
      refreshing={loading}
      onRefresh={()=>GetPetList("Birds")}
      data={petList}
      renderItem={({item,index})=>(
        <PetListItem pet={item}/>
      )}
      />
    </View>
  )
}

export default PetListByCategory

const styles = StyleSheet.create({})