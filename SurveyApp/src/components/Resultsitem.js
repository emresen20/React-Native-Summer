import { View, Text } from 'react-native'
import React from 'react'

const Resultsitem = ({item,total}) => {
  return (
    <View style={{margin:10}}>
      <Text>
        {item.text} (%{(((item.answers_aggregate.aggregate.count *100)/total)).toFixed(1)})
        {"-"}
        {item.answers_aggregate.aggregate.count}
        </Text>
    </View>
  )
}

export default Resultsitem