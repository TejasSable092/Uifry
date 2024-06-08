import React from 'react'

const Testimeniol = () => {
  return (
    <>
         <div className=' text-cneter text-center'>
             <p>TESTIMONIAL</p>
              <h1 className=' text-2xl font-bold'>What Our Users <br/> Say About US?</h1>
         </div>
      <div className=' flex items-center gap-12 justify-center'>
        <div className=' flex relative'>
        <div className= ' relative w-[300px]'>
        <img src={"src/assets/Frame 11.png"} alt="frame"  />
        </div>
        <div className=' absolute w-[350px] top-12 left-5 '>
        <img src={"src/assets/Group 1000002331.png"} alt="img"  />
        </div>
            </div>

            <div>
                <h1 className=' text-2xl font-bold'>The Best Finacial Accounting App Ever!</h1>
                <p className=' text-[10px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
            </div>
      </div>
    </>
  )
}

export default Testimeniol
