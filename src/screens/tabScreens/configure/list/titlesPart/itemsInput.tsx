import { View, Text, TextInput, Keyboard} from 'react-native'
import * as React from 'react';
import validItems from './listOfAllItems';
import { passToRedux, setEmpty, setInvalid, setValid} from './inputToStore';
import {atLeastOne, checkForButton, isErrorFree,} from "./isButtonEnabled"
import { sectionContext } from '../../setLists';
import { titleContext } from './setTitles';
import { useContext } from 'react';
import { returnPlaceholder } from './returnPlaceholder';
import { duplicatesFree } from './duplicatesFree';
import ClearBtn from './clearBtn';
import { colors, radius } from '../../../../../../globalColors';



export default function CustomInput() {

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []); 
let isEmpty = React.useRef(true)
let currText = React.useRef('')
let setText = (Text)=>{
    currText.current = Text.replace('.', '')
    forceUpdate()
}

const clearCurrInput = ()=> {
    isEmpty.current=true
    validate('')
    setText('')
}

const sectionID = useContext(sectionContext)
const titleID = useContext(titleContext)    

const [color, setColor] = React.useState(colors.bg100)
// const [empty, setIsEmpty] = React.useState(true)


let placeholder = React.useRef(returnPlaceholder(sectionID, titleID))

const clearInput = ()=>{
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

    setText(Text)
    if ((validItems.some((elem)=> elem === Text.replace('.', '').trim().toUpperCase())&&(duplicatesFree(Text.replace('.', '').trim().toUpperCase()))))

    {console.log('thats valid'+ Text + titleID)
        setColor(colors.darkGreen)
        console.log( 'valid on input' + titleID + 'of section'+ sectionID)
        passToRedux(titleID, sectionID, Text.toUpperCase().replace('.', '').trim())
        
    }

    else if (!Text) {
        isEmpty.current=true
        setColor(colors.bg100)
        // setValid(titleID, sectionID)
        setEmpty(titleID, sectionID)
        placeholder.current = returnPlaceholder(sectionID, titleID)
        return 0
    }

    else { setColor(colors.red)
    console.log('else' + Text + titleID)
    // console.log(validItems[2])
    setInvalid(titleID, sectionID)
    isEmpty.current=false
    return 0
    }

    checkForButton(sectionID) 
}




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

        <TextInput  
        
                    style={styles.textInput}
                    key={'section'+sectionID+'title'+titleID}
                    multiline={false}
                    placeholderTextColor={placeholderColor.current}
                    numberOfLines={1}
                    placeholder={placeholder.current}
                    autoFocus={false}
                    onChangeText={ (Text)=> validate(Text) }
                    value={currText.current}
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

       {isFocused.current&&isEmpty.current&&placeholder.current||isFocused.current&&currText.current? <ClearBtn 
            updateFnc={clearInput} 
            clearFnc={clearCurrInput}
            placeholderRef={placeholder}>
            </ClearBtn>:null}


        </View>
        </>
    )
}
