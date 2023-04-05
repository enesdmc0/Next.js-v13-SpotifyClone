import React from 'react'
import Link from "next/link"
import {FaSpotify} from 'react-icons/all';
import store from "@/redux";


const SidebarTop = ({data}) => {
    const {user} = store.getState().global
  return (
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
  )
}

export default SidebarTop