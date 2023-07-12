import * as React from 'react';
import { TouchableOpacity, View, Text, TouchableHighlight } from "react-native";
import { store } from '../../../../../../store/store';
import { sectionContext } from '../../../setLists';
import { useContext } from 'react';
import { setFirstValidList } from '../../../../../../store/validListsSlice';
import { colors, radius } from '../../../../../../../globalColors';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { FirstPersistedSection } from './../../../../../../store/listSlices/persistedLists/firstSection';
import { SecondPersistedSection } from './../../../../../../store/listSlices/persistedLists/secondSection';
import { ThirdPersistedSection } from './../../../../../../store/listSlices/persistedLists/thirdSection';








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
   let listSelector;
   let switchList = {
       1: ()=>listSelector = state => state.firstList,
       2: ()=>listSelector = state => state.secondList,
       3: ()=>listSelector = state => state.thirdList
   }
   switchList[sectionID]()
   let currentSection = useSelector(listSelector)
   
   let isError:boolean = currentSection.first.isValid==='error'||
               currentSection.second.isValid==='error'||
               currentSection.third.isValid==='error'||
               currentSection.fourth.isValid==='error'||
               currentSection.fifth.isValid==='error'
   
   //    

    let styles={
        wrapper:{
            width:"90%",
            innerHeight:'100%',
        },
        button:{
            padding:0,
            marginTop:'15%',
            backgroundColor: !isError? colors.darkGreen: colors.red,
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








let handleButton = (contextOfSection: number)=>{

    const statesMap = {
        1:store.getState().firstList.isValid,
        2:store.getState().secondList.isValid,
        3:store.getState().thirdList.isValid,
    }
     

    console.log(sectionID)
    statesMap[sectionID]===true? stateToValidSlice(sectionID): console.log('cant save this at...' )
  

}

// isError?`Can't save with wrong titles`:'Save changes'
    return(
        <sectionContext.Consumer>
            {sectionID=> (
            
            <View style = {styles.wrapper}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> handleButton(sectionID)}
                 >
                    <Text style={styles.title}>{isError?`Can't save with wrong titles`:'Save changes'}</Text>
                </TouchableOpacity>
            </View>


            )}
        </sectionContext.Consumer>
    )
    
}


let persistedlistSelector;
//     let switchPersistedList = {
//         1: ()=>persistedlistSelector = state => state.FirstPersistedSection,
//         2: ()=>persistedlistSelector = state => state.SecondPersistedSection,
//         3: ()=>persistedlistSelector = state => state.ThirdPersistedSection
//     }
//     switchPersistedList[sectionID]()
//     let currentPersistedSection = useSelector(persistedlistSelector)

//     let currPersistedPoolValues = [
//         JSON.stringify(currentPersistedSection.first.value),
//         JSON.stringify(currentPersistedSection.second.value),
//         JSON.stringify(currentPersistedSection.third.value),
//         JSON.stringify(currentPersistedSection.fourth.value),
//         JSON.stringify(currentPersistedSection.fifth.value),
//     ]                                                                    //блять null єто пустой обьект, куда сравнивать

//     let currPoolValues = [
//         JSON.stringify(currentSection.first.value),
//         JSON.stringify(currentSection.second.value),
//         JSON.stringify(currentSection.third.value),
//         JSON.stringify(currentSection.fourth.value),
//         JSON.stringify(currentSection.fifth.value),
//     ]   

//     let anyChanges:boolean = 
//                         currPoolValues[0]===currPersistedPoolValues[0]&&
//                      currPoolValues[1]===currPersistedPoolValues[1]&&
//                      currPoolValues[2]===currPersistedPoolValues[2]&&
//                      currPoolValues[3]===currPersistedPoolValues[3]&&
//                      currPoolValues[4]===currPersistedPoolValues[4]
               
               
               
//   // ебанутся...             
               
// //а хуй, нужно не учитывать уже сохраненные


