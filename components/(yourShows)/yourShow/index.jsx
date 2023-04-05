import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const YourShow = ({id, name, desc, image}) => {
    return (
        <Link className="rounded-lg bg-playMusicBg hover:bg-yourShowHover transition duration-300 pb-8 p-4 flex flex-col gap-4" href={`/show/${id}`}>
            <div className="w-48 h-48 relative rounded-lg">
                <Image className="rounded-lg object-cover" fill src={image} alt={name}/>
            </div>
            <div className="text-white flex flex-col gap-2">
                <h5 className="font-bold">{name}</h5>
                <p className="text-sm text-gray-400 font-bold">{desc}</p>
            </div>
        </Link>
    );
};

export default YourShow;
