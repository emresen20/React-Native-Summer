import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/FirebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'



const Slider = () => {

    const [sliderList,setSliderList]=useState([])

    useEffect(()=>{
        GetSliderList();
        console.log("dsfsd")
    },[])


const GetSliderList=async()=>{
    setSliderList([])
    const q=query(collection(db,"Slider"))
    const querySnapshot=await getDocs(q)

    querySnapshot.forEach((doc)=>{
        console.log("doc.data",doc.data())
        setSliderList(prev=>[...prev,doc.data()]);
        console.log("sliderlist",sliderList)
    })
}
   
  return (
    <View>
      <Text style={styles.textspecial}>
        #Special For You
        </Text>
        <FlatList
        style={styles.flatliststyle}
        data={sliderList}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({item,index})=>(
            <Image
            style={{
                width:240,
                height:150,
                borderRadius:15,
                marginRight:15
            }}
            source={{uri:item.imageUrl}}
            
            />
        )}
        
        />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    textspecial:{
        fontFamily:"outfit-bold",
        fontSize:20,
        paddingLeft:18,
        paddingTop:18,
        marginBottom:3
    },
    flatliststyle:{
        padding:20
    }
})