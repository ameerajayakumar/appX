import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { loadApp } from '@/state';

const SideNav = () => {
  const menu = useAppSelector((state) => state.global.menu);
  const dispatch = useAppDispatch();

  //delete below
  const state = useAppSelector((state) => state.global);
  console.log('state is', state);

  const selectApp = (app) => {
    dispatch(loadApp(app));
  };

  return (
    <div className="flex flex-col w-64 md:w-60 bg-[#fcfcfcd2]  items-center">
      <div className="my-10 font-bold">Applications</div>
      <ul>
        {menu.map((item, index) => (
          <li
            key={index}
            className="px-16 py-7 hover:bg-[#FFFFFF] w-full rounded hover:cursor-pointer font-semibold text-sm "
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
