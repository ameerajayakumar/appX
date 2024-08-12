import React from 'react';

const Logout = () => {
  return (
    <div className="flex flex-col w-64 items-center border rounded py-5">
      <div className="text-lg font-semibold mb-10"> You can log out here: </div>
      <button type="submit" className="border rounded px-4 py-2">
        Log Out
      </button>
    </div>
  );
};

export default Logout;
