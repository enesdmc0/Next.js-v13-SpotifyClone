import React from 'react';
import {AiOutlineHeart, AiOutlineUp} from 'react-icons/all';
import Image from 'next/image';

const Left = () => {
    return (
        <div className="flex items-center gap-5">
            <div className="relative w-14 h-14">
                <div className="absolute z-10 bg-black rounded-full w-5 h-5 flex items-center justify-center opacity-80 hover:scale-110 hover:opacity-95 right-1 top-1 "><AiOutlineUp className="text-gray-200"/></div>
                <Image className="object-cover" fill
                       src="https://plus.unsplash.com/premium_photo-1679088033159-f799df376442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                       alt="music"/>
            </div>
            <div className="flex flex-col">
                <span className="text-sm cursor-pointer hover:underline">Sertap Erener</span>
                <span className="text-xs text-gray-400 cursor-pointer hover:text-white hover:underline">İyileşiyorum</span>
            </div>
            <AiOutlineHeart size={20} className="text-gray-400 hover:text-white"/>
        </div>
    );
};

export default Left;
