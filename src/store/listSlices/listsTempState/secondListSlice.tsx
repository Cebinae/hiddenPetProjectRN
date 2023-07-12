import { createSlice } from "@reduxjs/toolkit";
import { listState, firstList, secondList, thirdList } from "../commonState";
import { commonReducers } from "../commonReducers";
 



export const secondlistSlice = createSlice({
    name:'SecondList', //Имя редюсера  обязательно с большой, иначе мапа в inputToState не подойдет
    initialState:secondList,
    reducers:commonReducers
        

    
})

export const {
    setID,
    setIsValid,
    toggleState,

    setFN,
    setMW,
    setFT,
    setWW,
    setBS,


    setMinYear, 
    setMaxYear, 
    setMinDiscount,

    setFirstTitle,
    setSecondTitle,
    setThirdTitle,
    setFourthTitle,
    setFifthTitle} = secondlistSlice.actions
export default secondlistSlice.reducer