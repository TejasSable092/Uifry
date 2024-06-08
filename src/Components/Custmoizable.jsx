import React from 'react';
import { GiStarShuriken } from "react-icons/gi";
const Custmoizable = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-4'>
        <div className='w-full max-w-3xl flex justify-center md:justify-end'>
          <img src={"src/assets/Group 35933.png"} alt="Iphon" className='w-[80%] md:w-[100%] object-contain'/>
        </div>

        <div className='max-w-md text-center md:text-left'>
            <div className=' flex items-center gap-3 '>
            <span className=' bg-[#FF5555] px-2 py-2 rounded-[50%] text-white'><GiStarShuriken /></span>
          <h1 className='text-2xl font-bold'>Fully Customizable</h1>
            </div>
          <p className='text-[15px] mt-4'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
          </p>
        </div>
      </div>
    </>
  )
}

export default Custmoizable;
