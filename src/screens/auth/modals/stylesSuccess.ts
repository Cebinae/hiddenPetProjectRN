import { colors, radius } from "../../../../globalColors"


export const styles={
    card:{
        backgroundColor:colors.bg200,
        borderRadius:radius.big,
        // width: props.isSuccessful?'80%':'70%',
        width: '80%',

        height:'43%',
        top:'-7%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    section:{
        backgroundColor:colors.bg400,
        width:'85%',  
        height:'25%',
        margin:'3%', 
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    sectionWrapper:{
        height:'50%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:"center",
        marginBottom:'25%'
    }, 
    image:{
        width:'30%',
        height:'90%',
        alignItems:'flex-end',
    },
    title:{
        marginTop:'10%',
        fontSize:23.4,
        color:colors.lightPrimary
     }
}