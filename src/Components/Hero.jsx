import React from 'react';
const Hero = () => {
  return (
    <>
      <div className='w-full flex flex-col md:flex-row justify-around  mt-10 px-4'>
        <div className='flex flex-col items-center md:items-start text-center md:text-left md:mx-auto'>
          <h1 className='font-bold text-4xl mb-4 leading-tight'>
            <div className=' shadow-lg bg-'></div>
            Make The Best <br /> Financial Decisions
          </h1>
          <span className='text-[14px] mb-6 max-w-md'>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </span>
          <div className="flex gap-4">
            <button className="bg-black text-white py-2 px-6 rounded-lg text-sm font-semibold hover:text-[#e1b12c]">
              Get Started
            </button>
            <button className="flex items-center gap-2 py-2 px-6 text-sm font-semibold">
              <span>Watch Video</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.504-2.252a1 1 0 00-1.488.874v4.484a1 1 0 001.488.874l4.504-2.252a1 1 0 000-1.748z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.971-4.029 9-9 9S3 16.971 3 12 7.029 3 12 3s9 4.029 9 9z" />
              </svg>
            </button>
          </div>
               <div className=' w-[350px] mt-7'>
                <img src={"src/assets/Star 8.png"} alt="" className=' relative top-[10%] left-[35%]'/>
                <img src={"src/assets/Group 35924.png"} alt="" />
               </div>
        </div>

        {/* iPhone Section */}
        <div className=' flex'>
            <div className=' flex relative bottom-[15%]  left-7'>
                <img src={"src/assets/Frame 1 (1).png"} alt="" />
                <img src={"src/assets/iPhone-13-Pro-Front (1).png"} alt="" className=' absolute top-[5%] right-[3%]'/>
                <img src={"src/assets/iPhone-13-Pro-Front.png"} alt="" className=' absolute top-[-4%] right-[25%]'/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
