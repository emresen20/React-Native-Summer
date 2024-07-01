import React from 'react'
import { View,Text } from 'react-native'
import { useSelector } from 'react-redux'

const Foo = () => {
    const mevcut= useSelector(state=>state.counter)
  return (
    <View>
      <Text>
       Foo  {mevcut.count}
      </Text>
      <Text>
      {mevcut.author.name}
      </Text>
    </View>
  )
}

export default Foo
