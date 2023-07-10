export const commonReducers = {
    setID: (state, action)=>{
        state.id = action.payload
    },                                              //reducers are same for any section
    setIsValid: (state, action)=>{
        state.isValid = action.payload
    },

    toggleState: (state, action)=>{
        state = action.payload
    },

    setAmmount: (state, action)=>{
        state.ammount = action.payload
    },
    setMinYear: (state, action)=>{
        state.minStickerYear = action.payload
    },
    setMaxYear: (state, action)=>{
        state.maxStickerYear = action.payload
    },
    setMinDiscount: (state, action)=>{
        state.minDiscount.value = action.payload.value
        state.minDiscount.isValid = action.payload.isValid
    },
    setFirstTitle: (state, action)=>{
        state.first.value = action.payload.value
        state.first.isValid = action.payload.isValid
    },
    setSecondTitle: (state, action)=>{
        state.second.value = action.payload.value
        state.second.isValid = action.payload.isValid
    },
    setThirdTitle: (state, action)=>{
        state.third.value = action.payload.value
        state.third.isValid = action.payload.isValid
    },
    setFourthTitle: (state, action)=>{
        state.fourth.value = action.payload.value
        state.fourth.isValid = action.payload.isValid
    },
    setFifthTitle: (state, action)=>{
        state.fifth.value = action.payload.value
        state.fifth.isValid = action.payload.isValid
    },
    setFN:(state, action)=>{
        state.FN = action.payload
    },
    setMW:(state, action)=>{
        state.MW = action.payload
    },
    setFT:(state, action)=>{
        state.FT = action.payload
    },
    setWW:(state, action)=>{
        state.WW = action.payload
    },
    setBS:(state, action)=>{
        state.BS = action.payload
    },
}