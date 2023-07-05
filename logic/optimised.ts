import { doGeneralSort } from "./sortingsFilters/generalSorting"





export let optimisedFilter = (unfiltered: Array<object>, state:object):Array<object>=>{
    let start = performance.now();
    
  
    let filteredPool:Array<object> = []
    let toIterate = unfiltered //[0]thats valid array of objects
   
    // console.log('before forEach' + JSON.stringify(toIterate))

//   console.log('to iterate is ', unfiltered.length)

   for (let i=0; i<=toIterate.length; i++){
        // console.log('before sort')
        // console.log('in loop item is ', toIterate[i])
        doGeneralSort(toIterate[i], state)?filteredPool.push(toIterate[i]):null
   }

//   console.log('to iterate is ', toIterate)
//   console.log('OUTSIDE FOREACH')
    // just to see in console
  
  // filteredPool.forEach((elem)=>console.log('ELEMENTS THAT PASSED FILTERS     '+  JSON.stringify(elem.extra.stickers) ))
  
  // console.log('FILTERING RETURNS' +filteredPool)
   
  // console.log('filtered is = ', filteredPool.length)
  // console.log('unfilteres is', unfiltered.length)
  
  // да, все ок возвращает, охуеть
    // console.log('OPTIMISED GOT ', filteredPool)
    let timeTaken = performance.now() - start;
    console.log('optimised took', timeTaken)
    
    return filteredPool
   }