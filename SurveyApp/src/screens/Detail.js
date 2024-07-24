import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useQuery } from '@apollo/client';
import { GET_QUESTION_DETAIL } from './queriesdetail';
import Loading from '../components/Loading';
import Form from '../components/Form';
import Result from './Result';
import { auth } from '../auth';

const Detail = () => {
    const route=useRoute();
    const {id}=route.params

    const [isVoted,setIsVoted]=useState(false);

    console.log("id",id)
    const {loading,data}= useQuery(GET_QUESTION_DETAIL, {
        variables:{
            id,
            user_id:auth.currentUser?.uid
        },
        fetchPolicy:"network-only" // oy verdikten sonra bir daha oy verilememesi için datamıza yeni güncelleme atıyor
    })

    console.log("data",data)

    if(loading){
        return <Loading/>
    }

    const {text,options,answers}= data.questions_by_pk;

  return (
    <View style={{margin:10}}>
      <Text>{text}</Text>
      {
        (!isVoted && answers.length < 1 ) ?<Form options={options} setIsVoted={setIsVoted} id={id}/>
        :<Result id={id}/>
      }
      
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})