'use client';

import React from 'react';
import TopNav from '../(components)/TopNav';
import ViewPanel from '../(components)/ViewPanel';

const AppDashboard = () => {
  return (
    <div className="bg-[#ffffffc4] h-[90%] ">
      <TopNav />
      <div className="flex flex-col justify-center items-center h-full ">
        <ViewPanel />
      </div>
    </div>
  );
};

export default AppDashboard;
