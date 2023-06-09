"use client"
import {TiHome, FiSearch, VscLibrary, GoDiffAdded, BsHeartFill, BsBookmarkFill} from 'react-icons/all';
import SidebarNoUser from '../SidebarNoUser';
import SidebarTop from '../SidebarTop';
import SidebarBottom from '../SidebarBottom';
import {useAuth} from '@/hooks/useAuth';

const Sidebar = () => {
    const auth = useAuth()
    const data = [
        {id: 1, text: "Home", icon: <TiHome size={23}/>, href: "/"},
        {id: 2, text: "Search", icon: <FiSearch size={25}/>, href: "/search"},
        {id: 3, text: "Your library", icon:  <VscLibrary size={25}/>, href: "/collection/playlist"},
        {id: 4, text: "Create Playlist", icon:  <GoDiffAdded size={25}/>, href: "/collection/playlist"},
        {id: 5, text: "Liked Songs", icon:  <BsHeartFill size={25}/>, href: "/collection/playlist"},
        {id: 6, text: "Your Episodes", icon:  <BsBookmarkFill size={25}/>, href: "/collection/playlist"},
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
            <SidebarTop data={data}/>
            {auth ? <SidebarBottom playList={playList}/> : <SidebarNoUser/>}
        </div>
    );
};

export default Sidebar;
