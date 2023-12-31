import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    displayableItems:[],
    isRunning:false,
    statusbarColor:'grey'
    
}


export const resultingSlice = createSlice({
    name:'resulting', //Имя редюсера
    initialState,
    reducers:{
        setDisplayable: (state, action)=>{
            state.displayableItems = [...action.payload]
        },
        setStatusBar: (state, action)=>{
            state.statusbarColor = action.payload
        },
        setIsRunning:(state, action)=>{
            state.isRunning = action.payload
        }

    },
})

export const {setDisplayable, setStatusBar, setIsRunning} = resultingSlice.actions
export default resultingSlice.reducer