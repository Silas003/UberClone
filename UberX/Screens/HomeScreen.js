import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavOption from '../Components/NavOption'

const {width,height}=Dimensions.get('window')
const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
        <View className='p-5'>
            <Image
            style={{height:100,
            width:100,
            resizeMode:'center'}}
            source={{uri:'https://links.papareact.com/gzs'}}/>
        </View>
        <NavOption/>
            
    </SafeAreaView>
      
  
  )
}

export default HomeScreen

const styles = StyleSheet.create({})