import store from "../../../../../store/store"

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

export let duplicatesFree = (title:string):boolean=>{
    let deepCopy:Array<string> = Object.assign(pool())

console.log(pool())

    let filtered = deepCopy.filter((savedTitle:any)=>{
            if(savedTitle!==undefined&&JSON.stringify(savedTitle).toUpperCase().replace('.', '').trim()===title.toUpperCase().replace('.', '').trim()){
                return true
            }
            return false
        })
    return filtered.length>0? false : true
}

//to ensure each title typed only once