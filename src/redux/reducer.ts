import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { combineReducers } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = combineReducers({
  tasks: tasksReducer,
  auth: persistedReducer,
});
