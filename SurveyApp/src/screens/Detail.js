import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useQuery } from '@apollo/client';
import { GET_QUESTION_DETAIL } from './queriesdetail';
import Loading from '../components/Loading';
import Form from '../components/Form';

const Detail = () => {
    const route=useRoute();
    const {id}=route.params
    console.log("id",id)
    const {loading,data}= useQuery(GET_QUESTION_DETAIL, {
        variables:{
            id,
        }
    })

    console.log("data",data)

    if(loading){
        return <Loading/>
    }

    const {text,options}= data.questions_by_pk;

  return (
    <View>
      <Text>{text}</Text>
      <Form options={options}/>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})