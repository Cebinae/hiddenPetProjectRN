import {View} from 'react-native'
import * as React from 'react';
import validItems from './listOfAllItems';
import CustomInput from './itemsInput';





export const titleContext = React.createContext(0)


export default function SetTitles() {

    let styles={

            sectionWrapper:{
                marginTop:'2%',
                width:'43%',
                height:'80%',
                // backgroundColor:'yellow',
                marginBottom:'8%',
                // padding:'3%',
                display: 'flex',
                flexDirection:'column',
                justifyContent:'space-evenly',
                alignSelf:'center'
        },                    
    }


    return(
        <View style={styles.sectionWrapper}>

            <titleContext.Provider value={1}>               
                    <CustomInput></CustomInput>                          
            </titleContext.Provider>

            <titleContext.Provider value={2}>
                <CustomInput></CustomInput>
            </titleContext.Provider>

            <titleContext.Provider value={3}>
                <CustomInput></CustomInput>                             
            </titleContext.Provider>

            <titleContext.Provider value={4}>
                <CustomInput></CustomInput>
            </titleContext.Provider>

            <titleContext.Provider value={5}>
                <CustomInput></CustomInput>
            </titleContext.Provider>
                 
        </View>
    )}














































// {({ handleChange, handleBlur, handleSubmit, values }) => (
//     <KeyboardAvoidingView style={styles.sectionWrapper}>
            
        
//             <TextInput style={styles.textInput} value={values.placeholder }></TextInput>
//             <TextInput style={styles.textInput}></TextInput>
//             <TextInput style={styles.textInput}></TextInput>
//             <TextInput style={styles.textInput}></TextInput>
//             <TextInput style={styles.textInput}></TextInput>
//             <Button title='111' ></Button>
            
        
//         </KeyboardAvoidingView>
//   )}







//   <Formik initialValues={{placeholder:'example'}} onSubmit={()=>console.log('submited')}>
//         <KeyboardAvoidingView style={styles.sectionWrapper}>
            
        
//             <TextInput style={styles.textInput} value={values.placeholder }></TextInput>
//             <TextInput style={styles.textInput}></TextInput>
//             <TextInput style={styles.textInput}></TextInput>
//             <TextInput style={styles.textInput}></TextInput>
//             <TextInput style={styles.textInput}></TextInput>
//             <Button title='111' ></Button>
            
        
//         </KeyboardAvoidingView>
// </Formik>        
