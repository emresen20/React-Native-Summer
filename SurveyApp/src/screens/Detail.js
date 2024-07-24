import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useMutation, useQuery } from '@apollo/client';
import { GET_QUESTION_DETAIL } from './queriesdetail';
import Loading from '../components/Loading';
import Form from '../components/Form';
import Result from './Result';
import { auth } from '../auth';
import { DELETE_QUESTION_MUTATION } from '../Questions/queries';

const Detail = () => {
    const route=useRoute();
    const {id,user_id}=route.params
    const navigation=useNavigation();

    
    console.log("auth.currentUser.uid",auth.currentUser.uid)

    const [deleteQuestion]= useMutation(DELETE_QUESTION_MUTATION,{
      variables:{
        id
     
      }
    })

    const handleDelete= async()=>{
      await deleteQuestion()
            
    }

    const [isVoted,setIsVoted]=useState(false);

    console.log("id",id)
    const {loading,data}= useQuery(GET_QUESTION_DETAIL, {
        variables:{
            id,
            user_id:auth.currentUser?.uid
        },
        fetchPolicy:"network-only" // oy verdikten sonra bir daha oy verilememesi için datamıza yeni güncelleme atıyor
    })

    

    if(loading){
        return <Loading/>
    }

    const {text,options,answers}= data.questions_by_pk;

  return (
    <View style={{margin:10}}>
      <Text>{text}</Text>
      {
        (!isVoted && answers.length < 1 ) ?<Form options={options} setIsVoted={setIsVoted} id={id} user_id={user_id}/>
        :<Result id={id}  user_id={user_id}/>
      }

      {/* <Pressable   onPress={() => {
                  if (auth.currentUser.uid === user_id) {
                    handleDelete();
                    alert("silindi")
                    navigation.navigate("HomeScreen")
                  } else {
                    alert("Bu size ait değil");
                  }
                }}
              >
        <Text>sil</Text>
      </Pressable> */}
      
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})