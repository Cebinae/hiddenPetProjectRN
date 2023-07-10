import { radius, colors } from "../../../../../globalColors"

export const styles = {
    cardWrapper:{
        position:'absolute',
        backgroundColor:colors.bg700,
        width:'100%',
        height:'100%',
        alignItems:'center',
        borderRadius:radius.big,                  
        },
    balance:{
        alignSelf:'flex-start',
        marginLeft:'5%',
        fontSize:20,
        color:colors.lightPrimary
    }
 }