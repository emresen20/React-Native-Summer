import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import client from '../Apollo';
import { gql } from '@apollo/client';
import Questions from '../Questions/Questions';

const HomeScreen = () => {
   
  return (
    <View>
      <Questions/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})