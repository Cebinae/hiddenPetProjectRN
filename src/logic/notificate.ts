import notifee, { AndroidGroupAlertBehavior } from '@notifee/react-native';
import { beautifyPrice } from '../screens/tabScreens/results/card/cardData';


export const initNotifications = async()=>{
  await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',            //to call at launch
    });
  await notifee.requestPermission();    
  }



const createOptions=(title:string, item:object ):object=>{

  let price:string = beautifyPrice(item.price.USD)
  let stickers = Object.assign(item.extra.stickers)
  let names = stickers.map(elem=> elem.name)
  return {
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
  }


  
const createSummary=(title:string, ammount:number ):object=>{
    return {
      title: `${ammount} new summary ${title}'s`,
      body: `summary`,
      android: {
        channelId: 'default',
        groupSummary: true,                           //if many items at once, needed for grouping
        groupId: `${title}`,
        pressAction: {
          id: 'default',
        }
      }
    }    
  }


export let decideNotification = async(newItems: Array<object>, title: string)=>{

    if(newItems.length>1){
      notifee.displayNotification(createSummary(title, newItems.length))
      for (let i=0; i<=newItems.length; i++){                                  //main logic of firing notifications
          notifee.displayNotification(createOptions( title, newItems[i]))
      }
    }
    else {
      notifee.displayNotification(createOptions(title, newItems[0]))
    }
}