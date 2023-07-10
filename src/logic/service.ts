import { createLocalPool } from "./parts";
import  BackgroundService  from 'react-native-background-actions';
import { iterationLoop } from "./main";


const sleep = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export const options = {
    taskName: 'Test',
    taskTitle: 'Service is running!',
    taskDesc: 'Found skins will appear in results pool',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
    parameters: {
        delay: 3000,
    },
  };
export const testingIntensiveTask = async (taskDataArguments?:object) => {
    await new Promise( async (resolve) => {
        let localPool = createLocalPool()
        let counter = 0   //couts outer iterations, e.g after all 3 sections

        for (let i = 0; BackgroundService.isRunning(); i++) {
            // console.log(i);
            await iterationLoop(localPool, counter)
            await sleep(3000);         //delay between outer iterations, i.e whole 3 sections
            counter++
        }
    });
};