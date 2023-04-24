import React from 'react';
import {AiOutlineHeart, BsPlayFill, FiClock} from "react-icons/all";
import Image from "next/image";

const List = () => {
    const data = [
        {
            id: 1,
            image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            music: "Uyursam Geçer Mi?",
            author: "Eskitilmiş Yaz",
            album: "Uyursam Geçer Mi?",
            dateAdded: "Apr 3, 2021",
            duration: "4:34"
        },
        {
            id: 2,
            image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            music: "Vurgunum",
            author: "Murat Göğebakan",
            album: "Aşkın Gözyaşları",
            dateAdded: "Apr 3, 2021",
            duration: "4:34"
        },
        {
            id: 3,
            image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            music: "Yaralı",
            author: "Murat Göğebakan",
            album: "Yaralı",
            dateAdded: "Apr 3, 2021",
            duration: "4:34"
        },
        {
            id: 4,
            image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            music: "Paramparça",
            author: "Teoman",
            album: "17",
            dateAdded: "Apr 3, 2021",
            duration: "4:34"
        },
        {
            id: 5,
            image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            music: "Kusura Bakma",
            author: "Tuğkan",
            album: "Kusura Bakma",
            dateAdded: "Apr 3, 2021",
            duration: "4:34"
        },
        {
            id: 6,
            image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            music: "Unutulacak Dünler",
            author: "Gazapizm",
            album: "Hiza",
            dateAdded: "Apr 3, 2021",
            duration: "4:34"
        },
        {
            id: 7,
            image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            music: "Işgal",
            author: "Kaldık Böyle",
            album: "Işgal",
            dateAdded: "Apr 3, 2021",
            duration: "4:34"
        },
        {
            id: 8,
            image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            music: "Yaralarımı Sar",
            author: "Meg",
            album: "Yaralarımı Sar",
            dateAdded: "Apr 3, 2021",
            duration: "4:34"
        },
        {
            id: 9,
            image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            music: "Sonsuz",
            author: "Pentagram",
            album: "Akustik",
            dateAdded: "Apr 3, 2021",
            duration: "4:34"
        },
    ]
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-b-gray-400 text-gray-400 text-sm pl-3 pr-10">
                <div className="flex flex-2 gap-5">
                    <div>#</div>
                    <div>Title</div>
                </div>
                <div className="flex-1 pl-5">Album</div>
                <div className="flex-1">Date added</div>
                <div className="flex-1 pr-10 flex justify-end"><FiClock size={22}/></div>
            </div>
           <div className="flex flex-col gap-3">
               {data.map(item => (
                   <div key={item.id} className="flex hover:bg-[#2a2a2a] hover:rounded p-2 items-center group justify-between pl-3 pr-10 text-gray-400">
                       <div className="flex flex-2 gap-5 items-center">
                           <div className="group w-5">
                               <span className="group-hover:hidden">{item.id}</span>
                               <span className="hidden group-hover:block"><BsPlayFill size={25}/></span>
                           </div>
                           <div className="flex gap-4">
                               <div className="w-12 h-12 relative">
                                   <Image src={item.image} alt="img" fill/>
                               </div>
                               <div className="flex flex-col">
                                   <span className="hover:underline cursor-pointer text-white">{item.music}</span>
                                   <span className="hover:underline cursor-pointer text-xs">{item.author}</span>
                               </div>
                           </div>
                       </div>
                       <div className="flex-1 hover:underline cursor-pointer text-sm">{item.album}</div>
                       <div className="flex-1 text-sm">{item.dateAdded}</div>
                       <div className="flex items-center justify-end flex-1 gap-4">
                           <AiOutlineHeart className="text-gray-200 cursor-pointer opacity-0 group-hover:opacity-100 " size={20}/>
                           <span>{item.duration}</span>
                           <div className="flex gap-1 opacity-0 group-hover:opacity-100">
                               <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                               <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                               <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                           </div>
                       </div>
                   </div>
               ))}
           </div>
        </div>
    );
};

export default List;
