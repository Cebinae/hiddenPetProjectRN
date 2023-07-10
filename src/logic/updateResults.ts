import store from "../store/store"
import { setDisplayable } from "../store/resultingSlice"

export let toDisplayablePool = (payload:Array<object>)=>{
    if (payload.length>0){
        let prevValue = store.getState().resulting.displayableItems
        let valueToBeSet = [...prevValue, ...payload]
        store.dispatch(setDisplayable(valueToBeSet))
        }  
}



//itemsPool = [...selector(oneTitle), ...useSelector(TwoTitle)]тз