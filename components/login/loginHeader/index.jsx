import React from 'react';
import {FaSpotify} from 'react-icons/all';
import Link from 'next/link';

const LoginHeader = () => {
    return (
        <div className="flex items-center justify-center border-b py-7 w-full">
            <Link href="/" className="flex items-center gap-2">
                <FaSpotify size={43}/>
                <span className="text-2xl font-bold">Spotify</span>
            </Link>
        </div>
    );
};

export default LoginHeader;
