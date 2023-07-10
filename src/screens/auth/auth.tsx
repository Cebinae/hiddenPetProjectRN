import { View, Text, Modal, StatusBar, Dimensions, ScrollView , TouchableOpacity} from "react-native"
import {useState} from "react";
import * as React from 'react'
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import {resumeWithKeys} from "./verifyKeys";
import { colors, radius } from "../../../globalColors";
import AuthModal from "./modals/authModal";
import KeyInputSection from "./inputSection/inputSection";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { initNotifications } from "../../logic/notificate";
import { styles } from "./stylesAuth";



initNotifications()
export default function Auth(){

    const navigation = useNavigation()

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;

    React.useEffect(()=>changeNavigationBarColor(colors.bg1000))

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

    const navigateToTabs = ()=>{navigation.dispatch(StackActions.replace('main')) }

    const continueLogged = async()=>{
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