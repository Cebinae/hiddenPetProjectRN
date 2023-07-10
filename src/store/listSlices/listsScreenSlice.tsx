import { createSlice } from "@reduxjs/toolkit";
import { listState, firstList, secondList, thirdList } from "./ListsState";

 


const initialState = {
    displayBar: 'flex',
    firstList:{
        titles:{
            firstTitle:'',
        }
    }
};

export const listsSlice = createSlice({
    name:'lists', //Имя редюсера
    initialState,
    reducers:{
        setTabbar: (state, action)=>{
            state.displayBar= action.payload
        },
        

    }
})

export const {setTabbar} = listsSlice.actions
export default listsSlice.reducer