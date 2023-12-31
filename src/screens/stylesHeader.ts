import { colors, radius } from "../../globalColors"
import {Dimensions} from 'react-native'

export const styles= {
    container:{
        height:Dimensions.get('window').height/100*5,
        width:'100%',
        backgroundColor:colors.bg700,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:0,
        // position:'absolute',
        elevation:9999,
    },
    label:{
        top:"-15%",
        fontSize:19,
        fontFamily:'Roboto-Regular',
        color:'white',
        padding:0,
        marginBottom:'0.3%'
    }
}