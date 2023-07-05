export let exampleItem= {
    extra:{
        exterior:'field-tested'
    }
}//just for tests, nvm

//create valid exteriors
// if exterior match any of valid exteriors...   


export let acceptableExteriors = (state: object): Array<string>=>{

    let safeState = Object.freeze(state)

    let substrings:Array<string> = []
    
        safeState.FN? substrings.push('factory new') : null;
        safeState.MW? substrings.push('minimal wear') : null;
        safeState.FT? substrings.push('field-tested') : null;
        safeState.WW? substrings.push('well-worn') : null;
        safeState.BS? substrings.push('battle-scarred') : null;

    return substrings
}


export let isMatchAny =(item: object, acceptableValues: Array<string>):boolean=>{
    let doesMatch = false
    let setFound = ()=> doesMatch=true
    acceptableValues.forEach((exterior)=>{
       item['extra'].exterior === exterior? setFound(): null
    })
    return doesMatch
}


let checkExterior = (item:object, state:object): boolean=>{
   let res =  isMatchAny(item, acceptableExteriors(state))
//    console.log('EXTERIORS IS ', res)
   return res
}


export default checkExterior //yep, works

