import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import PetListItem from './PetListItem'

const PetListByCategory = () => {

  const [petList,setPetList]=useState([])
  
  useEffect(()=>{
    GetPetList("Birds")
  },[])





  const GetPetList=async(category)=>{
    const q=query(collection(db,'Pets'),where("category",'==',category))
    const querySnapshot=await getDocs(q)

    querySnapshot.forEach(doc=>{
      setPetList(petList=>[...petList,doc.data()])
    })

  }

  return (
    <View>
      <Category category={(category)=>GetPetList(category)}/>
      <FlatList
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