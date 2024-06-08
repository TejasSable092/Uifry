import React from 'react';
import { CiStar } from "react-icons/ci";
import { GiNestedHexagons } from "react-icons/gi";
import { GrCube } from "react-icons/gr";
const Features = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-4'>
        <div className='w-full max-w-lg flex justify-center md:justify-end'>
          <img src={"src/assets/Group 35933.png"} alt="Iphon" className='w-[80%] md:w-[100%] object-contain'/>
        </div>

        <div className='max-w-md text-center md:text-left'>
          <p className='text-[#FF5555] text-xl'>FEATURES</p>
          <h2 className='text-2xl font-bold mt-2'>Uifry Premium</h2>
          <div className='mt-4'>
            <div className='mb-4'>
                <div className=' flex items-center gap-2'>
                <span className=' text-[#FF5555]'><CiStar /></span>
              <h3 className='font-bold text-xl'>Budgeting Intervals</h3>
                </div>
              <p className='text-[15px]'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className='mb-4'>
               <div className='flex gap-3 items-center'>
                <span className=' text-[#FF5555]'><GiNestedHexagons /></span>
               <h3 className='font-bold text-xl'>Expense Tracking</h3>
               </div>
              <p className='text-[15px]'>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
            </div>
            <div className='mb-4'>
              <div className=' flex items-center gap-3'>
                <span className=' text-[#FF5555]'><GrCube />
</span>
              <h3 className='font-bold text-xl'>Smart Alerts</h3>
              </div>
              <p className='text-[15px]'>Pellentesque commodo eros a enim. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nulla consequat massa quis enim.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
