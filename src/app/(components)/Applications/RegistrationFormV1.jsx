import React from 'react';

const RegistrationFormV1 = () => {
  return (
    <div className="flex flex-col w-64 items-center border rounded py-5 bg-white">
      <div className="text-lg font-semibold mb-10"> Registration Form (V1)</div>
      <input type="text" placeholder="First Name" className="border rounded  mb-4" />
      <input type="text" placeholder="Last Name" className="border rounded  mb-7" />
      <button type="submit" className="border rounded px-4 py-2">
        Register
      </button>
    </div>
  );
};

export default RegistrationFormV1;
