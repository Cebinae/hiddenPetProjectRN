import { createSlice } from "@reduxjs/toolkit";
import { listState, firstList, secondList, thirdList } from "../stateTypes";
import { commonReducers } from "../commonReducers";
 



export const thirdlistSlice = createSlice({
    name:'ThirdList', //Имя редюсера  обязательно с большой, и
    initialState:thirdList,
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
    setFifthTitle} = thirdlistSlice.actions
export default thirdlistSlice.reducer