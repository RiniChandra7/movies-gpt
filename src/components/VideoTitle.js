import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='md:text-6xl text-2xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2 hidden lg:inline-block'>{overview}</p>
        <div>
            <button className='bg-white hidden lg:inline-block text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='mx-2 hidden lg:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opcaity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  );
};

export default VideoTitle;