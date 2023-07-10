import store from "../../../../../store/store"
import { array } from 'prop-types';

// let titlesPool = []


let grabTtitles = (state:object):Array<object>=>{
        return [state.first, state.second, state.third, state.fourth, state.fifth]
    }




let pool = ()=>{
   let pool = [
        ...grabTtitles(store.getState().firstList),
        ...grabTtitles(store.getState().secondList),
        ...grabTtitles(store.getState().firstList),
        ...grabTtitles(store.getState().FirstPersistedSection),
        ...grabTtitles(store.getState().SecondPersistedSection),
        ...grabTtitles(store.getState().ThirdPersistedSection)
    ].map((elem)=>elem.value)
    return pool
}

console.log(pool)
// export let duplicatesFree = (title:string):boolean=>{
// console.log(pool)

//   return  !pool.some((savedTitle)=> {
//         if (savedTitle===title.toUpperCase()){
//             return true
//         }
//         else return false
//     })
// }

export let duplicatesFree = (title:string):boolean=>{
    let deepCopy:Array<string> = Object.assign(pool())

    console.log(deepCopy)
  let filtered = deepCopy.filter((savedTitle:any)=>{
        if(savedTitle===title.toUpperCase()){
            return true
        }
        return false
    })

    return filtered.length>0? false : true
}