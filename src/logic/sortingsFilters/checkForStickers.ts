
let createSubstring = (year:number)=>{
        return "20"+year.toString()
    }



export let createAcceptableSubstrings = (minYear:number, maxYear:number)=>{
    let calculatedValues = []

    for (let i=minYear; i<=maxYear; i++){

        calculatedValues.push(createSubstring(i))

    }
    return calculatedValues
// returns array of substrings based by passed years to check sticker's name
}


export let testingStickers ={

   extra:{ stickers:[
            { 
                name:"Ninjas in Pyjamas | Katowice 2014",
                image:"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/emskatowice2014/ninjasinpyjamas.fae3db99e9403659a4b7a4a91174e6786a7a94e0.png"
            },


            {
                    name:"ESL Skull (Foil) | Katowice 2016",
                    image:"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/emskatowice2014/wolf_skull_esl_foil.b5234fdfb38494b62f874d5ffda82fb5f40c28c4.png"
             }
   ]
            }
            }
//just to test, nvm


let doCheck = (stickerNames:Array<string>, years:Array<string>): boolean=>{

    let fulfilled = false
    let setFulfilled = ()=>{fulfilled=true}

    for (let i = 0; i<stickerNames.length&&!fulfilled; i++){
        
        // stickerNames[i]

        years.forEach((year)=>{
            stickerNames[i].includes(year)?setFulfilled(): console.log('skipped')
        })

    }
    return fulfilled


    // here we check if any valid year is typed inside the name of any sticker title 
}




let ccheck = (item, years): boolean=>{

    let fulfilled = false
    let setFulfilled = ()=>{
        fulfilled=true
        // console.log('fulfilled')
    }
    let stickerNames: Array<string>= item.extra.stickers.map((obj)=>obj.name)

    for (let i = 0; i<stickerNames.length&&!fulfilled; i++){
        
        // stickerNames[i]

        years.forEach((year)=>{
            stickerNames[i].includes(year)?setFulfilled(): console.log('skipped')
        })

    }
    console.log('CURRENT RESULT IS' +fulfilled)
    return fulfilled


    // here we check if any valid year is typed inside the name of any sticker title 
}









let  checkForStickers = (item:object, state:object):boolean=>{

    let fulfilled = false
    
    let initCheck = ()=>{
        
        let stickers:Array<object> = item.extra.stickers
        let stickerNames: Array<string>= stickers.map((obj)=>obj.name)

        fulfilled = doCheck(stickerNames, years)
    }

    item.extra.stickers?{

    }: console.log(0)

    
    
}










// let initCheck = (item, state):boolean=>{
    
//     let years = createAcceptableSubstrings(state.minStickerYear, state.maxStickerYear)

//     return check()
// }



let customCheck = (item, years)=>{
    let fulfilled = false
    let setFulfilled = ()=>{fulfilled=true}
    let stickerNames: Array<string>= item.extra.stickers.map((obj)=>obj.name)

    for (let i = 0; i<stickerNames.length&&!fulfilled; i++){
        
        // stickerNames[i]

        years.forEach((year)=>{
            stickerNames[i].includes(year)?setFulfilled(): null //console.log('skipped')
        })

    }

   
    return fulfilled
}




export let newFunc = (item:object, state:object):boolean=>{

    let result = false
    // console.log('INSIDE NEW FUNC I GOT'+ item)
    let years = createAcceptableSubstrings(state.minStickerYear, state.maxStickerYear)

    // item.extra.stickers?customCheck(item, years): console.log('fuuuuck false')
    
    if (item?.extra?.stickers){
        
        customCheck(item, years)? result=true : result=false 
        // console.log('PASSING THE CHECK so result is'+result + JSON.stringify(item))
    }
    // else{
    //     console.log('we got else so result is ' +result + 'on'+ JSON.stringify(item))
    // }

    // console.log('STICKERS is' + result)
    return result

    




    // ypaaaaaa. works as expected
}










export default checkForStickers