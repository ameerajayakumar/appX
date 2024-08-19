import { useAppSelector } from '@/app/redux';
import React, { useEffect, useState } from 'react';
import ComponentLoader from '../Applications/ComponentLoader';
import componentConfig from '../../appConfig.json';

const ViewPanel = () => {
  const activeApp = useAppSelector((state) => state.global.activeApp);
  const [LoadedApp, setLoadedApp] = useState(null);

  useEffect(() => {
    if (activeApp) {
      const appConfig = componentConfig.components[activeApp];
      if (appConfig) {
        // eslint-disable-next-line react/display-name
        setLoadedApp(() => () => <ComponentLoader componentName={activeApp} />);
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
