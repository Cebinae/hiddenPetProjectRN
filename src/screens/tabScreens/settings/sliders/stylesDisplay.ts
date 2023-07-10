import { radius, colors } from "../../../../../globalColors"

export const styles = {
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