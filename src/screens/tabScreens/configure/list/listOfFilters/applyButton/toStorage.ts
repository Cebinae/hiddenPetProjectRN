import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../../../../../../store/store";



export default function (sectionID:number){

    const stateMap = {
        '1':store.getState().firstList,
        '2':store.getState().secondList,
        '3':store.getState().thirdList,               
        }

    enum keys  {
        'firstList'=1,
        'secondList'=2,
        'thirdList'=3
    }
    

    const state = stateMap[1]

    const stringified = JSON.stringify(state)

    AsyncStorage.setItem(keys[sectionID], stringified)

        


}
