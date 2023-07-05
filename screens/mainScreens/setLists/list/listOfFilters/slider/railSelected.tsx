import {View} from 'react-native'
import { colors } from '../../../../../../globalColors'

export default function RailSelected(){
   

    const styles = {
        rail:{
            width:'100%',
            height:'10%',
            backgroundColor:colors.green,
            margin:0,
            padding:0
            
        }
    }


    return(
        <View style={styles.rail}></View>
    )
}