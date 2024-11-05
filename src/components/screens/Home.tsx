
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Home/Header'
import Course from '../Home/Course'
import Hero from '../Home/Hero'

const Home = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#2a3950', paddingHorizontal: 15}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Header />
        <Course />
        <Hero />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home