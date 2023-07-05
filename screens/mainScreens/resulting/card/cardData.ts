export const shortExterior = (exterior: string)=>{
    switch (exterior){
        case "factory new": {return 'FN'; break}
        case "minimal wear": {return 'MW'; break}
        case "field-tested": {return 'FT'; break}
        case "well-worn": {return 'WW'; break}
        case "battle-scarred": {return 'BS'; break}
    }        
}

export const beautifyPrice = (basicValue:number)=>{
    return `$`+basicValue/100
}