import {View, Dimensions} from 'react-native'
import * as React from 'react';
import { useContext } from 'react';
import SetTitles from './titlesPart/setTitles';
import SetParams from './listOfFilters/setParams';
import { colors, radius } from '../../../../../globalColors';
import { sectionContext } from '../setLists';


export default function ListOfFilters(){

    let contextID = useContext(sectionContext)
    const styles = {
        listWrapper:{
            backgroundColor: colors.bg400,
            width:'96%', // не проебись с суммой ширины
            marginHorizontal:'2%',
            height: Dimensions.get('window').height/100*28.2773,
            // marginVertical:'1%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly',
            borderRadius:radius.regular,
            marginTop: Dimensions.get('window').height/100*1,
            alignSelf:'center',
            marginBottom:0                      
       }
    }

    return(
        
        <View style={styles.listWrapper}  keyboardShouldPersistTaps="always">
            <SetTitles ></SetTitles>
            <SetParams ></SetParams>           
        </View>
    )
}