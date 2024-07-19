import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="plus" size={28} color="green" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({})