import  *as Keychain from 'react-native-keychain'
import store from "../../../store/store"
import { setPublicKey, setPrivateKey } from '../../../store/keysSlice'
import { setIsLogged, setAccountData } from "../../../store/settingsSlice"



const  resetKeysEverywhere = ():void=>{
    Keychain.resetGenericPassword()
    store.dispatch(setPublicKey(null))
    store.dispatch(setPrivateKey(null))
} 
const resetUserData = ()=> store.dispatch(setAccountData(null))
const toggleIsLogged = ()=> store.dispatch(setIsLogged(false))


export const logOut = (navigate:Function)=>{
    resetKeysEverywhere()
    resetUserData()
    toggleIsLogged()
    // navigate() 
    console.log('all data is reset, store is', JSON.stringify(store.getState().settings))
}