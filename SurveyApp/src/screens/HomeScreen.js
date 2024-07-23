import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import client from '../Apollo';
import { gql } from '@apollo/client';
import Questions from '../Questions/Questions';
import AddButton from '../components/AddButton';
import AddNewModal from '../components/AddNewModal';

const HomeScreen = ({navigation}) => {
   const [modalVisiale,setModalVisiable]=useState(false)
   React.useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>(
            <AddButton  icon_name="plus" onPress={()=> setModalVisiable((prev)=> !prev)}/>
        ),
        headerLeft:()=>(
          <AddButton icon_name="user" onPress={()=> navigation.navigate("ProfileScreen")} />
      )
        
    })
   })
  return (
    <View>
      <Questions/>
      <Modal 
        animationType='slide'
        visible={modalVisiale}
        onRequestClose={()=> setModalVisiable(false)}
        
        
        >
           <AddNewModal closeModal={()=>setModalVisiable(false)}/>
        
      </Modal>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})