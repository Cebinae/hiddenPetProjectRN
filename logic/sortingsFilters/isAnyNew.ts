import { array } from "prop-types"




export let pickOnlyNew = (savedArr: Array<object>, currentArr:Array<object>)=>{


    console.log('SAVED 1', savedArr[0])
    console.log('SAVED LAST', savedArr[savedArr.length-1])


    console.log('CURRENT 1', currentArr[0])
    console.log('CURRENT LAST', currentArr[currentArr.length-1])

    let resultsPool: Array<object> = []
    
    let shouldEvenFind =():boolean=> {
      
      let start = performance.now()
      let equality = JSON.stringify(savedArr)===JSON.stringify(currentArr)? true : false
      let timeTaken = performance.now() - start;
      console.log('STRING COMPARSION is', equality)
    
      return equality

    }

    shouldEvenFind()

    // console.log('WTF UNDEFINED '+ JSON.stringify(savedArr))

    // let findOut = ()=>{
        
         for(let i=0; i<currentArr.length; i++){
          let currentItem = currentArr[i]
          // console.log('current item is'+  JSON.stringify(currentItem))

          savedArr.some(element => {
            // console.log('saved items is comparing as'+ JSON.stringify(element))
            if (element.extra.offerId.toString() === currentItem.extra.offerId.toString()) {
              return true;
            }
            return false;
          })?console.log('not a new item')  : resultsPool.push(currentItem)
// ебать, почти работает, нихуя не меняй, тупо запусти и глянь вывод
  //     }
  //     console.log('Not equal, so comparion fired')
  // }
        }

  // shouldEvenFind? console.log('strings are equal, not fired'): findOut()

    console.log('new items are', resultsPool)
    return resultsPool
}





export let oldArr = [{id:'1'}, {id:'2'}, {id:'3'}, {id:'4'}]
export let currArr = [{id:'1'}, {id:'2'}, {id:'3'}, {id:'4'}, {id:'5'}, {id:'6'}]



