import {View, Text, TextInput, } from 'react-native'
import * as React from 'react';
import { sectionContext } from '../../../setLists';
import store from '../../../../../../store/store';
import { colors, radius } from '../../../../../../../globalColors';

export default function Discount (){


    let [discount, setDiscount] = React.useState('')
    let sectionID = React.useContext(sectionContext)

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []); 

    let isFirstRender = React.useRef(true)



    const styles={
    discountSection:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'3.5%',
        justifyContent:'space-between'

    },
    
    discountInput:{
        backgroundColor: colors.bg100,
        fontSize:14,
        width: '20%',
        height:'70%',
        color:'white',
        padding:0,
        paddingLeft:'3.5%',
        borderRadius: radius.tiny,
        justifyContent:'space-between'
    },
    discountLabel:{
        fontSize:15,
        // color:colors.lightSecondary
    }

}
   

let handleChange= (text:string)=>{

    let temp = text
    let temp2 =temp.replace('-','').replace(' ', '').replace('.', '').replace(',', '')

    console.log(temp2)

    setDiscount(temp2)
    
    console.log(temp)

    let persistToStorage = (text: string)=>{
        enum sections {
            "FirstPersistedSection"=1,
            "SecondPersistedSection"=2,
            'ThirdPersistedSection'=3
        }

        let action = {
            type:`${sections[sectionID]}/setMinDiscount`, payload:{value:text}
        }

        store.dispatch(action)
    }

    persistToStorage(temp2)


}


let restorePersisted = (sectionID: number)=>{

    let stateMap = {
        1: store.getState().FirstPersistedSection.minDiscount.value,
        2: store.getState().SecondPersistedSection.minDiscount.value,
        3: store.getState().ThirdPersistedSection.minDiscount.value
    }

    let state = stateMap[sectionID]
    
    let init= (value)=>{
        isFirstRender.current=false
        console.log('im returning'+value)
        setDiscount(value)
    }
    isFirstRender.current? init(state): console.log('not fired')
    
}

React.useEffect(()=> restorePersisted(sectionID))




return(









    <View style={styles.discountSection}>
                <Text style={styles.discountLabel}>Min. discount</Text>
                <TextInput 
                    placeholder=' 0' 
                    placeholderTextColor={colors.lightSecondary}
                    keyboardType='numeric' 
                    style={styles.discountInput}
                    maxLength={2}
                    // onChange={event=> handleChange(event.nativeEvent.text )}
                    onChangeText={(text)=> handleChange(text)}
                    value={discount.toString()}
                    place
                    >
                    

                    </TextInput>
                <Text>%</Text>

    </View>
)}