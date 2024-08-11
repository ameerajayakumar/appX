'use client';

import React, { useEffect } from 'react';
import SideNav from './(components)/SideNav';
import StoreProvider, { useAppDispatch } from './redux';
import appConfig from './appConfig.json';
import { setMenu } from '@/state';

const AppLayout = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setMenu(appConfig.sidenav));
  });
  return (
    <div className="flex w-full min-h-screen">
      <SideNav></SideNav>
      <main className="flex flex-col w-full h-full">{children}</main>
    </div>
  );
};

const AppWrapper = ({ children }) => {
  return (
    <StoreProvider>
      <AppLayout>{children}</AppLayout>
    </StoreProvider>
  );
};

export default AppWrapper;
