import { store } from "../../../../../store/store";


export const returnPlaceholder = (sectionID: number, titleID: number):string=>{
    let currentState = {
        1: store.getState().FirstPersistedSection,
        2: store.getState().SecondPersistedSection,
        3: store.getState().ThirdPersistedSection
    }
    let state = currentState[sectionID]

    enum titleKeys {
    first =1,
    second=2,
    third=3,
    fourth=4,
    fifth=5
    }

    let currentTitle = state[titleKeys[titleID]]
    return currentTitle['value']  !==null?   JSON.stringify(currentTitle['value']).replace(/\"/g, "") :''   
}