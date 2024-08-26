import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { loadApp } from '@/state';
import Image from 'next/image';

const SideNav = () => {
  const menu = useAppSelector((state) => state.global.menu);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(false);

  //delete below
  const state = useAppSelector((state) => state.global);
  console.log('state is', state);

  const selectApp = (app) => {
    setSelected(true); //test failed
    dispatch(loadApp(app));
  };

  return (
    <div className="flex flex-col w-64 md:w-60 bg-[#e8e8ea91]  items-center">
      <div className="my-10 flex justify-center items-center cursor-pointer" onClick={() => window.location.reload()}>
        <Image src="/appicon.png" width={25} height={25} alt="AppX logo"></Image>
        <p className="pl-2 font-extrabold text-lg">AppX</p>
      </div>
      <ul>
        {menu.map((item, index) => (
          <li
            key={index}
            className={`${
              selected ? 'text-black' : 'text-black'
            } px-16 py-7 hover:bg-[#e8e8ea58] w-full rounded hover:cursor-pointer font-semibold text-sm `}
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
