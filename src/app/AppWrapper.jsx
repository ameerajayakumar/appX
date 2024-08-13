'use client';

import React, { useEffect } from 'react';
import SideNav from './(components)/SideNav';
import StoreProvider, { useAppDispatch, useAppSelector } from './redux';
import appConfig from './appConfig.json';
import { setMenu } from '@/state';
import Loading from './(components)/Loading';

const AppLayout = ({ children }) => {
  const menu = useAppSelector((state) => state.global.menu);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setMenu(appConfig.sidenav));
  });
  return (
    <>
      {menu.length !== 0 ? (
        <div className="flex w-full min-h-screen">
          <SideNav></SideNav>
          <main className="flex flex-col w-full ">{children}</main>
        </div>
      ) : (
        <Loading />
      )}
    </>
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
