import { View, Pressable, PanResponder } from "react-native";
import { colors } from "../../../../../../../globalColors";
import * as React from 'react'
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


export default function Thumb(){

    const styles ={
        thumb:{
            height:25,
            width:20,
            borderRadius:3,
            backgroundColor: colors.darkGreen,
            margin:0,
            elevation:99999,
            // borderTop:10,
            borderColor:"black",
            borderStyle:'solid',
            top:0
        }
    }
    // const gesture = Gesture.Pan().manualActivation(false).activeOffsetX(3).failOffsetY(1000)


    // let resp = PanResponder.create({
    //     onStartShouldSetPanResponder: (evt, gestureState) => {
    //       // Return false to disable the navigation swipe gesture
    //       return false;
    //     },
    //     onMoveShouldSetPanResponder: (evt, gestureState) => {
    //       // Check if the gesture is within the slide selector
    //       if (gestureState.dx > -50 && gestureState.dx < 50 && gestureState.dy < 50 && gestureState.dy > -50) {
    //         return true;
    //       }
    //       return false;
    //     }
    // })
    


    const navigation = useNavigation(); 

    navigation.getParent().setOptions({swipeEnabled : false})

    return(
    //     <View style={{
    //                 backgroundColor:'grey',
    //                 width:30,
    //                 height:30,  
    //                 elevation:99999,
    //                 margin:0,
    //                 padding:0

    // }}>
    // <GestureDetector gesture={gesture}>
        // <View style={{backgroundColor:'green', padding:40}}>

            <View style={styles.thumb
            } 
           
            ></View>
        // </View>

    )

}