import React from 'react'
import SuccessSlider from '../Components/Success/SuccessVideo'

function SuccessStrories() {
  return (
    <div className='w-full h-[940px] pt-16 bg-cover bg-center hidden sm:hidden md:hidden lg:block xl:block'
     style={{
         background:
         "linear-gradient(to right, #001F11 0%, #002614 15%, #00361D 28%, #00351C 44%, #003F23 57%, #004F29 65%, #004F2A 79%, #00582E 92%)",
        }}>
      <h1 className='text-center text-5xl text-yellow-400 font-semibold '>Success Stories</h1>
      <h3 className='text-white text-center text-xl mt-5'>View our successes! Hear directly from our students whose achievements reflect our dedication</h3>
      <SuccessSlider/>
    </div>
  )
}

export default SuccessStrories
