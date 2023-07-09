import { View,StyleSheet, Text, Modal, StatusBar, TextInput, Dimensions, ScrollView , TouchableOpacity, Pressable} from "react-native"
import {useState} from "react";
import * as React from 'react'
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import  notifee  from '@notifee/react-native';
import {resumeWithKeys,} from "./authorizate";
import { colors, radius } from "../../globalColors";
import AuthModal from "./modals/authModal";
import KeyInputSection from "./inputSection";
import changeNavigationBarColor from "react-native-navigation-bar-color";

let init = async()=>{
    await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
      await notifee.requestPermission();    
}
init()



export default function Auth(){
const formWight = Dimensions.get('window').width/100*80
const formHeight = Dimensions.get('window').height/100*33
const navigation = useNavigation()


const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

React.useEffect(()=>changeNavigationBarColor(colors.bg1000))

const styles = StyleSheet.create(
    {
        background: {
            display: "flex",
            flexDirection: "row",
            // justifyContent: 'center',
            // alignItems: 'center',
            flex: 1,
            width: '100%',
            backgroundColor:colors.bg1000,
            alignContent:'center'
            },
        
        form: {
            borderRadius:radius.big,
            backgroundColor: colors.bg700,
            height: formHeight,
            width: formWight,
            alignSelf:'center',   
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'center',
            shadowColor: "#54ef8e",

            shadowOffset: {
                 width: 0,
                 height: 10,
                    },
                shadowOpacity:  0.23,
                shadowRadius: 11.27,
                elevation: 14     
        },
        buttonWrapper:{
            backgroundColor:colors.green,
            height:'15%',
            width:'35%',
            borderRadius:radius.tiny,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
        buttonText:{
            fontSize:18,
            color:colors.lightPrimary
        },
        secondaryButton:{
            alignSelf:'center',
            top:'6%',
            color:colors.lightSecondary
        },
        secondaryButtonText:{
            fontSize:18,
            color:colors.lightSecondary
        },
        scrollView:{
            display:'flex', flex:1, flexDirection:'column', justifyContent:'center', 
        }


    }
)



    let [privateKey, setPrivateKey] = useState('')
    let [publicKey, setPublicKey] = useState('')
    const togglePublicKey = (payload:string)=> setPublicKey(payload)
    const togglePrivateKey = (payload:string)=> setPrivateKey(payload)

    const [publicIsValid, setPublicIsValid] = useState(false)
    const [privateIsValid, setPrivateIsValid] = useState(false)
    const setPublicStatus = (payload:boolean)=> setPublicIsValid(payload)
    const setPrivateStatus = (payload:boolean)=> setPrivateIsValid(payload) 

    const [modalVisible, setModalVisible] = React.useState(false);
    const [isSuccessful, setSuccessful] = React.useState(false)
    let toggleSuccess = (status:boolean)=> setSuccessful(status)
    let toggleModal = (state:boolean)=> setModalVisible(state)

    // 


let navigateToTabs = ()=>{
    // navigation.navigate('main' )
    navigation.dispatch(
        StackActions.replace('main')
    ) 
}

let continueLogged = async()=>{
    privateIsValid&&publicIsValid? resumeWithKeys(publicKey, privateKey, toggleModal, navigateToTabs, setSuccessful):null   
}


    return(


        
        <ScrollView style = {styles.background}
                    contentContainerStyle={styles.scrollView}
                    keyboardShouldPersistTaps='handled'
                    >
 
            <StatusBar backgroundColor={colors.bg1000}></StatusBar>  

            <View style={styles.form}>             
                <KeyInputSection sectionLabel="Public API key"
                                 placeholder="Enter your key here..." 
                                 passToParentFnc={togglePublicKey}
                                 setStatus={setPublicStatus}
                ></KeyInputSection>
                <KeyInputSection sectionLabel="Private API key"
                                 placeholder="Example: 07ca4c..." 
                                 passToParentFnc={togglePrivateKey}
                                 setStatus={setPrivateStatus}
                ></KeyInputSection>
                <TouchableOpacity style={styles.buttonWrapper} onPress={continueLogged}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>          
            </View>
            
            <TouchableOpacity style={styles.secondaryButton}
                onPress={navigateToTabs}
                >
                    <Text style={styles.secondaryButtonText}>Continue without logging in</Text>
                    <Text style={{color:colors.lightSecondary}}>some features will be unavailable</Text>
            </TouchableOpacity>
        
            <Modal
                style={{ margin: 0 }}
                animationType="slide"
                onModalShow={()=>console.log('SHOOWN')}
                coverScreen={true}
                transculent={true}
                transparent={true}
                deviceWidth={deviceWidth}
                deviceHeight={deviceHeight}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}>
                    <AuthModal isSuccessful={isSuccessful} changeState={()=>setModalVisible(false)}></AuthModal>           
            </Modal>


        </ScrollView>
    )
}








 {/* <View style={styles.aroundInput}>
                    <Text style={styles.inputLabel}>Private APII key</Text>
                    <TextInput placeholder="Example: 07ca4c..."  style={styles.inputField} onChangeText={validation.private}
                                placeholderTextColor={colors.lightSecondary}
                    ></TextInput>
                    <ErrorSection message={privateError}></ErrorSection>                    
                </View> */}

                {/* <View style={styles.aroundInput}>
                    <Text style={styles.inputLabel}>Public API key</Text>
                    <TextInput placeholder="Enter your key here..." style={styles.inputField} onChangeText={validation.public}
                                placeholderTextColor={colors.lightSecondary}

                    ></TextInput>
                    <ErrorSection message={publicError}></ErrorSection>
                </View> */}





                // const validation = {
                    //     public: (value : string | number) => {
                    //         if (!regexpHexx.test(value.toString())){
                    //             setPublicIsValid(false)
                    //             setPublicError('Hexadecimal API key is required')
                    //         }
                
                    //         else {
                    //             setPublicError('')
                    //             setPublicIsValid(true)
                    //             setPublicKey(value)
                    //             async (value : string | number) => {
                                    
                    //                 try {
                    //                   await AsyncStorage.setItem('@public_Key',(value.toString()))
                    //                 } catch (e) {
                    //                   // saving error
                    //                 }
                    //               }}
                    //         },
                
                    //     private: (value : string | number) => {
                    //         if (!regexpHexx.test(value.toString())){
                    //             setPrivateIsValid(false)
                    //             setPrivateError('Hexadecimal API key is required')
                    //             console.log(value)
                    //         }
                
                    //         else {
                    //             setPrivateError('')
                    //             setPrivateIsValid(true)
                    //             setPrivateKey(value)
                
                    //             async (value : string | number) => {
                    //                 try {
                    //                   await AsyncStorage.setItem('@private_Key',(value.toString()))
                    //                 } catch (e) {
                    //                   // saving error
                    //                 }
                    //               }}
                    //         },
                
                
                    // }