import {View, Text} from 'react-native'
import * as React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import store from '../../../../../../store/store';
import { sectionContext } from '../../../setLists';
import { colors } from '../../../../../../globalColors';



export default function Checkbox( {ID}){

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    let [Checked, setIsChecked] =  React.useState(false)


let sectionID = React.useContext(sectionContext)
let isFisrtRender = React.useRef(0)
let defaultValue = React.useRef(true)


let isChecked=():void=>{

    let stateMap = {
        1:store.getState().FirstPersistedSection,
        2:store.getState().SecondPersistedSection,
        3:store.getState().ThirdPersistedSection,
    }
    let temp = stateMap[sectionID]
    let temp2 = temp[`${ID}`]

    


    console.log('ref is ' + temp2)
    isFisrtRender.current++
    setIsChecked(temp2 )
    
    console.log('rendered box '+ isFisrtRender.current)


    forceUpdate()
    

}

React.useEffect(()=>{
    isFisrtRender.current<1 ? isChecked(): 0
})






   
const styles={
    container:{
        margin:'1%'

    }
}




    let handlePress = (isChecked: boolean) => {
        

        console.log('state now is'+ Checked)
        enum sections{
            'FirstPersistedSection'=1,
            'SecondPersistedSection'=2,
            'ThirdPersistedSection'=3,

        }
        
       let action = {
        type:`${sections[sectionID]}/set${ID}`, payload:!Checked //обязательно сначала диспатч а потом замена стейта, иначе ранний перерендер
       }

       store.dispatch(action)       //Диспатч работает, все ок, теперь восстановление стейта 
       console.log(action)
       setIsChecked((previousState)=>!previousState)
       
}

    



    return(

        

            <BouncyCheckbox 
            onPress={handlePress} 
            iconStyle={{borderRadius:7, width:20, height:20,}}
            innerIconStyle={{borderRadius:7, width:20, height:20, }}
            style={styles.container}
            disableText={true}
            isChecked={Checked}
            disableBuiltInState={true}
            fillColor={colors.green}
             />

        


    )
}