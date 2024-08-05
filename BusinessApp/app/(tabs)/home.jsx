import { View, Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopulerBusiness from '../../components/Home/PopulerBusiness'

const home = () => {


  return (
    <ScrollView>
      {/* {HEAder} */}

      <Header />
      {/* {Slider} */}
      <Slider />
      {/* {CAtegory} */}
      <Category />
      {/* {Popular Business List} */}
      <PopulerBusiness />

      <View style={{ height: 20 }}>

      </View>
    </ScrollView>
  )
}

export default home