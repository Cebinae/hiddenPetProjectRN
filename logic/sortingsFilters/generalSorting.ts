import checkForStickers from "./checkForStickers"
import checkExterior from "./checkExreior"
import checkDiscount from "./checkDiscount"

import { newFunc } from "./checkForStickers"
import { testingStickers } from "./checkForStickers"

import { sleep } from "../parts"


export let generalTestingItem = {
    discount: 0,
    extra:{
        exterior: 'well-worn',
        stickers: testingStickers
    }
}





export let doGeneralSort = (item: object, state:object): boolean=>{
    // await sleep(300)
    let valid = false
    let setValid = ()=> valid = true
    // console.log('IN GENERAL SORT OUR ITEM IS '+item)
    newFunc(item, state)&&checkExterior(item, state)&&checkDiscount(item, state)? setValid():null
    // console.log(valid)
    return valid
//stickers issue
}