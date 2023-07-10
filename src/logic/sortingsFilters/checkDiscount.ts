export let exampleDiscount = {
    discount : 10
}

 const checkDiscount= (item:object, state:object): boolean=>{
    return item['discount'] >= state['minDiscount'].value
} //работает

export default checkDiscount