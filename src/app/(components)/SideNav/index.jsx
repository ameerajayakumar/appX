import React, { useEffect } from 'react';
import { setMenu } from '../../../state/index';
import { useAppDispatch, useAppSelector } from '@/app/redux';

const SideNav = () => {
  const state = useAppSelector((state) => state.global);
  // const dispatch = useAppDispatch();
  const activeapp = useAppSelector((state) => state.global.activeApp);
  console.log('state is', state);
  console.log('activeapp', activeapp);

  return <div>SideNav</div>;
};

export default SideNav;
