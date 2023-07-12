import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { sectionContext } from '../../setLists'
import { titleContext } from './setTitles'
import store from '../../../../../store/store'
import { colors, radius } from '../../../../../../globalColors'


export default function ClearBtn(props:{
    updateFnc, placeholderRef, clearFnc
}) {

    let styles = {
        parent:{
            backgroundColor:colors.darkOrange,
            width:'22%',
            height:'80%',
            marginLeft:3,
            position:'absolute',
            right:'-10%',
            elevation:9999,
            borderRadius:radius.tiny       
        },
        text:{
            color:colors.lightPrimary
        }
    }

let sectionID = React.useContext(sectionContext)    
let titleID = React.useContext(titleContext)

const clearThisInput=()=>{
    const strings = {
        1:'First',
        2:'Second',
        3:'Third',
        4:'Fourth',
        5:'Fifth'
    }
    const persisted = {
        1:'FirstPersistedSection',
        2:'SecondPersistedSection',
        3:'ThirdPersistedSection'
    }

    let actionClearTemp = {
            type:`${strings[sectionID]}List/set${strings[titleID]}Title`,
            payload:{
                value:null,
                isValid:'empty'
            }}           
    let actionClearPersisted = {
        type:`${persisted[sectionID]}/set${strings[titleID]}Title`,
        payload:{
            value:null,
            isValid:'empty'
        }}

    store.dispatch(actionClearTemp)
    store.dispatch(actionClearPersisted)
    props.placeholderRef=1
    props.clearFnc()
    props.updateFnc()
    
}

return (
    <TouchableOpacity style={styles.parent} onPress={clearThisInput}>
        <Text numberOfLines={1} style={styles.text}>{'clear'}</Text>
    </TouchableOpacity>
)
}