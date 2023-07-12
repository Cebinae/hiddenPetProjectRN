import {View, Text, Image, Pressable, TouchableWithoutFeedback, Linking, TouchableOpacity, StatusBar,} from 'react-native'
import * as React from 'react'
import FastImage from 'react-native-fast-image';
import { shortExterior } from './cardData';
import { useNavigation } from '@react-navigation/native';
import { styles } from './stylesModal';


export default function modalCard(props:{
    closeFnc:any, itemToShow:object
}) {


    let navigation = useNavigation()
    React.useEffect(()=>{
        navigation.addListener('blur', props.closeFnc) 
        setTimeout(() => {
            StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.47)')
        }, 260);})


    return(

        <>
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