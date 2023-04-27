"use client"
import React from 'react'
import HeaderDrop from '@/components/header/headerDrop';
import {AiFillCaretDown} from 'react-icons/all'
import Image from 'next/image';
import {openDropMenu} from '@/redux/globalStore';
import {useSelector, useDispatch} from 'react-redux';


const HeaderRight = () => {
    const {headerDropOpen} = useSelector(state => state.global);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openDropMenu(!headerDropOpen));
    };

  return (
    <>
        <div onClick={handleClick} className="pr-1 cursor-pointer text-white bg-headerButton rounded-full w-32 h-8 flex items-center justify-between">
                    <div className="w-8 h-8 relative">
                        <Image className="rounded-full" fill src="https://pbs.twimg.com/profile_images/1522265345779716096/x8ZnmfL-_400x400.jpg" alt="enesdmc"/>
                    </div>
                    <span className="font-bold text-sm">Enesdmc</span>
                    <AiFillCaretDown/>
                </div>
                {headerDropOpen && <HeaderDrop/>}
    </>
  )
  }

export default HeaderRight