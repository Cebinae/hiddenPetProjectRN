import * as React from 'react'
import { View, Text, TextInput} from "react-native"
import { colors } from '../../../../globalColors'
import ErrorLine from './errorLine'
import { stylesInput } from './stylesInput'

export default function KeyInputSection (props:{
    sectionLabel:string, placeholder:string, passToParentFnc:Function, setStatus:Function
}){


    const [error, setError] = React.useState('')
    const regexpHexx = /^[0-9a-fA-F]+$/;

    const onPassed = (payload:string)=>{
        setError('')
        props.passToParentFnc(payload)
        props.setStatus(true)
    }
    const onFailed = (payload:string)=>{
        setError('Hexadecimal key is required')
        props.setStatus(false)
    }


    const validate = (text:string)=>{
        regexpHexx.test(text)?onPassed(text):onFailed(text)
        !text?setError(''):null
    }

    return(
        <View style={stylesInput.aroundInput}>
                <Text style={stylesInput.inputLabel}>{props.sectionLabel}</Text>
                <TextInput placeholder={props.placeholder} style={stylesInput.inputField} onChangeText={(text)=> validate(text)}
                           placeholderTextColor={colors.lightSecondary}
                ></TextInput>
                <ErrorLine message={error}></ErrorLine>
        </View>
    )
}