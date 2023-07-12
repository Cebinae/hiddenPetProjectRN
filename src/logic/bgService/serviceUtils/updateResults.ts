import store from "../../../store/store"
import { setDisplayable } from "../../../store/resultingSlice"

export let toDisplayablePool = (payload:Array<object>)=>{
    if (payload.length>0){
        let prevValue = store.getState().resulting.displayableItems
        let valueToBeSet = [...prevValue, ...payload]      //previous values and newly found, not to override whole state with only new
        store.dispatch(setDisplayable(valueToBeSet))
        }  
}
