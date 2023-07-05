import * as React from 'react'
import { View, Text, Image, Pressable } from "react-native";
import { beautifyPrice, shortExterior } from "./cardData";
import FastImage from 'react-native-fast-image';
import { memo } from 'react';

import { colors, radius } from '../../../../globalColors';
import { SvgUri } from 'react-native-svg';


export default function Card (props, selectItem:Function, toggleVisible:Function, ){        


const styles={
    wrapper:{
        backgroundColor:colors.bg400,
        margin:'2%',
        flex:1,
        height:115,
        borderRadius:radius.tiny
        
    },
    thumbWrapper:{
        width:"100%",
        InnerHeight:"100%",
        margin:'4%',

        zIndex:1,
        top:0
    },

    thumb:{
        width:'90%',
        height:'80%'
    },
    description:{
        position:'absolute',
        top:'33%',
        marginLeft:'4%',
        color:colors.bg700,
    },
    floatWrapper:{
        zIndex:2,
        margin:0,
        padding:0,
        position:"absolute",
        right:'4%'
    },
    stickersRow:{
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        backgroundColor:colors.bg100,
        width:'92%',
        height:'25%',
        zIndex:3,
        bottom:'14%',
        borderRadius:radius.tiny,
        margin:'4%',
        marginTop:0
    },
    sticker:{
        width:'20%',
        height:'90%',
        margin:'2.5%',
        marginTop:0,
        marginBottom:0
    },
    stickerWrapper:{
        display:'flex',
        flexDirection:'row',
        flex:1
    }
}
 

const empty = 'empty'


    return(
        <Pressable style={styles.wrapper}
                    delayLongPress={75}
                    onPressOut={()=>console.log('we unmount item')}
                    onLongPress={()=>{
                    selectItem(props)
                    toggleVisible()
                    
                }}
                   
        >
             {/* <SvgUri
    width="100%"
    height="100%"
    uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
  /> */}
               
            <View style={styles.floatWrapper}>
                <Text style={{
                    color:colors.lightSecondary,
                    fontSize:11,
                    marginTop:'4%',
                    marginRight:'4%'
                }}>Float:{props?.extra?.floatValue?.toFixed(2)}</Text>
            </View>

            <View  style={styles.thumbWrapper}>
            <Image  
                style={styles.thumb}
                source={{uri:props.image}}></Image>
            </View>
 
            <View style={styles.description}>
                <Text>{props.extra.category==='stattrak™'?'ST ':''}{shortExterior(props.extra.exterior)}</Text>
                <Text></Text>
            </View>

            <View style={styles.stickersRow}>
                { props.extra.stickers!=undefined||null  ?  
                <View style={{flex:1, display:'flex', flexDirection:'row', justifyContent:"flex-start", alignItems:'center'}}>
                        {props.extra.stickers.map((elem)=>{
                                 return(
                                
                                       <FastImage
                                       resizeMode={FastImage.resizeMode.contain}
                                       source={{uri:elem.image}} style={styles.sticker} ></FastImage>
                                
            )})}

                </View>: <Text>{empty}</Text>}
                
            </View>

            
                <Text style={{
                        color:colors.green,
                        margin:'4%',
                        marginTop:'1%'
                }}>{beautifyPrice(props.price.USD)}</Text>
                
            
            {/* <TintedCard shown={shown}></TintedCard> */}
        </Pressable>
    )

//   let Cardd = React.useMemo(()=> Card, [])
}



// let MemoizedCard = (props, selectItem, toggleVisible)=>{
    
//     let MemoizedMyHeavyComponent = memo(Card(props, selectItem, toggleVisible))

//     return (
//         <MemoizedMyHeavyComponent></MemoizedMyHeavyComponent>
//     )
// }

// export default MemoizedCard
