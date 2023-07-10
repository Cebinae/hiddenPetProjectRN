import { doGeneralSort } from "../../sortingsFilters/generalSorting";

export let immutableFilter = (unfiltered: Array<object>, state:object):Array<object>=>{
  
    let start = performance.now();
  
    let filteredPool:Array<object> = []
    let toIterate = unfiltered //[0]thats valid array of objects
   
    // console.log('before forEach' + JSON.stringify(toIterate))
  
    toIterate.forEach((innerObject:Object)=>{
  
      // console.log('inside forEach' + JSON.stringify(innerObject)) // ну тут норм блять
  
      doGeneralSort(innerObject, state)?filteredPool.push(innerObject):null
      // doGeneralSort(innerObject, state)?console.log('PASSED!'):console.log('DIDNT PASS')
      // filteredPool.push(innerObject)
      // console.log('IMMUTABLE FILTERING')
    })
  
  // console.log('OUTSIDE FOREACH')
    // just to see in console
  
  // filteredPool.forEach((elem)=>console.log('ELEMENTS THAT PASSED FILTERS     '+  JSON.stringify(elem.extra.stickers) ))
  
  // console.log('FILTERING RETURNS' +filteredPool)
   
  // console.log('filtered is = ', filteredPool.length)
  // console.log('unfilteres is', unfiltered.length)
  
  // да, все ок возвращает, охуеть
    // console.log('BEFORE RETURN FROM IMMUTABLE FILTER' , filteredPool.length)
  
    let timeTaken = performance.now() - start;
    console.log('DEFAULT took', timeTaken)
    return filteredPool
   }