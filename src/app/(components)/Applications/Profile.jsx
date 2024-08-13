import { useAppSelector } from '@/app/redux';
import React from 'react';

const Profile = () => {
  const name = useAppSelector((state) => state.global.formData.name);
  const email = useAppSelector((state) => state.global.formData.email);
  return (
    <div className="flex flex-col w-80 items-center border rounded py-5 bg-white">
      <div className="text-lg font-semibold mb-10">Profile Details</div>
      <div className="mb-7 w-full text-wrap px-4 overflow-hidden">
        <p className="mb-4">Name: {name}</p>
        <p>Email: {email}</p>
      </div>

      <button type="button" className="border rounded px-4 py-2">
        OK!
      </button>
    </div>
  );
};

export default Profile;
