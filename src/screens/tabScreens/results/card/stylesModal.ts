import { colors, radius } from "../../../../../globalColors"

export const styles = {
    wrapper:{
        position:'absolute',
        width:'100%',
        height:'100%',
        
    
    },
    inner:{
        opacity:0.9
    },
    modalBackground:{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.58)',
        display:'flex',
        justifyContent:'center',
        

    },
    modalWindow:{
        width:'72%',
        height:'60%',
        backgroundColor:colors.bg400,
        borderRadius:20,
        alignSelf:'center',
        top:'-7%',
        display:'flex',
        borderWidth: 3,
        borderColor: colors.borderColor,
        borderStyle:'solid'
    },
    mainImage:{
        height:'30%',
        width:'80%',
        top:'4%',
        left:'7%'
    },
    exterior:{
        color:colors.lightSecondary,
        fontSize:20,
        top:'-21.5%',
        
    },
    titleText:{
        padding:'2.4%',
        paddingLeft:'6.4%',
        
        fontSize:16,

    },
    lockText:{
        position:'relative',
       
        top:"-11%",
        color:colors.lightSecondary
    },
    section:{
        top:"22%",
        marginLeft:'6.4%',
        position:'absolute'
    },
    stickerItem:{
        height:"10%",
        width:'94%',
        backgroundColor:colors.bg200,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:'1.4%',
        paddingRight:'1.4%',
        margin:'1%',
        marginLeft:'2%',
        borderRadius:7
    },
    sticker:{
        width:30,
        height:30,
        paddindLeft:'8%'
    },
    stickerName:{
        paddingLeft:'3%',
        flex:1,
        wrap:'wrap'
    
    },
    stattrackLabel:{
        backgroundColor:colors.darkOrange,
        inneWidth:'100%',
        width:'27%',
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 20,
        position:'absolute',
        paddingLeft:10
        
    },
    stattrackText:{
        color: colors.lightPrimary
    },
    button:{
        width:'100%',
        height:'12%',
        backgroundColor:colors.green,
        position:'absolute',
        bottom:0,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonTitle:{
        fontSize:17,
        color:'white',
        
    }
   
}