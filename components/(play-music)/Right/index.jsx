import React from 'react'
import {MdOutlineCloseFullscreen, MdComputer, AiFillSound, TbMicrophone2, GiHamburgerMenu} from 'react-icons/all';

const Right = () => {
  const data = [
    {id: 1, icon: <TbMicrophone2 size={17}/>},
    {id: 2, icon: <GiHamburgerMenu  size={17}/>},
    {id: 3, icon: <MdComputer size={17}/>},
    {id: 4, icon: <AiFillSound size={17}/>},
    {id: 5, icon: <MdOutlineCloseFullscreen size={17}/>},
  ]
  return (
    <div className="flex items-center">
      {data.map(item => (
        <>
        <span className={`pl-5 cursor-pointer text-gray-300 hover:text-white ${item.id === 3 && "!text-green-600"} `} key={item.id}>{item.icon}</span>
        {item.id === 4 && <div className='h-1 w-20 ml-1 bg-gray-500 rounded-full'>
          <div className='w-1/3 transition-all h-1 bg-white hover:bg-green-600 flex items-center justify-end'>
            <div className='w-3 h-3 rounded-full bg-white'></div>
          </div>
        </div>}
        </>
      ))}
        
    </div>
  )
}

export default Right