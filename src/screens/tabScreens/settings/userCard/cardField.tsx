import { View, Text} from "react-native"
import * as React from 'react'
import { styles } from "./stylesField"
import FastImage from "react-native-fast-image"


export default function CardSection(props:{
    image:string, label:string, text:string
}){


    



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