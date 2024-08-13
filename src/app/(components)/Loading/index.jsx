import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen min-w-fit flex justify-center items-center">
      <Image src="/loading.png" alt="loading icon" width={20} height={20}></Image>
    </div>
  );
};

export default Loading;
