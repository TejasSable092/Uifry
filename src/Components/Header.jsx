import React from 'react'

const Header = () => {
  return (
    <>
     <nav className="w-full bg-white">
        <div className='flex items-center px-5 py-4 justify-evenly mx-auto'>
            {/* logo */}
        <div className='flex items-center'>
              <img src={"src/assets/Frame.png"} alt="logo" className='' />
             <span className=' text-2xl font-bold'>uifry</span>
        </div>
        {/* Menu Section */}
             <div className=' font-semibold ml-2'>
                <ul className='hidden md:flex gap-5'>
                    <li className=' cursor-pointer text-red-600'>Home</li>
                    <li className=' cursor-pointer'>About US</li>
                    <li className=' cursor-pointer'>Pricing</li>
                    <li className=' cursor-pointer'>Features</li>
                </ul>
             </div>
             {/* button */}
             <div className=' bg-black text-white px-5 py-1 rounded-[4px] ml-[15%]'>
                <button>
                    Download
                </button>
             </div>
        </div>
             {/* Start Section */}
             <div className=' size-8 rotate-[25deg] '>
                <img src={"src/assets/Star 8.png"} alt="" />
             </div>
     </nav>
    </>
  )
}

export default Header
