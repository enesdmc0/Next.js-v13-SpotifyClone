"use client";
import React from 'react'
import { AiOutlineStepBackward, AiOutlineRetweet, BsPauseCircleFill, AiOutlineStepForward, AiOutlineSwap, BsPlayCircleFill } from 'react-icons/all'
import { useDispatch, useSelector } from 'react-redux';
import { musicPlay } from '@/redux/globalStore'

const Middle = () => {
  const {musicPlayOpen} = useSelector(state => state.global);
  const dispatch = useDispatch();
  const data = [
    {id: 1, icon: <AiOutlineSwap size={20}/>},
    {id: 2, icon: <AiOutlineStepBackward size={25}/>},
    {id: 3, icon: musicPlayOpen ? <BsPauseCircleFill size={35}/> : <BsPlayCircleFill size={35}/>},
    {id: 4, icon: <AiOutlineStepForward size={25} />},
    {id: 5, icon: <AiOutlineRetweet size={20}/>},
  ]
  
  const handleClick = () => {
    dispatch(musicPlay(!musicPlayOpen))
    console.log(musicPlayOpen);
  }
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='flex gap-8 items-center'>
        {data.map(item => (
          <span onClick={item.id === 3 && handleClick} className={`${item.id === 3 && "text-white hover:text-gray-300"} text-gray-300 hover:text-white`} key={item.id}>{item.icon}</span>
        ))}
      </div>
      <div className='flex items-center gap-3'>
        <span className='text-xs text-gray-300'>0:53</span>
        <div className='h-1 w-80 bg-gray-500 rounded-full'>
          <div className='w-1/3 transition-all h-1 bg-white hover:bg-green-600 flex items-center justify-end'>
            <div className='w-3 h-3 rounded-full bg-white'></div>
          </div>
        </div>
        <span className='text-xs text-gray-300'>4:23</span>
      </div>
    </div>
  )
}

export default Middle