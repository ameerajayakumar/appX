import React, { useEffect, useState } from 'react';
import componentConfig from '../../appConfig.json';

const ComponentLoader = ({ componentName }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const version = componentConfig.components[componentName]?.version || 'V1';
        const { default: ComponentVersion } = await import(`../Applications/${componentName}${version}`);
        setComponent(() => ComponentVersion);
      } catch (error) {
        console.log('Error on loading component', error);
      }
    };
    loadComponent();
  }, [componentName]);

  return <>{Component ? <Component /> : <div>Loading...</div>}</>;
};

export default ComponentLoader;
