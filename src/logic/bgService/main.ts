import { 
pickTitles, 
defineState,
sleep,
fetchTitle } from "./serviceUtils/parts";

import { createSummary, decideNotification } from "../notificate";
import { immutableFilter } from "./serviceUtils/immutableFilter";
import { store } from "../../store/store";
import { pickOnlyNew } from "../sortingsFilters/isAnyNew";
import  notifee  from '@notifee/react-native';
import { pricesBubbleSort } from "../sortingsFilters/initialSort";
import { toDisplayablePool } from "./serviceUtils/updateResults";
import { trim } from "../sortingsFilters/trimItem";



const innerIteration= async (sectionID: number, counter:number, localPool:object) => {

  const basicDelay:number = store.getState().settings.basicDelay  //split calculations for smooth UI
  const shouldDisplayOld:boolean = store.getState().settings.displayAlreadyPresent

  console.log('NUMBER OF OUTER ITERATION IS', counter)
  console.log("iteration fired on section" + sectionID);
  const state = defineState(sectionID);
  const titles = pickTitles(state);
  console.log("with following titles: " + titles);

      let iterate = async () => {

        //loop because we do it for every single title from section
        for (let i = 0; i < titles.length; i++) {
          const title: string = titles[i]

          let data = await fetchTitle(title)  //here we fetch title from list
            console.log('fetched', data.length, ' items')

          
          await sleep(basicDelay/4)
          let trimmed = data.map(element => {
            return trim(element)
          });
            console.log('left after trimming', trimmed.length)

          await sleep(basicDelay/4)     
          let newPool = immutableFilter(trimmed ,state )  //rhere we save only filtered items
          console.log('left after filters: ', newPool.length)

          await sleep(basicDelay/4)
          pricesBubbleSort(newPool) // just sort from cheap to expensive
          shouldDisplayOld&&counter===0? toDisplayablePool(newPool): console.log('FIRST RESULTS DIDNT SAVE')

          console.log('PASSED')
          let prevArray = Object.assign(localPool[title])
    console.log('prev pool lenght', prevArray.lenght)

          
          localPool[title] = [...newPool]
    console.log('saved to pool', localPool[title].lenght)

          let found = async ()=>{
            console.log('comparing old of',prevArray.length+' and new of'+ newPool.length )
          
            let onlyNewItems = pickOnlyNew(prevArray, newPool )
            counter>0? toDisplayablePool(onlyNewItems):null //here we save new found items
            onlyNewItems.length>0? async()=>await notifee.displayNotification(createSummary(title, onlyNewItems.length)):null

            // onlyNewItems.forEach(async(newItem)=>{
            //   await notifee.displayNotification(createOptions(title, newItem))            // notifications
            // })
            decideNotification(onlyNewItems, title)
            console.log('found new titles = '+ onlyNewItems.length)}

            console.log('break after new items')
    await sleep(basicDelay/4)

          //shoud i save. compare with prev and save.
          counter!=0? found(): console.log('nothing to compare with, its first iteration...')
          //works as expected
        }
        
        //outside the loop
      }
 await iterate().catch((e)=>{
        console.error(e)
        console.log('its broken in iteration through section, otside the loop')
      })
//  await sleep(2) // this sleep is to make a break before next section
};




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
}
