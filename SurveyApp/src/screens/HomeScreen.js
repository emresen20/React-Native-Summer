import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import client from '../Apollo';
import { gql } from '@apollo/client';

const HomeScreen = () => {
    useEffect(()=>{
        client
  .query({
    query: gql`
      query  QuestionsQuery{
      questions{
      id
      text
      }
      }
    `,
  })
  .then((result) => console.log(result.data));
    })
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})