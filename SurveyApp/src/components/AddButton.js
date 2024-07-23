import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const AddButton = ({onPress,icon_name}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{marginHorizontal:"auto"}}>
      <AntDesign name={icon_name} size={28} color="green" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({})