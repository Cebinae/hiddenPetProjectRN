import * as React from 'react'
import { View, Text, } from "react-native"
import InfoSection from './modalSection'
import store from '../../../store/store'
import { styles } from './stylesSuccess'

export default function SuccessCard(){
    
    return(
    <View style={styles.card}>
                 
        <Text style={styles.title}>Successfuly logged in!</Text>

        <View style={styles.sectionWrapper}>

           <InfoSection image={store.getState().settings.accountData.imageUrl}
                       text={store.getState().settings.accountData.email}
                       subtitle='Dmarket'>
                       
            </InfoSection>
            <InfoSection image={store.getState().settings.accountData.steamAccount.icon}
                       text={store.getState().settings.accountData.steamAccount.username}
                       subtitle='Steam'>
            </InfoSection>                   

       </View>

   </View>)
}