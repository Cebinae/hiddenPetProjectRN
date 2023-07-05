import { 
    createLocalPool,
    defineState,
    pickTitles,
    pickFilters,
    fetchSection,
    iterateThroughSection,
    sleep,
    fetchTitle
 } from "./parts";

import { pricesBubbleSort } from "./sortingsFilters/initialSort";
import { doGeneralSort } from "./sortingsFilters/generalSorting";
import { store } from "../store/store";
import { object } from "prop-types";
import { pickOnlyNew } from "./sortingsFilters/isAnyNew";
import { createSummary, decideNotification } from "./notificate";
import  notifee  from '@notifee/react-native';



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

export let shouldIterate = (sectionID:number):boolean=>{
  return pickTitles(defineState(sectionID)).length>0 
}

let currentItemsPool = createLocalPool()

let tempPool = []
let iterationsCounter = 0
let state = store.getState().FirstPersistedSection





 export let innerIteration = async()=>{
   
    let iterateThroughSection = async (sectionID: number) => {
        console.log("iteration fired on section" + sectionID);
        let state = defineState(sectionID);
        let titles = pickTitles(state);
        console.log("with following titles: " + titles);
      
        let dataPool: Array<object> = [];
      
        let iterate = async () => {
          for (let i = 0; i < titles.length; i++) {
            console.log('SLEEPING 1')
            await sleep(2000)
            let title: string = titles[i]
            let data = await fetchTitle(title)  //here we fetch title from list
            let temp = []                           // and save just for comfortable usage
            temp.push(data);
    
            console.log('we fetched: '+temp.length)
            console.log('we passed')
            // console.log('IN TEMP I GOT'+ temp)
    
    
            let newPool = immutableFilter(...temp ,state )  //here we save only filtered items
            console.log('BEFORE BUBBLE SORT')
            pricesBubbleSort(newPool) // just sort from cheap to expensive
            let prevArray = Object.assign(currentItemsPool[title])
    
            console.log('copied prev array is', JSON.stringify(prevArray))
            console.log('new pool lenght', newPool.length)
    
            
            currentItemsPool[title] = [...newPool]
    
            let jusToSee = currentItemsPool[title]
            let arr = [...jusToSee]
            // currentItemsPool[title] = [...newPool] // ACHTUNG!!!
    
    
            let found = async ()=>{
              console.log('comparing old of',prevArray.length+' and new of'+ newPool.length )
            
              let onlyNewItems = pickOnlyNew(prevArray, newPool )
              onlyNewItems.length>0? await notifee.displayNotification(createSummary(title, onlyNewItems.length)):null
              // onlyNewItems.forEach(async(newItem)=>{
              //   await notifee.displayNotification(createOptions(title, newItem))            // notifications
              // })
              decideNotification(onlyNewItems, title)
              console.log('found new titles = '+ onlyNewItems.length)}
    
            //shoud i save. compare with prev and save.
            counter!=0? found(): console.log('nothing to compare with, its first iteration...')
    
            currentItemsPool[title] = [...newPool] //сохраняем только после сверки с прошлым, а то ясен хуй одинаковы будут
    
            console.log('left after filters'+newPool.length)
    
            // dataPool.push(...newPool)
            
          //  console.log('here what we are going to save', [...newPool])
    
            
    
            
    
            console.log('CURRENT ITEMS POOL IS of title'+ title+'is'+arr.length) 
            //works as expected
          }
          // console.log('THE POOL IS'+ JSON.stringify(dataPool))
          await iterate().catch((e)=>{console.error(e)})
          await sleep(2000)
          
        }}


      // let trying = new Promise (resolve, reject)=>{

      // }

      shouldIterate(1)? await iterateThroughSection(1) : console.log('nothing to iterate through on 1')
       // 
      shouldIterate(2)? await iterateThroughSection(2): console.log('nothing to iterate through on 2')

      shouldIterate(3)? await iterateThroughSection(3): console.log('nothing to iterate through on 3')




      let checkPool = Object.assign(currentItemsPool)
      console.log('pool after 1 outer iteration '+ Object.keys(checkPool))


 }




export let checkResults = ()=>{
  let keys = Object.keys(currentItemsPool)
  console.log(keys)
  keys.forEach((key)=>{
    console.log( 'Lenght of key'+key+ 'is'+ key.length)
  })

}
 













// так, тут работало, но попробую сверху почистить код от говна

//  export let innerIteration =()=>{

   
//   let iterateThroughSection = (sectionID: number) => {
//       console.log("iteration fired on section" + sectionID);
//       let state = defineState(sectionID);
//       let titles = pickTitles(state);
//       console.log("with following titles: " + titles);
    
//       let dataPool: Array<object> = [];
    
//       let iterate =async () => {
//         for (let i = 0; i < titles.length; i++) {
//           await sleep(2000)
//           let data = await fetchTitle(titles[i])  //here we fetch title from list

//           console.log('we passed')

//           let temp = []                           // here we sa
//           temp.push( data);

//           console.log('IN TEMP I GOT'+ temp)

//           let newPool = immutableFilter(...temp ,state )
//           dataPool.push(...newPool)
//           console.log('HERE WE SAWED '+tempPool )
        
//           currentItemsPool[titles[i]] = [...temp]

//         }
//         console.log('THE POOL IS'+ JSON.stringify(dataPool))
//         console.log(currentItemsPool);
//       }
//     iterate().catch((e)=>{console.error(e)})
     
//     };
//     iterateThroughSection(1); // 
// }



export let testingServiceLoop=async ()=>{

  let iteration = async ( sectionID:number)=>{
  //  setTimeout(() => {
  //     console.log('hoba')
  //   }, 3000);
    console.log('iteratiob fired on section ', sectionID)
  }


let setPromise = async (sectionID:number)=>{ 
  let promise =  new Promise ((resolve, reject)=>{
  
      iteration(sectionID).then(()=>{ setTimeout(() => {
        resolve(null)
      }, 2000);
      })
     
      })
  return promise
}


//  setPromise(1).then(async()=>
//  setPromise(2).then(async()=>{
//  setPromise(3)}
//  ))
  
// await setPromise(1)
// await setPromise(2)
// await setPromise(3)




// setPromise(1).then(
//   ()=>setPromise(2).then(
//     ()=>setPromise(3)
//   )
//   )
  

  
}
