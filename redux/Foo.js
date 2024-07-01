import React from 'react'
import { View,Text } from 'react-native'
import { useSelector } from 'react-redux'

const Foo = () => {
    const mevcut= useSelector(state=>state.counter)
  return (
    <View>
      <Text>
        {mevcut.count}
      </Text>
    </View>
  )
}

export default Foo
