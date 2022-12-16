import { configureStore, combineReducers } from '@reduxjs/toolkit';
import adminReducer from './adminSlice';
import { apiSlice } from './rtkQuery';
import { setupListeners } from '@reduxjs/toolkit/query';

export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  admin: adminReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([apiSlice.middleware])
});

setupListeners(store.dispatch);
