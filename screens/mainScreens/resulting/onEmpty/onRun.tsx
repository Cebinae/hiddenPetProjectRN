import { View, Text } from "react-native"
import * as React from 'react'
import { colors } from "../../../../globalColors"




export default function OnRun() {

    const styles = {
        wrapper:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'center'
        },
        title:{
            fontSize:23,
            color:colors.lightPrimary,
            marginTop:'15%'           
        },
        subtitle:{
            fontSize:14,
            color:colors.lightSecondary
        }
    }

    return(

        <View style={styles.wrapper}>
            <Text style={styles.title}>Service is running!</Text>
            <Text style={styles.subtitle}>Results will appear soon...</Text>
        </View>
    )
}