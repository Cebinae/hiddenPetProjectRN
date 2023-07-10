import * as React from 'react';
import { TouchableOpacity, View, Text, TouchableHighlight } from "react-native";
import { store } from '../../../../../../store/store';
import { firtstlistSlice, setIsActive } from '../../../../../../store/listSlices/listsTempState/firstListSlice';
import { useSelector } from 'react-redux';
import { firstList } from '../../../../../../store/listsSlices/ListsState';
import firstListSlice from '../../../../../../store/listSlices/listsTempState/firstListSlice';
import { sectionContext } from '../../../setLists';
import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setFirstValidList } from '../../../../../../store/validLists';
import { current } from '@reduxjs/toolkit';
import { colors, radius } from '../../../../../../../globalColors';





const styles={
    wrapper:{
        width:"90%",
        innerHeight:'100%',
        // backgroundColor:'red'
    },

    button:{
        padding:0,
        marginTop:'15%',
        backgroundColor: colors.darkGreen,
        width:'100%',
        height:50,
        borderRadius:radius.big,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
        
    },
    title:{
        fontSize:15,
        color:'white',

    }
}



let toPersisted = ( titleID:number, sectionID:number) =>{

    enum titles {
        'first' =1,
        'second'=2,
        'third'=3,
        'fourth'=4,
        'fifth'=5
    }

    const currentState = {
        1: store.getState().firstList,
        2: store.getState().secondList,
        3: store.getState().thirdList
    }

    const valueToDispatch = currentState[sectionID]
    console.log(valueToDispatch[titles[titleID]]['isValid'])
    enum numbersAsString  {
        'First' =1,
        'Second'=2,
        'Third'=3,
        'Fourth'=4,
        'Fifth'=5
    }

    const action = {
        type:`${numbersAsString[sectionID]}PersistedSection/set${numbersAsString[titleID]}Title`,
        payload: {
        value: valueToDispatch[titles[titleID]]['value']
        }
    }


    valueToDispatch[titles[titleID]]['isValid']==='valid'? store.dispatch(action) :console.log('dont dispatch')

let resultToSee = {
    1:store.getState().FirstPersistedSection,
    2:store.getState().SecondPersistedSection,
    3:store.getState().ThirdPersistedSection
}
console.log('result is' + JSON.stringify(resultToSee[sectionID]))




}



const stateToValidSlice = (sectionID: number)=>{
    enum keys {
                'First'=1,
                'Second'=2,
                'Third'=3
            }

    let currentState = {
        1: store.getState().firstList,
        2: store.getState().secondList,
        3: store.getState().thirdList
    }

    let action = {
        type:`ValidLists/set${sectionID}ValidList`,
        payload: 'works'
    }
    store.dispatch(setFirstValidList(currentState[1]))
    console.log('proceeding to valid slice...')


    toPersisted( 1, sectionID)
    toPersisted( 2, sectionID)
    toPersisted( 3, sectionID)
    toPersisted( 4, sectionID)
    toPersisted( 5, sectionID)

            


}



export default function ApplyButton(){

const sectionID = useContext(sectionContext)

let handleButton = (contextOfSection: number)=>{

    const statesMap = {
        1:store.getState().firstList.isValid,
        2:store.getState().secondList.isValid,
        3:store.getState().thirdList.isValid,
    }
     

    console.log(sectionID)
    statesMap[sectionID]===true? stateToValidSlice(sectionID): console.log('cant save this at...' )
  

}










    return(
        <sectionContext.Consumer>
            {sectionID=> (
            
            <View style = {styles.wrapper}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> handleButton(sectionID)}
                 >
                    <Text style={styles.title}>Save changes</Text>
                </TouchableOpacity>
            </View>


            )}
        </sectionContext.Consumer>
    )
    
}

