import * as React from 'react'
import { View, Text, Button, Pressable  } from "react-native"
import { colors, radius } from '../../../globalColors'
import FastImage from 'react-native-fast-image'




export default function InfoSection  (props:{text:string, image:string, subtitle:string}){

    let styles={

        section:{
            backgroundColor:colors.bg400,
            width:'100%',
            height:'100%',
            // marginBottom:'%',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            borderRadius:radius.regular,
            top:'-8%'
        },
        sectionWrapper:{
            height:'100%',
            width:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:"center"
        }, 
        image:{
            width:'30%',
            height:'90%',
            alignItems:'flex-end',
            marginRight:'2%'
        }
    }

    return(
    
    <View style={{
        backgroundColor: colors.bg700,
        width:'85%',
        height:'50%',
        padding:0,
        margin:'5%',
        borderRadius:radius.regular,

    }}>
            <Text style={{
                position:'absolute',
                bottom:0,
                alignSelf:'center',
                justifyContent:'center',
                color:colors.bg200,
                letterSpacing:1.5
            }}>{props.subtitle}</Text>

    < View style={styles.section}>

       
        <View style={{
            width:'50%',
            // backgroundColor:'red',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'flex-start',
            
        }}>

            <Text style={{
                paddingLeft:'10%',
                paddingRight:"1%",
                width:'100%'
            }}
            numberOfLines={2}
            >{props.text}</Text>
        </View>

        <FastImage  source={{uri:props.image}}
                    style={styles.image}
                    resizeMode={FastImage.resizeMode.contain}>
        </FastImage>   
                          
    </View>


     </View>
    )
}  