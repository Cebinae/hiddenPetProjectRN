/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppRoot from './App'

import {name as appName} from './app.json';

import PushNotification from "react-native-push-notification";

// PushNotification.configure({
//     onNotification: (notification)=>{
//         console.log('GOT IT HAHA')
//         notification.finish(console.log('CLOSED'))
//     },
//     requestPermissions: Platform.OS === 'ios'    
// })

// PushNotification.createChannel(
//     {
//       channelId: "channel-id", // (required)
//       channelName: "My channel", // (required)
//       channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
//       soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
//       importance: 4, // (optional) default: 4. Int value of the Android notification importance
//       vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
//     },
//     (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
//   );






import notifee, { EventType } from '@notifee/react-native';


notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;

  // Check if the user pressed the "Mark as read" action
  if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
    // Update external API
    await fetch(`https://my-api.com/chat/${notification.data.chatId}/read`, {
      method: 'POST',
    });

    // Remove the notification
    await notifee.cancelNotification(notification.id);
  }
});











AppRegistry.registerComponent(appName, () => AppRoot);
