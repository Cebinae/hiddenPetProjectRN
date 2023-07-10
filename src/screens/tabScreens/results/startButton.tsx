import {Text, TouchableOpacity} from 'react-native'
import * as React from 'react'
import BackgroundService from 'react-native-background-actions';
import { testingIntensiveTask, options} from '../../../logic/bgService/service';
import { setIsRunning } from '../../../store/resultingSlice';
import { colors } from '../../../../globalColors';
import store from '../../../store/store';

export default function Start (){
    
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []); 

    let isRunning = React.useRef(false)
    let [running, setRunning] = React.useState(false)

    let changeState = ()=>{
        isRunning.current = BackgroundService.isRunning()
        setRunning(BackgroundService.isRunning())
    }

    React.useEffect( ()=>{
        BackgroundService.isRunning()!==isRunning.current? changeState():null   
    })

    const handlePress = async ()=>{
        const stop = async()=>{
            await BackgroundService.stop()
            store.dispatch(setIsRunning(false))
            setRunning(false)
        }

        const start = async()=>{
        await BackgroundService.start(testingIntensiveTask, options)
        store.dispatch(setIsRunning(true))
        setRunning(true)
        }
        BackgroundService.isRunning()?stop():start()  
        BackgroundService.isRunning()!==isRunning.current? changeState():null
        forceUpdate()
    }


    const styles= {
        wrapper:{
            backgroundColor: running? colors.lightOrange:colors.darkGreen,
            width:'35%',
            height:'9.3%',
            position:'relative',
            bottom:'12%',
            alignSelf:'flex-end',
            right:'6.5%',
            borderRadius:21,
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
            padding:'2%'       
        },
        title:{

        },
        suggestion:{
            opacity:0.3
        }
    }


    return(
        <TouchableOpacity style={styles.wrapper}
            onPress={handlePress}>
            <Text style={styles.title}>{
                running? 'Working...':'Not started'
            }</Text>
            <Text style={styles.suggestion}>{
                running? 'Stop?':'Start?'
            }</Text>
        </TouchableOpacity>
    )
}

