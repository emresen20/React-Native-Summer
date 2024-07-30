import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'

const home = () => {
  return (
    <SafeAreaView>
      {/* {HEAder} */}

      <Header/>
      {/* {Slider} */}
      <Slider/>
      {/* {CAtegory} */}
      <Category/>
      {/* {Popular Business List} */}
    </SafeAreaView>
  )
}

export default home