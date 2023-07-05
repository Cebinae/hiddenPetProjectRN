import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { sectionContext } from '../../setLists'
import { titleContext } from './setTitles'
import store from '../../../../../store/store'
import firstListSlice from '../../../../../store/listsSlices/listsTempState/firstListSlice'
import { colors, radius } from '../../../../../globalColors'


export default function ClearBtn(updateFnc, placeholderRef) {

    console.log('in props we have', placeholderRef)

    

    let styles = {
        parent:{
            backgroundColor:colors.red,
            width:'22%',
            height:'80%',
            marginLeft:3,
            position:'absolute',
            right:'-10%',
            // top:'-60%',
            elevation:9999,
            borderRadius:radius.tiny
            
        },
        text:{
            color:colors.lightPrimary
        }


    }

let sectionID = React.useContext(sectionContext)    
let titleID = React.useContext(titleContext)

let clearThisInput=()=>{

   

    let strings = {
        1:'First',
        2:'Second',
        3:'Third',
        4:'Fourth',
        5:'Fifth'
    }

    let persisted = {
        1:'FirstPersistedSection',
        2:'SecondPersistedSection',
        3:'ThirdPersistedSection'
    }




let clearTemp = {
        type:`${strings[sectionID]}List/set${strings[titleID]}Title`,
        payload:{
            value:null,
            isValid:'empty'
 

        }}
let clearPersisted = {
    type:`${persisted[sectionID]}/set${strings[titleID]}Title`,
    payload:{
        value:null,
        isValid:'empty'


    }}

store.dispatch(clearTemp)
store.dispatch(clearPersisted)
placeholderRef=1
updateFnc.updateFnc()
}

return (
    <TouchableOpacity style={styles.parent} onPress={clearThisInput}>
        <Text numberOfLines={1} style={styles.text}>{'clear'}</Text>
    </TouchableOpacity>
)
}