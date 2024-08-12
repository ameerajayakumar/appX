import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col w-80 items-center border rounded py-5">
      <div className="text-lg font-semibold mb-10">Profile Details</div>
      <div className="mb-7 w-full text-wrap px-4 overflow-hidden">
        <p className="mb-4">Name:</p>
        <p>Email: </p>
      </div>

      <button type="button" className="border rounded px-4 py-2">
        OK!
      </button>
    </div>
  );
};

export default Profile;
