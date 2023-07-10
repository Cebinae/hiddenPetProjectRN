import checkExterior from "./checkExreior"
import checkDiscount from "./checkDiscount"
import { newFunc } from "./checkForStickers"
import { testingStickers } from "./checkForStickers"

export let generalTestingItem = {
    discount: 0,
    extra:{
        exterior: 'well-worn',
        stickers: testingStickers
    }
}


export let doGeneralSort = (item: object, state:object): boolean=>{
    // await sleep(300)
   return newFunc(item, state)&&checkExterior(item, state)&&checkDiscount(item, state)
}