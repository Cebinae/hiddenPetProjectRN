import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    displayBar: 'flex'
};

export const listsSlice = createSlice({
    name:'lists', //Имя редюсера
    initialState,
    reducers:{
        setTabbar: (state, action)=>{
            state.displayBar= action.payload
        }
    }
})

export const {setTabbar} = listsSlice.actions
export default listsSlice.reducer