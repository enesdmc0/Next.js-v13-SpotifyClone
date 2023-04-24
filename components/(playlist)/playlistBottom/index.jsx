
import React from 'react';
import {RiPlayCircleFill} from 'react-icons/all';
import List from "@/components/(playlist)/list";

const PlaylistBottom = () => {

    return (
        <div className="bg-[#121212] p-8 flex flex-col gap-5 pb-28">
            <div className="flex items-center gap-5">
                {/*<RiPauseCircleFill onClick={handleClick}
                                    className={`text-yesil absolute right-5 top-4 hover:scale-105 rounded-full  shadow-2xl`}
                                    size={50}/>*/}
                    <RiPlayCircleFill className={`text-yesil transition duration-300 group-hover: hover:scale-105 rounded-full shadow-2xl`} size={55}/>
                <div className="flex gap-2 ">
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                </div>
            </div>
            <List/>
        </div>
    );
};

export default PlaylistBottom;
