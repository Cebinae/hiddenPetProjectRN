import { 
pickTitles, 
defineState,
sleep,
fetchTitle } from "./serviceUtils/parts";

import {  decideNotification } from "../notificate";
import { immutableFilter } from "./serviceUtils/immutableFilter";
import { store } from "../../store/store";
import { compareArrays } from "../sortingsFilters/compareArrays";
import { pricesBubbleSort } from "../sortingsFilters/initialSort";
import { toDisplayablePool } from "./serviceUtils/updateResults";
import { trim } from "../sortingsFilters/trimItem";
import  BackgroundService  from 'react-native-background-actions';


                                //TODO: idk, maybe decompose it even more? main body of service logic
const innerIteration= async (sectionID: number, counter:number, localPool:object) => {

  const basicDelay:number = store.getState().settings.basicDelay    //split calculations for smooth UI
  let shouldDisplayOld:boolean = store.getState().settings.displayAlreadyPresent

  console.log('NUMBER OF OUTER ITERATION IS', counter)
  console.log("iteration fired on section" + sectionID);
  const state = defineState(sectionID);
  const titles = pickTitles(state);
  console.log("with following titles: " + titles);

    let iterate = async () => {

        //loop because we do it for every single title from section
        for (let i = 0; i < titles.length; i++) {
              const title: string = titles[i]
              let data = await fetchTitle(title)                    //here we fetch title[i] from list
                // console.log('fetched', data.length, ' items')

              await sleep(basicDelay/4)
              let trimmed = data.map((element:object) => {                   //trim response obejcts
                return trim(element)
              });
              
                // console.log('left after trimming', trimmed.length)

              await sleep(basicDelay/4)     
              let newPool = immutableFilter(trimmed, state)         //here we pick only items that passed filters
              // console.log('left after filters: ', newPool.length)

              await sleep(basicDelay/4)
              pricesBubbleSort(newPool)                             // just sort from cheap to expensive

              shouldDisplayOld&&counter===0&&await BackgroundService.isRunning()? toDisplayablePool(newPool): console.log('FIRST RESULTS DIDNT SAVE')
                                                                   //accordind to settings display 1st results or not
              // console.log('PASSED')
              let prevArray = Object.assign(localPool[title])        //firstly we save previous items  !!!                                                                    
              // console.log('prev pool lenght', prevArray.length)        
              localPool[title] = [...newPool]                          //and only then override service temp pool !!!
              // console.log('saved to pool', localPool[title].length)
              let found = async ()=>{
                        // console.log('comparing old of',prevArray.length+' and new of'+ newPool.length )                    
                        let onlyNewItems = compareArrays(prevArray, newPool )   //get rid of items that were before
                        counter>0? toDisplayablePool(onlyNewItems):null       //here we passs items that passed filters&&new
                        onlyNewItems.length>0? await decideNotification(onlyNewItems, title):null                
                        // console.log('found new titles = '+ onlyNewItems.length)
              }

              // console.log('break after new items')
              await sleep(basicDelay/4)

              counter!=0? found(): console.log('nothing to compare with, its first iteration...')
                                                            //if not first loop, fire FNC of comparing with previous response
              //works as expected
        }
        
        //outside the loop
      }
  await iterate().catch((e)=>{
          console.error(e)
          console.log('its broken in iteration through section, otside the loop')
        })
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
