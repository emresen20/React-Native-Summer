import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../auth'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

const Profile = () => {
    const navigation = useNavigation();

    const handleSignOut=()=>{
        auth.signOut().
        then(()=> navigation.reset({
            index:0,
            routes:[{name:"LoginScreen"}]
        })) //replace ile yerine geçilmesinden korunuyoruz
        .catch((error)=>alert(error.message));
    }

    //.then(()=> navigation.reset({   Bu şekilde eğer screenoptionstan geri dönmeyi engelledik
    // index:0,     
    // routes:[{name:"Login"}]
    //}))
  return (
    <View   
        style={{
            justifyContent:"center",
            alignItems:"center",
            flex:1
        }}>
      <Text>Welcome {auth.currentUser?.email}</Text>
      <Pressable 
        onPress={handleSignOut}
        style={{
            
           
            margin:20,
           
            borderRadius:6,
           
        }}>
            <AntDesign name="logout" size={50} color="red" />
      </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})