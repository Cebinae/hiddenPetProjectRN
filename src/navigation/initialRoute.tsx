import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestingMain from './tabsNav';
import Auth from '../screens/auth/auth';
import store from '../store/store';
import RNBootSplash from "react-native-bootsplash";
import { StatusBar } from 'react-native';
import { colors } from '../../globalColors';


export default function InitialRoute(){

const Stack = createNativeStackNavigator()
const hideSplash = async()=> {
  StatusBar.setBackgroundColor(colors.bg1000) 
await RNBootSplash.hide({ fade: true, duration: 50 }) 
StatusBar.setBackgroundColor(colors.bg1000)
}


    return store.getState().settings.isLogged? (
        
      <NavigationContainer 
      onReady={hideSplash}
      >
        <Stack.Navigator initialRouteName={ 'main'} screenOptions={{headerShown: false, navigationBarColor:colors.bg400}}>
       
          <Stack.Screen name='auth' component={Auth} navigationKey={'auth'} ></Stack.Screen>
          <Stack.Screen name= 'main' component={TestingMain} navigationKey={'main'}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    ):(<NavigationContainer 
    onReady={hideSplash}
    >
      <Stack.Navigator initialRouteName={'auth' } screenOptions={{headerShown: false}}>
     
        <Stack.Screen name='auth' component={Auth} navigationKey={'auth'} ></Stack.Screen>
        <Stack.Screen name= 'main' component={TestingMain} navigationKey={'main'}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>)
}