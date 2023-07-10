import * as React from 'react';
import {  StatusBar} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/store/store';
import { Provider } from 'react-redux';
import {store} from './src/store/store'
import globalColors from './globalColors';
import notifee, { EventType } from '@notifee/react-native';
import InitialRoute from './src/navigation/initialRoute';



export default function AppRootr() {
  

  
React.useEffect(() => {
  return notifee.onForegroundEvent(({ type, detail }) => {
    switch (type) {
      case EventType.DISMISSED:
        console.log('User dismissed notification', detail.notification);
        break;
      case EventType.PRESS:
        console.log('User pressed notification', detail.notification);
        break;
    }
  });
}, []);


  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <StatusBar  backgroundColor={globalColors.secondaryBackground}></StatusBar>
      <InitialRoute></InitialRoute>
    </PersistGate>
  </Provider>
  
  );

  
}

