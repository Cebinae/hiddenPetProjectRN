import * as React from "react";
import {Dimensions} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Settings from "../screens/tabScreens/settings/settings";
import SetList from "../screens/tabScreens/configure/setLists";
import Resulting from "../screens/tabScreens/results/resulting";
import { useSelector } from "react-redux"
import { colors } from "../../globalColors";


export default function TestingMain (props:{
    swipes:boolean
}){

const Tab = createMaterialTopTabNavigator();
const barSelector = useSelector(state => state.lists.displayBar)       //here i change display style (flex/none) by listsReducer //ok, bad decision, lags
                                                                        //nvm, its ok at prod
 
const options = { 
    tabBarStyle:{
        display:barSelector, 
        height:Dimensions.get('window').height/100*6,
        backgroundColor: colors.bg400,
        margin:0,
        padding:0,        
    },
    tabBarItemStyle:{
        backgroundColor: colors.bg400,
        innerHeight:'100%',
        justifyContent:'flex-start',
    },
    tabBarAndroidRipple:{
         borderless: true ,
    },
    tabBarIndicator:()=>false,
    navigationBarColor:colors.bg700,
    tabBarIndicatorStyle:{backgroundColor: colors.green},
    tabBarInactiveTintColor: colors.lightSecondary,
    tabBarActiveTintColor: colors.green,   
}
    
    return(
            <Tab.Navigator 
                
                initialRouteName={'Resulting'}
                backBehavior={'initialRoute'} tabBarPosition='bottom' /*tabBar={TabBar}*/ screenOptions={options}>

                <Tab.Screen name="Resulting" component={Resulting} options={{title:'Results'}}></Tab.Screen>               
                <Tab.Screen name="SetList" component={SetList} options={{title:'Configure'}}></Tab.Screen>
                <Tab.Screen name="Settings" component={Settings} ></Tab.Screen>  

            </Tab.Navigator>
        )
}