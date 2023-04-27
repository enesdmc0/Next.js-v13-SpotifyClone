import React from 'react';
import Image from 'next/image';
import {HiOutlinePencil} from "react-icons/all";

const PlayListHeader = ({findMusic}) => {
    return(
        <div className="flex gap-7 p-8">
            <div className="relative w-60 h-60 group shadow-2xl	 shadow-black">
                <Image fill className="object-cover" src={findMusic.image}  alt="single music"/>
                <div className="absolute w-full h-full flex items-center justify-center flex-col hover:bg-black hover:bg-opacity-60">
                    <HiOutlinePencil size={50} className="text-white opacity-0 group-hover:opacity-100"/>
                    <span className="text-white opacity-0 group-hover:opacity-100 text-xl">Choose photo</span>
                </div>
            </div>
            <div className="text-white flex flex-col gap-3 justify-end">
                <h1 className="font-bold">Playlist</h1>
                <div className="text-8xl font-bold">{findMusic.name}</div>
                <div className="flex items-center gap-1">
                    <div className="relative w-7 h-7 rounded-full">
                        <Image className="rounded-full" fill src="https://pbs.twimg.com/profile_images/1522265345779716096/x8ZnmfL-_400x400.jpg" alt="enesdmc"/>
                    </div>
                    <span className="font-bold hover:underline cursor-pointer">Enesdmc</span>
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                    <span>30 songs,</span>
                    <span className="text-gray-200">1 hr 45 min</span>
                </div>
            </div>
        </div>
    )
};

export default PlayListHeader;
