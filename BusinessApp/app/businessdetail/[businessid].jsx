import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { collection, doc, getDoc, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import { Colors } from '../../constants/Colors'
import Intro from '../../components/BusinessDetail/Intro'
import ActionButton from '../../components/BusinessDetail/ActionButton'
import About from '../../components/BusinessDetail/About'
import Reviews from '../../components/BusinessDetail/Reviews'


const BusinessDetail = () => {
  const { businessid } = useLocalSearchParams([])

  const [businessDetail, setBusinessDetail] = useState([])

  const [loading, setLoading] = useState(false)



  useEffect(() => {
    GetBusinessDetailById()
    console.log("businessDetail", businessDetail)
  }, [])

  const GetBusinessDetailById = async () => {
    setLoading(true)
    const docRef = doc(db, 'BusinessList', businessid)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("datammmm", docSnap.data())
      setBusinessDetail({id:docSnap.id,...docSnap.data()})
      setLoading(false)

    } else {
      console.log("No data")

    }

  }


  return (
    <ScrollView style={{height:"300%"}}>
      {loading ?
        <ActivityIndicator size={"large"} color={Colors.PRIMARY}
          style={{ marginTop: "85%" }}
        /> :
        <View>
          {/* Intro Conponents businessDetail */}
          <Intro business={businessDetail} />

          {/* Action Buttons */}
          <ActionButton business={businessDetail} />

          {/* About Section */}
          
          <About business={businessDetail} />

          {/* revies */}
          <Reviews business={businessDetail}/>

        </View>
      }

    </ScrollView>
  )
}

export default BusinessDetail

const styles = StyleSheet.create({})