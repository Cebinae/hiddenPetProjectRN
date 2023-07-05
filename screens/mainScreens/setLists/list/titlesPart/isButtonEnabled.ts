import { firstList } from "../../../../../store/listsSlices/ListsState"
import { store } from "../../../../../store/store"
import firstListSlice, { setIsActive } from "../../../../../store/listsSlices/listsTempState/firstListSlice"


export let atLeastOne =(sectionID)=>{

    const stateMap = {
        1:store.getState().firstList,
        2:store.getState().secondList,
        3:store.getState().thirdList,
    }

    let state = stateMap[sectionID]

    let titles = [state.first, state.second, state.third, state.fourth, state.fifth]
    let toCompare = titles.filter((title)=> title.isValid==='valid')        //Cheks if al least one valid title is typed in, returns TRUE if typed
    return toCompare.length>0 ?  true : false
}


export let isErrorFree = (sectionID)=>{

    const stateMap = {
        1:store.getState().firstList,
        2:store.getState().secondList,
        3:store.getState().thirdList,

    }

    let state = stateMap[sectionID]

    let titles = [state.first, state.second, state.third, state.fourth, state.fifth]
    let toCompare = titles.filter((title)=> title.isValid==='error')            //checks if there's any error in inputs, returns TRUE!!! if not
    return toCompare.length>0 ? false : true 
}



let dispatchValidity = (sectionID, payload)=>{
    enum lists {
        'FirstList'=1,
        'SecondList'=2,
        'ThirdList'=3
    }

    let action = {
        type:`${lists[sectionID]}/setIsValid`, payload:payload
    }
    store.dispatch(action)
}


export let checkForButton = (sectionID)=>{
    atLeastOne(sectionID)&&isErrorFree(sectionID)? dispatchValidity(sectionID, true):

    atLeastOne(sectionID)&&!isErrorFree(sectionID)? dispatchValidity(sectionID, false): dispatchValidity(sectionID, false)
  
}



// export let checkForButton = ()=>{
//     atLeastOne()&&isErrorFree()? console.log('button enabled'):

//     atLeastOne()&&!isErrorFree()? console.log('error is found'): console.log('not even a single valid title')
  
// }