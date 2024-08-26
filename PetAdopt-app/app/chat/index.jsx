import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import { useUser } from '@clerk/clerk-expo';

const ChatScreen = () => {
    const params=useLocalSearchParams();
    const {user}=useUser();
    
    useEffect(()=>{
        GetUserDetails();
    },[])



    const GetUserDetails=async()=>{
         const docRef=doc(db,'Chat',params?.id);
         const docSnap=await getDoc(docRef);

         const result=docSnap.data();
         console.log("result",result)
         const otherUser=result?.users.filter(item=>item.email!=user?.primaryEmailAddress?.emailAddress)
         console.log("otherUser",otherUser)
    }
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})