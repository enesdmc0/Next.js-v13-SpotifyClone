import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import store from "@/redux";
import PlayListButton from '@/components/(goodMorning)/playListButton';
const PlayList = ({id, name, image, play}) => {
    const {musicPlayOpen} = store.getState().global

    return (
        <div className="flex hover:bg-playMusicHover transition duration-300 group bg-goodMorningBg pr-4 w-31 rounded relative ">
            <Link className="flex items-center justify-between" href = {`/playlist/${id}`}>
                <div className="flex items-center gap-2">
                    <div className="w-20 h-20 relative">
                        <Image className="object-cover rounded" src={image} alt={name} fill/>
                    </div>
                    <div className="text-white font-bold">{name}</div>
                </div>
            </Link>
            <PlayListButton play={play}/>
        </div>
    );
};

export default PlayList;
