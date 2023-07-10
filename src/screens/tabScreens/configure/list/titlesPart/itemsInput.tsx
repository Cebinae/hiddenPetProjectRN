import { View, Text, TextInput, Keyboard} from 'react-native'
import * as React from 'react';
import validItems from './listOfAllItems';
import { passToRedux, setEmpty, setInvalid, setValid} from './inputToStore';
import {atLeastOne, checkForButton, isErrorFree,} from "./isButtonEnabled"
import { store } from '../../../../../store/store';
import { sectionContext } from '../../setLists';
import { titleContext } from './setTitles';
import { useContext } from 'react';
import { returnPlaceholder } from './returnPlaceholder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { duplicatesFree } from './duplicatesFree';
import ClearBtn from './clearBtn';
import { colors, radius } from '../../../../../../globalColors';





// Этот пропс для обновления компонента по функции из другого
// компонента на одинаковом уровне вложенности не переписывая на классы
export default function CustomInput() {


const sectionID = useContext(sectionContext)
const titleID = useContext(titleContext)    

const [color, setColor] = React.useState(colors.bg100)
// const [empty, setIsEmpty] = React.useState(true)
let isEmpty = React.useRef(true)


let placeholder = React.useRef(returnPlaceholder(sectionID, titleID))

let clearInput = ()=>{
    placeholder.current = ''
    forceUpdate()
}

let valueOfPlaceholder = returnPlaceholder(sectionID, titleID)

const styles = {
    textInput:{
        width:'99%',
        height:'82%',    
        backgroundColor:color,       
        color:'white',
        fontSize:14,
        fontWeight:'normal',
        margin:0,
        padding:0,
        paddingLeft:'3%',
        borderRadius:radius.tiny
}
}




const validate = (Text:string)=>{



// console.log('duplicates', duplicatesFree(Text))

    if ((validItems.some((elem)=> elem.toString().toUpperCase().trim() === Text.trim())&&(duplicatesFree(Text.trim()))))

    {console.log('thats valid'+ Text + titleID)
        setColor(colors.darkGreen)
        console.log( 'valid on input' + titleID + 'of section'+ sectionID)
        passToRedux(titleID, sectionID, Text.trim())
    }

    else if (!Text.trim()&&Text.trim().split('').length<1) {
        isEmpty.current=true
        setColor(colors.bg100)
        // setValid(titleID, sectionID)
        setEmpty(titleID, sectionID)
        placeholder.current = returnPlaceholder(sectionID, titleID)
       
    }

    else { setColor(colors.red)
    console.log('else' + Text + titleID)
    console.log(validItems[2])
    setInvalid(titleID, sectionID)
    isEmpty.current=false
    }

    checkForButton(sectionID)
    
    //  checkActive()
    
}

let display: string = returnPlaceholder(sectionID, titleID)




const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []); 

let placeholderColor = React.useRef(colors.green)

let isFocused = React.useRef(false)




    return(

        <>

        <View style={{
            display:'flex',
            flexDirection:'row',
            // backgroundColor:'green',
            height:'20%'
            
        }}>

        <TextInput  style={styles.textInput}
                    key={'section'+sectionID+'title'+titleID}
                    multiline={false}
                    placeholderTextColor={placeholderColor.current}
                    numberOfLines={1}
                    placeholder={placeholder.current}
                    autoFocus={false}
                    onChangeText={ (Text)=> validate(Text.toString().trim().toUpperCase()) }
                    
                    onBlur={()=> {
                        isFocused.current=false
                        forceUpdate()
                        }}
                           
                    onFocus={ (e)=> {
                        // placeholder.current= ''
                        placeholderColor.current=colors.bg400
                        isFocused.current=true
                                    forceUpdate()} }

                     onEndEditing  ={(e)=>{
                        let set = ()=>{
                            placeholder.current=valueOfPlaceholder
                            placeholderColor.current=colors.green
                            isFocused.current=false
                            forceUpdate()
                        }
                        e.nativeEvent.text===''? set() : console.log('nothing')
                        

                    }}
                    autoCorrect={false}                                    
        > 
        
         
        </TextInput>

       {isFocused.current&&isEmpty.current&&placeholder.current? <ClearBtn 
            updateFnc={clearInput} 
            placeholderRef={placeholder}>
            </ClearBtn>:null}


        </View>
        </>
    )
}


// создать отдельный стейт для валидных списков вместо стореджа по кнопке
// при инициализации и пустом инпуте показывать поля валидного стейта в плейсхолдер типа "" или название 
// при нажатии стейт проверяется и сохраняется в отдельный валидный стейт



//при запуске отображается
// онФокус ставим пустое 


//validateInput

//passValidated

//setPlaceholder 












// return(

//     <>

//     <View style={{
//         display:'flex',
//         flexDirection:'row',
//         backgroundColor:'green',
//         height:'20%'
        
//     }}>

//     <TextInput  style={styles.textInput}
//                 key={'section'+sectionID+'title'+titleID}
//                 multiline={false}
//                 placeholderTextColor={placeholderColor.current}
                
//                 placeholder={placeholder.current}

//                 onChangeText={ (Text)=> validate(Text.toString().toUpperCase().trim()) }
                
                
//                 onFocus={ (e)=> {
//                     // placeholder.current= ''
//                     placeholderColor.current='black'
//                                 forceUpdate()} }

//                  onEndEditing  ={(e)=>{
//                     let set = ()=>{
//                         placeholder.current=valueOfPlaceholder
//                         placeholderColor.current='blue'
//                         forceUpdate()
//                     }
//                     e.nativeEvent.text===''? set() : console.log('nothing')
                    


//                 }}
//                 autoCorrect={false}
                
                
                
//     > 
    
     
//     </TextInput>
//     <ClearBtn></ClearBtn>
//     </View>
//     </>
// )
// }