import { createSlice } from "@reduxjs/toolkit";






const initialState = {
    firstList: 'empty',
    secondList: 'empty',
    thirdList: 'empty'
}

export const validListsSlice = createSlice({
    name:'ValidLists', 
    initialState:initialState,
    reducers:{
        setFirstValidList: (state, action)=>{
            state.firstList = action.payload
        },
        setSecondValidList: (state, action)=>{
            state.secondList = action.payload
        },
        setThirdValidList:  (state, action)=>{
            state.thirdList = action.payload
        },
        
    }
    }
)

export const {
    setFirstValidList,
    setSecondValidList,
    setThirdValidList

    } = validListsSlice.actions 

export default validListsSlice.reducer