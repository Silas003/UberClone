import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text >Hello, Tailwind CSS in Expo!</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
export default App;
