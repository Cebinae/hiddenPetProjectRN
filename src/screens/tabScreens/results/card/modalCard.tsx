import {View, Text, Image, Pressable, TouchableWithoutFeedback, Linking, TouchableOpacity, StatusBar,} from 'react-native'
import * as React from 'react'
import FastImage from 'react-native-fast-image';
import { colors } from '../../../../../globalColors';
import { shortExterior } from './cardData';
import { useNavigation } from '@react-navigation/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

export default function modalCard(props:{
    closeFnc:any, itemToShow:object
}) {
    let navigation = useNavigation()
    React.useEffect(()=>{
        navigation.addListener('blur', props.closeFnc) 
        setTimeout(() => {
            StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.47)')
        }, 260);})

    let styles = {
        wrapper:{
            position:'absolute',
            width:'100%',
            height:'100%',
            
        
        },
        inner:{
            opacity:0.9
        },
        modalBackground:{
            flex:1,
            backgroundColor:'rgba(0, 0, 0, 0.58)',
            display:'flex',
            justifyContent:'center',
            
    
        },
        modalWindow:{
            width:'72%',
            height:'60%',
            backgroundColor:colors.bg400,
            borderRadius:20,
            alignSelf:'center',
            top:'-7%',
            display:'flex',
            borderWidth: 3,
            borderColor: colors.borderColor,
            borderStyle:'solid'
        },
        mainImage:{
            height:'30%',
            width:'80%',
            top:'4%',
            left:'7%'
        },
        exterior:{
            color:colors.lightSecondary,
            fontSize:20,
            top:'-21.5%',
            
        },
        titleText:{
            padding:'2.4%',
            paddingLeft:'6.4%',
            
            fontSize:16,

        },
        lockText:{
            position:'relative',
           
            top:"-11%",
            color:colors.lightSecondary
        },
        section:{
            top:"22%",
            marginLeft:'6.4%',
            position:'absolute'
        },
        stickerItem:{
            height:"10%",
            width:'94%',
            backgroundColor:colors.bg200,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            paddingLeft:'1.4%',
            paddingRight:'1.4%',
            margin:'1%',
            marginLeft:'2%',
            borderRadius:7
        },
        sticker:{
            width:30,
            height:30,
            paddindLeft:'8%'
        },
        stickerName:{
            paddingLeft:'3%',
            flex:1,
            wrap:'wrap'
        
        },
        stattrackLabel:{
            backgroundColor:colors.darkOrange,
            inneWidth:'100%',
            width:'27%',
            borderBottomRightRadius: 7,
            borderTopLeftRadius: 20,
            position:'absolute',
            paddingLeft:10
            
        },
        stattrackText:{
            color: colors.lightPrimary
        },
        button:{
            width:'100%',
            height:'12%',
            backgroundColor:colors.green,
            position:'absolute',
            bottom:0,
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: 16,
            alignItems:'center',
            justifyContent:'center'
        },
        buttonTitle:{
            fontSize:17,
            color:'white',
            
        }
       
    }






    return(

        <>
        {/* <StatusBar backgroundColor={'rgba(0, 0, 0, 0.72)'}></StatusBar> */}
        <Pressable style={styles.modalBackground}              
                onPress={()=> {
                    navigation.removeListener('blur', props.closeFnc)
                    props.closeFnc() 
                }}>

            <TouchableWithoutFeedback>
                <View style={styles.modalWindow}>

                    <Image
                        source={{uri: props?.itemToShow.current?.image}}
                        style={styles.mainImage}
                    ></Image>

                    <Text style={styles.titleText}>{props.itemToShow.current.title}</Text> 

                    {props.itemToShow.current.extra.category==='stattrak™'? (
                            <View style={styles.stattrackLabel} >
                                <Text style={styles.stattrackText}>stattrak™</Text>
                            </View>):null}

                    <View style={styles.section}>

                    <Text style={styles.lockText}>
                        {props.itemToShow.current.extra.tradeLock?props.itemToShow.current.extra.tradeLock + 'd Lock':
                        'No trade lock' }
                    </Text>

                    <Text style={styles.exterior}>
                        { shortExterior(props.itemToShow.current.extra.exterior)}
                    </Text>

                    </View>

                    {props.itemToShow.current.extra.stickers.map((elem)=>{
                        return(
                        <View style = {styles.stickerItem}>
                            <FastImage source={{uri:elem.image}}
                                    style={styles.sticker}
                            ></FastImage>
                            <Text style={styles.stickerName} >{elem.name}</Text>
                        </View>
                        )
                    })}

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{
                        Linking.openURL(`https://dmarket.com/ingame-items/item-list/csgo-skins?userOfferId=${props.itemToShow.current.extra.linkId}`)
                        }}>
                            <Text style={styles.buttonTitle}>Open in market</Text>
                    </TouchableOpacity>

                </View>
            </TouchableWithoutFeedback>

        </Pressable>
        </>
    )
}