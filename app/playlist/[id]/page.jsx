import React from 'react';
import PlaylistContainer from '@/containers/PlaylistContainer';
import {playlist} from "@/data/home.json";
const PlayLists = ({params}) => {
    return (
        <div className="w-middle bg-gradient-to-b from-[#DADAD3] to-[#7F7F7B] h-screen absolute right-0 top-16 pb-32">
            <PlaylistContainer playlist={playlist} id={params.id}/>
        </div>
    );
};

export default PlayLists;
