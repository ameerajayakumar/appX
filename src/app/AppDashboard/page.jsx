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

  return <div>{LoadedApp ? <LoadedApp /> : <></>}</div>;
};

const AppDashboard = () => {
  return (
    <div>
      <div>Top Menu</div>
      <ViewPanel />
    </div>
  );
};

export default AppDashboard;
