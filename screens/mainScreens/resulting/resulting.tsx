import { View} from "react-native"
import * as React from "react";
import {useSelector} from "react-redux";
import CustomHeader from "../header";
import { colors } from "../../../globalColors";
import ItemsPool from "./itemsPool";
import Start from "./startButton";


export default function Resulting(){

    const styles= {
        background:{      
            backgroundColor: colors.bg1000,
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center',
            flex:1,
            height:'120%' 
        },  
    }


    return(
    <View style={styles.background}>
        <CustomHeader name={'Results'} StatusBarColor={useSelector((state)=> state.resulting.statusbarColor)}></CustomHeader>

        <ItemsPool ></ItemsPool>
    <Start></Start>

  </View>
    )
}