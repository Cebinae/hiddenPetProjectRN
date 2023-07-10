import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { listState, firstList, secondList, thirdList } from "../stateTypes";
import { commonReducers } from "../commonReducers";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const syncFirstStoreWithState = createAsyncThunk('FirstList/syncFirstState', async ()=>{
    let temp = await AsyncStorage.getItem('firstList').then((data)=> JSON.parse(data))
    return await JSON.parse(await temp)
})





export const firtstlistSlice = createSlice({
    name:'FirstList', //Имя редюсера  обязательно с большой, иначе мапа в inputToState не подойдет
    initialState:firstList,
    reducers:commonReducers,
    extraReducers:{
        [syncFirstStoreWithState.fulfilled]: (state, action)=>{
            state = action.payload
        }
    }
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
    setFifthTitle } = firtstlistSlice.actions 
export default firtstlistSlice.reducer