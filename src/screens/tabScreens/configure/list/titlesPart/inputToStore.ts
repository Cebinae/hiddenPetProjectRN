import { store } from "../../../../../store/store";
import { titleContext } from "./setTitles";
import { sectionContext } from "../../setLists";
import { useContext } from "react";



const applyState = store.dispatch 
const inputsMap = {
    '1':'First',
    '2':'Second',
    '3':'Third',
    '4':'Fourth',
    '5':'Fifth'
}

export const passToRedux = ( inputId:number, sectionID:number, value:string) => {
   applyState(
            {
             type:`${inputsMap[sectionID]}List/set${inputsMap[inputId]}Title`,
             payload: {
                    value:value,
                    isValid: 'valid'} 
            }
                ) 


    console.log("huetaaa"+inputId)
}


export const setInvalid = (inputId:number, sectionID:number)=>{ 
    applyState(
        {
         type:`${inputsMap[sectionID]}List/set${inputsMap[inputId]}Title`,
         payload: {
                value:null,
                isValid: 'error'} 
        }
            )
}

export const setEmpty = (inputId:number, sectionID:number)=>{ 
    applyState(
        {
         type:`${inputsMap[sectionID]}List/set${inputsMap[inputId]}Title`,
         payload: {
                
                isValid: 'empty'} 
        }
            )
}


