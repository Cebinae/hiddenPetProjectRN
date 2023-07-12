import { createSlice } from "@reduxjs/toolkit";

interface settingsState {
    displayAlreadyPresent: boolean,
    basicDelay:number,  
    isLogged:boolean,
    swipesEnabled:boolean,
    accountData:object|null
}

const initialState : settingsState = {
    displayAlreadyPresent: true,
    basicDelay:2000,
    isLogged:false,
    swipesEnabled:true,
    accountData:null
}


export const settingsSlice = createSlice({
    name:'settings', //Имя редюсера
    initialState,
    reducers:{
        setAlredyPresent:(state, action)=>{
            state.displayAlreadyPresent = action.payload
        },
        setDelay:(state, action)=>{
            state.basicDelay = action.payload
        },
        setSwipes:(state, action)=>{
            state.swipesEnabled = action.payload
        },
        setAccountData:(state, action)=>{
            state.accountData = action.payload
        },
        setIsLogged: (state, action)=>{
            state.isLogged = action.payload
        },
        
    }
    
})

export const {setAlredyPresent, setSwipes, setAccountData, setIsLogged, setDelay} = settingsSlice.actions
export default settingsSlice.reducer