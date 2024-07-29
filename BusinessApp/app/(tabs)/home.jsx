import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'

const home = () => {
  return (
    <SafeAreaView>
      {/* {HEAder} */}

      <Header/>
      {/* {Slider} */}
      <Slider/>
      {/* {CAtegory} */}
      {/* {Popular Business List} */}
    </SafeAreaView>
  )
}

export default home