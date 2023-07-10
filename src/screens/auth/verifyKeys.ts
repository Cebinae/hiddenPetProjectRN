import * as Keychain from 'react-native-keychain';
import store from '../../store/store';
import { setAccountData } from '../../store/settingsSlice';
import { sleep } from '../../logic/bgService/serviceUtils/parts';
import { setIsLogged } from '../../store/settingsSlice';
import { getResponse } from '../../logic/createRequest';
import { setPrivateKey, setPublicKey } from '../../store/keysSlice';



const setKeys = (publicKey:string, privateKey:string):void=>{
  store.dispatch(setPublicKey(publicKey))
  store.dispatch(setPrivateKey(privateKey))
}

const setCredentials = async (publicKey:string, secretKey:string)=>{
  console.log('into credentials')
  await Keychain.setGenericPassword('keys', JSON.stringify({
    publicKey:publicKey,
    secretKey:secretKey
  })).catch(e=>alert(e))

}

const dispatchProfileInfo=(data:object)=>{
  console.log('into dispatch')
  store.dispatch(setAccountData(data))
}

const getStatus = async(publicKey:string, secretKey:string, setSuccess:any): Promise<Boolean>=>{
  console.log('into status')
  let response =  await getResponse(
                                publicKey,
                                secretKey,
                                '/account/v1/user',
                                undefined,
                                'AUTH, test request for status'
                                ).then(res=>res).catch(e=>{return false})
  console.log('response here', response)

  if(response.status===200){
    console.log('STATUS 200')
    dispatchProfileInfo(response.data)
    return true
  }
  return false
}

// export const initKeys =async ()=>{
//   let keys = await Keychain.getGenericPassword()
//   console.log(keys['privateKey'])
// }




export let keychainToState = async():Promise<void>=>{
  let credentials = await Keychain.getGenericPassword()
  let keys = JSON.parse(credentials.password)
  // console.log('inside keychain to state', keys)
  store.dispatch(setPublicKey(keys.publicKey))
  store.dispatch(setPrivateKey(keys.secretKey))
  console.log(keys)
}

const onSuccess = async (publicKey:string, secretKey:string, setModalVisible:any, navigate:any, setSuccess:any):Promise<boolean>=>{
  setSuccess(true)
  // console.log('into success')
  await setCredentials(publicKey, secretKey)

  // console.log('ACCOUNT DATA,', store.getState().settings.accountData)

  setModalVisible(true)
  keychainToState()
  store.dispatch(setIsLogged(true))
  await sleep(2300)
  navigate()
  return true
}


const onFail = (setModalVisible:any, setSuccess:any)=>{
  setSuccess(false)
  // console.log('into onFail')
  setModalVisible(true)
  Keychain.resetGenericPassword() // just to be sure
  return false
}



//final func
export let resumeWithKeys = async(publicKey:string, 
                                  secretKey:string, 
                                  setModalVisible:any, 
                                  navigate:any, 
                                  setSuccess:any):Promise<boolean>=>{
  console.log('into main')

  return await getStatus(publicKey, secretKey, setSuccess)? onSuccess(publicKey, 
                                                          secretKey, 
                                                          setModalVisible, 
                                                          navigate,
                                                          setSuccess) : onFail(setModalVisible, setSuccess)
}

//ohuenno