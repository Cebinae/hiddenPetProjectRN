import { View, Text, TouchableOpacity, Dimensions } from "react-native"
import * as React from 'react'
import CustomHeader from "../../header";
import Switched from "./sliders/shouldDisplay";
import { useSelector } from "react-redux";
import Delay from "./sliders/pickDelay";
import UserCard from "./userCard/userCard";
import UnloggedCard from "./userCard/unloggedCard";
import { useNavigation } from "@react-navigation/native";
import store from "../../../store/store";
import { logOut } from "./logOut";
import { colors, radius } from "../../../../globalColors"; 


export default function Settings(){
    const options = [
        { label: "00:02", value: 2000 },
        { label: "00:04", value: 4000 },
        { label: "00:10", value: 10000 }
      ];
 

    const decideInitial = (options:Array<Object>)=>{  
        let currentDelay = store.getState().settings.basicDelay
        let indexOfDelay = options.findIndex((elem:object)=>{
            if(elem.value==currentDelay){
                return true
            }
            return false
        })
        return indexOfDelay
    }
    let initialDelay = decideInitial(options)


    let navigation = useNavigation()
    const navigateToAuth = ()=>navigation.navigate('auth') 
    let isLogged = useSelector((state)=>state.settings.isLogged)

const styles= {
    background:{
        backgroundColor: colors.bg1000,
        width:'100%',
        height: Dimensions.get('window').height/100*94,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems: 'center'       
        },
    container:{
        backgroundColor:colors.bg400,
        height:'92.22%',
        width:'96%',
        borderRadius:radius.regular,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:12,
        marginTop:'2.4%'

        },
    cardWrapper:{
        backgroundColor:colors.bg700,
        width:'95%',
        height:'40%',
        alignItems:'center',
        borderRadius:radius.big,
        margin:'3%',
        },
     underneath:{
       backgroundColor:colors.bg1000,
        width:'100%',
        height:'100%',
        alignItems:'center',
        borderRadius:radius.big,
        top:'18%'                   
        },
    button:{
        position:'absolute',
        bottom:0,
        fontSize:23,
        letterSpacing:1.5,
        color:colors.lightPrimary,
        marginBottom:'1.4%'
        },
    settingSecton:{
        height:'35%',
        marginTop:'10%',
        marginBottom:'10%',
        width:'100%'}
}


const handleButton = (isLogged:boolean)=>{
    console.log('inside handle')
    isLogged? logOut(navigateToAuth):navigateToAuth()  
}


return(

    <>
        <CustomHeader name='Setting of application'></CustomHeader>

        <View style={styles.background}>

            <View style={styles.container}>

                <View style={styles.cardWrapper}>
                    <TouchableOpacity style={styles.underneath}
                     onPress={()=> handleButton(isLogged)}>
                        <Text style={styles.button}>{isLogged?'Log Out':'Log in'}</Text>
                     </TouchableOpacity>
                     
                    {isLogged?<UserCard></UserCard>:<UnloggedCard></UnloggedCard>}
                </View>


                <View style={styles.settingSecton}>
                    <Switched ></Switched>
                    <Delay initialDelay={initialDelay} options={options}></Delay>
                </View>                             
            </View>

        </View>
    </>
    )
}


{/*             
                <Button title='task start' onPress={handleNewItems}> </Button>
                <Button title="task stop" onPress={handlePool}> </Button>
                <Button title='loop' onPress={handleComparing}></Button> 4444
                <Button title="showDisplayable" onPress={handleTitltes}></Button>
                <Button title="check results" onPress={checkFinal}></Button>
                <Button title="check iteration" onPress={checkIteration}></Button> */}


{/* <Button title="check" onPress={handleClick}></Button>
            <Button title="does it filters" onPress={handleFilter}></Button>
            <Button title="exterior" onPress={handleExterior}></Button>
            <Button title="final check exterior" onPress={handleFinalCheckExterior}></Button>
            <Button title="checkForDiscount" onPress={handleDiscount}></Button>
            <Button title='do general check' onPress={handleGeneral}></Button>
            <Button title="iterateInSection" onPress={handleIteration}></Button> */}



            //check array comparsion
//switch enlarged interval, and if yes, show slider with 30sec, 1min, 5 min, 15 min 

//duplicatesFree and show big card on long press
//sort pool by price or by title








// let handleClick = ()=>{
//     notEmpty(define(1))
// }






// let handleExterior = ()=>{
//     let obj = {extra:{exterior:'field-tested'}}
//     let state = store.getState().FirstPersistedSection
//     // console.log(checkExterior(state))
// }


// let handleFinalCheckExterior =()=>{


// let values = acceptableExteriors(store.getState().FirstPersistedSection)
// console.log(isMatchAny(exampleItem, values))

// }

// let handleDiscount=()=>{
//     let state = store.getState().FirstPersistedSection
//     console.log(checkDiscount(exampleDiscount, state)   )
// }

// let handleGeneral = ()=>{
//     let state = store.getState().FirstPersistedSection
//     doGeneralSort(generalTestingItem, state)? console.log('it passed'): console.log('doesnt pass((')
// }


// let handleIteration = ()=>{
//     iterateThroughSection(1)
// }




// let handleNewItems= async()=>{

//     console.log('CURRENTLY DISPLAYING',store.getState().resulting.displayableItems)
// }


// let handlePool=()=>{
//     console.log(header)
// }


// let handleComparing = ()=>{
// innerIteration()}

// let handleTitltes = ()=>{
//     console.log(store.getState().resulting.displayabeItems)
// }

// let checkFinal=()=>{
//     checkResults()
// }
