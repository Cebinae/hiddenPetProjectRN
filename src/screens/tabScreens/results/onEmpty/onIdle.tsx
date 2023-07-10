import { View, Text } from "react-native"
import * as React from 'react'
import { colors } from "../../../../../globalColors"


export default function OnIdle (){


    const styles ={
        title:{
            fontSize:23,
            color:colors.lightPrimary,
            fontFamily:'Roboto-Medium'
        },
        labelSection:{
            // backgroundColor:'red',
            // height:'15%',
            alignItems:'center',
            marginTop:'15%'           
        },
        textSection:{
            width:'80%',
            height:'30%',
            marginTop:'7%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start'
        },
        paragraph:{
            color:colors.lightSecondary,
            paddingTop:'3%'
        }
        
    }

    return(
        <>
            <View style={styles.labelSection}>
                <Text style={styles.title}>Service is not running</Text>
                <Text style={{
                    fontSize:14,
                    color:colors.lightSecondary,
                    marginTop:'0.3%'
                }}>Would you like to start?</Text>
            </View>

            <View style={styles.textSection}>
                <Text style={styles.paragraph}>
                    1. Type the title you want to search
                        in the SETLIST tab, e.g "Usp-s | Orion" 
                        and ensure you have saved the changes.
                        You may type in any field, but each title need 
                        to be typed only once 
                </Text>

                <Text style={styles.paragraph}>
                    2. Set filters that offer should pass to be shown in results.
                        You may choose different filters for any of 3 sections.
                        Filters apply for each skin written in a same section
                </Text>
            </View>

            <View style={styles.textSection}>
                <Text style={styles.paragraph}>
                    Optionaly: you may want to disable visibility
                    of already existed offers depending on your purpose
                </Text>
                
                <Text style={styles.paragraph}>
                    Optionaly: you can also increase delay between each
                    marketplace check to reduce battery consumption
                </Text>
            </View>
         </>
    )
}