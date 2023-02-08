import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlice';
import AuthSlice from './AuthSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ProfileSlice from './ProfileSlice';
const rootReducer = combineReducers({
  cart: cartSlice,
  auth: AuthSlice,
  profile: ProfileSlice,
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const resetStore = async () => {
  await persistor.purge();
  store.dispatch(resetStore());
  await persistor.flush();
};
export let persistor = persistStore(store);
export default store;
