import notifee, { AndroidGroupAlertBehavior } from '@notifee/react-native';
import { beautifyPrice } from '../screens/tabScreens/results/card/cardData';


// export async function onDisplayNotification(options) {
//     // Request permissions (required for iOS)
//     await notifee.requestPermission()

//     // Create a channel (required for Android)
//     const channelId = await notifee.createChannel({
//       id: 'default',
//       name: 'Default Channel',
//     });

//     // Display a notification
//     await notifee.displayNotification(options)
// }




export const initNotifications = async()=>{
  await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  await notifee.requestPermission();    
  }



export let createOptions=(title:string, item:object ):object=>{

  console.log('we got as item'+ item)
  console.log('and extras is...'+JSON.stringify(item.extra.stickers))

let price:string = beautifyPrice(item.price.USD)
let stickers = Object.assign(item.extra.stickers)
let names = stickers.map(elem=> elem.name)


  let options = {
    title: `New ${title}, ${price} & ${stickers.length} stickers`,
    body: `${names}`,
    android: {
      channelId: 'default',
      groupId: `${title}`,
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
      groupAlertBehavior: AndroidGroupAlertBehavior.SUMMARY,
    }
  }
  
  return options
  }




  
  export let createSummary=(title:string, ammount:number ):object=>{

    let options = {
      title: `${ammount} new summary ${title}'s`,
      body: `summary`,
      android: {
        channelId: 'default',
        groupSummary: true,
        groupId: `${title}`,
        // groupAlertBehavior: AndroidGroupAlertBehavior.SUMMARY,
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        
      }
    }
    
    return options
    }


   export let decideNotification = (newItems: Array<object>, title: string):void=>{

      let singleNotification = async (items:Array<object>, title:string)=>{
       
        for (let i=0; i<3; i++){
          await notifee.displayNotification(createOptions(title, newItems[i]))
        }
      }


      let multipleNotifications = async (newItems:Array<object>, title:string)=>{
        // await notifee.displayNotification(createSummary(title, newItems.length))
        await singleNotification(newItems, title)

        await notifee.displayNotification({
          title: `Got this 3 new ${title}'s and ${newItems.length} others`,
          body: `summary`,
          android: {
          channelId: 'default',
          groupId: `${title}`,
          groupAlertBehavior: AndroidGroupAlertBehavior.SUMMARY,
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },      
      }

        })

       
      }

      newItems.length<2?singleNotification(newItems, title):multipleNotifications(newItems, title)

    }