import React from 'react';

const SignIn = () => {
  return (
    <div className="flex flex-col w-64 items-center border rounded py-5 bg-white">
      <div className="text-lg font-semibold mb-10"> Sign In</div>
      <input type="text" placeholder="Email" className="border rounded  mb-4" />
      <input type="text" placeholder="Password" className="border rounded  mb-7" />
      <button type="submit" className="border rounded px-4 py-2">
        Log In
      </button>
    </div>
  );
};

export default SignIn;
