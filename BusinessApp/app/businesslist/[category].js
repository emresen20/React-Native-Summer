import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { db } from "../../config/FirebaseConfig"
import { collection, getDocs, query, where } from 'firebase/firestore'
import BusinessListCard from '../../components/BusinessList/BusinessListCard'
import LottieView from 'lottie-react-native'
import { Colors } from '../../constants/Colors'

const BusinesssListByCategory = () => {

    const navigation=useNavigation();

    const [loading,setLoading]=useState(false)

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
      setLoading(true)
      setBusinessList([])
      const q=query(collection(db,"BusinessList"),where("category","==",category));
      const querySnapShot = await getDocs(q);

      querySnapShot.forEach((doc)=>{
        setBusinessList(prev=>[...prev,{id:doc?.id, ...doc.data()}])
        console.log(doc.data())
      }
        
       
      )
      setLoading(false)
      
    }
  return (
    <View>
      {businessList?.length>0 && loading==false?
         <FlatList
         onRefresh={getBusinessList} //yukarıdan çekince neyin tetikleneceği
         refreshing={loading}   // tetklenirken ne geleceği loadingin
         data={businessList}
         renderItem={({item,index})=>(
           <BusinessListCard 
           key={index}
           business={item}/>
         )}
 
       />:
       loading?
       <ActivityIndicator 
       size="large" 
       color={Colors.PRIMARY}
       style={{
          marginTop:"75%"
       }}
       
       />:

       <LottieView
         source={require("../../assets/animations/nodata.json")}
         autoPlay
         loop
         style={{
          width:300,
          height:300,
          marginTop:"50%",
          marginLeft:"17%"
          
         }}

        />
    }
     
    </View>
  )
}

export default BusinesssListByCategory

const styles = StyleSheet.create({})