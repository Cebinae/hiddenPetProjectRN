import listsSlice  from './listsSlices/listsScreenSlice';
import resultingSlice  from './resultingSlice';
import firtstlistSlice  from './listsSlices/listsTempState/firstListSlice';
import secondListSlice from './listsSlices/listsTempState/secondListSlice';
import thirdListSlice from './listsSlices/listsTempState/thirdListSlice';
import validListsSlice  from './validLists';
import firstSection from './listsSlices/persistedLists/firstSection';
import secondSection from './listsSlices/persistedLists/secondSection';
import thirdSection from './listsSlices/persistedLists/thirdSection';
import settingsSlice  from './settingsSlice';

import { persistStore,
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import keysSlice from './keysSlice';




export const rootReducer = combineReducers ({
        validLists: validListsSlice,
        resulting: resultingSlice,
        settings: settingsSlice,
        lists: listsSlice,
        firstList: firtstlistSlice,
        secondList: secondListSlice,
        thirdList: thirdListSlice,
        FirstPersistedSection: firstSection,
        SecondPersistedSection: secondSection,
        ThirdPersistedSection: thirdSection,
        keysSlice: keysSlice
})

const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whitelist:['validLists',"FirstPersistedSection", "SecondPersistedSection" , 'ThirdPersistedSection', 'settings'],
    blackList:['resulting']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
})


export const persistor = persistStore(store)
export default store


























// import { configureStore } from '@reduxjs/toolkit';


// export const store = configureStore({
//     reducer:{
//         resulting: resultingSlice,
//         lists: listsSlice,
//         firstList: firtstlistSlice,
//         secondList: secondListSlice,
//         thirdList: thirdListSlice
    
        
//     },
     
// })