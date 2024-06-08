import React from 'react';

const FAQ = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4'>
      <div className='flex flex-col md:flex-row items-center mb-8 gap-4'>
        <div className='w-full md:w-auto md:text-left'>
          <p className='text-sm text-[#FF5555]'>FAQ</p>
          <h1 className='text-xl md:text-3xl font-semibold'>Frequently Asked <br/> Questions</h1>
        </div>
        <div className=' ml-10 mt-10'>
          <img src={"src/assets/Star 8.png"} alt="star" className=' rotate-90 size-20 w-12 h-12 md:w-16 md:h-16' />
        </div>
      </div>
      {/* FAQ Items */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {/* 1st */}
        <div className='bg-[#FF5555] text-white px-5 py-6 rounded-lg'>
          <h2 className='text-lg md:text-xl'>The Best Financial Accounting <br/>App Ever!</h2>
          <p className='text-xs md:text-sm mt-2'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
        <div className='px-5 py-6'>
          <h2 className='text-lg md:text-xl font-bold'>The Best Financial Accounting <br/> App Ever!</h2>
          <p className='text-xs md:text-sm mt-2'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
        {/* 2nd */}
        <div className='px-5 py-6'>
          <h2 className='text-lg md:text-xl font-bold'>The Best Financial Accounting <br/> App Ever!</h2>
          <p className='text-xs md:text-sm mt-2'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
        <div className='bg-[#FF5555] text-white px-5 py-6 rounded-lg'>
          <h2 className='text-lg md:text-xl '>The Best Financial Accounting <br/>App Ever!</h2>
          <p className='text-xs md:text-sm mt-2'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
        {/* 3rd */}
        <div className='bg-[#FF5555] text-white px-5 py-6 rounded-lg'>
          <h2 className='text-lg md:text-xl'>The Best Financial Accounting <br/>App Ever!</h2>
          <p className='text-xs md:text-sm mt-2'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
        <div className='px-5 py-6'>
          <h2 className='text-lg md:text-xl font-bold'>The Best Financial Accounting <br/> App Ever!</h2>
          <p className='text-xs md:text-sm mt-2'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
      </div>
      <div className=' mt-5'>
        <img src={"src/assets/Frame (1).png"} alt="imgs" />
      </div>
    </div>
  );
}

export default FAQ;
