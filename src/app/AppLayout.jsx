import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div className="flex w-full ">
      SideNav
      <main className="flex flex-col w-full h-full">{children}</main>
    </div>
  );
};

export default AppLayout;
