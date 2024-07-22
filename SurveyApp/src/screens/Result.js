import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSubscription } from '@apollo/client'
import { RESULTS_SUBSCRIPTION } from './queriesdetail'
import Loading from '../components/Loading'
import Resultsitem from '../components/Resultsitem'

const Result = ({id}) => {

    const {loading,data} = useSubscription(RESULTS_SUBSCRIPTION,{
        variables:{
            id, // queriesdetailde id veridiğimiz için id:... yapmaya gerek kalmadı
        }
    })
    if(loading){
        return <Loading/>
    }

    const {options}= data.questions_by_pk;
    const total= options.reduce(
        (total,item)=>total+item.answers_aggregate.aggregate.count,0) //toplam kaç adet var
    
  return (
    <View>
     
      {
        options.map((item)=>(
            <Resultsitem key={item.id} item={item} total={total}/>
        ))
      }
    </View>
  )
}

export default Result

const styles = StyleSheet.create({})