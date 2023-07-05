import { Dimensions, Text, View } from "react-native";
import * as React from 'react'
import { useSelector } from "react-redux";
import { colors } from "../../../../globalColors";
import OnIdle from "./onIdle";
import OnRun from "./onRun";

export default function OnEmptyList(props:{
        isRunning:boolean
    }) {

let styles={
        wrapper:{
            height:Dimensions.get('window').height*0.81,        
            width:'100%',
            backgroundColor:colors.bg1000,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'flex-start'
        },
       
        
}

    let isRunning = useSelector((state)=>state.resulting.isRunning)

    return(
        <View style={styles.wrapper}>
            {isRunning? <OnRun></OnRun>:<OnIdle></OnIdle>}         
        </View>
    )
}