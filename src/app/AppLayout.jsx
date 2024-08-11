'use client';

import React from 'react';
import SideNav from './(components)/SideNav';
import StoreProvider from './redux';

const AppLayout = ({ children }) => {
  return (
    <StoreProvider>
      <div className="flex w-full ">
        <SideNav></SideNav>
        <main className="flex flex-col w-full h-full">{children}</main>
      </div>
    </StoreProvider>
  );
};

export default AppLayout;
