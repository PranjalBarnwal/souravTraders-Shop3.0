import React from 'react'
import BathRoom from "./../assets/BathRoom.png"
const HomeContent = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full h-full mt-10'>
      <div className='flex items-center justify-center text-center max-w-md text-sm md:text-2xl ml-auto mt-10 md:mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eos nesciunt. Unde, sapiente tempora nobis, sit expedita perspiciatis voluptas eius voluptatum, adipisci odio ea?
      </div>
      <div className='w-full h-full max-w-3xl flex  items-center justify-center'>
        <img className='flex items-center justify-center w-4/5' src={BathRoom} alt="" />
      </div>
    </div>
  )
}

export default HomeContent
