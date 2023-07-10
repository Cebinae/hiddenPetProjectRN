import * as React from 'react'
import {View, Text} from 'react-native'
import { colors } from '../../../../globalColors'


export default function ErrorLine(props:{message:string} ){

    let errorStyles = {
        wrapper:{
            height:'40%'
        },
        text:{
            color:colors.lightSecondary,
            marginLeft:'3%'
        }
    }


    return(<View style={errorStyles.wrapper}>
        <Text style={errorStyles.text}>{props.message}</Text>
    </View>)
}
    
