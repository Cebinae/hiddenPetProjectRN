import { createSlice } from "@reduxjs/toolkit";


interface keysSlice {
    privateKey: null| string,
    publicKey: null| string,
}

const initialState: keysSlice = {
    privateKey:null,
    publicKey:null    
}


// slice to store API keys after initializing from keychain after start and till exit
//not persisted, async storage in unsafe

export const resultingSlice = createSlice({
    name:'keysSlice', 
    initialState,
    reducers:{
        setPublicKey: (state, action)=>{
            state.publicKey = action.payload
        },
        setPrivateKey: (state, action)=>{
            state.privateKey = action.payload
        }
    }
})

export const {setPublicKey, setPrivateKey} = resultingSlice.actions
export default resultingSlice.reducer