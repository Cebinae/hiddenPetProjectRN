import * as React from 'react'
import { View, Text, TextInput} from "react-native"
import { colors, radius } from '../../../globalColors'

export default function KeyInputSection (props:{
    sectionLabel:string, placeholder:string, passToParentFnc:Function, setStatus:Function
}){


    const [error, setError] = React.useState('')

    let styles ={
        inputLabel: {
            fontSize: 20,
            color:colors.lightPrimary    
        },

        inputField:{
            height:'45%',
            color:colors.lightPrimary,
            backgroundColor:colors.bg100,
            marginTop:'2%',
            padding:0,
            paddingLeft:'3%',
            borderRadius:radius.tiny,

            shadowColor: "#000",
            shadowOffset:{
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,            
        },
        aroundInput:{
            height:'30%',
            width:'85%'
        }
    }

    let errorStyles = {
        wrapper:{
            height:'40%'
        },
        text:{
            color:colors.lightSecondary,
            marginLeft:'3%'
        }
    }

    let ErrorSection = (props:{message:string} )=>(
        <View style={errorStyles.wrapper}>
            <Text style={errorStyles.text}>{props.message}</Text>
        </View>
    )
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
    }

    return(


        <View style={styles.aroundInput}>
                <Text style={styles.inputLabel}>{props.sectionLabel}</Text>
                <TextInput placeholder={props.placeholder} style={styles.inputField} onChangeText={(text)=> validate(text)}
                           placeholderTextColor={colors.lightSecondary}
                ></TextInput>
                <ErrorSection message={error}></ErrorSection>
        </View>
    )
}