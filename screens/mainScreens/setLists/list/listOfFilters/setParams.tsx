import {View, Text} from 'react-native'
import * as React from 'react';
import Slider from './slider/slider';
import Checkbox from './checkbox/checkbox';
import ApplyButton from './applyButton/button';
import { sectionContext } from '../../setLists';
import Discount from './discount/discount';
import { colors } from '../../../../../globalColors';
import { useNavigation } from '@react-navigation/native';



export default function SetParams(){



let sectionID = React.useContext(sectionContext)
// const [isEnabled, setEnabled] = React.useState(false)
   
// const changeHandler = ()=> {setEnabled(previousState => !previousState)}

    const styles={

        sectionWrapper:{
            width:'40%',
            height:'60%',
            backgroundColor:colors.bg400,
            margin:'0%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between'
        },
        sliderSection:{
            padding:0,
            height:'46%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-evenly',
            top:'4%'
        },
        checkboxSection:{
            height:50,
            top:'3%'
        },
        checkboxesWrapper:{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-evenly'           
        },
        applyWrapper:{
            width:'100%',
            height:'30%',
            marginTop:0,          
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        labels:{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-evenly'
        },
        sliderLegend:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            margin:'2%'
        },
        legendHeader:{
            color: colors.lightSecondary,
            fontSize:9,
            marginHorizontal:'3.5%'            
        },
        sliderTitle:{fontSize:15,
            color:colors.lightPrimary,
            alignSelf:'center'
                }
    } 


    // const [swipeEnabled, setSwipeEnabled] = React.useState(true);

    // const panResponder = PanResponder.create({
    //     onMoveShouldSetPanResponder: (evt, gestureState) => {
    //       // Check if swipe is enabled and if the gesture is within the specified <View>
    //       if (swipeEnabled && gestureState.dx < 50 && gestureState.dx > -50 && gestureState.dy < 50 && gestureState.dy > -50) {
    //         // Check if the gesture is on a child element
    //         if (evt.target !== evt.currentTarget) {
    //           return false;
    //         }
    //         return true;
    //       }
    //       return false;``
    //     }
    //   });







let [sliderTitle, setSliderTitle] = React.useState('Select sticker years')


// const panResp = React.useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: (evt, gestureState) => {
//         // Check if the gesture is outside the slide selector
//         if (gestureState.dx < -50 || gestureState.dx > 50 || gestureState.dy < -50 || gestureState.dy > 50) {
//           return true;
//         }
//         return false;
//       },
//       onStartShouldSetPanResponder: (evt, handlr)=>{
//         nav.setOptions({swipeEnabled:false})
//         return true
//       },
//       onPanResponderEnd: (evt, handlr)=>{
//         nav.setOptions({swipeEnabled:true})
//         return true
//     }}
//     )
//   ).current;
















// const gesture = Gesture.Pan();

    return(

        <View style={styles.sectionWrapper}>

            <View
                horizontal={true}
                style={styles.sliderSection}
                onShouldBlockNativeResponder={()=>{return true}}
                pointerEvents='box-none'
                >
                <Text style = {styles.sliderTitle}>{sliderTitle}</Text>
                <Slider sectionID={sectionID} toggleTitle={setSliderTitle}></Slider>
                <View style = {styles.sliderLegend}>
                    <Text style={styles.legendHeader}>2014</Text>
                    <Text style={styles.legendHeader}>2023</Text>
                </View>               
            </View>

            <View style={styles.checkboxSection}>
                <View style={styles.labels}>
                    <Text>BS</Text>
                    <Text>WW</Text>
                    <Text>FT</Text>
                    <Text>MW</Text>
                    <Text>FN</Text>
                </View>

                <View style={styles.checkboxesWrapper}>
                    <Checkbox  ID='BS'></Checkbox>
                    <Checkbox  ID='WW'></Checkbox>
                    <Checkbox  ID='FT'></Checkbox>
                    <Checkbox  ID='MW'></Checkbox>
                    <Checkbox  ID='FN'></Checkbox>
                </View>
            </View> 

            <Discount></Discount>

            <View style={styles.applyWrapper}>
                <ApplyButton></ApplyButton>           
            </View>

        </View>


    )
}