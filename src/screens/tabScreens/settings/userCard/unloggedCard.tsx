import { View, Text} from "react-native"
import * as React from 'react'
import FastImage from "react-native-fast-image"
import { styles } from "./stylesUnlogged"

export default function UnloggedCard() {






    return(
        <>
        <View style={styles.container}>
            <Text style={styles.label}>Unlogged</Text>

            <Text style={styles.text}>
            {'You did not log in, this cause lack of some features and decrease your call limits.\n'+
            'Do you want to log in?'}
            </Text>
            <View style={styles.imageWrapper}>
                <FastImage source={require('../../../../assets/pepeSuggestion.png')}
                    style={styles.image}
                    resizeMode={FastImage.resizeMode.contain}
                /> 
            </View>
        </View>
        </>
    )
}