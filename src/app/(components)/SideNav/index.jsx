import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { loadApp } from '@/state';

const SideNav = () => {
  const menu = useAppSelector((state) => state.global.menu);
  const state = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  // const activeapp = useAppSelector((state) => state.global.activeApp);
  console.log('state is', state);

  const selectApp = (app) => {
    dispatch(loadApp(app));
  };

  return (
    <div className="flex flex-col w-60 md:w-56 bg-[#fafafaac] items-center">
      <div className="my-5 font-bold">Applications</div>
      <ul>
        {menu.map((item, index) => (
          <li
            key={index}
            className="px-14 py-7 hover:bg-[#FFFFFF] w-full rounded hover:cursor-pointer font-semibold text-sm "
            onClick={() => selectApp(item.app)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
