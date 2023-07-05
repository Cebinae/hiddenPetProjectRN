import { createSlice } from "@reduxjs/toolkit";
import { thirdList } from "../ListsState";
import { commonReducers } from "../commonReducers";







export const ThirdPersistedSection = createSlice({
    name:'ThirdPersistedSection', 
    initialState:thirdList,
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

    } = ThirdPersistedSection.actions 

export default ThirdPersistedSection.reducer