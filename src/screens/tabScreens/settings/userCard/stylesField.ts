import { radius, colors } from "../../../../../globalColors"


export const styles = {
    image:{
        width:'30%',
        height:'90%',
        alignItems:'flex-end',
        margin:'1%'
    },
    label:{
        fontSize:20,
        color:colors.lightPrimary,
        fontFamily:'Roboto-Medium'
    },
    text:{
        fontSize:16,
        color:colors.lightSecondary,
        fontFamily:'Roboto-Regular'

    },
    sectionContainer:{
        width:'90%',
        height:'35%',
        // backgroundColor:colors.bg1000,
        margin:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textContainer:{
        height:'100%',
        width:'65%',
        // backgroundColor:'grey',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    }
}