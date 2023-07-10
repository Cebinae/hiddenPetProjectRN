import { colors, radius } from "../../../../globalColors"

export const stylesInput ={
    inputLabel: {
        fontSize: 20,
        color:colors.lightPrimary    
    },
    inputField:{
        height:'45%',
        color:colors.lightPrimary,
        backgroundColor:colors.bg100,
        marginTop:'2%',
        padding:0,
        paddingLeft:'3%',
        borderRadius:radius.tiny,

        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,            
    },
    aroundInput:{
        height:'30%',
        width:'85%'
    }
}