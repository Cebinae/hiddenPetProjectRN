import * as React from 'react'
import { Pressable  } from "react-native"
import { StatusBar } from "react-native";
import UnsuccessCard from './unsuccesCard';
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