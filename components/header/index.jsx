"use client"
import {useSelector, useDispatch} from 'react-redux';
import Image from 'next/image';
import {AiOutlineLeft, AiOutlineRight, AiFillCaretDown, IoExtensionPuzzleSharp} from "react-icons/all";
import Link from 'next/link';
import {openDropMenu} from "@/redux/globalStore";
const Header = () => {
    const dispatch = useDispatch();
    const {headerDropOpen} = useSelector(state => state.global)
    const data = [
        {id: 1, text: "Account", href: "/", icon: <IoExtensionPuzzleSharp size={15}/>},
        {id: 2, text: "Profile", href: "/", icon:""},
        {id: 3, text: "Support", href: "/", icon: <IoExtensionPuzzleSharp size={15}/>},
        {id: 4, text: "Download", href: "/", icon: <IoExtensionPuzzleSharp size={15}/>},
        {id: 5, text: "Settings", href: "/" , icon:""},
        {id: 6, text: "Log out", href: "/" , icon:""},
    ]

    const handleClick = () => {
        dispatch(openDropMenu(!headerDropOpen))
    }

    return (
        <div className="px-10 fixed bg-hd top-0 right-0 w-middle h-16 flex items-center justify-between">
            <div className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-headerCircle items-center justify-center flex"><AiOutlineLeft className="text-gray-300" size={20}/></div>
                <div className="w-8 h-8 rounded-full bg-headerCircle items-center justify-center flex"><AiOutlineRight className="text-gray-300" size={20}/></div>
            </div>
            <div onClick={handleClick} className="pr-1 cursor-pointer text-white bg-headerButton rounded-full w-32 h-8 flex items-center justify-between">
                 <div className="w-8 h-8 relative">
                     <Image className="rounded-full" fill src="https://pbs.twimg.com/profile_images/1522265345779716096/x8ZnmfL-_400x400.jpg" alt="enesdmc"/>
                 </div>
                <span className="font-bold text-sm">Enesdmc</span>
                <AiFillCaretDown/>
            </div>
            {headerDropOpen && <div className="absolute bg-headerDrop rounded top-14 w-48 right-10 text-gray-300">
                <nav className="flex flex-col">
                    {data.map(item => (
                        <Link
                            className={`${item.text === 'Log out' && 'border-t border-t-gray-600'} flex px-4 py-3 justify-between items-center text-sm font-500 hover:bg-headerDropOpen hover:rounded mx-1`}
                            key={item.id} href={item.href}>{item.text} {item?.icon}</Link>
                    ))}
                </nav>
            </div>}
        </div>
    );
};

export default Header;
