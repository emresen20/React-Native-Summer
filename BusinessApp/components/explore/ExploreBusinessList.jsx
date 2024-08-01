import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'

const ExploreBusinessList = ({businessList}) => {
  return (
    <ScrollView>
      <FlatList
      data={businessList}
      renderItem={({item,index})=>(
        <BusinessListCard 
        key={index}
        business={item}/>
      )}
      />
      <View style={{height:200}}> 

      </View>
    </ScrollView>
  )
}

export default ExploreBusinessList

const styles = StyleSheet.create({})