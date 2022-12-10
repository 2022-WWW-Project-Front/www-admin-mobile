import { configureStore, combineReducers } from '@reduxjs/toolkit';
import adminReducer from './admin';

export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
  admin: adminReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
});
