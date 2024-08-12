import { useAppDispatch } from '@/app/redux';
import { saveFormData } from '@/state';
import React from 'react';

const RegistrationFormV2 = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(saveFormData({ [name]: value }));
  };
  return (
    <div className="flex flex-col w-64 items-center border rounded py-5">
      <div className="text-lg font-semibold mb-10"> Registration Form (V2)</div>
      <input type="text" name="name" placeholder="Full Name" className="border rounded  mb-4" onChange={handleChange} />
      <input type="text" name="email" placeholder="Email" className="border rounded  mb-7" onChange={handleChange} />
      <button type="submit" className="border rounded px-4 py-2">
        Register
      </button>
    </div>
  );
};

export default RegistrationFormV2;
