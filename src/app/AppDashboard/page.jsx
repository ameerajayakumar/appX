'use client';

import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../redux';

const ViewPanel = () => {
  const activeApp = useAppSelector((state) => state.global.activeApp);
  const [LoadedApp, setLoadedApp] = useState(null);

  useEffect(() => {
    if (activeApp) {
      import(`../(components)/Applications/${activeApp}`).then((Component) => {
        setLoadedApp(() => Component.default);
      });
    }
  }, [activeApp]);

  return <>{LoadedApp ? <LoadedApp /> : <></>}</>;
};

const AppDashboard = () => {
  return (
    <div className="bg-[#ffffffc4] h-full ">
      <div>Top Menu</div>
      <div className="flex flex-col justify-center items-center h-full">
        <ViewPanel />
      </div>
    </div>
  );
};

export default AppDashboard;
