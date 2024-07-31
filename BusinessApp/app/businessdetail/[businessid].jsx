import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { collection, doc, getDoc, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import { Colors } from '../../constants/Colors'
import Intro from '../../components/BusinessDetail/Intro'

const BusinessDetail = () => {
  const {businessid}=useLocalSearchParams([])

  const [businessDetail,setBusinessDetail]=useState([])

  const [loading,setLoading]=useState(false)



  useEffect(()=> {
    GetBusinessDetailById()
    console.log("businessDetail",businessDetail)
  },[])

  const GetBusinessDetailById=async()=>{
      setLoading(true)
      const docRef=doc(db,'BusinessList',businessid)
      const docSnap=await getDoc(docRef);
      if(docSnap.exists()){
        console.log("datammmm",docSnap.data())
        const data = docSnap.data()
        setBusinessDetail(data)
        setLoading(false)
        
      }else{
        console.log("No data")
       
      }
      
  }


  return (
    <View>
      {loading?
      <ActivityIndicator size={"large"} color={Colors.PRIMARY} 
        style={{marginTop:"85%"}}
      />:
        <View>
          {/* Intro Conponents businessDetail */}
          <Intro business={businessDetail}/>

          {/* Action Buttons */}


          {/* About Section */}
          </View>
      }
      
    </View>
  )
}

export default BusinessDetail

const styles = StyleSheet.create({})