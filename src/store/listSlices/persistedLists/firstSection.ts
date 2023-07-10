import { createSlice } from "@reduxjs/toolkit";
import { firstList } from "../stateTypes";
import { commonReducers } from "../commonReducers";







export const FirstPersistedSection = createSlice({
    name:'FirstPersistedSection', 
    initialState:firstList,
    reducers:commonReducers
    }
)

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
    setFifthTitle

    } = FirstPersistedSection.actions 

export default FirstPersistedSection.reducer