import { View, Text} from "react-native"
import * as React from 'react'
import { colors } from "../../../../../globalColors"
import FastImage from "react-native-fast-image"


export default function CardSection(props:{
    image:string, label:string, text:string
}){


    const styles = {
        image:{
            width:'30%',
            height:'90%',
            alignItems:'flex-end',
            margin:'1%'
        },
        label:{
            fontSize:20,
            color:colors.lightPrimary,
            fontFamily:'Roboto-Medium'
        },
        text:{
            fontSize:16,
            color:colors.lightSecondary,
            fontFamily:'Roboto-Regular'

        },
        sectionContainer:{
            width:'90%',
            height:'35%',
            // backgroundColor:colors.bg1000,
            margin:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        textContainer:{
            height:'100%',
            width:'65%',
            // backgroundColor:'grey',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'
        }
    }



    return(
        <View style={styles.sectionContainer}>

            <View style={styles.textContainer}>
                <Text style={styles.label}>{props.label}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <FastImage source={{uri:props.image}}
                                resizeMode={FastImage.resizeMode.contain}
                                style={styles.image}
            ></FastImage>

        </View>
    )
}