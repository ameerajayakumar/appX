import React from 'react';

const RegistrationFormV2 = () => {
  return (
    <div className="flex flex-col w-64 items-center border rounded py-5">
      <div className="text-lg font-semibold mb-10"> Registration Form (V2)</div>
      <input type="text" placeholder="Full Name" className="border rounded  mb-4" />
      <input type="text" placeholder="Email" className="border rounded  mb-7" />
      <button type="submit" className="border rounded px-4 py-2">
        Register
      </button>
    </div>
  );
};

export default RegistrationFormV2;
