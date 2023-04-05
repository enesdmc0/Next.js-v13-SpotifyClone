import React from 'react';
import {FaSpotify, TiHome, FiSearch, VscLibrary, GoDiffAdded, BsHeartFill, BsBookmarkFill} from 'react-icons/all';
import Link from 'next/link';

const Sidebar = () => {
    const data = [
        {id: 1, text: "Home", icon: <TiHome size={23}/>, href: "/"},
        {id: 2, text: "Search", icon: <FiSearch size={25}/>, href: "/search"},
        {id: 3, text: "Your library", icon:  <VscLibrary size={25}/>, href: "/collection/playlists"},
        {id: 4, text: "Create Playlist", icon:  <GoDiffAdded size={25}/>, href: "/collection/playlists"},
        {id: 5, text: "Liked Songs", icon:  <BsHeartFill size={25}/>, href: "/collection/playlists"},
        {id: 6, text: "Your Episodes", icon:  <BsBookmarkFill size={25}/>, href: "/collection/playlists"},
    ]
    const playList = [
        {id: 1, name: "EnesDmc"},
        {id: 2, name: "Work List"},
        {id: 3, name: "GYM Music"},
        {id: 3, name: "GYM Music"},
        {id: 3, name: "GYM Music"},
        {id: 3, name: "GYM Music"},
    ]
    return (
        <div className="w-240 fixed bg-sb h-screen text-white flex flex-col pl-6 py-5 gap-10">
           <div className="flex flex-col gap-10 border-b border-b-gray-800 pb-10 ">
               <Link href="/" className="flex items-center gap-2">
                   <FaSpotify size={40}/>
                   <span className="text-2xl font-bold">Spotify</span>
               </Link>
               <div className="flex flex-col gap-5 text-gray-300">
                   {data?.slice(0,3).map(item => (
                       <Link href={item.href} className="flex items-center gap-3 focus:text-white hover:text-white">
                           {item.icon}
                           <span className="font-bold text-xs">{item.text}</span>
                       </Link>
                   ))}
               </div>
               <div className="flex flex-col gap-5 text-gray-300">
                   {data?.slice(3,6).map(item => (
                       <Link href={item.href} className="flex items-center gap-3 focus:text-white hover:text-white">
                           {item.icon}
                           <span className="font-bold text-xs">{item.text}</span>
                       </Link>
                   ))}
               </div>
           </div>
            <div className="overflow-y-auto flex flex-col gap-3 text-gray-300 hover:text-white focus:text-white">
                {playList?.map(item => (
                    <Link href={`/playlist/${item.id}`}>{item.name}</Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
