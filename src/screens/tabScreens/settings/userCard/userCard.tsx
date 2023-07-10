import { View, Text} from "react-native"
import * as React from 'react'
import CardSection from "./cardField";
import store from "../../../../store/store";
import { colors, radius } from "../../../../../globalColors";
import { beautifyPrice } from "../../results/card/cardData";
import { useSelector } from "react-redux";
import { getResponse } from "../../../../logic/createRequest";



export default function UserCard (isSuccessful:boolean){

    let publicKey:string = useSelector((state)=>state.keysSlice.publicKey)
    let privateKey: string = useSelector((state)=>state.keysSlice.privateKey)

    const [balance, setBalance] = React.useState('loading...')

    let fetchBalance = async()=>{
        // console.log('PUBLIC KEY IS', publicKey)
        // console.log('private KEY IS', privateKey) 
            
        let wholeResponse = await getResponse(
                                            publicKey, 
                                            privateKey, 
                                            '/account/v1/balance',
                                            undefined,
                                            'settings, user card, fetch balance'
                                            )
        setBalance(beautifyPrice(wholeResponse.data['usd']))
        // console.log('fetched response', wholeResponse)
    }

    React.useEffect(()=>{
        console.log('inside useeffect')
        fetchBalance()   
    })


 let styles = {
    cardWrapper:{
        position:'absolute',
        backgroundColor:colors.bg700,
        width:'100%',
        height:'100%',
        alignItems:'center',
        borderRadius:radius.big,                  
        },
    balance:{
        alignSelf:'flex-start',
        marginLeft:'5%',
        fontSize:20,
        color:colors.lightPrimary
    }
 }



    return(
        <View style={styles.cardWrapper}>

           <CardSection 
            image={store.getState().settings?.accountData?.imageUrl}
            text={store.getState().settings?.accountData?.email}
            label="Dmarket login :"
           ></CardSection>

           <CardSection
            image={store.getState().settings.accountData?.steamAccount?.icon}
            text={store.getState().settings.accountData?.steamAccount?.username}
            label="Steam username :"
           ></CardSection>

            <Text style={styles.balance}>Balance : {balance}</Text>
        </View> 

    )
}