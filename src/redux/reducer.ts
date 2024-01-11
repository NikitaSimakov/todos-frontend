import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { combineReducers } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/slice';
// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     tasks: tasksReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === 'development',
// });

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
// export const store = configureStore({
//   reducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
