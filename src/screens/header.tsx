import * as React from 'react'
import { View, Text} from "react-native"
import { colors } from "../../globalColors";
import { StatusBar } from "react-native";
import { styles } from './stylesHeader';

export default function CustomHeader(props:{
    StatusBarColor: string, name:string
}){

    return(
        <>
            <StatusBar backgroundColor={colors.bg700} ></StatusBar>
            <View style={styles.container}>
                <Text style={styles.label}>{props.name}</Text>
            </View>
        </>
    )
}