import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { GET_QUESTIONS_QUERY } from './queries';



const Questions = () => {

    const { data ,loading,error} = useQuery(GET_QUESTIONS_QUERY);
    console.log("data",data)
    if(loading){
       return <Text>loading...</Text>
    }
    if(error){
        return <Text>{JSON.stringify(error)}</Text>
    }
    return <Text>{JSON.stringify(data.questions[0].text)}</Text>
}

export default Questions

const styles = StyleSheet.create({})