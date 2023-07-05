import { View, Text} from "react-native"
import * as React from 'react'
import { colors, radius } from "../../../../globalColors"
import FastImage from "react-native-fast-image"

export default function UnloggedCard() {



let styles={
    container:{
        backgroundColor:colors.bg700,
        borderRadius:radius.big,
        height:'100%',
        width:'100%',
        position:'absolute',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    label:{
        fontSize:23,
        fontFamily:'Roboto-Medium',
        color:colors.lightPrimary,
        alignSelf:'center',
        paddingTop:'10%',
        height:'30%'
    },
    text:{
        alignSelf:'center',
        height:'20%',
        marginTop:'10%',
        width:'80%',
        color:colors.lightSecondary,
        fontFamily:'Roboto-Regular',
        overflow:'visible'    
    },
    image:{
        width:'100%',
        height:'100%',
        position:'absolute',
        bottom:0,
        right:0,
        margin:0,
        padding:0
        
    }
}


    return(
        <>
        <View style={styles.container}>
            <Text style={styles.label}>Unlogged</Text>

            <Text style={styles.text}>
            {'You did not log in, this cause lack of some features and decrease your call limits.\n'+
            'Do you want to log in?'}
            </Text>
            <View style={{
                width:'30%',
                height:'40%',
                flex:1,
                position:'absolute',
                bottom:0,
                right:0,
                borderBottomRightRadius:radius.big,
                overflow:'hidden'
                }}>
                <FastImage source={{
                uri:'https://iili.io/HPsUrrJ.png'
                }}
                style={styles.image}
                resizeMode={FastImage.resizeMode.contain}
                >

                </FastImage>
            </View>
        </View>
        </>
    )
}