import { doGeneralSort } from "../../sortingsFilters/generalSorting";

export let immutableFilter = (unfiltered: Array<object>, state:object):Array<object>=>{ 
    let start = performance.now();
  
    let filteredPool:Array<object> = []
    let toIterate = Object.assign(unfiltered)
     
    toIterate.forEach((innerObject:Object)=>{  
        doGeneralSort(innerObject, state)?filteredPool.push(innerObject):null   
    })

    let timeTaken = performance.now() - start;
    console.log('DEFAULT took', timeTaken)

    return filteredPool
   }