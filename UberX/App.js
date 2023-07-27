import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import {store} from './store'
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './Screens/MapScreen';
import EatScreen from './Screens/EatScreen';
const App = () => {
  const Stack=createStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          <Stack.Screen name='MapScreen' component={MapScreen}/>
          <Stack.Screen name='EatScreen' component={EatScreen}/>
        </Stack.Navigator>
          
      </NavigationContainer>
       
    </Provider>
   
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
