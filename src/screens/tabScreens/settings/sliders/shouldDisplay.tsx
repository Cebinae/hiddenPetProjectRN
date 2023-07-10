
import * as React from 'react'
import { View , Text, Dimensions} from 'react-native';
import { Switch } from 'react-native-switch';
import { useSelector } from 'react-redux';
import store from '../../../../store/store';
import { setAlredyPresent } from '../../../../store/settingsSlice';
import { colors, radius } from '../../../../../globalColors';


export default function Switched() {


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
        width:'55%',
        marginLeft:'5%'
    },
    primaryText:{
        fontSize:16
    },
    secondaryText:{
        fontSize:12,
        color: colors.lightSecondary,
        marginLeft:0
    },
    switch:{
        marginRight:'5%'
    }
}





let selected = useSelector((state)=> state.settings.displayAlreadyPresent)

let changeValue = ()=>{
    store.dispatch(setAlredyPresent(!selected))
}

let [value, setValue] = React.useState(false)
    return (
        <View style={styles.wrapper}>

            <View style={styles.textSection}>
                <Text style={styles.primaryText}>Should display already present items? </Text>
                <Text numberOfLines={3} style={styles.secondaryText}>
                Otherwise, it shows only those offers that were placed during the operation of the service </Text>
            </View>
            <View style={styles.switch}>
                <Switch   
                    backgroundActive={colors.darkGreen}
                    circleInActiveColor={colors.lightPrimary}
                    circleActiveColor={colors.lightPrimary}
                    circleSize={Dimensions.get('screen').height/23.3}
                    value={selected} 
                    onValueChange={changeValue}
                    activeText='Yes'
                    inActiveText='No'
                    circleBorderWidth={0}
                    switchWidthMultiplier={2.6}
                
                ></Switch>

            </View>
        </View>

    )
}
  