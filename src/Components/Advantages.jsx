import React from 'react';
import { FaBell } from "react-icons/fa6";
const Advantages = () => {
  return (
    <div className="flex flex-col mt-10 items-center justify-center min-h-screen">
      {/* ADVANTAGE */}
      <div className='flex flex-col md:flex-row gap-8 items-center justify-center px-4 max-w-6xl'>
        <div className='max-w-md text-center md:text-left'>
          <p className='text-[#FF5555] text-xl'>ADVANTAGE</p>
          <h1 className='text-2xl font-bold gap-3'>Why Choose Uifry?</h1>
          <div className=' flex items-center gap-3'>
          <span className='bg-[#FF5555] px-2 py-2 rounded-[50%] text-white mt-4'><FaBell /></span>
          <h3 className='text-xl font-semibold mt-4'>Clever Notifications</h3>
          </div>
          <p className='text-lg mt-2'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
          </p>
        </div>

        <div className='w-full max-w-lg flex justify-center'>
          <img src={"src/assets/Group 35935.png"} alt="Iphone" className='w-full md:max-w-md object-contain'/>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
