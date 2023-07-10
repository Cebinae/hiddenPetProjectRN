import * as React from 'react'
import { View, Text, Button, Pressable  } from "react-native"
import FastImage from 'react-native-fast-image'
import { colors, radius } from '../../../../globalColors'
import InfoSection from './modalSection'
import store from '../../../store/store'

export default function SuccessCard(){


    let styles={
        card:{
            backgroundColor:colors.bg200,
            borderRadius:radius.big,
            // width: props.isSuccessful?'80%':'70%',
            width: '80%',

            height:'43%',
            top:'-7%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center'
        },
        section:{
            backgroundColor:colors.bg400,
            width:'85%',  
            height:'25%',
            margin:'3%', 
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        },
        sectionWrapper:{
            height:'50%',
            width:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:"center",
            marginBottom:'25%'
        }, 
        image:{
            width:'30%',
            height:'90%',
            alignItems:'flex-end',
        }
    }



    return(
    <View style={styles.card}>
                 
        <Text style={{
           marginTop:'10%',
           fontSize:23.4,
           color:colors.lightPrimary
        }}>Successfuly logged in!</Text>

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