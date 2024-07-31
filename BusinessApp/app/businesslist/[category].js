import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { db } from "../../config/FirebaseConfig"
import { collection, getDocs, query, where } from 'firebase/firestore'
import BusinessListCard from '../../components/BusinessList/BusinessListCard'

const BusinesssListByCategory = () => {

    const navigation=useNavigation();

    const {category}=useLocalSearchParams() // [category] ile aynı adda olma routing ile yolanan dinamik veri

    const [businessList,setBusinessList]=useState([]);


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:category
        });
        getBusinessList();
    },[])

    const getBusinessList=async()=>{
      setBusinessList([])
      const q=query(collection(db,"BusinessList"),where("category","==",category));
      const querySnapShot = await getDocs(q);

      querySnapShot.forEach((doc)=>{
        setBusinessList(prev=>[...prev,doc.data()])
        console.log(doc.data())
      }
        
       
      )
      
    }
  return (
    <View>
      {businessList?.length>0?
         <FlatList
         data={businessList}
         renderItem={({item,index})=>(
           <BusinessListCard 
           key={index}
           business={item}/>
         )}
 
       />:
       <Text 
        style={{
          fontSize:20,
          fontFamily:"outfit-bold",
          textAlign:"center",
          marginTop:'80%'
          
        }}>
          No Business Found
       </Text>
    }
     
    </View>
  )
}

export default BusinesssListByCategory

const styles = StyleSheet.create({})