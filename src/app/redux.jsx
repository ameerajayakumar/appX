import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '../state/index';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

export const makeStore = () => {
  return configureStore({
    reducer: {
      global: globalReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
