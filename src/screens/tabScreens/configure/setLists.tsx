import * as React from 'react';
import { View, ScrollView, Keyboard } from "react-native"
import ListOfFilters from "./list/listItem"
import CustomHeader from "../../header"
import  { colors } from "../../../../globalColors"
import { useDispatch } from "react-redux"
import { setTabbar } from '../../../store/configureScreenSlice';
import { useNavigation } from '@react-navigation/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

export const sectionContext = React.createContext(0)

export default function SetList(){
    
    let navigation = useNavigation()

    React.useEffect(()=>{
        navigation.addListener('focus',  ()=>changeNavigationBarColor(colors.bg400))
    }, [])



    const styles= {
        background:{
            backgroundColor: colors.bg1000,
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'column',
            margin:0,
            padding:0,       
            },
        scrollView:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start'
            }
        }

    const dispatch = useDispatch()


    Keyboard.addListener( 'keyboardDidShow', ()=> dispatch(setTabbar('none')) )
    Keyboard.addListener( 'keyboardDidHide', ()=> dispatch(setTabbar('flex')) )   //redux change of tab bar displaying true/false
    return(


    <View style={styles.background}  >
        <CustomHeader name='Configure titles and filters'></CustomHeader>

        <View style={{height:'100%'}}>
            <ScrollView  keyboardDismissMode="none"  keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollView}>
            
                <sectionContext.Provider value={1}>
                        <ListOfFilters ></ListOfFilters>
                </sectionContext.Provider>

                <sectionContext.Provider value={2}>
                        <ListOfFilters ></ListOfFilters>
                </sectionContext.Provider>

                <sectionContext.Provider value={3}>
                        <ListOfFilters ></ListOfFilters>
                </sectionContext.Provider>
                
            </ScrollView>             
        </View>
           
    </View> 
       
    )
}