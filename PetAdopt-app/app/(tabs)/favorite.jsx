import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Shared from '../../Shared/Shared';
import { useUser } from '@clerk/clerk-expo';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import PetListItem from '../../components/Home/PetListItem';

const Favorite = () => {
    const {user}=useUser()

    const [favIds,setFavIds]=useState([]);
    const [favListById,setFavListById]=useState([]);
    const [loader,setLoader]=useState(false)


  useEffect(()=>{
    user&&GetFavPetIds();
    },[user])




  //Favorites Ids
  const GetFavPetIds=async()=>{
    setLoader(true)
   const result= await Shared.GetFavList(user);
    setFavIds(result?.favorites)
    setLoader(false)
    GetFavPetList(result?.favorites);
    
  }

  // Fetch Related Pet List

  const GetFavPetList=async(favId_)=>{
    setLoader(true)
    setFavListById([])
    const q=query(collection(db,'Pets'),where('id','in',favId_));
    const querySnapShot=await getDocs(q);

    querySnapShot.forEach((doc)=>{
      console.log("doc.data()",doc.data())
     setFavListById(prev=>[...prev,doc.data()])
    })
    setLoader(false)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.favoritestext}>Favorites</Text>
      <FlatList
      data={favListById}
      onRefresh={GetFavPetIds}
      refreshing={loader}
      contentContainerStyle={styles.listContentContainer}
      renderItem={({item,index})=>(
        <View style={styles.flatCont}>
          <PetListItem pet={item}/>
        </View>
      )}
      />
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({
  container:{
    padding:hp('2%'),
    marginTop:hp('2%')
  },
  favoritestext:{
    fontFamily:"outfit-bold",
    fontSize:hp('2.8%')
  },
  flatCont:{
    marginTop:hp('2%')
  },
  listContentContainer: {
    paddingBottom: hp('10%'),  // Alt kısma boşluk ekleyin
}

})