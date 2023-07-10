
import * as React from 'react'
import { View , Text} from 'react-native';
import store from '../../../../store/store';
import { setDelay } from '../../../../store/settingsSlice';
import { colors, radius } from '../../../../../globalColors';
import SwitchSelector from "react-native-switch-selector";


export default function Delay(props:{
    initialDelay:number, options:Array<Object>
}) {


let styles = {
    wrapper:{
        marginTop:'3%',
        width:'95%',
        height:'45%',
        backgroundColor: colors.bg700,
        alignSelf:'center',
        borderRadius:radius.big,
        display:'flex', 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    textSection:{
        width:'50%',
        marginLeft:'5%'
    },
    primaryText:{
        fontSize:16,

    },
    secondaryText:{
        fontSize:12,
        color: colors.lightSecondary,
        marginLeft:0,
        // fontFamily:'Roboto-Regular'

    },
    switch:{
        marginRight:'5%',
        padding:0,
        width:'39%',
        height:'100%',
        alignItems:'center',
        justifyContent:"center",
    }
}

const dispatchToSettings = (value:number):void=>{
    store.dispatch(setDelay(value))
}

    return (
        <View style={styles.wrapper}>

            <View style={styles.textSection}>
                <Text style={styles.primaryText}>Select delay between each call to server</Text>
                <Text numberOfLines={3} style={styles.secondaryText}>Higher if unlogged, shown in minutes.
                Affect battery consumption.
                </Text>
            </View>

            <View style={styles.switch}>

            <SwitchSelector
                onPress={(value:number)=>dispatchToSettings(value)}
                initial={props.initialDelay}
                backgroundColor = {colors.lightSecondary}
                textColor={colors.lightPrimary} //'#7a44cf'
                selectedColor={colors.lightPrimary}
                buttonColor={colors.darkGreen}
                borderColor={colors.darkGreen}
                options={props.options}
                testID="delay-switch-selector"
                accessibilityLabel="delay-switch-selector"
            />
            
            </View>
        </View>

    )
}
  