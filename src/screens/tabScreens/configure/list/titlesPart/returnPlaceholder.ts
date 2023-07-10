import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../../../../../store/store";


export const returnPlaceholder = (sectionID: number, titleID: number)=>{



    let currentState = {
        1: store.getState().FirstPersistedSection,
        2: store.getState().SecondPersistedSection,
        3: store.getState().ThirdPersistedSection
    }


    let state= currentState[sectionID]

    // enum sectionKeys {
    //     'firstList'=1,
    //     'secondList'=2,
    //     'thirdList'=3
    // }

//    let  currentSection = state[sectionKeys[sectionID]]  // работает


enum titleKeys {
   first =1,
   second=2,
   third=3,
   fourth=4,
   fifth=5
}


let currentTitle = state[titleKeys[titleID]]


let temp1 = {...currentTitle}
// console.log(currentTitle)


     return currentTitle['value']  !==null?   JSON.stringify(currentTitle['value']).replace(/\"/g, "") :''   

    // return 'jush hanging around...'

    

}