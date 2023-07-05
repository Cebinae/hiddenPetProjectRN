import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestingMain from './tabsNav';
import Auth from '../screens/auth/auth';
import store from '../store/store';

export default function InitialRoute(){

const Stack = createNativeStackNavigator()

    return store.getState().settings.isLogged? (
        
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ 'main'} screenOptions={{headerShown: false}}>
       
          <Stack.Screen name='auth' component={Auth} navigationKey={'auth'} ></Stack.Screen>
          <Stack.Screen name= 'main' component={TestingMain} navigationKey={'main'}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    ):(<NavigationContainer>
      <Stack.Navigator initialRouteName={'auth' } screenOptions={{headerShown: false}}>
     
        <Stack.Screen name='auth' component={Auth} navigationKey={'auth'} ></Stack.Screen>
        <Stack.Screen name= 'main' component={TestingMain} navigationKey={'main'}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>)
}