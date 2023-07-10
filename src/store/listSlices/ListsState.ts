
type listState ={

    id: string,                   //name of instance for some particular section 
    isValid: boolean,            //sets true when inputs are validated
    ammount: null|number,
    isAlerted: boolean,

    minStickerYear: number,
    maxStickerYear: number,      

    FN: boolean,
    MW: boolean,
    FT: boolean,
    WW: boolean,
    BS: boolean,                          // factory new, minimal wear, field-tested... cofigured by checkbox

    minDiscount: {
        value:number|null,
        isValid: boolean
    },

    first: {
        value:string|null,
        isValid: string
    },
    second: {
        value:string|null,
        isValid: string
    },
    third: {
        value:string|null,
        isValid: string
    },                        // text inputs for titles
    fourth: {
        value:string|null,
        isValid: string
    },
    fifth: {
        value:string|null,
        isValid: string
    }



// сукааа а смысл класса если параметров дохуя в слайсе   // cукааа а инстансы нельзя в стейт
}  

let firstList: listState = {
    id: '1',                    
    isValid: false, 
    ammount: null,          
    isAlerted : false,

    minStickerYear: 13,
    maxStickerYear: 23,      

    FN: true,
    MW: true,
    FT: true,
    WW: true,
    BS: true,                          

    minDiscount: {
        value:0,
        isValid:true
    },

    first: {
        value:null,
        isValid:'empty'
    },
    second: {
        value:null,
        isValid:'empty'
    },
    third: {
        value:null,
        isValid:'empty'
    },                       
    fourth:{
        value:null,
        isValid:'empty'
    },
    fifth: {
        value:null,
        isValid:'empty'
    },

    
}


let secondList: listState = {
    id: '2',                    
    isValid: false,           
    ammount: null,
    isAlerted : false,

    minStickerYear: 13,
    maxStickerYear: 23,      

    FN: true,
    MW: true,
    FT: true,
    WW: true,
    BS: true,                          

    minDiscount: {
        value:0,
        isValid:true
    },

    first: {
        value:null,
        isValid:false
    },
    second: {
        value:null,
        isValid:false
    },
    third: {
        value:null,
        isValid:false
    },                       
    fourth:{
        value:null,
        isValid:false
    },
    fifth: {
        value:null,
        isValid:false
    }
}


let thirdList: listState = {
    id: '3',                    
    isValid: false,           
    ammount: null,
    isAlerted : false,
    
    minStickerYear: 13,
    maxStickerYear: 23,      

    FN: true,
    MW: true,
    FT: true,
    WW: true,
    BS: true,                          

    minDiscount: {
        value:0,
        isValid:true
    },

    first: {
        value:null,
        isValid:false
    },
    second: {
        value:null,
        isValid:false
    },
    third: {
        value:null,
        isValid:false
    },                       
    fourth:{
        value:null,
        isValid:false
    },
    fifth: {
        value:null,
        isValid:false
    }
}


export {listState, firstList, secondList, thirdList}