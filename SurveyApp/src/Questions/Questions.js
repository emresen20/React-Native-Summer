import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { gql, useQuery, useSubscription } from '@apollo/client'
import { GET_QUESTIONS_Subscription } from './queries';
import Loading from '../components/Loading';
import { useNavigation } from '@react-navigation/native';



const Questions = () => {
  const navigation = useNavigation()

    const { data ,loading,error} = useSubscription(GET_QUESTIONS_Subscription);
    console.log("data",data)
    if(loading){
       return <Loading/>
    }
    if(error){
        return <Text>{JSON.stringify(error)}</Text>
    }
    if (data && data.questions) {
        return (
          <>
            {data.questions.map((question, index) => (
                <TouchableOpacity 
                onPress={()=> navigation.navigate("Detail",{
                  id:question.id
                })}
                key={index} 
                style={{
                    alignItems:"center",
                    borderBottomWidth:1,
                    borderColor:"green",
                    padding:10
                    }}> 
                    <Text >{question.text}</Text>
                </TouchableOpacity>
              
            ))}
          </>
        );
      }
    
      return null;
}

export default Questions

const styles = StyleSheet.create({})