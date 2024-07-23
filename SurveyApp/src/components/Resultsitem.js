import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const Resultsitem = ({item,total}) => {
  const percentage = (item.answers_aggregate.aggregate.count * 100) / total;
  const progress = percentage / 100;
  return (
    <View style={{margin:10}}>
      <Text>
        {item.text} (%{percentage.toFixed(1)})
        {"-"}
        {item.answers_aggregate.aggregate.count}
        </Text>
        <Progress.Bar progress={progress} width={300} height={18}  style={{marginTop:5}}/>
    </View>
  )
}

export default Resultsitem