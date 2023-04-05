import React from 'react'
import {TfiWorld} from "react-icons/all";

const SidebarNoUser = () => {
  return (
    <div className='flex flex-col cursor-pointer gap-10 items-start'>
        <div className='text-xs text-gray-400 hover:underline'>Cookies</div>
        <button className='flex items-center gap-2 border rounded-full hover:scale-105 border-gray-300 hover:border-white px-3 font-medium py-1 text-sm'>
            <TfiWorld/> English
        </button>
    </div>
  )
}

export default SidebarNoUser