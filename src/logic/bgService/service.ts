import { createLocalPool } from "./serviceUtils/parts";
import  BackgroundService  from 'react-native-background-actions';
import { iterationLoop } from "./main";
import store from "../../store/store";

const sleep = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export const options = {
    taskName: 'Test',
    taskTitle: 'Service is running!',
    taskDesc: 'Found skins will appear in results pool',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',                          // settings of neccessary service notification
    },
    color: '#ff00ff',
    parameters: {
        delay: 3000,
    },
  };


//to be passed in backgroundservice.start()
export const testingIntensiveTask = async (taskDataArguments?:object) => {
    await new Promise( async (resolve) => {
        let localPool = createLocalPool()
        let counter = 0   //counts outer iterations, e.g after all 3 sections, needed inside, just storing here not to use redux
        const delay = store.getState().settings.basicDelay
        for (let i = 0; BackgroundService.isRunning(); i++) {
            // console.log(i);
            await iterationLoop(localPool, counter)
            await sleep(delay);         //delay between outer iterations, i.e whole 3 sections
            counter++
        }
    });
};