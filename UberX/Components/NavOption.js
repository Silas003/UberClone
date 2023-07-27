import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

const data=[
    {
        id:'123',
        title:'get a ride',
        image:require('../assets/tesla.webp'),
        screen:'MapScreen'
    },
    {
        id:'456',
        title:'Order Food',
        image:require('../assets/food.jpg'),
        screen:'EatScreen'
    }
]
const NavOption = () => {
    const navigation=useNavigation()
  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <TouchableOpacity  onPress={()=>navigation.navigate(item.screen)}
        className='flex-1 h-60 items-center justify-between ml-4 w-50  border-2 border-gray-300 rounded-3xl'>
          
                <Image
                    style={{ resizeMode:"contain"}}
                    source={ item.image}
                    className=' h-48 w-44'
                />
                <View className='flex-row items-center justify-center p-3'>
                <Text className='text-lg font-bold '>{item.title}</Text>
                <View className='rounded-full ml-3 bg-neutral-400'>
                    <Icon.ArrowRight stroke={'white'} strokeWidth={3}/>
                </View>
                
                </View>
                
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOption
