import React from 'react';
import Link from 'next/link';
import {IoExtensionPuzzleSharp} from 'react-icons/all';

const HeaderDrop = () => {
    const data = [
        {id: 1, text: "Account", href: "/", icon: <IoExtensionPuzzleSharp size={15}/>},
        {id: 2, text: "Profile", href: "/", icon:""},
        {id: 3, text: "Support", href: "/", icon: <IoExtensionPuzzleSharp size={15}/>},
        {id: 4, text: "Download", href: "/", icon: <IoExtensionPuzzleSharp size={15}/>},
        {id: 5, text: "Settings", href: "/" , icon:""},
        {id: 6, text: "Log out", href: "/" , icon:""},
    ]
    return (
        <div className="absolute bg-headerDrop rounded top-14 w-48 right-10 text-gray-300">
            <nav className="flex flex-col">
                {data.map(item => (
                    <Link
                        className={`${item.text === 'Log out' && 'border-t border-t-gray-600'} flex px-4 py-3 justify-between items-center text-sm font-500 hover:bg-headerDropOpen hover:rounded mx-1`}
                        key={item.id} href={item.href}>{item.text} {item?.icon}</Link>
                ))}
            </nav>
        </div>
    );
};

export default HeaderDrop;
