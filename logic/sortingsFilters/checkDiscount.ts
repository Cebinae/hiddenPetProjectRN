
export let exampleDiscount = {
    discount : 10
}





 const checkDiscount= (item:object, state:object): boolean=>{

    let doesMatch = false
    let setMatch = ()=>doesMatch=true
    item['discount'] >= state['minDiscount'].value? setMatch():null

// console.log('DISCOUNT IS ', doesMatch )
    return doesMatch
} //работает

export default checkDiscount