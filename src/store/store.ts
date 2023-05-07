import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist'
import { configureStore, combineReducers} from '@reduxjs/toolkit';
import storage from 'reduxjs-toolkit-persist/lib/storage' 
import logger from 'redux-logger'

import basketReducer from '../slice/basketSlice';
import asyncCardReducer from '../slice/asyncCardsSlice';

const rootReducer = combineReducers({
  basket: basketReducer, 
 cards :asyncCardReducer
  })

const persistConfig={
  key:'root',
  storage: storage
}

const persistedReducer=persistReducer(persistConfig, rootReducer)

export const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }})
        .concat(logger) 
      }
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
