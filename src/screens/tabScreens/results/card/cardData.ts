export const shortExterior = (exterior: string)=>{
    switch (exterior){
        case "factory new": {return 'FN'}
        case "minimal wear": {return 'MW'}
        case "field-tested": {return 'FT'}
        case "well-worn": {return 'WW'}
        case "battle-scarred": {return 'BS'}
    }        
}

export const beautifyPrice = (basicValue:number)=>{
    return `$`+basicValue/100
}