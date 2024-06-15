import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './todosSlice';
import { todosApi } from './todosApi';

export const store = configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
