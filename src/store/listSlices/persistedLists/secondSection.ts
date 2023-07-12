import { createSlice } from "@reduxjs/toolkit";
import { secondList } from "../commonState";
import { commonReducers } from "../commonReducers";







export const SecondPersistedSection = createSlice({
    name:'SecondPersistedSection', 
    initialState:secondList,
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

    } = SecondPersistedSection.actions 

export default SecondPersistedSection.reducer