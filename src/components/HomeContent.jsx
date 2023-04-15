import React from 'react'
import "./../App.css"
import BathRoom from "./../assets/BathRoom.png"
const HomeContent = () => {
  return (
    <>
    <div className='flex flex-col-reverse md:flex-row mt-10'>
      <div className='flex items-center justify-center text-center ml-auto max-w-md text-2xl mt-28 md:mt-0 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eos nesciunt. Unde, sapiente tempora nobis, sit expedita perspiciatis voluptas eius voluptatum, adipisci odio ea?
      </div>
      <div className='w-full h-full max-w-2xl ml-auto flex  items-center justify-center'>
        <img className='flex items-center justify-center md:w-4/5 w-11/12' src={BathRoom} alt="" />
      </div>
    </div>
   <div className="scroll_down"></div>
    </>
  )
}

export default HomeContent
