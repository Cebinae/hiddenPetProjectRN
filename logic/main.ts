import { 
pickTitles, 
defineState,
sleep,
fetchTitle,
createLocalPool } from "./parts";

import { onDisplayNotification, createOptions, createSummary, decideNotification } from "./notificate";

import { immutableFilter } from "./createServcie";
import { store } from "../store/store";
import { pickOnlyNew } from "./sortingsFilters/isAnyNew";
import { optimisedFilter } from "./optimised";

import  notifee  from '@notifee/react-native';

let currentItemsPool = ()=>{
  return createLocalPool()
}
import { pricesBubbleSort } from "./sortingsFilters/initialSort";
import { toDisplayablePool } from "./updateResults";
import { trim } from "./sortingsFilters/trimItem";
// let currentItemsPool = []

// let tempPool = []
// let iterationsCounter = 0
// let state = store.getState().FirstPersistedSection



let innerIteration= async (sectionID: number, counter:number, localPool:object) => {

  let basicDelay:number = store.getState().settings.basicDelay
  let shouldDisplayOld:boolean = store.getState().settings.displayAlreadyPresent

  console.log('NUMBER OF OUTER ITERATION IS', counter)
  console.log("iteration fired on section" + sectionID);
  let state = defineState(sectionID);
  let titles = pickTitles(state);
  console.log("with following titles: " + titles);

  let dataPool: Array<object> = [];

  let iterate = async () => {
    for (let i = 0; i < titles.length; i++) {
      // await sleep(2000)
      let title: string = titles[i]
      let data = await fetchTitle(title)  //here we fetch title from list
      let temp = []                           // and save just for comfortable usage
      temp.push(...data);
console.log('fetched', temp.length, ' items')

      
await sleep(basicDelay/4)
      let trimmed = temp.map(element => {
        return trim(element)
      });
console.log('left after trimming', trimmed.length)


await sleep(basicDelay/4)     
      let newPool = immutableFilter(trimmed ,state )  //rhere we save only filtered items
      // let newPool = optimisedFilter(trimmed ,state )
console.log('left after filters: ', newPool.length)

await sleep(basicDelay/4)
      pricesBubbleSort(newPool) // just sort from cheap to expensive

      shouldDisplayOld&&counter===0? toDisplayablePool(newPool): console.log('FIRST RESULTS DIDNT SAVE')

// ДО СЮДА ВСЕ ЗАЕБИСЬ

      console.log('PASSED')
      let prevArray = Object.assign(localPool[title])
console.log('prev pool lenght', prevArray.lenght)

      
      localPool[title] = [...newPool]
console.log('saved to pool', localPool[title].lenght)

      // let jusToSee = localPool[title]
      // let arr = [...jusToSee]
      // currentItemsPool[title] = [...newPool] // ACHTUNG!!!


      let found = async ()=>{
        console.log('comparing old of',prevArray.length+' and new of'+ newPool.length )
      
        let onlyNewItems = pickOnlyNew(prevArray, newPool )
        counter>0? toDisplayablePool(onlyNewItems):null //here we save new found items
        onlyNewItems.length>0? await notifee.displayNotification(createSummary(title, onlyNewItems.length)):null

        // onlyNewItems.forEach(async(newItem)=>{
        //   await notifee.displayNotification(createOptions(title, newItem))            // notifications
        // })
        decideNotification(onlyNewItems, title)
        console.log('found new titles = '+ onlyNewItems.length)}

        console.log('break after new items')
await sleep(basicDelay/4)

      //shoud i save. compare with prev and save.
      counter!=0? found(): console.log('nothing to compare with, its first iteration...')

      // localPool[title] = [...newPool] //сохраняем только после сверки с прошлым, а то ясен хуй одинаковы будут

      // console.log('left after filters'+newPool.length)

      // dataPool.push(...newPool)
      
    //  console.log('here what we are going to save', [...newPool])

      

      

      // console.log('CURRENT ITEMS POOL IS of title'+ title+'is'+arr.length) 
      //works as expected
    }
    // console.log('THE POOL IS'+ JSON.stringify(dataPool))
    ;
    
  }
 await iterate().catch((e)=>{console.error(e)})
//  await sleep(2) // this sleep is to make a break before next section
};






  export let checkResults = ()=>{
    let keys = Object.keys(currentItemsPool)
    console.log('keys are', keys)
    keys.forEach((key)=>{
      // console.log('here we can see a pool',JSON.stringify(currentItemsPool))
      console.log( 'Lenght of key'+key+ 'is'+ key.length)
      // console.log(currentItemsPool[JSON.stringify(key)])
    })
  // наглядно показывает что куда сохраняется
  }










let innerPromise =(sectionID:number, counter:number, localPool:object)=>{
    let promise = new Promise(
        async(resolve, reject)=>{
            await innerIteration(sectionID, counter, localPool)
            resolve(null)
        })

    return promise
} 











export let iterationLoop = async(localPool:object, counter:number)=>{
    await innerPromise(1, counter, localPool)
    await innerPromise(2, counter, localPool)
    await innerPromise(3, counter, localPool)
    
    console.log(Object.keys(currentItemsPool))

    checkResults()
}

// export let outerLoop = async()=>{
  
// }






//






// let innerIteration= async (sectionID: number, counter:number, localPool:object) => {

//   // currentItemsPool()
//   let shouldDisplayOld:boolean = store.getState().settings.displayAlreadyPresent

//   console.log('NUMBER OF OUTER ITERATION IS', counter)
//   console.log("iteration fired on section" + sectionID);
//   let state = defineState(sectionID);
//   let titles = pickTitles(state);
//   console.log("with following titles: " + titles);

//   let dataPool: Array<object> = [];

//   let iterate = async () => {
//     for (let i = 0; i < titles.length; i++) {
//       await sleep(1000)
//       let title: string = titles[i]
//       let data = await fetchTitle(title)  //here we fetch title from list
//       let temp = []                           // and save just for comfortable usage
//       temp.push(data);

//       console.log('we fetched: '+temp.length)
//       console.log('we passed')
//       // console.log('IN TEMP I GOT'+ temp)


//       let newPool = immutableFilter(...temp ,state )  //here we save only filtered items
//       pricesBubbleSort(newPool) // just sort from cheap to expensive
//       console.log('left after current filters'+newPool.length)

//       shouldDisplayOld&&counter===0? toDisplayablePool(newPool): console.log('FIRST RESULTS DIDNT SAVE')
//       // shouldDisplayOld&&counter>1? toDisplayablePool(newPool): console.log('FIRST RESULTS DIDNT SAVE')

//       let prevArray = Object.assign(localPool[title])

//       console.log('copied prev array is', JSON.stringify(prevArray))
//       console.log('new pool lenght', newPool.length)

      
//       localPool[title] = [...newPool]

//       let jusToSee = localPool[title]
//       let arr = [...jusToSee]
//       // currentItemsPool[title] = [...newPool] // ACHTUNG!!!


//       let found = async ()=>{
//         console.log('comparing old of',prevArray.length+' and new of'+ newPool.length )
      
//         let onlyNewItems = pickOnlyNew(prevArray, newPool )
//         counter>1? toDisplayablePool(onlyNewItems):null //here we save new found items
//         onlyNewItems.length>0? await notifee.displayNotification(createSummary(title, onlyNewItems.length)):null
//         // onlyNewItems.forEach(async(newItem)=>{
//         //   await notifee.displayNotification(createOptions(title, newItem))            // notifications
//         // })
//         decideNotification(onlyNewItems, title)
//         console.log('found new titles = '+ onlyNewItems.length)}

//       //shoud i save. compare with prev and save.
//       counter!=0? found(): console.log('nothing to compare with, its first iteration...')

//       localPool[title] = [...newPool] //сохраняем только после сверки с прошлым, а то ясен хуй одинаковы будут

//       console.log('left after filters'+newPool.length)

//       // dataPool.push(...newPool)
      
//     //  console.log('here what we are going to save', [...newPool])

      

      

//       console.log('CURRENT ITEMS POOL IS of title'+ title+'is'+arr.length) 
//       //works as expected
//     }
//     // console.log('THE POOL IS'+ JSON.stringify(dataPool))
//     ;
    
//   }
//  await iterate().catch((e)=>{console.error(e)})
// //  await sleep(2) // this sleep is to make a break before next section
// };