import { useAppSelector } from '@/app/redux';
import React from 'react';
import appConfig from '../../appConfig.json';

const TopNav = () => {
  const activeApp = useAppSelector((state) => state.global.activeApp);
  const activeAppConfig = appConfig.sidenav.find((app) => app.app === activeApp);
  const menuItems = activeAppConfig ? activeAppConfig.menuItems : [];

  return (
    <nav className="p-4">
      <ul className="flex justify-end">
        {menuItems.map((item, index) => (
          <li key={index} className="text-black hover:bg-gray-700 px-3 py-2 rounded">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
