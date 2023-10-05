import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { feedApi } from '../modules/feed/api/repository';

export const store = configureStore({
  reducer: {
   [feedApi.reducerPath]: feedApi.reducer,
  },
  middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(feedApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector