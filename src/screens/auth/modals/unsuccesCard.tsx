import * as React from 'react'
import { View, Text, Button, Pressable  } from "react-native"
import FastImage from 'react-native-fast-image'
import { colors, radius } from '../../../../globalColors'

export default function UnsuccessCard(){

    const styles= {
        card:{
            backgroundColor:colors.bg400,
            borderRadius:radius.big,
            width:'70%',
            height:'40%',
            top:'-7%',
            display:'flex', 
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
        textSection:{
            width:'87%',
            height:'35%',
            top:'-13%',
            // backgroundColor:colors.bg700,
            borderRadius:radius.regular,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
            },
        pepeWrapper:{
            position:'absolute',
            bottom:0,
            left:0, 
            height:'35%',
            width:'100%',
        },
        pepeImage:{
            width:'46%',
            height:'100%',   
            borderBottomLeftRadius:radius.big
     
        }
    }
    return(
        <View style={styles.card}>

            <Text style={{
                fontSize:30,
                margin:0,
                padding:0,
                top:'-13%',
                color:colors.lightPrimary
            }}>Wrong keys</Text>

            <View style={styles.textSection}>
                <Text style={{
                    fontSize:16,
                    color:colors.lightSecondary
                }}>Format of entered keys is correct,
                but keys itself are wrong. Did you copied from from account settings?
                </Text>

                
            </View>

            <View style={styles.pepeWrapper}>
                <FastImage source={{
                        uri:'https://iili.io/HPr20rB.png'
                    }}
                    style={styles.pepeImage}
                    resizeMode={FastImage.resizeMode.stretch}

                    ></FastImage>
            </View>

        </View>
    )
}