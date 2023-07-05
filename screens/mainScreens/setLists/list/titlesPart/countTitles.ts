import { store } from "../../../../../store/store"


let ammount = 0


 const countTitles= (sectionID)=> {

    const slicesMap = {
        '1':store.getState().firstList,
        '2':store.getState().secondList,
        '3':store.getState().thirdList,               
        }
    


    let readyToCheck = slicesMap['1']

    
       
    let titles = [readyToCheck.first, readyToCheck.second, readyToCheck.third, readyToCheck.fourth, readyToCheck.fifth]

    titles.forEach((elem)=> elem.isValid===true&&ammount++  )
    console.log(ammount) 
}


 const dispatchAmmount = ()=>{
    store.dispatch({
        type:'firstList/setAmmount',
        payload: ammount
    })
}

 const clearCounter = ()=>{
    store.dispatch({
        type:'firstList/setAmmount',
        payload: 0
    })
}