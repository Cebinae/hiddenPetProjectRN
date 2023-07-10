import {View, Text, TextInput, } from 'react-native'
import * as React from 'react';
import { Switch } from 'react-native-switch';
import ToggleSwitch from 'toggle-switch-react-native'
import { store } from '../../../../../../store/store';
import toStorage from './toStorage';
import ApplyButton from '../applyButton/button';





export default function SwitchApply(sectionID){

const [active, setInactive] = React.useState(false)
const [isEnabled, setEnabled] = React.useState(false)







const countTitles= ()=> {
       const stateMap = {
        '1':store.getState().firstList,
        '2':store.getState().secondList,
        '3':store.getState().thirdList,               
        }

        const slicesMap = {
                '1':'first',
                '2':'second',
                '3':'third'
        }



        let readyToCheck = stateMap[sectionID.sectionID.sectionID]
        
        let titles = [readyToCheck.first, readyToCheck.second, readyToCheck.third, readyToCheck.fourth, readyToCheck.fifth]
        let ammount = 0
        titles.forEach((elem)=> elem.isValid===true&&ammount++  )
        console.log(ammount)

        store.dispatch({
                type:`${slicesMap[sectionID.sectionID.sectionID]}List/setAmmount`,
                payload: ammount
            })
        
}

const promise = new Promise<void> ((resolve, reject) => {
        setTimeout(()=> {
                setEnabled(false)  
                
        }, 1000)
        resolve()
 })

const  isEvenEntered = async ()=> {
        const stateMap = {
                '1':store.getState().firstList.ammount,
                '2':store.getState().secondList.ammount,
                '3':store.getState().thirdList.ammount,               
                }

        if (stateMap[sectionID.sectionID.sectionID]<1)forbidden()


}
        

    
   
    const changeHandler = ()=> {
        // setEnabled(previousState => !previousState)
        // toStorage(sectionID.sectionID.sectionID ) 
        // countTitles()
        // isEvenEntered()
          
        setInactive(true)
        setEnabled(true) 
        }

   const forbidden = ()=>{
        setInactive(true)
        promise.then(()=> setInactive(false))
   }




return(
       <ApplyButton></ApplyButton>
)             
}






 // <Switch 
        //         disabled={active}
        //         value={isEnabled}
        //         onValueChange={changeHandler}
        //         barHeight={30}
        //         switchWidthMultiplier={3}
        //         activeText={'inactive'}
        //         inActiveText={sectionID.sectionID.sectionID.toString()}
        
                
        // />