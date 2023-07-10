import * as React from 'react'
import { View, Text, Button, Pressable  } from "react-native"
import globalColors, { colors, radius } from "../../../../globalColors";
import { StatusBar } from "react-native";
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import UnsuccessCard from './unsuccesCard';
import store from '../../../store/store';
import InfoSection from './modalSection';
import SuccessCard from './successCard';


export default function AuthModal(props:{
    isSuccessful: boolean, changeState:any
}){

React.useEffect(()=>{
    setTimeout(() => {
        StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.28)')
    }, 260);
})


let styles={
    background:{   
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.28)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center', 
}}


    return (
        
        <Pressable style={styles.background}
            onPress={()=> props.changeState()}>
            {/* <StatusBar backgroundColor={'rgba(0, 0, 0, 0.37)'}></StatusBar> */}
            {props.isSuccessful? <SuccessCard></SuccessCard>:<UnsuccessCard></UnsuccessCard>}

        </Pressable>
        
    )
}