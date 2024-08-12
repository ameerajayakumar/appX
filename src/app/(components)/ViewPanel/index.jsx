import { useAppSelector } from '@/app/redux';
import React, { useEffect, useState } from 'react';
import ComponentLoader from '../Applications/ComponentLoader';

const ViewPanel = () => {
  const activeApp = useAppSelector((state) => state.global.activeApp);
  const [LoadedApp, setLoadedApp] = useState(null);

  useEffect(() => {
    if (activeApp) {
      if (activeApp.includes('RegistrationForm')) {
        // eslint-disable-next-line react/display-name
        setLoadedApp(() => () => <ComponentLoader componentName="RegistrationForm" />);
      } else {
        import(`../Applications/${activeApp}`).then((Component) => {
          setLoadedApp(() => Component.default);
        });
      }
    }
  }, [activeApp]);

  return <>{LoadedApp ? <LoadedApp /> : <></>}</>;
};

export default ViewPanel;
