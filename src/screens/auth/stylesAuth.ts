import { colors, radius } from "../../../globalColors"
import {Dimensions } from 'react-native'

export const styles ={
    background: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        width: '100%',
        backgroundColor:colors.bg1000,
        alignContent:'center'
        },
    
    form: {
        borderRadius:radius.big,
        backgroundColor: colors.bg700,
        height: Dimensions.get('window').height/100*33,
        width: Dimensions.get('window').width/100*80,
        alignSelf:'center',   
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        shadowColor: "#54ef8e",

        shadowOffset: {
             width: 0,
             height: 10,
                },
            shadowOpacity:  0.23,
            shadowRadius: 11.27,
            elevation: 14     
    },
    buttonWrapper:{
        backgroundColor:colors.green,
        height:'15%',
        width:'35%',
        borderRadius:radius.tiny,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:18,
        color:colors.lightPrimary
    },
    secondaryButton:{
        alignSelf:'center',
        top:'6%',
        color:colors.lightSecondary
    },
    secondaryButtonText:{
        fontSize:18,
        color:colors.lightSecondary
    },
    scrollView:{
        display:'flex', 
        flex:1, 
        flexDirection:'column', 
        justifyContent:'center', 
    }


}