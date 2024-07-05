import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { logout } from '../Stores/Slice'

const HomeScreen = () => {

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"red"}}>
      <TouchableOpacity onPress={()=> dispatch(logout())}>
        <Text>Çıkış</Text>
      </TouchableOpacity>
        
    </SafeAreaView>
      
    
  )
}

export default HomeScreen
