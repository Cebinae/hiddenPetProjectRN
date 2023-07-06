import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestingMain from './tabsNav';
import Auth from '../screens/auth/auth';
import store from '../store/store';
import RNBootSplash from "react-native-bootsplash";



export default function InitialRoute(){

const Stack = createNativeStackNavigator()
const hideSplash = async()=> await RNBootSplash.hide({ fade: true, duration: 500 }) 


    return store.getState().settings.isLogged? (
        
      <NavigationContainer onReady={hideSplash}>
        <Stack.Navigator initialRouteName={ 'main'} screenOptions={{headerShown: false}}>
       
          <Stack.Screen name='auth' component={Auth} navigationKey={'auth'} ></Stack.Screen>
          <Stack.Screen name= 'main' component={TestingMain} navigationKey={'main'}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    ):(<NavigationContainer onReady={hideSplash}>
      <Stack.Navigator initialRouteName={'auth' } screenOptions={{headerShown: false}}>
     
        <Stack.Screen name='auth' component={Auth} navigationKey={'auth'} ></Stack.Screen>
        <Stack.Screen name= 'main' component={TestingMain} navigationKey={'main'}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>)
}