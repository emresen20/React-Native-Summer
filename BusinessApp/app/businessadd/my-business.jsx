import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useUser } from '@clerk/clerk-expo';
import {db} from "../../config/FirebaseConfig"
import { collection, getDocs, query, where } from 'firebase/firestore';
import BusinessListCard from "../../components/explore/BusinessListCard"
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';

const MyBusiness = () => {

    const {user}=useUser();

    const [businessList,setBusinessList]= useState([])
    const [loading,setLoading]=useState(false);
    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:"My Business",
            headerStyle:{
                backgroundColor:Colors.PRIMARY
            }
        })
        user && GetUserBusiness()
    },[user])

   const GetUserBusiness=async()=>{
    setLoading(true)
    setBusinessList([])
    const q=query(collection(db,"BusinessList"),
    where('userEmail','==',user?.primaryEmailAddress?.emailAddress));

    const querySnapshot=await getDocs(q);

    querySnapshot.forEach((doc)=>{
        console.log(doc.data())
        setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
    setLoading(false)
   }

  return (
    <View style={styles.container}>
      <Text style={styles.mytext}>MyBusiness</Text>
      <FlatList
      onRefresh={GetUserBusiness}
      refreshing={loading}
      showsVerticalScrollIndicator={false}
      data={businessList}
      renderItem={({item,index})=>(
        <BusinessListCard business={item} key={index}/>
      )}
      
      />
      
    </View>
  )
}

export default MyBusiness

const styles = StyleSheet.create({
    container:{
        padding:hp("2%")
    },
    mytext:{
        fontFamily:"outfit-bold",
        fontSize:hp('3.1%')
    }
})